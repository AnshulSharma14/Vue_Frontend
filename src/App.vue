<template>
  <div>
    <Header/>
    <router-view />
  </div>
</template>
<script>
import Header from './components/TheHeader.vue';
export default {
    components: {
    // 'Program': Program,
    // 'Program2':Program2,
    'Header':Header,
    //  'Assignments':Assignments
  }
}
</script>
