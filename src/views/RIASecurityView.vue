<template>
  <div>
    <NavbarComp />
    <div class="main-container">
      <!-- Move heading to the top -->
      <h4 class="h1">
        DEDICATED TO THE SAFETY OF ALL OUR CLIENTS WE INCLUDE EVERY TYPE OF SECURITY SOLUTIONS
      </h4>
      
      <div class="container-2">
        <img class="img" :src="img" alt="TR Security K9" />
      </div>
      
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

      <div class="d-flex flex-row align-items-start flex-wrap">
        <!-- Carousel Section -->
        <div class="carousel-container flex-fill p-2">
          <div id="securityCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="https://zubayrlatief.github.io/Images-/335061946_227326069704609_1086594109604870972_n%20(1).jpg"
                  class="d-block w-100"
                  alt="Security Image 1"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://zubayrlatief.github.io/Images-/219237737_4559314124078643_4043352918482986628_n.jpg"
                  class="d-block w-100"
                  alt="Security Image 2"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://zubayrlatief.github.io/Images-/190337722_4367801189896605_4328583546380313516_n.jpg"
                  class="d-block w-100"
                  alt="Security Image 3"
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#securityCarousel"
              data-bs-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#securityCarousel"
              data-bs-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <!-- Text Section -->
        <div class="text-container flex-fill p-2 bg-black text-light">
          <div class="p-3 flex-fill box hidden bg-black">
            <h3 class="text-white" >Protecting Industry and Homes with Excellence</h3>
            <p>
              Our security company is dedicated to safeguarding both industrial and residential properties with unmatched
              expertise. For industrial security, we provide customized solutions to protect your facilities, equipment,
              and workforce. Our trained professionals ensure access control, perimeter protection, and surveillance to
              prevent unauthorized access and maintain operational integrity. In residential security, we prioritize your
              family’s safety by offering vigilant patrols, access control, and visible deterrence to create a secure
              environment. Trust us to deliver peace of mind through our proactive and responsive services tailored to
              meet your unique security needs.
            </p>
          </div>

          <div class="p-3 flex-fill box hidden bg-black">
            <h3 class="text-white">Securing Farms and Agricultural Assets</h3>
            <p>
              Agricultural security is vital to protect the backbone of our economy—our farms and resources. Our
              specialized agricultural guarding services are designed to safeguard your property, livestock, and equipment
              against theft, vandalism, and trespassing. With a deep understanding of the agricultural industry, our
              highly trained guards provide comprehensive solutions, including perimeter monitoring, access control, and
              surveillance. Focus on farming while we ensure the security of your agricultural investments, offering you
              peace of mind and uninterrupted operations.
            </p>
          </div>
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
          threshold: 0.2, 
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
  height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px; /* Added margin-bottom to create space between the boxes and the carousel */
}

.carousel-container {
  flex: 1 1 50%; /* Both sections take up 50% of the width */
  max-width: 50%;
}



p{
  font-size: 1rem;
}
.text-container {
  flex: 1 1 50%; /* Both sections take up 50% of the width */
  max-width: 50%;
}

.text-container {
  padding: 20px;
}

@media (max-width: 768px) {
  .carousel-container,
  .text-container {
    flex: 1 1 100%; /* Stack vertically on smaller screens */
    max-width: 100%;
  }
}


.carousel-item img {
  height: 500px; /* Adjusted height for a smaller carousel */
  object-fit: cover;
  width: 500px;
}

@media (max-width: 768px) {
  .carousel-item img {
    height: 500px; /* Adjust height for smaller screens */
  }
}

@media (max-width: 425px) {
  .carousel-item img {
    height: 400px; /* Further reduce height for very small screens */
  }
}

.boxes-overlay {
  position: absolute;
  top: 90%;
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
  margin: 4%;
  border-bottom-style: groove;
  font-family: 'Times New Roman', Times, serif;
  border-bottom-width: 2px;
  text-align: center;
}

.fw-bold{
  color: aliceblue#eb691d;
}

h4,h3{
  color: rgb(255, 255, 255);
  font-family: 'Times New Roman', Times, serif;
}



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

@media (max-width: 430px) {
  .container-3 {
    width: 90%;
    top: 2%;
    font-size: 0.8rem;
    padding: 5px;
  }

  .boxes-overlay {
    flex-direction: column;
    gap: 10px;
    font: 0.3rem;
    margin-top: -20%;
  }

  .fw-bold{
    font-size: 0.8rem;
  }
  .content{
    padding: 2;
    font-size: 0.6rem;
  }
  .box {
    padding: 15px;
    
    
  }

  h4{
    
    font-size: 1.6rem;
  }

  h1 {
    font-size: 1.4rem;
  }
  .container-1{
  
  }
  .d-flex{
    margin-top: 2%;
  }
  p{
    font-size: 0.8rem;
  }
}
</style>
