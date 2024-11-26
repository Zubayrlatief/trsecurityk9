<template>
  <NavbarComp />
  <div id="landing">
    <div class="main">
      <!-- Image Container -->
      <div class="image-container">
        <img class="img" :src="img1" alt="TR Security K9" />
        <img class="img" :src="img2" alt="Additional Image" />
      </div>
      
      <div class="container-main">
        <div class="heading-container">
          <h1>Unmatched Armed Response Services</h1>
        </div>
      </div>

      <!-- Boxes overlay -->
      <div class="boxes-overlay">
        <div class="box hidden">
          <div class="content">
            "Unmatched Armed Response Services: Protecting Your Home, Business, and Assets with Rapid, Professional, and Reliable Security Solutions 24/7."
          </div>
        </div>
        <div class="box hidden">
          <div class="content">
            K9 handling services utilize trained dogs for detection, patrol, and protection, offering enhanced security solutions for businesses and critical sites.
          </div>
        </div>
        <div class="box hidden">
          <div class="content">
            Security installation services provide expert setup of advanced systems, including alarms, CCTV, and access control, ensuring comprehensive protection for properties.
          </div>
        </div>
      </div>
      
      <!-- Contact Us Button -->
      <button class="main-button" @click="navigateToContact">Contact Us Today</button>
    </div>
  </div>
  <FooterComp />
</template>



<script lang="ts">
import { defineComponent, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import NavbarComp from '@/components/NavbarComp.vue';
import FooterComp from '@/components/FooterComp.vue';

export default defineComponent({
  name: 'ArmedResponseView',
  components: {
    NavbarComp,
    FooterComp,
  },
  data() {
    return {
      img1: 'https://zubayrlatief.github.io/Images-/453209260_820975970014760_7992647634388668027_n%20(1).jpg',
      img2: 'https://zubayrlatief.github.io/Images-/335061946_227326069704609_1086594109604870972_n.jpg',
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
/* General layout */
.main {
  position: relative;
}

.container-main {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  z-index: 2;
}

/* Heading container */
.heading-container {
  max-width: 800px;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(9px);
  padding: 50px;
  border-radius: 10px;
}

/* Boxes overlay */
.boxes-overlay {
  position: absolute;
  top: 68%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  z-index: 1;
  width: 80%;
}
.box {
  flex: 1 1 calc(30% - 20px);
  background-color: rgba(0, 0, 0, 0.7);
  padding: 20px;
  border-radius: 10px;
  color: rgb(194, 190, 190);
  text-align: center;
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.6s ease;
}
.hidden.show {
  opacity: 1;
  transform: translateY(0);
}
.img{
  width: 50%;
}
/* Button styling */
.main-button {
  position: absolute;
  top: 85%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  padding: 15px 50px;
  font-weight: bold;
  background-color: #eb691d;
  color: rgb(0, 0, 0);
  border: none;
  cursor: pointer;
  border-radius: 8px;
  font-size: 1.5rem;
  transition: all 0.3s ease-in-out;
}
.main-button:hover {
  background-color: #552a10;
  color: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

/* Responsive adjustments */
@media (max-width: 900px) {
  .img{
    height: 100vh;
  }
  .container-main {
    top: 10%;
    padding: 2px;
    font-size: 0.4rem;
  }
  h1 {
    font-size: 1.5rem;
  }
  .boxes-overlay {
    flex-direction: column;
  }
  .box {
    flex: 1 1 100%;
  }
  .main-button{
    padding: 2px;
  }
}

@media (max-width: 600px) {
  .container-main {
  }
  .heading-container {
    padding: 30px;
  }
  .main-button {
    font-size: 1.2rem;
    padding: 10px 30px;
  }
}

@media (max-width: 400px) {
  .img{
    height: 55vh;
  }
  h1 {
    font-size: 0.6rem;
    margin-top: 8%;
  }
  .boxes-overlay {
    width: 100%;
    margin-bottom: 5%;
    gap: 5px;
  }
  .box {
    padding: 2px;
    font-size: 0.5rem;
  }
  .main-button {
    font-size: 1rem;
    padding: 8px 20px;
  }
  .heading-container{
    padding: 1px 1px;
  }
  .main-button{
    position: absolute;
    top: 85%;
    padding: 2px;
  }
}
</style>
