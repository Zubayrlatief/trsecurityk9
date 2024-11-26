<template lang="">
    <NavbarComp/>
    <div class="container-main bg-black r">
        <div class="container-1 ">
          <h1  class="bg-black text-white position-absolute top-50 start-50 translate-middle d-flex justify-content-center">WE OFFER SATE OF THE ART INSTALLATIONS</h1>
          <div class="container-2">

          </div>
        </div>
    </div>
    <FooterComp/>
</template>
<script lang="ts">
import { defineComponent, onMounted, onBeforeUnmount } from 'vue';
import NavbarComp from '@/components/NavbarComp.vue';
import FooterComp from '@/components/FooterComp.vue';

export default defineComponent({
  name: 'SecuritySystemsView',
  components: {
    NavbarComp,
    FooterComp
  },
  setup() {
    let observer: IntersectionObserver | null = null;

    // Using lifecycle hooks: onMounted and onBeforeUnmount
    onMounted(() => {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } else {
            entry.target.classList.remove('show');
          }
        });
      });

      // Observing elements with the 'hidden' class
      const hiddenElements = document.querySelectorAll('.hidden');
      hiddenElements.forEach((el) => observer?.observe(el));
    });

    onBeforeUnmount(() => {
      if (observer) {
        observer.disconnect(); // Disconnect observer when component is unmounted
      }
    });

    // No need to return anything if you don't use any reactive properties in the template.
  }
});
</script>

<style scoped>
      .container-main{
        height: 120vh;
        display: flex;
        justify-content: center;
      }

      h1{
        display: flex;
        justify-content: center;
        text-align: center;
      }
</style>