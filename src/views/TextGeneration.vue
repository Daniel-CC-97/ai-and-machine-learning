<template>
  <div class="text-generation p-8">
    <h1 class="text-3xl font-bold mb-4">Text Generation</h1>
    <p class="text-lg mb-6">
      Enter a prompt and let our AI generate creative and coherent text for you.
    </p>
    <div class="mb-6">
      <textarea
        v-model="prompt"
        rows="4"
        class="w-full p-2 border rounded-lg"
        placeholder="Enter your prompt here..."
      ></textarea>
    </div>
    <button
      @click="generateText"
      class="bg-blue-600 text-white py-2 px-4 rounded-lg"
      :disabled="loading"
    >
      Generate Text
    </button>
    <div v-if="loading" class="mt-4">Loading...</div>
    <div v-if="error" class="mt-4 text-red-500">{{ error }}</div>
    <div v-if="generatedText" class="mt-4 p-4 border rounded-lg bg-gray-100">
      <h2 class="text-xl font-semibold mb-2">Generated Text:</h2>
      <p>{{ generatedText }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import axios from "axios";

export default {
  name: "TextGeneration",
  setup() {
    const prompt = ref("");
    const generatedText = ref("");
    const loading = ref(false);
    const error = ref("");

    const generateText = async () => {
      if (!prompt.value) return;

      loading.value = true;
      error.value = "";

      try {
        const response = await axios.post(
          "https://api-inference.huggingface.co/models/gpt2",
          { inputs: prompt.value },
          {
            headers: {
              Authorization: `Bearer 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`,
              "Content-Type": "application/json", // Ensure the correct Content-Type header
            },
          }
        );

        generatedText.value = response.data[0].generated_text; // Adjust based on actual response format
        console.log("generated text: ", generatedText);
        console.log("response: ", response);
      } catch (err) {
        console.error(err); // Log the full error for debugging
        error.value =
          err.response?.data?.error || err.message || "An error occurred.";
      } finally {
        loading.value = false;
      }
    };

    return {
      prompt,
      generatedText,
      loading,
      error,
      generateText,
    };
  },
};
</script>

<style scoped>
.text-generation {
  max-width: 600px;
  margin: 0 auto;
}
</style>
