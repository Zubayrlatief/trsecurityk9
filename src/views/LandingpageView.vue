<template>
  <NavbarComp />
  <div id="landing">
    <div class="main">
      <img class="img" :src="img" alt="TR Security K9" />
      <div class="container-main">
        <h1>YOUR 24/7 SECURITY IS OUR PRIORITY</h1>
        <button @click="navigateToContact" class="box-button">GET IN TOUCH</button>
      </div>
    </div>
  </div>
  <MissionComp />
  <div class="d-flex flex-column flex-md-row text-light bg-black">
    <div class="p-2 flex-fill box hidden bg-black">
      <h3>Protecting Industry and Homes with Excellence</h3>
      <p>
        Our security company is dedicated to safeguarding both industrial and
        residential properties with unmatched expertise. For industrial security, we
        provide customized solutions to protect your facilities, equipment, and
        workforce. Our trained professionals ensure access control, perimeter
        protection, and surveillance to prevent unauthorized access and maintain
        operational integrity. In residential security, we prioritize your family’s
        safety by offering vigilant patrols, access control, and visible deterrence
        to create a secure environment. Trust us to deliver peace of mind through our
        proactive and responsive services tailored to meet your unique security
        needs.
      </p>
    </div>
    <div class="p-2 flex-fill box hidden bg-black">
      <h3>Securing Farms and Agricultural Assets</h3>
      <p>
        Agricultural security is vital to protect the backbone of our economy—our
        farms and resources. Our specialized agricultural guarding services are
        designed to safeguard your property, livestock, and equipment against theft,
        vandalism, and trespassing. With a deep understanding of the agricultural
        industry, our highly trained guards provide comprehensive solutions,
        including perimeter monitoring, access control, and surveillance. Focus on
        farming while we ensure the security of your agricultural investments,
        offering you peace of mind and uninterrupted operations.
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

    return { navigateToContact };
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
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: bold;
    font-family: 'Times New Roman', Times, serif;
}



.box-button {
  margin-top: 3rem;
  padding: 0.6em;
  border-radius: 15px;
  font-weight: bold;
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

.box-button:active {
  letter-spacing: 0.4em;
  transition: 0.1s all;
  transform: translateY(-0.6em);
  background: #171717;
  color: grey;
}

/* Flexbox layout responsiveness */
.d-flex {
  flex-direction: column;
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


/* Medium screens (768px and up) */
@media (min-width: 768px) {
  .d-flex {
    flex-direction: row;
  }

  .container-main {
    top: 50%;
    left: 50%;
  }

  h1 {
    font-size: 2.5rem;
  }

  .button {
    font-size: 1.5rem;
    padding: 12px 36px;
  }
}

/* Small screens (576px and down) */
@media (max-width: 576px) {
  .container-main {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  h1 {
    font-size: 1.5rem;
  }

  .box-button {
    padding: 8px 16px;
    font-size: 1rem;
  }

  .box {
    padding: 1rem;
  }
}

@media (max-width: 400px) {
  .box-button{
    padding: 2px;
  }
}


</style>
