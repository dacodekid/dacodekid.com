<script lang="ts">
import { defineComponent, PropType, ref, computed, onMounted, onUnmounted, watch } from 'vue';
import confetti from 'canvas-confetti';

type QuizQuestion = {
  question: string;
  options: Array<{ key: string; text: string }>;
  answer: { key: string; text: string };
  explanation: string;
};

export default defineComponent({
  name: 'QuizJS',
  props: {
    qas: {
      type: Array as PropType<Array<QuizQuestion>>,
      required: true,
    },
  },
  setup(props) {
    // State
    const currentIndex = ref(0);
    const detailsOpen = ref(false);
    const selectedAnswers = ref({});
    const quizCompleted = ref(false);
    const isReviewMode = ref(false);
    const answerFeedback = ref({});
    const shuffledQAs = ref<Array<QuizQuestion>>([]);
    const questionInput = ref((currentIndex.value + 1).toString());
    const timer = ref(0);
    let intervalId: number | undefined = undefined;

    // Constants
    const passingScore = 70;

    // Computed
    const currentQA = computed(() => {
      return shuffledQAs.value[currentIndex.value];
    });

    const questionIndicator = computed(() => {
      return `${currentIndex.value + 1}/${props.qas.length}`;
    });

    const detailsButtonText = computed(() => {
      return detailsOpen.value ? 'Hide' : 'Show';
    });

    const nextButtonText = computed(() => {
      return currentIndex.value === props.qas.length - 1 ? 'Done' : 'Next';
    });

    const nextButtonClass = computed(() => {
      return currentIndex.value === props.qas.length - 1 ? 'done-button' : 'next-button';
    });

    const isAnswerSelected = computed(() => {
      return isReviewMode.value || typeof selectedAnswers.value[currentIndex.value] !== 'undefined';
    });

    const numberOfCorrectAnswers = computed(() => {
      return props.qas.reduce((count, qa, index) => {
        return count + (selectedAnswers.value[index] === qa.answer.key ? 1 : 0);
      }, 0);
    });

    const numberOfWrongAnswers = computed(() => {
      return props.qas.reduce((count, qa, index) => {
        return count + (selectedAnswers.value[index] && selectedAnswers.value[index] !== qa.answer.key ? 1 : 0);
      }, 0);
    });

    const numberOfUnansweredQuestions = computed(() => {
      return props.qas.length - Object.keys(selectedAnswers.value).length;
    });

    const calculateScore = computed(() => {
      return (numberOfCorrectAnswers.value / props.qas.length) * 100;
    });

    const formattedTimer = computed(() => {
      const hours = Math.floor(timer.value / 3600)
        .toString()
        .padStart(2, '0');
      const minutes = Math.floor((timer.value % 3600) / 60)
        .toString()
        .padStart(2, '0');
      const seconds = (timer.value % 60).toString().padStart(2, '0');
      return `${hours}:${minutes}:${seconds}`;
    });

    // Methods
    function checkAnswer(questionIndex, selectedOptionKey) {
      const correctAnswerKey = shuffledQAs.value[questionIndex].answer.key;
      answerFeedback.value[questionIndex] = selectedOptionKey === correctAnswerKey;
      if (Object.keys(selectedAnswers.value).length === 1 && intervalId === undefined) {
        startTimer();
      }
    }

    function feedbackClass(questionIndex) {
      if (isReviewMode.value) {
        const isSelected = typeof selectedAnswers.value[questionIndex] !== 'undefined';
        return isSelected && answerFeedback.value[questionIndex] ? 'correct-answer' : 'incorrect-answer';
      }
      return answerFeedback.value[questionIndex] ? 'correct-answer' : 'incorrect-answer';
    }

    const shuffleOptions = (options) => {
      for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
      }
      return options;
    };

    const reshuffleQuestions = () => {
      let shuffledQuestions = props.qas.map((qa) => ({ ...qa, options: shuffleOptions([...qa.options]) }));
      shuffledQAs.value = shuffledQuestions;
    };

    const startTimer = () => {
      intervalId = setInterval(() => timer.value++, 1000) as unknown as number;
    };

    const stopTimer = () => {
      if (intervalId !== undefined) {
        clearInterval(intervalId);
        intervalId = undefined;
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') prevQuestion();
      if (event.key === 'ArrowRight' || event.key === 'ArrowUp') nextQuestion();
    };

    const handleToggle = (event) => {
      detailsOpen.value = event.target.open;
    };

    const toggleDetails = () => {
      detailsOpen.value = !detailsOpen.value;
    };

    const handleQuestionInput = () => {
      let newQuestionIndex = parseInt(questionInput.value, 10) - 1; // Convert the input value to an index
      if (newQuestionIndex >= 0 && newQuestionIndex < props.qas.length) {
        currentIndex.value = newQuestionIndex; // Update current index if within valid range
      } else if (newQuestionIndex < 0) {
        currentIndex.value = 0; // Set to first question if index is negative
        questionInput.value = '1'; // Reset input field to 1
      } else {
        currentIndex.value = props.qas.length - 1; // Set to last question if index is too high
        questionInput.value = props.qas.length.toString(); // Reset input field to last question number
      }
    };

    // Lifecycle Hooks
    onMounted(() => {
      window.addEventListener('keydown', handleKeyDown);
      reshuffleQuestions();
    });

    onUnmounted(() => {
      window.removeEventListener('keydown', handleKeyDown);
    });

    // Watchers
    watch(currentIndex, (newIndex) => {
      questionInput.value = (newIndex + 1).toString();
    });

    // Button Handlers
    const prevQuestion = () => {
      if (currentIndex.value > 0) currentIndex.value--;
    };

    const nextQuestion = () => {
      if (currentIndex.value < props.qas.length - 1) currentIndex.value++;
      else if (isReviewMode.value) isReviewMode.value = false;
      else completeQuiz();
    };

    const completeQuiz = () => {
      quizCompleted.value = true;
      stopTimer();
      if (numberOfCorrectAnswers.value >= passingScore) {
        const celebrations = 10;
        for (let i = 0; i < celebrations; i++) {
          setTimeout(() => triggerCelebration(), i * 250);
        }
      }
    };

    const finishQuiz = () => {
      if (!isReviewMode.value) {
        const isConfirmed = window.confirm('Are you sure you want to finish the quiz?');
        if (!isConfirmed) {
          return; // Stop if user cancels
        }
      } else {
        isReviewMode.value = false; // Exit review mode if in review mode (so that user can go to results page)
      }

      quizCompleted.value = true;
      stopTimer();
    };

    const retakeQuiz = () => {
      currentIndex.value = 0;
      detailsOpen.value = false;
      selectedAnswers.value = {};
      answerFeedback.value = {};
      quizCompleted.value = false;
      reshuffleQuestions();
      timer.value = 0;
      stopTimer();
    };

    const reviewQuiz = () => {
      currentIndex.value = 0;
      quizCompleted.value = true;
      isReviewMode.value = true;
      detailsOpen.value = true;
    };

    // Helper Functions
    const triggerCelebration = () => {
      confetti({
        particleCount: Math.floor(Math.random() * 200) + 100,
        spread: Math.floor(Math.random() * 300) + 100,
        startVelocity: Math.floor(Math.random() * 75) + 50,
        ticks: Math.floor(Math.random() * 200) + 200,
        angle: Math.floor(Math.random() * 75) + 55,
        origin: { y: Math.random() * 0.6 + 0.3 },
        gravity: Math.random() * 0.5 + 0.2,
      });
    };

    return {
      currentIndex,
      currentQA,
      prevQuestion,
      nextQuestion,
      nextButtonText,
      nextButtonClass,
      detailsOpen,
      handleToggle,
      questionIndicator,
      detailsButtonText,
      toggleDetails,
      selectedAnswers,
      quizCompleted,
      calculateScore,
      completeQuiz,
      finishQuiz,
      passingScore,
      retakeQuiz,
      answerFeedback,
      feedbackClass,
      checkAnswer,
      reviewQuiz,
      isReviewMode,
      questionInput,
      handleQuestionInput,
      isAnswerSelected,
      timer,
      formattedTimer,
      numberOfCorrectAnswers,
      numberOfWrongAnswers,
      numberOfUnansweredQuestions,
    };
  },
});
</script>

<template>
  <div class="quiz-container" :class="{ 'result-page-border': quizCompleted, 'review-mode': isReviewMode }">
    <!-- Display Loading if quiz data is not ready -->
    <div v-if="!currentQA || !currentQA.question">Loading...</div>

    <!-- Display Quiz Content -->
    <div v-else class="quiz-block">
      <!-- Quiz in Progress or Review Mode -->
      <div v-if="!quizCompleted || isReviewMode">
        <div class="top-row">
          <div class="timer-container">
            <span class="timer">{{ formattedTimer }}</span>
            <div class="quiz-indicator">
              <input
                type="number"
                inputmode="numeric"
                step="1"
                min="1"
                :max="qas.length"
                v-model="questionInput"
                @change="handleQuestionInput"
                class="question-input"
              />
              <span>/ {{ qas.length }}</span>
            </div>
          </div>

          <div class="buttons-indicator-container">
            <button class="toggle-details-btn" @click="toggleDetails">{{ detailsButtonText }}</button>

            <div class="navigation-buttons-container">
              <button @click="prevQuestion" :disabled="currentIndex === 0" class="navigation-button">Prev</button>
              <button @click="nextQuestion" :class="['navigation-button', nextButtonClass]">
                {{ nextButtonText }}
              </button>
            </div>

            <!-- Finish Button -->
            <button class="finish-button" @click="finishQuiz">
              {{ isReviewMode ? 'Result' : 'Finish' }}
            </button>
          </div>
        </div>
        <p>{{ currentQA.question }}</p>
        <ul>
          <li v-for="option in currentQA.options" :key="option.key">
            <input
              type="radio"
              :id="option.key"
              :value="option.key"
              :disabled="quizCompleted"
              v-model="selectedAnswers[currentIndex]"
              @change="checkAnswer(currentIndex, option.key)"
            />
            <label :for="option.key">{{ option.text }}</label>
          </li>
        </ul>
        <!-- Details Section Visibility -->
        <div v-if="isAnswerSelected">
          <details :open="detailsOpen" @toggle="handleToggle($event)">
            <summary>Answer & Explanation</summary>

            <!-- Feedback Visibility -->
            <div
              v-if="isReviewMode || typeof answerFeedback[currentIndex] !== 'undefined'"
              :class="feedbackClass(currentIndex)"
            >
              {{ answerFeedback[currentIndex] ? 'Correct' : 'Incorrect' }}
            </div>

            <p><strong>Answer:</strong> {{ currentQA.answer.text }}</p>
            <p v-if="currentQA.explanation"><strong>Explanation:</strong> {{ currentQA.explanation }}</p>
          </details>
        </div>
      </div>

      <!-- Results Section -->
      <div v-else class="result-container">
        <div class="result-content">
          <h2>{{ calculateScore >= passingScore ? 'PASSED' : 'FAILED' }}</h2>
          <div class="results-table">
            <div class="results-row">
              <div class="results-cell">Scored:</div>
              <div class="results-cell">{{ calculateScore.toFixed(2) }}%</div>
            </div>
            <div class="results-row">
              <div class="results-cell">Passing Score:</div>
              <div class="results-cell">70%</div>
            </div>
            <div class="results-row">
              <div class="results-cell">Correct:</div>
              <div class="results-cell">{{ numberOfCorrectAnswers }}/{{ qas.length }}</div>
            </div>
            <div class="results-row">
              <div class="results-cell">Wrong:</div>
              <div class="results-cell">{{ numberOfWrongAnswers }}/{{ qas.length }}</div>
            </div>
            <div class="results-row">
              <div class="results-cell">Unanswered:</div>
              <div class="results-cell">{{ numberOfUnansweredQuestions }}/{{ qas.length }}</div>
            </div>
          </div>
          <div class="button-container">
            <button @click="retakeQuiz" class="retake-button">Retake</button>
            <button @click="reviewQuiz" class="review-button">Review</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.quiz-container {
  position: relative;
  max-width: 90%;
  margin: 2rem auto;
  padding: 1.5rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  box-shadow: var(--vp-shadow-1);
  transition: all 0.3s ease;
}

.quiz-indicator {
  font-size: 0.9rem;
  color: var(--vp-c-text-1);
}

.quiz-block {
  margin-bottom: 2rem;
}

.result-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.result-content {
  text-align: center;
}

.results-table {
  border: 2px dotted #ccc; /* or use dashed */
  padding: 10px;
  margin-bottom: 20px;
  width: 100%;
}

.results-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}

.results-cell {
  flex: 1;
  min-width: 8rem;
}

.results-cell:first-child {
  text-align: right;
  margin-right: 5px;
}

.results-cell:last-child {
  text-align: left;
  margin-left: 5px;
}

.button-container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  gap: 1rem;
}

.toggle-details-btn,
.retake-button,
.review-button,
.prev-button,
.next-button,
.navigation-button,
.done-button,
.finish-button {
  border-radius: 20px;
  padding: 10px 20px;
  background-color: var(--vp-c-gray-3);
  color: var(--vp-c-text-1);
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-weight: bold;
}

.toggle-details-btn,
.navigation-button,
.finish-button,
.timer {
  padding: 0;
  min-width: 50px;
}

.done-button {
  background-color: #4caf50;
  color: white;
}

.done-button:hover {
  background-color: #45a049 !important;
}

.finish-button:hover {
  background-color: var(--vp-c-sponsor);
  color: white;
}

.toggle-details-btn:hover,
.navigation-button:hover {
  background-color: var(--vp-c-gray-1);
}

.retake-button {
  background-color: var(--vp-c-brand-3);
  color: white;
}

.retake-button:hover {
  background-color: var(--vp-c-brand-2);
}

.review-button {
  background-color: var(--vp-c-sponsor);
  color: white;
}

.review-button:hover {
  background-color: var(--vp-c-red-1);
  color: var(--vp-c-white);
}

.navigation-buttons-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.review-mode,
.result-page-border {
  border: 5px solid var(--vp-c-sponsor);
}

.top-row {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1rem;
}

.timer-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.timer {
  border-radius: 15px 15px 0 0;
  padding: 0rem 0.5rem;
  background-color: var(--vp-c-gray-1);
  font-weight: bold;
  font-size: 0.7rem;
}

.buttons-indicator-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ul {
  list-style-type: none;
  padding: 0;
  margin-bottom: 1rem;
}

ul li {
  background-color: var(--vp-c-bg);
  border-bottom: 1px solid var(--vp-c-divider);
  border-radius: 8px;
}

ul li:hover {
  background-color: var(--vp-c-gray-soft);
}

input[type='radio'] {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

label {
  cursor: pointer;
  position: relative;
  display: block;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
}

label::before {
  content: '';
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  height: 20px;
  width: 20px;
  background-color: #f0f0f0;
  border: 2px solid #dcdcdc;
  border-radius: 50%;
}

input[type='radio']:checked + label::after {
  content: '';
  position: absolute;
  left: 12px;
  top: calc(50%);
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  background-color: var(--vp-c-brand-3);
  border-radius: 50%;
}

.question-input {
  width: 3rem;
  margin-right: 0.3rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  background-color: var(--vp-c-bg);
  text-align: center;
  font-size: 0.9rem;
}

details {
  padding: 0.75rem 1rem;
  background-color: var(--vp-c-bg-soft);
  border-radius: 8px;
}

details summary {
  font-weight: bold;
  cursor: pointer;
  color: var(--vp-c-text-1);
}

details summary:hover {
  color: var(--vp-c-brand-1);
}

details p,
details div {
  margin-left: 1.5rem;
}

.correct-answer,
.incorrect-answer {
  padding: 5px;
  color: white;
  border-radius: 5px;
  font-weight: bold;
  text-align: center;
}

.correct-answer {
  background-color: green;
}

.incorrect-answer {
  background-color: red;
}
/* show spin buttons for number textbox on all browswers, including firefox */
input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  cursor: pointer;
  margin: 0;
}
</style>
