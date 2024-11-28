<template>
  <NavbarComp/>
  <router-view/>
  <FooterComp/>
</template>

<script lang="ts">
import NavbarComp from './components/NavbarComp.vue';

export default{
component: {
  NavbarComp
}
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;700&display=swap');

::selection {
      background: #eb691d; /* Orange background */
      color: #ffffff;      /* White text */
    }
    
.button{
  background-color: EB691D;
  color: EB691D;
  font-family: 'Source Code Pro', monospace;
}

h1, h2, h3, h4, h5, h6 {
 
  font-family: 'Times New Roman', Times, serif;
}
</style>
