<template>
  <NavbarComp />
  <div id="landing">
    <div class="main">
         
      <div class="container-main p-4 ">
        <div class="heading-container">
          <h1 class="border-bottom ">UNMATCHED ARMED RESPONSE SERVICES</h1>
        </div>
      </div>
      <!-- Image Container -->
      <div class="image-container">
        <img class="img" :src="img1" alt="TR Security K9" />
        <img class="img" :src="img2" alt="Additional Image" />
      </div>
   

      <!-- Boxes overlay -->
      <div class="boxes-overlay">
        <div class="box hidden">
          <div class="content">
            <p>"Unmatched Armed Response Services: Protecting Your Home, Business, and Assets with Rapid, Professional, and Reliable Security Solutions 24/7."</p>
          </div>
        </div>
        <div class="box hidden">
          <div class="content">
           <p> K9 handling services utilize trained dogs for detection, patrol, and protection, offering enhanced security solutions for businesses and critical sites.</p>
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
    <div class="container vh-40 my-5">
  <div class="row align-items-center">
    <!-- Carousel -->
    <div class="col-md-6">
      <div id="carouselExample" class="carousel slide hidden" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" class="active" aria-current="true"></button>
          <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://zubayrlatief.github.io/Images-/335061946_227326069704609_1086594109604870972_n%20(1).jpg" class="d-block w-100" alt="Slide 1">
            <div class="carousel-caption d-none d-md-block">
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://zubayrlatief.github.io/Images-/190337722_4367801189896605_4328583546380313516_n.jpg" class="d-block w-100" alt="Slide 2">
            <div class="carousel-caption d-none d-md-block">
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://zubayrlatief.github.io/Images-/219237737_4559314124078643_4043352918482986628_n.jpg" class="d-block w-100" alt="Slide 3">
            <div class="carousel-caption d-none d-md-block">
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>

    <!-- Text Section Next to Carousel -->
    <div class="col-md-6 hidden">
      <h3 class="text-white">Armed Response Services</h3>
<p class="text-white">
  We specialize in providing professional armed response services, ensuring the safety and security of your property at all times. Our team of highly trained security personnel is available 24/7 to respond to any security threats swiftly and effectively. Whether it’s a residential, commercial, or industrial property, we are committed to protecting you and your assets.
  <br/><br/>
  - ARMED RESPONSE<br>
  - EMERGENCY RESPONSE<br>
  - 24/7 MONITORING<br>
  <br/><br/>
  In addition to our armed response services, we offer ongoing support to ensure that your security system and emergency protocols are always in top condition. We take pride in providing quick and reliable solutions that exceed industry standards, making us a trusted partner for your security needs.
</p>

    </div>
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
  name: 'ArmedResponse',
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
      router.push('/Contact');
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
  top: 15%;
  display: flex;
  justify-content: center;
  text-align: center;
}

.heading-container {
  backdrop-filter: blur(3px);
  padding: 20px;
  border-radius: 10px;
  color: white;
  
}

h1{
  
  font-family: 'Times New Roman', Times, serif;}

.boxes-overlay {
  position: absolute;
  top: 70%;
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
  padding: 10px;
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
  max-height: 70vh;
  object-fit: cover; 
}

.carousel-item img {
  width: 100%;
  height: 400px; /* Set the fixed height for the carousel images */
  object-fit: cover; /* Ensures the image maintains its aspect ratio and fills the container */
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
    padding: 5px;
    font-size: 0.8rem;
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
    top: 2.5%;
    padding: 10px;
    text-align: center;
  }

  .main {
    padding: 10px;
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

@media (max-width: 768px) {
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
  top: 50%;
  }

  .box {
    margin: 10px;
    padding: 20px;
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

@media (max-width: 320px) {
  .img {
    width: 100%;
    height: auto; 
    max-height: 100vh;
    object-fit: cover;
  }

  h1 {
    font-size: 1.3rem;
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
    margin: 10px;
    padding:10px;
    font-size: 0.8rem;
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

@media (max-width: 375px) {
  .img {
    width: 100%;
    height: auto; 
    max-height: 100vh;
    object-fit: cover;
  }

  h1 {
    font-size: 1.3rem;
    margin-top: 7%;
    line-height: 1.5;
  }

  .boxes-overlay {
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
    gap: 10px;
  }

  .box {
    margin: 5px;
    padding:15px;
    font-size: 0.6rem;
    line-height: 1.3;
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

@media (max-width: 1024px) {
  

  .container-main {
    top: 5%;
    padding: 10px;
    text-align: center;
  }
  .heading-container {
    padding: 5px;
    font-size: 0.6rem;
    margin-bottom: 5%;
  }

  .main {
    padding: 5px;
  }
  .box-button {
    font-size: 1rem;
    padding: 10px;
    margin: 20px auto 0;
    display: block;
  }
}



</style>
