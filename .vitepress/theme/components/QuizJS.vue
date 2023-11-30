<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';
import { QuestionBlock } from '../plugins/types';

// Props
const props = defineProps({
  quizData: {
    type: Array as () => Array<QuestionBlock>,
    default: () => [],
    required: true,
  },
});

// Data
const quizData = ref<QuestionBlock[]>([]);

// Constants
const PASSING_SCORE = 70;

// State
const currentQuestionIndex = ref(0);
const showAnswer = ref(false);
const feedbackArray = ref<string[]>([]);
const userAnswers = ref<string[]>([]);
const zenModeActive = ref(false);
const questionInput = ref((currentQuestionIndex.value + 1).toString());
const isReviewMode = ref(false);
const isQuizEnded = ref(false);
const elapsedTime = ref(0);
let intervalId: number | undefined = undefined;

// Computed
const currentQuestion = computed(() => quizData.value[currentQuestionIndex.value]);
const answeredQuestions = computed(() => userAnswers.value.filter((answer) => answer !== '').length);
const unansweredQuestions = computed(() => userAnswers.value.filter((answer) => answer === '').length);
const correctAnswers = computed(() => feedbackArray.value.filter((feedback) => feedback === 'Correct!').length);
const incorrectAnswers = computed(() => feedbackArray.value.filter((feedback) => feedback === 'Incorrect').length);
const formattedElapsedTime = computed(() => {
  const formatTimeUnit = (unit: number) => unit.toString().padStart(2, '0');
  const hours = formatTimeUnit(Math.floor(elapsedTime.value / 3600));
  const minutes = formatTimeUnit(Math.floor((elapsedTime.value % 3600) / 60));
  const seconds = formatTimeUnit(elapsedTime.value % 60);
  return `${hours}:${minutes}:${seconds}`;
});
const finalScore = computed(() => {
  if (quizData.value.length === 0) {
    return 0;
  }
  return (correctAnswers.value / quizData.value.length) * 100;
});

// Shuffle quiz blocks and/or choices
const shuffle = (data: any[]): any[] => {
  let shuffledData = [...data];
  for (let i = shuffledData.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledData[i], shuffledData[j]] = [shuffledData[j], shuffledData[i]];
  }
  return shuffledData;
};

// Shuffle the choices for each question
const shuffleQuizData = (quizData: QuestionBlock[]): QuestionBlock[] => {
  // Clone the quizData array
  let shuffledQuizBlock = [...quizData];

  // Shuffle each quiz block (that contains questions, choices, answer, and explanation)
  shuffledQuizBlock = shuffle(shuffledQuizBlock);

  // Shuffle the choices for each question
  shuffledQuizBlock = shuffledQuizBlock.map((quizBlock) => {
    if (!Array.isArray(quizBlock.choices)) {
      throw new Error(`Invalid choices in quiz block: ${quizBlock}`);
    }
    const shuffledChoices = shuffle([...quizBlock.choices]);
    return { ...quizBlock, choices: shuffledChoices };
  });

  return shuffledQuizBlock;
};

// Update feedback text to show if the answer is correct or incorrect
const updateFeedback = (selected: string, answer: string, feedbackArray: string[], index: number): string[] => {
  // Validate index
  if (index < 0 || index >= feedbackArray.length) {
    throw new Error(`Invalid index in updateFeedback: ${index}`);
  }

  // Clone the feedback array
  let newFeedbackArray = [...feedbackArray];

  if (selected) {
    if (selected === answer) {
      newFeedbackArray[index] = 'Correct!';
    } else {
      newFeedbackArray[index] = 'Incorrect';
    }
  } else {
    newFeedbackArray[index] = '';
  }
  return newFeedbackArray;
};

// Events
const startTimer = () => {
  try {
    if (intervalId === undefined) {
      intervalId = setInterval(() => {
        elapsedTime.value++;
      }, 1000) as unknown as number;
    }
  } catch (error) {
    console.error('An error occurred while starting the timer:', error);
  }
};

const stopTimer = () => {
  try {
    if (intervalId !== undefined) {
      clearInterval(intervalId);
      intervalId = undefined;
    }
  } catch (error) {
    console.error('An error occurred while stopping the timer:', error);
  }
};

// Methods
const toggleAnswer = () => {
  showAnswer.value = !showAnswer.value;
};

const prevQuestion = () => {
  if (currentQuestionIndex.value > 0) currentQuestionIndex.value--;
};

const nextQuestion = () => {
  if (currentQuestionIndex.value < quizData.value.length - 1) currentQuestionIndex.value++;
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

  isQuizEnded.value = true;
  stopTimer();
};

const reviewQuiz = () => {
  isReviewMode.value = true;
  showAnswer.value = true;
  currentQuestionIndex.value = 0;
};

const retakeQuiz = () => {
  isReviewMode.value = false;
  isQuizEnded.value = false;
  showAnswer.value = false;
  currentQuestionIndex.value = 0;
  elapsedTime.value = 0;
  quizData.value = shuffleQuizData(props.quizData);
  feedbackArray.value = Array(quizData.value.length).fill('');
  userAnswers.value = Array(quizData.value.length).fill('');
};

const toggleZenMode = () => {
  const zenElements = document.querySelectorAll('.VPNavBar, .VPSidebar, .VPDocAside') as NodeListOf<HTMLElement>;

  zenModeActive.value = !zenModeActive.value;

  if (zenModeActive.value) {
    zenElements.forEach((el) => el.classList.add('hidden'));
  } else {
    zenElements.forEach((el) => el.classList.remove('hidden'));
  }
};

const clearAnswer = () => {
  userAnswers.value[currentQuestionIndex.value] = '';
  feedbackArray.value[currentQuestionIndex.value] = '';
};

// Event Handlers
const handleChoiceOrOtherKeys = (key: string) => {
  if (['1', '2', '3', '4'].includes(key)) {
    const choiceIndex = parseInt(key, 10) - 1;
    if (currentQuestion.value.choices[choiceIndex]) {
      userAnswers.value[currentQuestionIndex.value] = currentQuestion.value.choices[choiceIndex].key;
      feedbackArray.value = updateFeedback(
        userAnswers.value[currentQuestionIndex.value],
        currentQuestion.value.answer,
        feedbackArray.value,
        currentQuestionIndex.value
      );
    }
  }
};

const handleKeydown = (event: KeyboardEvent) => {
  try {
    const key = event.key.toLowerCase();
    const numberInput = document.getElementsByName('question-number')[0] as HTMLInputElement;

    // Avoid action when number input is focused
    if (document.activeElement === numberInput) {
      return;
    }

    switch (key) {
      case 'arrowleft':
      case 'p':
        prevQuestion();
        break;
      case 'arrowright':
      case 'n':
        nextQuestion();
        break;
      case 'arrowdown':
        prevQuestion();
        numberInput.focus();
        break;
      case 'arrowup':
        nextQuestion();
        numberInput.focus();
        break;
      case 's':
      case 'h':
        toggleAnswer();
        break;
      case 'f':
        finishQuiz();
        break;
      case 'z':
        toggleZenMode();
        break;
      case 'c':
        clearAnswer();
        break;
      default:
        handleChoiceOrOtherKeys(key);
        break;
    }
  } catch (error) {
    console.error('Error in handleKeydown:', error);
  }
};

const handleQuestionIndexChange = () => {
  let newQuestionIndex = parseInt(questionInput.value, 10) - 1;

  if (isNaN(newQuestionIndex) || newQuestionIndex < 0 || newQuestionIndex >= quizData.value.length) {
    console.warn('Invalid question number entered. Resetting to largest valid value.');
    newQuestionIndex = quizData.value.length - 1;
  }

  currentQuestionIndex.value = newQuestionIndex;
  questionInput.value = (newQuestionIndex + 1).toString();
};

// Lifecycle hooks
onMounted(() => {
  if (!props.quizData) {
    throw new Error('Quiz data is not available');
  }

  quizData.value = shuffleQuizData(props.quizData);
  feedbackArray.value = Array(quizData.value.length).fill('');
  userAnswers.value = Array(quizData.value.length).fill('');
  window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
  stopTimer();
});

// Watchers
watch(currentQuestionIndex, (newIndex) => {
  questionInput.value = (newIndex + 1).toString();
});

watch(answeredQuestions, (newAnsweredQuestions) => {
  if (newAnsweredQuestions === 1) {
    startTimer();
  }
});
</script>

<template>
  <!-- Display Loading if quiz data is not ready -->
  <div v-if="quizData.length === 0">Loading...</div>

  <div v-else class="quiz-container" :class="{ 'review-mode': isReviewMode || isQuizEnded }">
    <!-- Either Active Quiz or Review Mode in progress -->
    <div v-if="!isQuizEnded || isReviewMode">
      <div class="row first-row">
        <div>
          <span class="clock">{{ formattedElapsedTime }}</span>
        </div>
        <div class="center">
          <button class="zen-mode-button" @click="toggleZenMode">Zen</button>
        </div>
        <div class="right quiz-current-indicator">
          <input
            name="question-number"
            type="number"
            inputmode="numeric"
            step="1"
            min="1"
            :max="quizData.length"
            v-model="questionInput"
            @change="handleQuestionIndexChange"
          />
          <span>/{{ quizData.length }}</span>
        </div>
      </div>

      <div class="row second-row">
        <div>
          <button @click="toggleAnswer">{{ showAnswer ? 'Hide' : 'Show' }}</button>
        </div>
        <div class="center">
          <button @click="prevQuestion" :disabled="currentQuestionIndex === 0">Prev</button>
          <button @click="nextQuestion" :disabled="currentQuestionIndex === quizData.length - 1">Next</button>
        </div>
        <button class="right" @click="finishQuiz">{{ isReviewMode ? 'Result' : 'Finish' }}</button>
      </div>

      <div class="row third-row">
        <div class="question" v-html="currentQuestion.question"></div>
      </div>

      <div class="row fourth-row">
        <ul>
          <li v-for="(choice, index) in currentQuestion.choices" :key="`${currentQuestionIndex}-${choice.key}`">
            <input
              type="radio"
              :id="choice.key"
              :value="choice.key"
              v-model="userAnswers[currentQuestionIndex]"
              :disabled="isReviewMode || isQuizEnded"
              @change="
                () =>
                  (feedbackArray = updateFeedback(
                    userAnswers[currentQuestionIndex],
                    currentQuestion.answer,
                    feedbackArray,
                    currentQuestionIndex
                  ))
              "
            />
            <label :for="choice.key" v-html="choice.text"></label>
          </li>
        </ul>
      </div>

      <div
        class="row row-horizontal fifth-row"
        v-if="(userAnswers[currentQuestionIndex] && showAnswer) || isReviewMode"
      >
        <div
          class="feedback"
          :class="{
            correct: feedbackArray[currentQuestionIndex] === 'Correct!',
            incorrect: feedbackArray[currentQuestionIndex] === 'Incorrect',
          }"
        >
          {{ feedbackArray[currentQuestionIndex] }}
        </div>
        <div class="answer">
          <strong>Answer: </strong>
          <span v-html="currentQuestion.choices.find((choice) => choice.key === currentQuestion.answer)?.text"></span>
        </div>
        <div class="explanation">
          <strong>Explanation: </strong>
          <span v-html="currentQuestion.explanation"></span>
        </div>
      </div>
    </div>

    <!-- Result Content -->
    <div v-else class="result-content">
      <h3>{{ finalScore >= PASSING_SCORE ? 'PASSED' : 'FAILED' }}</h3>
      <div class="results-table">
        <div class="results-row">
          <div class="results-cell">Time Elapsed:</div>
          <div class="results-cell">{{ formattedElapsedTime }}</div>
        </div>
        <div class="results-row">
          <div class="results-cell">Scored:</div>
          <div class="results-cell">{{ finalScore.toFixed(2) }}%</div>
        </div>
        <div class="results-row">
          <div class="results-cell">Passing Score:</div>
          <div class="results-cell">{{ PASSING_SCORE }}%</div>
        </div>
        <div class="results-row">
          <div class="results-cell">Total Questions:</div>
          <div class="results-cell">{{ quizData.length }}</div>
        </div>
        <div class="results-row">
          <div class="results-cell">Unanswered:</div>
          <div class="results-cell">{{ unansweredQuestions }}</div>
        </div>
        <div class="results-row">
          <div class="results-cell">Answered:</div>
          <div class="results-cell">{{ answeredQuestions }}</div>
        </div>
        <div class="results-row">
          <div class="results-cell">Correct:</div>
          <div class="results-cell">{{ correctAnswers }}</div>
        </div>
        <div class="results-row">
          <div class="results-cell">Incorrect:</div>
          <div class="results-cell">{{ incorrectAnswers }}</div>
        </div>
      </div>
      <div class="button-container">
        <button @click="retakeQuiz" class="retake-button">Retake</button>
        <button @click="reviewQuiz" class="review-button">Review</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
button {
  border-radius: 20px;
  min-width: 50px;
  background-color: var(--vp-c-gray-3);
  color: var(--vp-c-text-1);
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-weight: bold;
}

button:hover {
  background-color: var(--vp-c-gray-1);
}

button:disabled {
  background-color: #ccc;
  color: #888;
  cursor: not-allowed;
}

ul {
  list-style-type: none;
  padding: 0;
  margin-bottom: 1rem;
  width: 100%;
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

input[type='radio']:disabled + label {
  cursor: not-allowed;
  opacity: 0.5;
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

/* show spin buttons for number textbox on all browswers, including firefox */
input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  cursor: pointer;
  margin: 0;
}

.quiz-container {
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 90%;
  margin: 2rem auto;
  padding: 0 1.5rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  box-shadow: var(--vp-shadow-1);
  transition: all 0.3s ease;
}

input[type='number'],
.quiz-current-indicator {
  font-size: 0.8rem;
  text-align: center;
}

.row {
  display: flex;
  justify-content: flex-start;
  position: relative;
  padding: 1rem 0;
}

.row-horizontal {
  flex-direction: column;
}

.row .center {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.row .right {
  position: absolute;
  right: 0;
}

.feedback {
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  color: white;
}

.feedback.correct {
  background-color: green;
}

.feedback.incorrect {
  background-color: red;
}

.answer,
.explanation {
  padding: 0.5rem 1rem;
  color: var(--vp-c-text-1);
}

.clock {
  border-radius: 15px 15px 0 0;
  padding: 0rem 0.5rem;
  background-color: var(--vp-c-gray-1);
  font-weight: bold;
  font-size: 0.7rem;
}

.review-mode {
  border: 5px solid var(--vp-c-sponsor);
}

.result-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
  padding: 5rem 1rem;
}

.results-table {
  border: 2px dotted #ccc; /* or use dashed */
  padding: 10px;
  margin: 2rem 0;
}

.results-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
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

@media (max-width: 600px) {
  .zen-mode-button {
    display: none;
  }
}
</style>
