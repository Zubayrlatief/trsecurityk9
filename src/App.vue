<template>
  <NavbarComp/>
  <router-view/>
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

.button{
  background-color: EB691D;
  color: EB691D;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Source Code Pro', monospace;
}
</style>
