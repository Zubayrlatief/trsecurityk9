<template lang="">
    <NavbarComp/>
    <div>
        
    </div>
    <FooterComp/>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import NavbarComp from '@/components/NavbarComp.vue';
import FooterComp from '@/components/FooterComp.vue';
export default defineComponent({
  name: 'AlarmMonitoringView',
  components: {
    NavbarComp,
    FooterComp
}
});
</script>
<style lang="">
    
</style>