<template lang="">
    <NavbarComp/>
    <div class="container-main bg-black r">
        <div class="container-1 ">
          <h1  class="bg-black text-white position-absolute top-50 start-50 translate-middle d-flex justify-content-center">WE OFFER SATE OF THE ART INSTALLATIONS</h1>
          <div class="container-2">

          </div>
        </div>
           <!-- Dark Carousel Section -->
      <div id="carouselExampleDark" class="carousel carousel-dark slide hidden">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img src="https://via.placeholder.com/800x400" class="d-block w-100" alt="First Slide">
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src="https://via.placeholder.com/800x400" class="d-block w-100" alt="Second Slide">
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://via.placeholder.com/800x400" class="d-block w-100" alt="Third Slide">
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
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