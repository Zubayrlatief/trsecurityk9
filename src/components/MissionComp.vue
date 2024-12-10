
<template>
  <div class="container-heading">
    <img class="background-image" src="https://zubayrlatief.github.io/Images-/TRsecurityK9-logo.png" alt="Background Decorative Image" />
    <h1 class="hidden">OUR BUSINESS MISSION</h1>
    <h2 class="hidden border-bottom">TRUSTED GRADED SECURITY</h2>
  </div>


  <div class="container border-bottom ">
    <div class="boxes">
      <div class="box hidden">
        <div class="content">
          <h3 class="border-bottom">ARMED RESPONSE</h3>
          <p>Armed response ensures rapid, professional protection against threats, providing highly trained personnel to safeguard businesses, homes, and assets.</p>
          <button @click="navigateToRIASecurity" class="box-button">Learn More</button>
        </div>
      </div>
      <div class="box hidden">
        <div class="content">
          <h3 class="border-bottom"> DOG K9 HANDLING</h3>
          <p>K9 handling services utilize trained dogs for detection, patrol, and protection, offering enhanced security solutions for businesses and critical sites.</p>
          <button @click="navigateToK9Handling" class="box-button">Learn More</button>
        </div>
      </div>
      <div class="box hidden">
        <div class="content">
          <h3 class="border-bottom">EVENT SECURITY</h3>
          <p>
            Event security involves providing professional, on-site security personnel to ensure the safety and security of attendees, staff, and property during events of all sizes.</p>
          <button @click="navigateToSecuritySystems" class="box-button ">Learn More</button>
        </div>
      </div>
      <div class="box hidden">
        <div class="content">
          <h3 class="border-bottom">SECURITY SYSTEMS</h3>
        <p>Security installation services provide expert setup of advanced systems, including alarms, CCTV, and access control, ensuring comprehensive protection for properties.</p>
          <button @click="navigateToEventSecurity" class="box-button ">Learn More</button>
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
    const navigateToK9Handling = () => {
      router.push('/K9Handling');
    };

    const navigateToRIASecurity = () => {
      router.push('/RIASecurity');
    };

    const navigateToSecuritySystems = () => {
      router.push('/SecuritySystems');
    };

    const navigateToEventSecurity = () => {
      router.push('/EventSecurity');
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
      navigateToRIASecurity,
      navigateToK9Handling,
      navigateToSecuritySystems,
      navigateToEventSecurity
    };
  }
};
</script>


<style scoped>
/* Flexbox container */
.container {
  display: flex;
  flex-direction: column;
  position: sticky;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  min-height: 60vh;
  padding: 5%;
  background-color: #000000;
}

.container-heading {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000000;
  position: relative; /* Ensure container is positioned relative for absolute positioning */
  padding: 1rem;
  width: 100%;
  min-height: 30vh; /* Optional: Set minimum height for the container */
}
.background-image {
  position: absolute; /* Position the image absolutely inside the container */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; /* Cover the full height */
  object-fit: cover; /* Ensure the image covers the entire container */
  z-index: -1; /* Place the image behind the text */
}


.hidden {
  opacity: 0;
  transform: translateX(-100%);
  transition: opacity 0.6s ease, transform 0.6s ease;
  padding: 1rem;
}

/* Animation on intersecting */
.hidden.show {
  opacity: 1;
  transform: translateX(0);
}

h1, h2 {
  color: white; /* Change text color for better contrast */
  z-index: 1; /* Ensure text is above the image */
  position: relative; /* Position text above the background image */
  font-weight: bold;
  text-align: center;
  padding: 1rem;
}

h1 {
  font-size: 3rem;
}

h2 {
  font-size: 2rem;
  border-bottom: 2px solid white; /* Add a white border for the h2 */
}

.container-heading h1, .container-heading h2 {
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent background for better contrast */
  padding: 0.5rem;
  border-radius: 10px; /* Optional: rounded corners for the text block */
}

/* Flexbox for boxes */
.boxes {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  padding: 2%;
}

.box {
  flex: 1 1 calc(25% - 20px); /* 3 boxes per row, adjusts for gaps */
  max-width: calc(325% - 20px);
  height: 450px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 1.2rem;
  border-radius: 8px;
  opacity: 0;
  transform: translateX(-100%);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

/* Background images for each box */
.box:nth-child(1) {
  background-image: url('https://zubayrlatief.github.io/Images-/453209260_820975970014760_7992647634388668027_n%20(1).png');
}

.box:nth-child(2) {
  background-image: url('https://zubayrlatief.github.io/Images-/0c311717be90de50883a94690c9cb05d.png');
}

.box:nth-child(3) {
  background-image: url('https://zubayrlatief.github.io/Images-/57336201_2435266096483467_1952572130822455296_n.jpg');
}

.box:nth-child(4) {
  background-image: url('https://zubayrlatief.github.io/Images-/57336201_2435266096483467_1952572130822455296_n.jpg');
}
/* Animation on intersecting */
.hidden.show {
  opacity: 1;
  transform: translateX(0);
}

.box-button {
  margin-top: 1rem;
  padding: 0.8em 1em;
  border-radius: 15px;
  transition: 0.4s ease-in-out;
  box-shadow: inset 1px 2px 5px rgba(0, 0, 0, 0.2);
  letter-spacing: 0.1em;
  border: none;
  font-family: 'Times New Roman', Times, serif;
  font-size: 1rem;
  background: #eb691d;
}

.box-button:hover {
  cursor: pointer;
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
  font-size: 1.2rem;
  font-family: 'Times New Roman', Times, serif;
}

.container-heading {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  width: 100%;
  border: #000000;
}

h3 {
  font-family: 'Roboto', sans-serif;
  font-size: 1.8rem;
  font-weight: bold;
  color: rgb(255, 255, 255);
  text-align: center;
  margin: 20px 0;
  padding: 10px 20px;

}



/* Media Queries for Smaller Screens */
@media (max-width: 1024px) {
  .box {
    flex: 1 1 calc(50% - 20px); /* 2 boxes per row */
    max-width: calc(50% - 20px);
  }

  h1 {
    font-size: 2rem;
  }

  .box-button {
    font-size: 1rem;
  }
}

@media (max-width: 700px) {
  .box {
    flex: 1 1 100%; /* Full width */
    max-width: 100%;
  }

  h1 {
    font-size: 1.5rem;
  }

  .box-button {
    padding: 0.5em 1em;
  }

  .container-heading {
    margin-top: 5%;
  }
}

@media (max-width: 400px) {
  .box {
    flex: 1 1 100%; /* Full width */
    max-width: 100%;
  }

  h1 {
    font-size: 2rem;
  }

  .box-button {
    padding: 0.5em 1em;
  }

  .h2{
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }


  .content{
    font-size: 1rem;
  }
}
</style>
