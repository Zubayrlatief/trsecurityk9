<template>
  <div class="container-heading ">
    <h1>WHAT WE DELIVER ON</h1>
    <h2 class="h2 p-4 border-bottom">TRUSTED GRADED SECURITY</h2>
  </div>
  <div class="container border-bottom ">
    <div class="boxes">
      <div class="box hidden">
        <div class="content">
          Armed response services ensure rapid, professional protection against threats, providing highly trained personnel to safeguard businesses, homes, and critical assets.
          <button @click="navigateToRIASecurityView" class="box-button">Learn More</button>
        </div>
      </div>
      <div class="box hidden">
        <div class="content">
          K9 handling services utilize trained dogs for detection, patrol, and protection, offering enhanced security solutions for businesses and critical sites.
          <button @click="navigateToK9HandlingView" class="box-button">Learn More</button>
        </div>
      </div>
      <div class="box hidden">
        <div class="content">
          Security installation services provide expert setup of advanced systems, including alarms, CCTV, and access control, ensuring comprehensive protection for properties.
          <button @click="navigateToSecuritySystemsView" class="box-button ">Learn More</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { onMounted, onBeforeUnmount } from 'vue';

export default {
  name: 'FlexboxAnimation',
  setup() {
    let observer;
    const router = useRouter();

    // Define the navigation functions
    const navigateToK9HandlingView = () => {
      router.push('/K9HandlingView');
    };

    const navigateToRIASecurityView = () => {
      router.push('/RIASecurityView');
    };

    const navigateToSecuritySystemsView = () => {
      router.push('/SecuritySystemsView');
    };

    // Intersection Observer for animations
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

      // Select elements with the 'hidden' class
      const hiddenElements = document.querySelectorAll('.hidden');
      hiddenElements.forEach((el) => observer.observe(el));
    });

    // Cleanup observer on component unmount
    onBeforeUnmount(() => {
      if (observer) {
        observer.disconnect();
      }
    });

    // Return the navigation methods to be used in the template
    return {
      navigateToRIASecurityView,
      navigateToK9HandlingView,
      navigateToSecuritySystemsView
    };
  }
};
</script>


<style scoped>
/* Flexbox container */
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  min-height: 70vh;
  padding: 5%;
  background-color: #000000;
}

.container-heading{
  display: flex;
  flex-direction: column;
  
}

.container-heading:hover h1,h2 {
  transform: translate(30px, 30px) scale(1.1);
  color: rgba(150, 150, 150, 0.3);
  transition: all 0.3s ease-in-out;
}

@keyframes floatingEffect {
  0%, 100% {
    transform: translate(20px, 20px);
  }
  50% {
    transform: translate(25px, 25px);
  }
}

h2,h1 {
  animation: floatingEffect 3s infinite ease-in-out;
  
}



/* Heading */
h1 {
  padding: 20px 50px;
  font-weight: 900;
  background-color: #000000;
  color: gray;
    font-family: 'Times New Roman', Times, serif;
  font-size: 1.75rem;
  transform: skew(-20deg);
  display: inline-block;
  transition: all 0.5s ease;
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
}
.h2{
  font-family: 'Times New Roman', Times, serif;
  
  font-size: 1.75rem;
}
h1 span {
  display: inline-block;
  transform: skew(20deg);
  
}

/* Flexbox for boxes */
.boxes {
  padding: 5%;
  display: flex;
  gap: 30px;
  flex-direction: column;
}

.box {
  width: 100%;
  height: 400px; /* Adjust as needed */
  background-size: cover; /* Ensure the image fills the entire box */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Prevent tiling */
  position: relative; /* Required for overlaying text */
  color: white; /* Text color for contrast */
  display: flex; /* Center text with Flexbox */
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 1.2rem;
  border-radius: 8px; /* Optional rounded corners */
  opacity: 0; /* For animation */
  transform: translateX(-100%); /* Start off-screen for animation */
  transition: opacity 0.6s ease, transform 0.6s ease;
}

/* Specific background images for each box */
.box:nth-child(1) {
  background-image: url('https://zubayrlatief.github.io/Images-/335061946_227326069704609_1086594109604870972_n.jpg'); /* Replace with your image path */
}

.box:nth-child(2) {
  background-image: url('https://zubayrlatief.github.io/Images-/453209260_820975970014760_7992647634388668027_n%20(1).jpg'); /* Replace with your image path */
}

.box:nth-child(3) {
  background-image: url('https://zubayrlatief.github.io/Images-/57336201_2435266096483467_1952572130822455296_n.jpg'); /* Replace with your image path */
}

/* Animation on intersecting */
.hidden.show {
  opacity: 1;
  transform: translateX(0);
}


/* Add animations when visible */
.hidden.show {
  opacity: 1;
  transform: translateX(0); /* Slide into place */
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

.content {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 90%;
  font-size: 1.5rem;
  font-family: 'Times New Roman', Times, serif;
}

.container-heading{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:   #000000;
  width: 100%;
  border: #000000;
  
}



@media (max-width: 700px) {
  h1 {
    font-size: 2rem;
  }
  .box {
    width: 100%;
  }
  h1{
    font-size: 1rem;
  }
  .content{
    
  }
  .box-button{
    padding: 5px;
  }}
</style>
