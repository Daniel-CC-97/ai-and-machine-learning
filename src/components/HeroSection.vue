<!-- src/components/HeroSection.vue -->
<template>
  <section class="hero text-white min-h-screen py-12 px-6">
    <div class="container mx-auto text-center">
      <h1 class="text-4xl text-white font-bold mb-4">
        Discover the Future of AI with Our Interactive Showcase
      </h1>
      <p class="text-lg text-gray-400 mb-8">
        Welcome to <strong>{{ appName }}</strong
        >, an innovative platform designed to bring the power of artificial
        intelligence and machine learning to life. Explore a diverse range of
        cutting-edge technologies through our interactive and user-friendly
        interface.
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <router-link
          to="/image-classification"
          class="feature bg-gray-700 text-white p-6 rounded-lg shadow-lg"
        >
          <h2 class="text-xl font-semibold mb-2">Image Classification</h2>
          <p class="text-base">
            See how AI can recognize and categorize objects in images with
            incredible accuracy.
          </p>
        </router-link>
        <router-link
          to="/text-generation"
          class="feature bg-gray-700 text-white p-6 rounded-lg shadow-lg"
        >
          <h2 class="text-xl font-semibold mb-2">Text Generation</h2>
          <p class="text-base">
            Experience the magic of AI as it generates human-like text, perfect
            for creative writing and automated content creation.
          </p>
        </router-link>
        <router-link
          to="/sentiment-analysis"
          class="feature bg-gray-700 text-white p-6 rounded-lg shadow-lg"
        >
          <h2 class="text-xl font-semibold mb-2">Sentiment Analysis</h2>
          <p class="text-base">
            Understand how sentiment analysis can gauge the emotional tone
            behind a piece of text, from positive to negative.
          </p>
        </router-link>
        <router-link
          to="/object-detection"
          class="feature bg-gray-700 text-white p-6 rounded-lg shadow-lg"
        >
          <h2 class="text-xl font-semibold mb-2">Object Detection</h2>
          <p class="text-base">
            Dive into the world of object detection and witness how AI can
            identify and locate objects within images.
          </p>
        </router-link>
        <router-link
          to="/recommendation-system"
          class="feature bg-gray-700 text-white p-6 rounded-lg shadow-lg"
        >
          <h2 class="text-xl font-semibold mb-2">Recommendation System</h2>
          <p class="text-base">
            Discover how intelligent algorithms recommend products and services
            tailored to your preferences.
          </p>
        </router-link>
      </div>
      <p class="mt-8 text-lg text-gray-400">
        Whether you're a tech enthusiast, a developer, or simply curious about
        the latest advancements in AI, our app offers a hands-on experience to
        explore and learn about these groundbreaking technologies.
      </p>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: "HeroSection",
  data() {
    return {
      appName: "Your App's Name",
    };
  },
};
</script>

<style scoped>
.hero {
  background-color: #000000;
}

.feature {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature:hover {
  transform: translateY(-5px);
}
</style>
