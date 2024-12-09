<template>
  <NavbarComp />
  <div id="landing ">
    <div class="main">
      <img class="img" :src="img" alt="TR Security K9" />
      <div class="container-main">
        <div class="content-container">
          <h1 class="border-bottom">YOUR 24/7 K9 GAURDING SOLUTIONS</h1>
          <div class="button-section">
            <button @click="navigateToContact" class="box-button">GET IN TOUCH</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <MissionComp />
  <div class="d-flex flex-column flex-md-row text-light bg-black">
    <div class="p-2 flex-fill box hidden bg-black">
      <h3>Protecting Industry and Homes with Excellence</h3>
      <p>
        Our security company is dedicated to safeguarding both industrial and residential properties with unmatched expertise. For industrial security, we provide customized solutions to protect your facilities, equipment, and workforce. Our trained professionals ensure access control, perimeter protection, and surveillance to prevent unauthorized access and maintain operational integrity. In residential security, we prioritize your family’s safety by offering vigilant patrols, access control, and visible deterrence to create a secure environment. Trust us to deliver peace of mind through our proactive and responsive services tailored to meet your unique security needs.
      </p>
    </div>
    <div class="p-2 flex-fill box hidden bg-black">
      <h3>Securing Farms and Agricultural Assets</h3>
      <p>
        Agricultural security is vital to protect the backbone of our economy—our farms and resources. Our specialized agricultural guarding services are designed to safeguard your property, livestock, and equipment against theft, vandalism, and trespassing. With a deep understanding of the agricultural industry, our highly trained guards provide comprehensive solutions, including perimeter monitoring, access control, and surveillance. Focus on farming while we ensure the security of your agricultural investments, offering you peace of mind and uninterrupted operations.
      </p>
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
      </div></div>

  <FooterComp />
</template>

<script lang="ts">
import { defineComponent, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import NavbarComp from '@/components/NavbarComp.vue';
import MissionComp from '@/components/MissionComp.vue';
import FooterComp from '@/components/FooterComp.vue';

export default defineComponent({
  name: 'LandingpageView',
  components: {
    NavbarComp,
    MissionComp,
    FooterComp,
  },
  data() {
    return {
      img: 'https://zubayrlatief.github.io/Images-/0e1e4685-d44f-4b31-9a32-889749cd7d4e.png',
    };
  },
  setup() {
    const router = useRouter();
    const navigateToContact = () => {
      router.push('/Contact');
    };
    const navigateToServices = () => {
      router.push('/Services');
    };

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

    return { navigateToContact, navigateToServices };
  },
});
</script>

<style scoped>
.main {
  position: relative;
}

.img {
  width: 100%;
  height: auto;
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

.container-main {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%); /* Centers vertically */
  display: flex;
  justify-content: flex-end; /* Align content to the right */
  align-items: center;
  padding: 10px;
  width: 100%; /* Full width for proper responsiveness */
}

.content-container {
  background-color: rgba(0, 0, 0, 0.6); /* Dark background with opacity */
  color: #fff;
  padding: 20px;
  text-align: center;
  backdrop-filter: blur(5px); /* Smoothens the background */
  max-width: 40%; /* Limit width to avoid overflowing */
  margin-right: 5%; /* Add space from the right edge */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4); /* Add some elevation */
}

h1 {
  font-size: 2rem;
  font-family: 'Times New Roman', Times, serif;
  margin-bottom: 1rem;
  font-weight: 900;
}

.button-section {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.box-button {
  padding: 10px;
  border-radius: 8px;
  font-weight: bold;
  font-family: 'Times New Roman', Times, serif;
  font-size: 1rem;
  background: #171717;
  color: rgb(128, 128, 128);
  transition: 0.3s ease-in-out;
  letter-spacing: 0.1em;
  border: none;
}

.box-button:hover {
  cursor: pointer;
  letter-spacing: 0.3em;
  transform: translateY(-0.5em);
  background: #171717;
  color: #eb691d;
}

.box-button:active {
  transform: translateY(-0.4em);
  background: #171717;
  color: grey;
}

.hidden {
  opacity: 0;
  transform: translateX(-100%);
  transition: opacity 0.6s ease, transform 0.6s ease;
  padding: 1rem;
}

/* Animation on intersecting */
.hidden.show {
  opacity: 1;
  transform: translateX(0);
}


/* Responsive Adjustments */
@media (max-width: 1024px) {
  .content-container {
    max-width: 50%;
    margin-right: 3%; /* Adjust space from the right */
  }

  h1 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }
}

@media (max-width: 768px) {
  .container-main {
    flex-direction: column; /* Stack elements vertically */
    align-items: center; /* Center-align the content */
    padding: 15px;
  }

  .content-container {
    max-width: 80%; /* Increase width for smaller screens */
    margin-right: 0; /* Center-align */
  }

  h1 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .box-button {
    padding: 8px;
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .content-container {
    width: 95%;
    max-width: none; /* Allow full width on smallest screens */
    padding: 10px;
    margin-right: 0; /* Center-align */
  }

  h1 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  .box-button {
    padding: 5px;
    font-size: 0.8rem;
  }

  .box {
    font-size: 0.9rem;
  }
}

</style>
