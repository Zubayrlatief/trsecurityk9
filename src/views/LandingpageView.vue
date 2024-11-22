<template>
  <NavbarComp />
  <div id="landing">
    <div class="main">
      <img class="img" :src="img" alt="TR Security K9" />
      <div class="container-main">
      <h1>YOUR 24/7 SECURITY IS OUR PRIORITY </h1>
      <button class="button">GET IN TOUCH</button>
    </div>
  </div>
  </div>
  <MissionComp/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavbarComp from '@/components/NavbarComp.vue';
import MissionComp from '@/components/MissionComp.vue';
import FooterComp from '@/components/FooterComp.vue';

export default defineComponent({
  name: 'LandingpageView',
  components: {
    MissionComp,
    FooterComp
  },
  data() {
    return {
      img: 'https://zubayrlatief.github.io/Images-/landingtrsecurityk9.jpg',
    };
  },
});
</script>

<style scoped>
.main{
  position: relative;
}
.img{
  width: 100%;
  height: auto;
}
.container-main{
  position: absolute;
  top: 40%;
  left: 50%;
  text-align: center;
  padding-right: 5%;
}

button{
  padding: 10px 50px;
  font-weight: 900;
  background-color: #EB691D;
  color: rgb(0, 0, 0);
  border-style: black;
  cursor: pointer;
  transform: skew(25deg);
  transition: all 0.5 ease;
  font-size: 1.75rem;
}

.button:hover{
  background-color: #552a10;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

h1{
  font-size: 3rem;
  margin-bottom: 10%;
  font-weight: bold;
}

@media (max-width: 900px) {
  .container-main {
    top: 30%;
    left: 50%;
    font-size: 0.7rem;
  }
  h1{
    font-size: 1.5rem;
  }
  .button {
    padding: 8px 16px; 
    font-size: 1rem; 
  }
  
}
</style>