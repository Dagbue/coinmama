<template>
  <div class="home">
    <hero-section/>
    <why-coinmama/>
    <testimonials-carousel/>
    <f-a-q-body/>
    <start-with/>
    <footer-home/>
  </div>
</template>

<script>
// @ is an alias to /src


import HeroSection from "@/components/home/HeroSection.vue";
import WhyCoinmama from "@/components/home/WhyCoinmama.vue";
import TestimonialsCarousel from "@/components/home/TestimonialsCarousel.vue";
import FAQBody from "@/components/home/FAQBody.vue";
import FooterHome from "@/components/home/FooterHome.vue";
import StartWith from "@/components/home/StartWith.vue";

export default {
  name: 'HomeView',
  components: {StartWith, FooterHome, FAQBody, TestimonialsCarousel, WhyCoinmama, HeroSection},
}
</script>
