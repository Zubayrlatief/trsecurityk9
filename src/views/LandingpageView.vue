<template>
  <NavbarComp />
  <div id="landing ">
    <div class="main">
      <img class="img" :src="img" alt="TR Security K9" />
      <div class="container-main">
        <div class="content-container">
          <h1 class="border-bottom">YOUR 24/7 SECURITY IS OUR PRIORITY</h1>
          <div class="button-section">
            <button @click="navigateToContact" class="box-button">GET IN TOUCH</button>
            <button @click="navigateToServices" class="box-button">OUR SERVICES</button>
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
      router.push('/ContactView');
    };
    const navigateToServices = () => {
      router.push('/ServicesView');
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

.container-main {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-20%);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
}

.content-container {
  background-color: rgba(0, 0, 0, 0.6); /* Dark background with opacity */
  color: #fff;
  padding: 20px;
  text-align: center;
  backdrop-filter: blur(0.2px);
  width: 70%;
}

h1 {
  font-size: 2rem;
  font-family: 'Times New Roman', Times, serif;
  margin-bottom: 2rem;
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

.d-flex {
  display: flex;
  flex-wrap: wrap; /* Allow wrapping for smaller screens */
}

.box {
  padding: 1rem;
  margin: 0.5rem;
  text-align: justify;
  color: #ffffff;
}

.hidden {
  opacity: 0;
  transform: translateY(100px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.show {
  opacity: 1;
  transform: translateY(0);
}

/* Media Queries */
@media (max-width: 1024px) {
  h1 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }

  .content-container {
    width: 80%;
  }

  .button-section {
    flex-direction: row; /* Align buttons in a row */
    justify-content: space-between;
  }

  .box-button {
    width: 48%; /* Adjust button width for alignment */
  }
}

@media (max-width: 768px) {
  .container-main {
    flex-direction: column;
    align-items: center;
  }

  .content-container {
    padding: 15px;
    width: 90%;
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
    padding: 10px;
    text-align: center;
    width: 95%;
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
