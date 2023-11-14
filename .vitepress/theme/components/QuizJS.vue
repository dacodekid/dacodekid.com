<script lang="ts">
import { defineComponent, PropType, ref, computed, onMounted, watch } from 'vue';
import confetti from 'canvas-confetti';

// Define a type for the question structure
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
    // Reactive Properties
    const currentIndex = ref(0);
    const detailsOpen = ref(false);
    const selectedAnswers = ref({});
    const quizCompleted = ref(false);
    const isReviewMode = ref(false);
    const answerFeedback = ref({});
    const shuffledQAs = ref<Array<QuizQuestion>>([]);
    const questionInput = ref((currentIndex.value + 1).toString());

    // Constants
    const passingScore = 70;

    // Computed Properties
    const currentQA = computed(() => shuffledQAs.value[currentIndex.value]);
    const questionIndicator = computed(() => `${currentIndex.value + 1}/${props.qas.length}`);
    const detailsButtonText = computed(() => (detailsOpen.value ? 'Hide' : 'Show'));
    const nextButtonText = computed(() => (currentIndex.value === props.qas.length - 1 ? 'Done' : 'Next'));
    const nextButtonClass = computed(() =>
      currentIndex.value === props.qas.length - 1 ? 'finish-button' : 'next-button'
    );

    // Functions
    // celebrate when the quiz is completed with a passing score
    function triggerCelebration() {
      confetti({
        particleCount: Math.floor(Math.random() * 200) + 100,
        spread: Math.floor(Math.random() * 300) + 100,
        startVelocity: Math.floor(Math.random() * 75) + 50,
        ticks: Math.floor(Math.random() * 200) + 200,
        angle: Math.floor(Math.random() * 75) + 55,
        origin: { y: Math.random() * 0.6 + 0.3 },
        gravity: Math.random() * 0.5 + 0.2,
      });
    }

    // Shuffle the options for each question
    function shuffleOptions(options) {
      for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
      }
      return options;
    }

    // Calculate the score of the quiz
    function calculateScore() {
      let correctCount = calculateCorrectAnswers();
      return (correctCount / props.qas.length) * 100;
    }

    // Calculate the number of correct answers
    function calculateCorrectAnswers() {
      let correctAnswers = 0;
      props.qas.forEach((qa, index) => {
        if (selectedAnswers.value[index] === qa.answer.key) {
          correctAnswers++;
        }
      });
      return correctAnswers;
    }

    // Check if the selected answer is correct
    function checkAnswer(questionIndex, selectedOptionKey) {
      const correctAnswerKey = shuffledQAs.value[questionIndex].answer.key;
      answerFeedback.value[questionIndex] = selectedOptionKey === correctAnswerKey;
    }

    // Determine the class for the answer feedback
    function feedbackClass(questionIndex) {
      // If the quiz is in review mode, handle unanswered questions
      if (isReviewMode.value) {
        // Treat unanswered questions as incorrect
        const isSelected = typeof selectedAnswers.value[questionIndex] !== 'undefined';
        const isCorrect = isSelected && answerFeedback.value[questionIndex];

        return isCorrect ? 'correct-answer' : 'incorrect-answer';
      }

      // Return empty string if answer feedback is not defined
      if (typeof answerFeedback.value[questionIndex] === 'undefined') {
        return '';
      }

      return answerFeedback.value[questionIndex] ? 'correct-answer' : 'incorrect-answer';
    }

    // Event Handlers
    // Handle the toggle event for the details element
    function handleToggle(event) {
      detailsOpen.value = event.target.open;
    }

    // Toggle the details element
    function toggleDetails() {
      detailsOpen.value = !detailsOpen.value;
    }

    // Move to the previous question
    function prevQuestion() {
      if (currentIndex.value > 0) currentIndex.value--;
    }

    // Move to the next question
    function nextQuestion() {
      if (currentIndex.value < props.qas.length - 1) {
        currentIndex.value++;
      } else if (isReviewMode.value) {
        isReviewMode.value = false;
      } else {
        completeQuiz();
      }
    }

    // Complete the quiz
    function completeQuiz() {
      quizCompleted.value = true;
      if (calculateScore() >= passingScore) {
        // Define the number of times to run the celebration and the interval in milliseconds
        const celebrations = 10;
        const interval = 250;

        for (let i = 0; i < celebrations; i++) {
          setTimeout(triggerCelebration, i * interval);
        }
      }
    }

    // Retake the quiz
    function retakeQuiz() {
      currentIndex.value = 0;
      detailsOpen.value = false;
      selectedAnswers.value = {};
      answerFeedback.value = {};
      quizCompleted.value = false;
      reshuffleQuestions();
    }

    // Review the quiz
    function reviewQuiz() {
      currentIndex.value = 0;
      quizCompleted.value = true;
      isReviewMode.value = true;
      detailsOpen.value = true;
    }

    // Reshuffle the questions and options
    function reshuffleQuestions() {
      shuffledQAs.value = props.qas.map((qa) => {
        const shuffledOptions = shuffleOptions([...qa.options]);
        const newAnswerKey = shuffledOptions.find((option) => option.text === qa.answer.text).key;
        return { ...qa, options: shuffledOptions, answer: { key: newAnswerKey, text: qa.answer.text } };
      });
    }

    // Function to handle input changes
    function handleQuestionInput() {
      let newQuestionIndex = parseInt(questionInput.value, 10) - 1; // Convert the string value to a number
      if (newQuestionIndex >= 0 && newQuestionIndex < props.qas.length) {
        currentIndex.value = newQuestionIndex;
      } else if (newQuestionIndex < 0) {
        currentIndex.value = 0;
        questionInput.value = '1'; // Update the reactive reference
      } else {
        currentIndex.value = props.qas.length - 1;
        questionInput.value = props.qas.length.toString(); // Convert the number to a string
      }
    }

    // Lifecycle Hooks
    onMounted(reshuffleQuestions);

    watch(currentIndex, (newIndex) => {
      questionInput.value = (newIndex + 1).toString();
    });

    // Expose to Template
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
      passingScore,
      retakeQuiz,
      calculateCorrectAnswers,
      answerFeedback,
      feedbackClass,
      checkAnswer,
      reviewQuiz,
      isReviewMode,
      questionInput,
      handleQuestionInput,
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
          <button class="toggle-details-btn" @click="toggleDetails">{{ detailsButtonText }}</button>

          <div class="navigation-buttons-container">
            <button @click="prevQuestion" :disabled="currentIndex === 0" class="navigation-button">Prev</button>
            <button @click="nextQuestion" :class="['navigation-button', nextButtonClass]">{{ nextButtonText }}</button>
          </div>

          <div class="quiz-indicator">
            <input
              type="number"
              inputmode="numeric"
              pattern="\d*"
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
        <details :open="detailsOpen" @toggle="handleToggle($event)">
          <summary>Answer & Explanation</summary>
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

      <!-- Results Section -->
      <div v-else class="result-container">
        <div class="result-content">
          <h2>{{ calculateScore() >= passingScore ? 'PASSED' : 'FAILED' }}</h2>
          <p>
            <strong>
              Scored: {{ calculateScore().toFixed(2) }}% ({{ calculateCorrectAnswers() }}/{{ qas.length }})
            </strong>
          </p>
          <p>
            <strong> Passing Score: 70% </strong>
          </p>
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

.top-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
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

.button-container {
  width: 100%; /* Full width to align buttons inside it */
  display: flex;
  justify-content: center; /* Centers the buttons horizontally */
  gap: 1rem; /* Adds space between buttons */
  margin-top: 1rem; /* Adds space between buttons and the last question/answer */
  justify-content: center; /* This centers the buttons horizontally */
  gap: 1rem; /* Adds space between buttons */
  margin-top: 1rem; /* Adds space between buttons and the last question/answer */
}

.navigation-buttons-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px; /* Adjust the gap between buttons */
}

.navigation-button:hover {
  background-color: var(--vp-c-brand-2);
}

.toggle-details-btn,
.retake-button,
.review-button,
.prev-button,
.next-button,
.navigation-button,
.finish-button {
  border-radius: 20px;
  padding: 10px 20px;
  background-color: var(--vp-c-brand-3);
  color: var(--vp-c-white);
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-weight: bold;
  margin-top: 1rem;
  min-width: 100px;
}

.toggle-details-btn:hover,
.retake-button:hover,
.prev-button:hover,
.next-button:hover {
  background-color: var(--vp-c-brand-2);
}

.review-button {
  background-color: var(--vp-c-sponsor);
}

.review-button:hover {
  background-color: var(--vp-c-red-1);
  color: var(--vp-c-white);
}

.review-mode,
.result-page-border {
  border: 5px solid var(--vp-c-sponsor);
}

.finish-button {
  background-color: #4caf50; /* Green background for finish button */
  color: white;
}

/* Optional: Different hover effect for finish button */
.finish-button:hover {
  background-color: #45a049;
}

.toggle-details-btn,
.navigation-button {
  padding: 0rem 0rem;
  margin-right: 0rem;
  background-color: var(--vp-c-gray-3);
  color: var(--vp-c-brand-1);
  min-width: 50px;
}

.toggle-details-btn:hover {
  background-color: var(--vp-c-gray-1);
}

button:disabled {
  background-color: var(--vp-c-gray-2);
  color: var(--vp-c-text-2);
  cursor: not-allowed;
  border: 1px solid var(--vp-c-divider);
}

h3 {
  font-size: 1.1rem;
  color: var(--vp-c-text-1);
  margin-bottom: 1rem;
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
</style>
