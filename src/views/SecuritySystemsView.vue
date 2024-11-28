<template>
  <NavbarComp />
  <div class="container-main bg-black">
    <div class="container-1">
      <h1 class="h1 bg-black text-white position-absolute top-50 start-50 translate-middle d-flex justify-content-center">
        WE OFFER STATE OF THE ART INSTALLATIONS
      </h1>
    </div>
  </div>
  
  <!-- Section with Trusted Installation Services, Electric Fenci -->
  <div class="d-flex bg-black">
    <div class="p-2 flex-fill hidden">
      <h3>Trusted Installation Services</h3>
      <p>We specialize in providing high-quality electric fencing installations that are tailored to meet the specific security needs of your property. Our expert team ensures a seamless installation process, from initial consultation to completion. We assess your property's unique layout and security requirements to design a custom electric fence that offers reliable and efficient protection. Using the latest technology and high-quality materials, we guarantee the fence is durable and performs at its best. Whether you're securing a residential property, business premises, or agricultural land, our installation service ensures your property is equipped with the most effective defense system available</p>
    </div>
    <div class="p-2 flex-fill hidden">
      <h3>Electric Fencing Solution</h3>
      <p>Our Electric Fencing Installations provide an advanced security measure that acts as a strong deterrent to intruders and trespassers. The system is designed to deliver a non-lethal shock to anyone attempting to breach your property’s boundaries, ensuring maximum protection without causing harm. Ideal for a wide range of applications, including residential, commercial, and agricultural properties, electric fences are efficient, cost-effective, and low-maintenance. By adding this level of security to your property, you can rest assured that you’re taking the necessary steps to protect what matters most.</p>
    </div>
    <div class="p-2 flex-fill hidden">
      <h3>Alarm Monitoring Service</h3>
      <p>In addition to electric fencing, we offer comprehensive Alarm Monitoring services that provide constant surveillance and immediate response to potential security threats. Our monitoring service connects your property’s alarm system to a central station, ensuring that any triggered alerts are immediately assessed. Whether it’s a break-in, fire, or medical emergency, our trained professionals quickly assess the situation and notify you and the necessary authorities for swift action. With 24/7 monitoring, our service ensures you have round-the-clock protection and peace of mind.</p>
    </div>
  </div>
<!-- Carousel Section -->
<div class="d-flex justify-content-center align-items-center vh-100 bg-black">
  <div class="row align-items-center w-100">
    <!-- First Carousel -->
    <div class="col-md-6 d-flex justify-content-center">
      <div id="carouselOne" class="carousel slide hidden" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselOne" data-bs-slide-to="0" class="active"></button>
          <button type="button" data-bs-target="#carouselOne" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#carouselOne" data-bs-slide-to="2"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://via.placeholder.com/600x400" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>First Slide</h5>
              <p>Description for the first slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://via.placeholder.com/600x400" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>Second Slide</h5>
              <p>Description for the second slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://via.placeholder.com/600x400" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>Third Slide</h5>
              <p>Description for the third slide.</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselOne" data-bs-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselOne" data-bs-slide="next">
          <span class="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>

    <!-- Second Carousel -->
    <div class="col-md-6 d-flex justify-content-center">
      <div id="carouselTwo" class="carousel slide hidden" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselTwo" data-bs-slide-to="0" class="active"></button>
          <button type="button" data-bs-target="#carouselTwo" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#carouselTwo" data-bs-slide-to="2"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://via.placeholder.com/600x400" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>First Slide</h5>
              <p>Description for the first slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://via.placeholder.com/600x400" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>Second Slide</h5>
              <p>Description for the second slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://via.placeholder.com/600x400" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>Third Slide</h5>
              <p>Description for the third slide.</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselTwo" data-bs-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselTwo" data-bs-slide="next">
          <span class="carousel-control-next-icon"></span>
        </button>
      </div>
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
    FooterComp
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

  }
});
</script>

<style scoped>
.container-main {
  height: 30vh;
  display: flex;
  justify-content: center;
}

.h1 {
  display: flex;
  justify-content: center;
  text-align: center;
  color: gray;
  font-family: 'Times New Roman', Times, serif;
  margin-top: -9%;
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

.carousel {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}

.carousel.show {
  opacity: 1;
  transform: translateY(0);
}
</style>


<style scoped>
  .container-main {
    height: 30vh;
    display: flex;
    justify-content: center;
  }

  .h1 {
    display: flex;
    justify-content: center;
    text-align: center;
    color: gray;
    font-family: 'Times New Roman', Times, serif;
    margin-top: -9%;
  }

  .hidden {
    opacity: 0;
    transform: translateY(120px); 
    transition: opacity 0.6s ease, transform 0.6s ease;
  }

  .show {
    opacity: 1;
    transform: translateY(0);
  }

  .flex-fill {
    background-color: #222; 
    color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .flex-fill:hover {
    transform: translateY(-20px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transition: transform 0.7s ease, box-shadow 0.3s ease;
  }

  .p-2{
    margin: 3%;
  }

  @media (max-width: 400px) {
  .d-flex{
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
   p,h4,{
    font-size: 0.6rem;
  }

   .p-2{
    margin: 6%;
  }
}

@media (max-width: 600px) {
    .d-flex{
      display: flex;
    flex-direction: column;
    padding: 20px;
}}
</style>
