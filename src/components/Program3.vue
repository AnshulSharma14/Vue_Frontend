<template>
    <div>
        <section>
            <span v-if="incomplete.length">Pending</span>
            <ul>
            <li v-for="assignment in assignments.filter(a=>!a.completed)"
            :key="assignment.id">
            <label>
               {{assignment.name}}
               <input type="checkbox" v-model="assignment.completed">
            </label>
            </li>
            </ul>
            <span v-if="completed.length">Completed</span>
            <ul>
                <li v-for="assignment in assignments.filter(a=>a.completed)"
            :key="assignment.id">
            <label>
               {{assignment.name}}
               <input type="checkbox" v-model="assignment.completed">
            </label>
            </li>
            </ul>
    </section>
    </div>
</template>
<script>
export default{
    data(){
    return {
        assignments:[
            {name:'Cs',completed:false,id:1},
            {name:'physics',completed:false,id:2},
            {name:'Maths',completed:false,id:3}
         ]
       }
    },
    computed:{
         completed()
         {
            return this.assignments.filter(a=>a.completed)
         },
         incomplete(){
            return this.assignments.filter(a=>!a.completed);
         }
    }
}
</script>