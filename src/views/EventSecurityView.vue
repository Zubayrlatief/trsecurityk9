<template>
    <div>
      <NavbarComp />
      <div class="container-main bg-black p-4">
        <h1 class="text-center border-bottom">WE OFFER EVENT SECURITY</h1>
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
                <img src="https://zubayrlatief.github.io/Images-/83cd0f81-14bc-4fa0-b9b3-091ada7e51bd.png" class="d-block w-100 carousel-image" alt="First slide">
                <div class="carousel-caption d-none d-md-block">
                  <h5>First Carousel - Slide 1</h5>
                  <p>Some placeholder content for the first carousel.</p>
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <img src="https://zubayrlatief.github.io/Images-/230773814_4578479108828811_8950874723867153206_n.jpg" class="d-block w-100 carousel-image" alt="Second slide">
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
            <h4 class="fw-bold">HIGH VISIBILITY SECURITY GUARDS</h4>
            <div class="content">
                Our high visibility security guards serve as a powerful deterrent against potential threats, ensuring a safe and secure environment for your property and personnel during your events. 
            </div>
          </div>
          <div class="box hidden">
            <h4 class="fw-bold">HIGH TRAINED SECURITY DOGS</h4>
            <div class="content">
                Our security dogs are expertly trained to provide unmatched protection and assistance in various security scenarios. Whether it's patrolling large areas, detecting threats, or supporting our security teams, these dogs are disciplined, vigilant, and reliable. Events, and people. Trust in our security dogs to deliver exceptional service and unparalleled peace of mind.
            </div>
          </div>
          <div class="box hidden">
            <h4 class="fw-bold">PROFESSIONAL SECURITY VEHICLE SERVICES</h4>
            <div class="content">
                We provide security vehicle assistance for various events, including school functions, fundraisers, weddings, and more. Our vehicles are equipped with advanced safety features and staffed by trained security professionals to ensure a secure environment. providing peace of mind for organizers and attendees alike.
            </div>
          </div>
        </div>
      </div>
  
    
      <h3 class="container-main text-center p-4">TRUSTED PARTNERS</h3>
    <div id="card">
      <div class="wrapper">
        <div class="box-area">
          <div class="box">
            <img src="https://zubayrlatief.github.io/Images-/pedros-removebg-preview.png" alt="" class="sr" />
            <div class="overlay">
              <h3>KC AUTO</h3>
            </div>
          </div>
          <div class="box">
            <img src="https://zubayrlatief.github.io/Images-/images__1_-removebg-preview.png" alt="" class="sr" />
            <div class="overlay">
              <h3>The Car Bath</h3>
            </div>
          </div>
          <div class="box">
            <img src="https://zubayrlatief.github.io/Images-/muslim_hands-removebg-preview.png" alt="" class="sr" />
            <div class="overlay">
              <h3>Surf Emporium</h3>
  
            </div>
          </div>
          <div class="box">
            <img src="https://zubayrlatief.github.io/Images-/sanzaf-removebg-preview.png" alt="" class="sr" />
            <div class="overlay">
              <h3>Surf Emporium</h3>
            </div>
          </div>
          <div class="box">
            <img src="https://zubayrlatief.github.io/Images-/The_Salvation_Army.svg-removebg-preview.png" alt="" class="sr" />
            <div class="overlay">
              <h3>Surf Emporium</h3>
              <h5>Apr 2023 - present</h5>
              <p>
              </p>
  
            </div>
          </div>
          <div class="box">
            <img src="https://zubayrlatief.github.io/Images-/logo/naklistan-removebg-preview.png" alt="" class="sr" />
            <div class="overlay">
            </div>
          </div>
          <div class="box">
            <img src="https://zubayrlatief.github.io/Images-/gforce.png" alt="" class="sr" />
            <div class="overlay">
              <h3>Lc Studio</h3>=
            </div>
          </div>
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
  
  .hidden {
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }
  
  h1{
    color: #fff;
  }

  h3{
    color: #fff;
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
    border-radius: 5px;
    color: #fff;
  }



.wrapper {
    display: flex;
    justify-content: center;
    flex-direction: row;
  padding: 10px 2%;
}

#card {
  padding: 10px 10;
}

.box-area {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  grid-gap: 40px;
  margin-top: 50px;
}

.box {
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
}

.box img {
  width: 100%;
  border-radius: 10px;
  display: block;
  transition: transform 0.5s;
}

.overlay {
  width: 100%;
  height: 0;
  background: linear-gradient(transparent, #1c1c1c 58%);
  border-radius: 10px;
  position: absolute;
  left: 0;
  bottom: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  font-size:2px;
  transition: height 0.5s;
}

.overlay h3 {
  font-weight: 500;
  margin-bottom: 5px;
  margin-top: 80%;
  font-family: "Bebas Neue", sans-serif;
  font-size: 30px;
  letter-spacing: 2px;
  color: aliceblue;
}

.overlay h5,
p {
  color: rgb(133, 139, 145);
}

.box:hover img {
  transform: scale(1.1);
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
  