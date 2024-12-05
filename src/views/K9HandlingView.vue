<template>
  <div>
    <NavbarComp />
    <div class="container-main bg-black p-4">
      <h1 class="text-center">SPECIALIZING IN K9 HANDLING</h1>
    </div>

    <div class="d-flex container-1 align-items-start p-4 border-bottom">
  <!-- Carousel -->
  <div class="col-md-5 p-4 fade-in">
    <div id="carouselExampleDark1" class="carousel carousel-dark slide">
      <!-- Carousel Indicators -->
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark1" data-bs-slide-to="0" class="active"
          aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark1" data-bs-slide-to="1"
          aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark1" data-bs-slide-to="2"
          aria-label="Slide 3"></button>
      </div>

      <!-- Carousel Slides -->
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
          <img src="https://zubayrlatief.github.io/Images-/439d2089-7549-4907-87db-6703e6acbc5a%20(1).png" class="d-block w-100 carousel-image" alt="First slide">
          <div class="carousel-caption d-none d-md-block">
            <h5>First Carousel - Slide 1</h5>
            <p>Some placeholder content for the first carousel.</p>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img src="https://zubayrlatief.github.io/Images-/c40d56d7-7889-49bd-8277-a516f107ed70.JPG" class="d-block w-100 carousel-image" alt="Second slide">
          <div class="carousel-caption d-none d-md-block">
            <h5>First Carousel - Slide 2</h5>
            <p>Some placeholder content for the first carousel.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://zubayrlatief.github.io/Images-/52546c1c-5dcc-435e-a6b4-9aba90b1a924.png" class="d-block w-100 carousel-image" alt="Third slide">
          <div class="carousel-caption d-none d-md-block">
            <h5>First Carousel - Slide 3</h5>
            <p>Some placeholder content for the first carousel.</p>
          </div>
        </div>
      </div>

      <!-- Controls -->
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark1" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark1" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>

      <!-- Boxes -->
      <div class="boxes-overlay col-md-6">
        <div class="box hidden">
          <h4 class="fw-bold">RESIDENTIAL SECURITY</h4>
          <div class="content">
            "Unmatched Armed Response Services: Protecting Your Home, Business, and Assets with Rapid, Professional, and
            Reliable Security Solutions 24/7."
          </div>
        </div>
        <div class="box hidden">
          <h4 class="fw-bold">AGRICULTURAL SECURITY</h4>
          <div class="content">
            "Unmatched Armed Response Services: Protecting Your Home, Business, and Assets with Rapid, Professional, and
            Reliable Security Solutions 24/7."
          </div>
        </div>
        <div class="box hidden">
          <h4 class="fw-bold">INDUSTRIAL SECURITY</h4>
          <div class="content">
            "Unmatched Armed Response Services: Protecting Your Home, Business, and Assets with Rapid, Professional, and
            Reliable Security Solutions 24/7."
          </div>
        </div>
      </div>
    </div>

    <!-- Updated Section Below -->
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-6 box bg-black text-white p-4 hidden">
          <h3>Protecting Industry and Homes with Excellence</h3>
          <p>
            Our security company is dedicated to safeguarding both industrial and residential properties with unmatched
            expertise. For industrial security, we provide customized solutions to protect your facilities, equipment, and
            workforce.
          </p>
        </div>
        <div class="col-md-6 box bg-black text-white p-4 hidden">
          <h3>Securing Farms and Agricultural Assets</h3>
          <p>
            Agricultural security is vital to protect the backbone of our economy—our farms and resources.
          </p>
        </div>
      </div>
    </div>

    <FooterComp />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onBeforeUnmount } from 'vue';
import NavbarComp from '@/components/NavbarComp.vue';
import FooterComp from '@/components/FooterComp.vue';

export default defineComponent({
  name: 'RIASecurityView',
  components: {
    NavbarComp,
    FooterComp,
  },
  setup() {
    let observer: IntersectionObserver | null = null;

    onMounted(() => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('show');
            } else {
              entry.target.classList.remove('show');
            }
          });
        },
        { threshold: 0.2 }
      );

      const hiddenElements = document.querySelectorAll('.hidden');
      hiddenElements.forEach((el) => observer?.observe(el));
    });

    onBeforeUnmount(() => {
      if (observer) observer.disconnect();
    });
  },
});
</script>
<style scoped>
/* Animations */
.hidden {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.hidden.show {
  opacity: 1;
  transform: translateY(0);
}

.carousel-image {
  height: 400px; /* Set your desired fixed height */
  object-fit: cover; /* Ensures the image covers the container without distortion */
}

/* Container Layout */
.container-1 {
  display: flex;
  gap: 1rem;
}

.box {
  padding: 1rem;
  border-radius: 5px;
  color: #fff;
}




/* General Styling */
.bg-black {
  background-color: black;
  color: white;
}

@media (max-width: 500px) {
  .d-flex{

    flex-direction: column;
  }
}
@media (max-width: 700px) {
  .d-flex{

    flex-direction: column;
  }
}
</style>
