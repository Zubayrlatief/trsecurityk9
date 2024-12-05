<template>
  <NavbarComp />
  <div class="container-main bg-black text-white">
    <div class="container-1">
      <h1 class="h1 text-center">
        WE OFFER STATE OF THE ART INSTALLATIONS
      </h1>
    </div>
  </div>

  <!-- Section with Trusted Installation Services -->
  <div class="container py-5 bg-black text-white border-bottom">
    <div class="row text-center">
      <div class="col-md-4 hidden">
        <h3>Trusted Installation Services</h3>
        <p>We specialize in providing high-quality electric fencing installations that are tailored to meet the specific security needs of your property...</p>
        <!-- Redirect button to contact page -->
        <router-link to="/ContactView">
          <button class="box-button">Get a Quote</button>
        </router-link>
      </div>
      <div class="col-md-4 hidden">
        <h3>Electric Fencing Solution</h3>
        <p>Our Electric Fencing Installations provide an advanced security measure that acts as a strong deterrent to intruders...</p>
        <!-- Redirect button to contact page -->
        <router-link to="/ContactView">
          <button class="box-button">Get a Quote</button>
        </router-link>
      </div>
      <div class="col-md-4 hidden">
        <h3>Alarm Monitoring Service</h3>
        <p>In addition to electric fencing, we offer comprehensive Alarm Monitoring services that provide constant surveillance...</p>
        <!-- Redirect button to contact page -->
        <router-link to="/ContactView">
          <button class="box-button">Get a Quote</button>
        </router-link>
      </div>
    </div>
  </div>


<div class="container vh-40 my-5">
  <div class="row align-items-center">
    <!-- Carousel -->
    <div class="col-md-6">
      <div id="carouselExample" class="carousel slide hidden" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" class="active" aria-current="true"></button>
          <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://zubayrlatief.github.io/Images-/AdobeStock_206211186-scaled-2560x1280.webp" class="d-block w-100" alt="Slide 1">
            <div class="carousel-caption d-none d-md-block">
              <h5>First Slide</h5>
              <p>Description for the first slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://zubayrlatief.github.io/Images-/Electric-Fence-1024x640.jpg" class="d-block w-100" alt="Slide 2">
            <div class="carousel-caption d-none d-md-block">
              <h5>Second Slide</h5>
              <p>Description for the second slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://zubayrlatief.github.io/Images-/cropped-view-of-person-typing-password-on-home-sec-2023-11-27-05-13-08-utc-1-scaled.jpg" class="d-block w-100" alt="Slide 3">
            <div class="carousel-caption d-none d-md-block">
              <h5>Third Slide</h5>
              <p>Description for the third slide.</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>

    <!-- Text Section Next to Carousel -->
    <div class="col-md-6 hidden">
      <h3>Trusted Installation Services</h3>
      <p>
        We specialize in providing high-quality electric fencing installations that are tailored to meet the specific security needs of your property. 
        We work closely with each client to assess their unique requirements and recommend solutions that offer the best protection. Whether it's a residential, commercial, or industrial property, our team has the expertise to design and install a system that provides maximum security.
        <br/><br/>
        In addition to installations, we offer ongoing maintenance and support services to ensure your system continues to function optimally. We take pride in offering a service that not only meets but exceeds industry standards, making us a trusted choice for security solutions.
      </p>
    </div>
  </div>
</div>


  <FooterComp />
</template>

<script lang="ts">
import { defineComponent, onMounted, onBeforeUnmount } from 'vue';
import NavbarComp from '@/components/NavbarComp.vue';
import FooterComp from '@/components/FooterComp.vue';

export default defineComponent({
  name: 'SecuritySystemsView',
  components: {
    NavbarComp,
    FooterComp,
  },
  setup() {
    let observer: IntersectionObserver | null = null;

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

      const hiddenElements = document.querySelectorAll('.hidden');
      hiddenElements.forEach((el) => observer?.observe(el));
    });

    onBeforeUnmount(() => {
      if (observer) {
        observer.disconnect();
      }
    });
  },
});
</script>

<style scoped>
.container-main {
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.h1 {
  font-family: 'Times New Roman', Times, serif;
  color: gray;
}

.hidden {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}

.show {
  opacity: 1;
  transform: translateY(0);
}

.carousel-inner img {
  height: 400px; 
  object-fit: cover; 
  width: 100%; 
}

.box-button {
  margin-top: 3rem;
  padding: 0.6em;
  border-radius: 15px;
  transition: .4s ease-in-out;
  box-shadow: inset 1px 2px 5px rgba(0,0,0,0.2);
  letter-spacing: 0.2em;
  border: none;
  font-family: 'Times New Roman', Times, serif;
  font-size: 1.2rem;
  background: #eb691d;
  
}

.box-button:hover {
  cursor:pointer;
  letter-spacing: 0.5em;
  transform: translateY(-0.8em);
  background: #171717;
  color: #eb691d;
}

@media (max-width: 768px) {
  .container-main {
    flex-direction: column;
    text-align: center;
  }

  .carousel,
  .text-section {
    margin-bottom: 20px;
  }
}
</style>
