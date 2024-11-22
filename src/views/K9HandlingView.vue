<template lang="">
    <NavbarComp/>
    <div>
        
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

<style lang="">
    
</style>