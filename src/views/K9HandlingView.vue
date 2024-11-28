<template lang="">
    <NavbarComp/>
    <div class="container-main bg-black">
      <div class="container-1 d-flex justify-content">
        <img >
        </div>
        <div>
        <h1></h1>
          <h2></h2>
        </div>
    </div>
    <FooterComp/>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import FooterComp from '@/components/FooterComp.vue';
import NavbarComp from '@/components/NavbarComp.vue';

export default defineComponent({
  name: 'K9HandlingView',
  components: {
    NavbarComp,
    FooterComp
}
});
</script>

<style scoped>
    .container-main{
      height: 100vh;
    }
    .container-1{

    }
</style>