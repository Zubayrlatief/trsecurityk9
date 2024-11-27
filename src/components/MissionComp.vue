<template>
  <div class="container-heading">
    <h1>WHAT WE DELIVER ON</h1>
  </div>
  <div class="container">
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
          <button @click="navigateToSecuritySystemsView" class="box-button">Learn More</button>
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

/* Heading */
h1 {
  padding: 20px 50px;
  font-weight: 900;
  background-color: #e35e11;
  color: rgb(0, 0, 0);
  font-size: 1.75rem;
  transform: skew(-20deg);
  display: inline-block;
  transition: all 0.5s ease;
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
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
  padding: 5px 30px;
  font-weight: 900;
  background-color: #EB691D;
  color: rgb(0, 0, 0);
  border-style: black;
  cursor: pointer;
  transform: skew(25deg);
  transition: all 0.5 ease;
  font-size: 1.75rem;
  transition: background-color 0.3s ease, transform 0.3s ease;
  font-family: 'Source Code Pro', monospace;
}

.box-button:hover {
  background-color: #ff7a3c;
  transform: scale(1.05);
}

.content {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 90%; /* Optional: constrain text width */
}

.container-heading{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:   #e35e11;
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
  }
  {}
}
</style>
