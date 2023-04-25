<template>
    <div>
    <input type="text" v-model="grinding"/>
    <p>
        {{ grinding }} ({{ grinding.length }})
    </p>
   
</div>

</template>
<style>
</style>
<script>
    export default {
        name:'Program',
        components: {
        },
        data(){
           return{
           grinding:"hello"
            }
        }
}
  
</script>