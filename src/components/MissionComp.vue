<template>
  <div class="container">
    <h1>WHAT WE DELIVER ON</h1>
    <div class="boxes">
      <div class="box hidden">
        <div class="content">
          Our mission is to deliver professional and dependable security solutions to our clients. We strive to foster growth while ensuring peace of mind for the communities and businesses we serve.
          <button class="box-button">Learn More</button>
        </div>
      </div>
      <div class="box hidden">
        <div class="content">
          This is the second box.
          <button class="box-button">Learn More</button>
        </div>
      </div>
      <div class="box hidden">
        <div class="content">
          This is the third box.
          <button class="box-button">Learn More</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, onBeforeUnmount } from 'vue';

export default {
  name: 'FlexboxAnimation',
  setup() {
    let observer;

    onMounted(() => {
      // Define the observer
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

    onBeforeUnmount(() => {
      // Disconnect the observer to prevent memory leaks
      if (observer) {
        observer.disconnect();
      }
    });
  },
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
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #e35e11;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.box-button:hover {
  background-color: #ff7a3c;
  transform: scale(1.05);
}

.content {
  text-align: center;
  display: flex;
  flex-direction: column;
  max-width: 90%; /* Optional: constrain text width */
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
}
</style>
