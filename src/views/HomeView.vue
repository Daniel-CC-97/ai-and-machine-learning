<template>
  <div>
    <HeroSection />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeroSection from "@/components/HeroSection.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    HeroSection,
  },
});
</script>
