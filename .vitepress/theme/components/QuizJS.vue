<template>
  <div class="quiz-container">
    <div v-if="qas.length > 0" class="quiz-block">
      <h3>{{ currentQA.question }}</h3>
      <ul>
        <li v-for="option in currentQA.options" :key="option.key">{{ option.key }}: {{ option.text }}</li>
      </ul>
      <details :open="detailsOpen" @toggle="handleToggle($event)">
        <summary>Answer & Explanation</summary>
        <p>
          <span class="answer">{{ currentQA.answer.key }}</span> {{ currentQA.answer.text }}
        </p>
        <p v-if="currentQA.explanation">{{ currentQA.explanation }}</p>
      </details>
      <div class="button-container">
        <button @click="prevQuestion" :disabled="currentIndex === 0">Prev</button>
        <button @click="nextQuestion" :disabled="currentIndex === qas.length - 1">Next</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, computed } from 'vue';

export default defineComponent({
  name: 'QuizJS',

  props: {
    qas: {
      type: Array as PropType<
        Array<{
          question: string;
          options: Array<{ key: string; text: string }>;
          answer: { key: string; text: string };
          explanation: string;
        }>
      >,
      required: true,
    },
  },

  setup(props) {
    const currentIndex = ref(0);
    const detailsOpen = ref(false);

    function shuffleOptions(options) {
      const texts = options.map((opt) => opt.text);
      for (let i = texts.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [texts[i], texts[j]] = [texts[j], texts[i]];
      }
      return texts.map((text, index) => {
        return { key: options[index].key, text };
      });
    }

    const currentQA = computed(() => {
      let qa = { ...props.qas[currentIndex.value] };
      let shuffledOptions = shuffleOptions(qa.options);

      // Find the new key of the correct answer after shuffling
      let correctAnswerText = '';
      if (qa.answer) {
        correctAnswerText = qa.options.find((option) => option.key === qa.answer.key)?.text || '';
      }
      let newAnswerKey = shuffledOptions.find((option) => option.text === correctAnswerText).key;

      return {
        ...qa,
        options: shuffledOptions,
        answer: { key: newAnswerKey, text: correctAnswerText },
      };
    });

    function handleToggle(event) {
      detailsOpen.value = event.target.open;
    }

    function prevQuestion() {
      if (currentIndex.value > 0) {
        currentIndex.value--;
        detailsOpen.value = false;
      }
    }

    function nextQuestion() {
      if (currentIndex.value < props.qas.length - 1) {
        currentIndex.value++;
        detailsOpen.value = false;
      }
    }

    return {
      currentIndex,
      currentQA,
      prevQuestion,
      nextQuestion,
      detailsOpen,
      handleToggle,
    };
  },
});
</script>

<style scoped>
.quiz-container {
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

.quiz-block {
  margin-bottom: 2rem;
}

h3 {
  font-size: 1.1rem !important; /* Adjust size as needed or use a variable if defined for h3 */
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
  padding: 0.75rem 1rem;
  transition: background-color 0.3s ease;
}

ul li:last-child {
  border-bottom: none;
}

ul li:hover {
  background-color: var(--vp-c-gray-soft);
}

details {
  padding: 0.75rem 1rem;
  background-color: var(--vp-c-bg-soft);
  /* border-top: 1px solid var(--vp-c-divider);
  border-bottom: 1px solid var(--vp-c-divider); */
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

details p {
  margin-left: 1.5rem;
}

details p span.answer {
  font-weight: bold;
  color: var(--vp-c-brand-1); /* This will be the text color */
  background-color: var(--vp-c-bg); /* This will be the background color */
  padding: 0.2rem 0.6rem; /* Adjust padding to control the size of the 'square' */
  border-radius: 0.25rem; /* This makes the corners rounded, set to 0 for square corners */
  display: inline-block;
  margin-right: 0.5rem; /* Adds some space between the key and the text */
  text-align: center;
  min-width: 1.5rem; /* Ensures the span is more 'square' if the content is short */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Optional: adds a subtle shadow for depth */
  margin-left: -0.2rem; /* Adds some space between the key and the text */
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

button {
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;
  border: 1px solid var(--vp-c-border);
  border-radius: 4px;
  background-color: var(--vp-c-brand-3);
  color: var(--vp-c-white);
  cursor: pointer;
  transition: background-color 0.3s ease;
  min-width: 100px; /* Or any other size to make buttons wider */
}

button:hover {
  background-color: var(--vp-c-brand-2);
}

button:disabled {
  background-color: var(--vp-c-gray-2);
  color: var(--vp-c-text-2);
  cursor: not-allowed;
  border: 1px solid var(--vp-c-divider);
}

@media (max-width: 640px) {
  .quiz-container {
    margin: 1rem;
    padding: 1rem;
  }
}
</style>
