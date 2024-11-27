<template>
  <div>
    <NavbarComp />
    <div class="main-container">
      <div class="container-2">
        <img class="img" :src="img" alt="TR Security K9" />
      </div>
      <h4 class="h1 fw-bold">DEDICATED TO THE SAFETY OF ALL OUR CLIENTS WE INCLUDE EVERY TYPE OF SECURITY SOLUTIONS</h4>
      <div class="container-1">
        <div class="boxes-overlay">
          <div class="box hidden">
            <h4 class="fw-bold">RESIDENTIAL SECURITY</h4>
            <div class="content">
              "Unmatched Armed Response Services: Protecting Your Home, Business, and Assets with Rapid, Professional,
              and Reliable Security Solutions 24/7."
            </div>
          </div>
          <div class="box hidden">
            <h4 class="fw-bold">AGRICULTURAL SECURITY</h4>
            <div class="content">
              "Unmatched Armed Response Services: Protecting Your Home, Business, and Assets with Rapid, Professional,
              and Reliable Security Solutions 24/7."
            </div>
          </div>
          <div class="box hidden">
            <h4 class="fw-bold">INDUSTRIAL SECURITY</h4>
            <div class="content">
              "Unmatched Armed Response Services: Protecting Your Home, Business, and Assets with Rapid, Professional,
              and Reliable Security Solutions 24/7."
            </div>
          </div>
        </div>
      </div>

      <div class="d-flex">
  <div class="p-2 flex-fill box hidden bg-black">
    <h3>OUR STATEMET</h3>
    <p>
      Ensure the safety of your home and family with our Residential Guarding Service. 
      Our trained guards provide visible deterrence, patrols, and access control to 
      maintain a secure environment. Count on us for swift incident response and 
      personalized security, offering peace of mind and a safe haven for you and your 
      loved ones.
    </p>
  </div>
  <div class="p-2 flex-fill box hidden bg-black">
    <h3>Our Trusted Services</h3>
    <h4></h4>
    <p>
      Protect your agricultural assets with our specialized Agricultural Guarding 
      Service. Our trained guards ensure the safety of your property, livestock, 
      and equipment through perimeter monitoring, access control, and surveillance. 
      Count on us to deter theft, vandalism, and trespassing, so you can focus on 
      farming with peace of mind.
    </p>
  </div>
</div>


   
    </div>
    <FooterComp />
  </div>
</template>



<script lang="ts">
import { defineComponent, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import NavbarComp from '@/components/NavbarComp.vue';
import FooterComp from '@/components/FooterComp.vue';

export default defineComponent({
  name: 'RIASecurityView',
  components: {
    NavbarComp,
    FooterComp,
  },
  data() {
    return {
      img: 'https://zubayrlatief.github.io/Images-/57336201_2435266096483467_1952572130822455296_n.jpg',
    };
  },
  setup() {
    const router = useRouter();
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
        {
          threshold: 0.2, // Adjust for when elements should trigger (20% visible)
        }
      );

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
.main-container {
  background: black;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
}

.container-1 {
  margin: 5%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url('https://zubayrlatief.github.io/Images-/example-background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
}

.boxes-overlay {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  z-index: 1;
  width: 90%;
}

.box {
  flex: 1 1 calc(30% - 20px);
  background-color: rgba(15, 15, 15, 0.7);
  padding: 20px;
  border-radius: 10px;
  color: rgb(194, 190, 190);
  text-align: center;
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.6s ease;
}

.hidden {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.6s ease;
}

.hidden.show {
  opacity: 1;
  transform: translateY(0);
}

.img {
  width: 100%;
  height: 60vh;
  object-fit: cover;
}

.container-3 {
  
  left: 40%;
  width: 30%;
  top: 40%;
  position: absolute;
  color: rgb(255, 255, 255);
  font-weight: 900;
  text-align: center;
  transition: all 0.3s ease;
}

.h1{
  display: flex;
  justify-content: center;
  margin-top: 4%;
  text-align: center;
}

.fw-bold{
  color: aliceblue#eb691d;
}

h4{
  color: gray;
  font-family: 'Times New Roman', Times, serif;
}


/* Media Queries for Responsiveness */

@media (max-width: 1024px) {
  .container-3 {
    left: 15%;
    width: 50%;
    top: 35%;
    font-size: 1.8rem;
  }

  h1 {
    font-size: 1.8rem;
  }
}

@media (max-width: 768px) {
  .container-3 {
    left: 10%;
    width: 70%;
    top: 30%;
    font-size: 1.6rem;
    padding: 15px;
  }

  .boxes-overlay {
    width: 90%;
  }

  h1 {
    font-size: 1.6rem;
  }
}

@media (max-width: 600px) {
  .container-3 {
    left: 5%;
    width: 90%;
    top: 45%;
    font-size: 1.4rem;
    padding: 10px;
  }

  .boxes-overlay {
    flex-direction: column;
    gap: 15px;
    margin-top: 40%;
    margin-bottom: 80%;
  }

  .box {
    flex: 1 1 auto;
    padding: 5px;
    
    
  }

  h1 {
    font-size: 1.4rem;
  }
  .container-1{
    
  margin: 20%;
  }
  .d-flex{
    margin-top: 50%;
  }
  p{
    font-size: 0.8rem;
  }
}
</style>
