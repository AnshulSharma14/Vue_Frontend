<template>
    <div>
    <button :class="buttonclass" @click="toggle">click me</button>
    <Program3Vue/>
    </div>
</template>
<style>

.text-blue{
    color:#003a80
}
.text-red{
    color:#ff5d5d
}
</style>
<script>
import Program3Vue from './Program3.vue';
    export default {
        name:'Program2',
        components:{
            'Program3Vue':Program3Vue
        },
        data(){
        return{
            buttonclass:'text-blue'
        };
    },
        methods:{
            toggle(){
            this.buttonclass='text-red'
            alert("button color changed")
        }
      }
    }
</script>