<template>
  <NavbarComp />
  <div id="landing">
    <div class="main">
      <!-- Image Container -->
      <div class="image-container">
        <img class="img" :src="img1" alt="TR Security K9" />
        <img class="img" :src="img2" alt="Additional Image" />
      </div>
      
      <div class="container-main ">
        <div class="heading-container">
          <h1>UNMATHCED ARMED RESOPNSE SERVICES</h1>
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
        <button class="box-button" @click="navigateToContact">Contact Us Today</button>
      </div>
      
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
      img2: 'https://zubayrlatief.github.io/Images-/2038bdeb-2932-42ba-99ca-3711f37943a1.png',
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

.container-main {
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  z-index: 2;
}

.heading-container {
  max-width: 800px;
  margin: 0 auto;
  backdrop-filter: blur(2px);
  padding: 50px;
  border-radius: 10px;
  color: white;
}

.boxes-overlay {
  position: absolute;
  top: 75%;
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
  background-color: rgba(9, 9, 9, 0.7);
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
.img {
  width: 50%; 
  max-height: 100vh;
  object-fit: cover; 
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
  .heading-container {
    padding: 10px;
  }
  .main-button {
    font-size: 1.2rem;
    padding: 10px 30px;
  }
}

@media (max-width: 500px) {
  .img {
    width: 100%;
    height: auto; 
    max-height: 100vh;
    object-fit: cover;
  }

  h1 {
    font-size: 2rem;
    margin-top: 10%;
    line-height: 1.5;
  }

  .boxes-overlay {
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
    gap: 10px;
  }

  .box {
    margin: 20px;
    padding: 10px;
    font-size: 1rem;
    line-height: 1.2;
    text-align: center;
  }

  .box-button {
    font-size: 1rem;
    padding: 10px;
    width: 90%;
    margin: 20px auto 0;
    display: block;
  }

  .heading-container {
    padding: 10px;
    font-size: 1rem;
  }

  .container-main {
    top: 10%;
    padding: 10px;
    text-align: center;
  }

  .main {
    padding: 10px;
  }
}

</style>
