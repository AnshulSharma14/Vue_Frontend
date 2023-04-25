<template>
    <section class="m-2">
        <input type="text" v-model="newitem">
        <button type="submit" class="btn btn-primary" @click="assignments.push({id:assignments.length+1,name:newitem})">Submit</button>
        <AssignmentList :assignments="filters.inProgress"  title="In Progress"/>
        <AssignmentList :assignments="filters.completed" title="Completed"/>
    </section>
</template>
<script>
import AssignmentList from './AssignmentList.vue'
export default{
    components:{
         'AssignmentList':AssignmentList
    },
    data(){
      return{
        newitem:"",
        assignments:[
            {name:'finish Project',complete:false,id:1},
            {name:'Read Book',complete:false,id:2},
            {name:'finish Homework',complete:false,id:3}
        ]
      }
    }
    ,computed:{
        filters(){
           return{
            inProgress:this.assignments.filter(assignment=>!assignment.complete),
            completed:this.assignments.filter(assignment=>assignment.complete)
           }
        }
    }
}
</script>
