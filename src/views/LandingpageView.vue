<template>
  <NavbarComp />
  <div id="landing">
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
      img: 'https://zubayrlatief.github.io/Images-/landingtrsecurityk9.jpg',
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
}

.content-container {
  background-color: rgba(0, 0, 0, 0.6); /* Dark background with opacity */
  color: #fff;
  padding: 30px;
  text-align: center;
  backdrop-filter: blur(0.2px);
  width:  70%;
}

h1 {
  font-size: 2.5rem;
  font-family: 'Times New Roman', Times, serif;
  margin-bottom: 3rem;
}

.button-section {
  display: flex;
  flex-direction: column; /* Default to column */
  gap: 10px;
}

.box-button {
  padding: 0.8em;
  border-radius: 10px;
  font-weight: bold;
  font-family: 'Times New Roman', Times, serif;
  font-size: 1rem;
  background: #171717;
  color: rgb(128, 128, 128);
  transition: 0.4s ease-in-out;
  letter-spacing: 0.2em;
  border: none;
}

.box-button:hover {
  cursor: pointer;
  letter-spacing: 0.5em;
  transform: translateY(-0.8em);
  background: #171717;
  color: #eb691d;
}

.box-button:active {
  transform: translateY(-0.6em);
  background: #171717;
  color: grey;
}

.d-flex {
  display: flex;
  flex-direction: row;
}

.box {
  padding: 1.5rem;
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

@media (max-width: 576px) {
  .container-main {
    padding-right: 10px;
  }

  .content-container {
    width: 250px;
  }

  h1 {
    font-size: 1.8rem;
  }

  .box-button {
    font-size: 0.9rem;
  }

  .button-section {
    flex-direction: column; /* Stack buttons vertically on smaller screens */
  }
}

@media (min-width: 577px) {
  .button-section {
    flex-direction: row; /* Display buttons in a row on medium and larger screens */
    justify-content: space-between;
  }

  .box-button {
    width: 48%; /* Buttons take up 48% of the container width */
  }
}
@media (max-width: 400px) {

  h1 {
    font-size: 0.5rem; 
    margin-bottom: 10px;
  }

  .box-button {
    padding: 1px 2px; /* Make the buttons smaller */
    font-size: 0.4rem; /* Reduce font size of the buttons */
  }
  .content-container {
  background-color: rgba(0, 0, 0, 0.6); /* Dark background with opacity */
  color: #fff;
  margin-left: 20%;
  }
}


</style>
