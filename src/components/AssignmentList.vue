<template>
    <div>
    <section v-show="assignments.length">
     <h2 class="mb-2">{{ title }}</h2>
    <ul>
    <Assignment v-for="assignment in assignments" :key="assignment.id" :assignment="assignment"/>
    </ul>
    </section>
</div>
</template>
<script>

 import Assignment from './Assignment.vue'
export default{
    components:{
        'Assignment':Assignment
    },
    props:{
        assignments:Array,
        title:String
    }
}
</script>

