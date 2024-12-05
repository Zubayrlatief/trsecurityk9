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

.container-heading {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container-heading:hover h1,
h2 {
  transform: translate(30px, 30px) scale(1.1);
  color: rgba(150, 150, 150, 0.3);
  transition: all 0.3s ease-in-out;
}

@keyframes floatingEffect {
  0%,
  100% {
    transform: translate(20px, 20px);
  }
  50% {
    transform: translate(25px, 25px);
  }
}

h2,
h1 {
  animation: floatingEffect 3s infinite ease-in-out;
}

/* Heading */
h1 {
  padding: 20px 50px;
  font-weight: 900;
  background-color: #000000;
  color: gray;
  font-family: 'Times New Roman', Times, serif;
  font-size: 2.5rem;
  transform: skew(-20deg);
  display: inline-block;
  transition: all 0.5s ease;
  text-align: center;
  font-weight: bold;
}

.h2 {
  font-family: 'Times New Roman', Times, serif;
  margin-bottom: -2%;
  font-size: 2rem;
}

h1 span {
  display: inline-block;
  transform: skew(20deg);
}

/* Flexbox for boxes */
.boxes {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 5%;
}

.box {
  flex: 1 1 calc(33.333% - 20px); /* 3 boxes per row, adjusts for gaps */
  max-width: calc(33.333% - 20px);
  height: 400px;
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

/* Animation on intersecting */
.hidden.show {
  opacity: 1;
  transform: translateX(0);
}

.box-button {
  margin-top: 3rem;
  padding: 0.8em 1.2em;
  border-radius: 15px;
  transition: 0.4s ease-in-out;
  box-shadow: inset 1px 2px 5px rgba(0, 0, 0, 0.2);
  letter-spacing: 0.2em;
  border: none;
  font-family: 'Times New Roman', Times, serif;
  font-size: 1.2rem;
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
    font-size: 0.5rem;
  }

  .box-button {
    padding: 0.5em 1em;
  }

  .h2{
    font-size: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container-heading {
    margin-top: 5%;
  }
  .content{
    font-size: 1rem;
  }
}
</style>
