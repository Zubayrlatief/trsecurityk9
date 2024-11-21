<template>
  <div class="container">
    <h1>WHAT WE DELIVER ON</h1>
    <div class="boxes">
      <div class="box hidden"></div>
      <div class="box hidden">This is the second box.</div>
      <div class="box hidden">This is the second box.</div>
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
  padding: 10%;
  background-color: #000000;

}

/* Heading */
h1 {
  padding: 10px 50px;
  font-weight: 900;
  background-color:#EB691D;
  color: rgb(0, 0, 0);
  font-size: 1.75rem;
  transform: skew(-20deg); /* Skews the shape into a parallelogram */
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
  display: flex;
  gap: 30px;
  display: flex;
  flex-direction: column;
}

.box {
  width: 100vh;
  height: 150px;
  background-color: #4caf50;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 1.2rem;
  border-radius: 8px;
  opacity: 0; /* Start hidden */
  transform: translateY(20px); /* Start with an offset */
  transition: opacity 0.6s ease, transform 0.6s ease;
}

/* Add animations */
.hidden.show {
  opacity: 1;
  transform: translateY(0);
}


@media (max-width: 700px) {
  h1{
    font-size: 2rem;
  }
  .box {
    width: 100%;
  }
}
</style>
