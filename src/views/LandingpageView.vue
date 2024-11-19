<template>
  <NavbarComp/>
  <div id="landing">
    <h1></h1>
  </div>
  
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavbarComp from '@/components/NavbarComp.vue';

export default defineComponent({
  name: 'LandingpageView',
  components: {
    NavbarComp,
  },
});
</script>
