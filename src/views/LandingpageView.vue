<template>
  <NavbarComp />
  <div id="landing">
    <div class="main">
      <img class="img" :src="img" alt="TR Security K9" />
      <div class="container-main">
        <h1>YOUR 24/7 SECURITY IS OUR PRIORITY</h1>
        <button @click="navigateToContact" class="button">GET IN TOUCH</button>
      </div>
    </div>
  </div>
  <MissionComp />
  <div class="d-flex flex-column flex-md-row text-light">
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
import { defineComponent } from 'vue';
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
  color: gray;
    font-family: 'Times New Roman', Times, serif;
}


button {
  padding: 10px 50px;
  font-weight: 900;
  background-color: #eb691d;
  color: #000000;
  border: none;
  cursor: pointer;
  transform: skew(25deg);
  transition: all 0.5s ease;
  font-size: 1.75rem;
}


.button:hover {
  background-color: #552a10;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
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

  .button {
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
