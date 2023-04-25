<template>
    <div class="container UserTable mt-5">
        <button type="button" class="btn indigo-colour" @click="showModal">Add User</button>
        <modal v-show="isModalVisible" @close="closeModal">
            <template v-slot:header>
                add users
            </template>

            <template v-slot:body>
                This is a new modal body.
            </template>

            <template v-slot:footer>

            </template>
        </modal>
        <div class="row">
            <div class="center">
                <h1 class="blue-colour text-center mb-5">Users</h1>
                <table class="table table-striped table-bordered mt-3">
                    <thead>
                        <tr class="table-primary text-center">
                            <th>Id</th>
                            <th>User Name</th>
                            <th>Phone Number</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <!-- {{v}} -->
                    <tbody v-for="items in v" class="text-center">
                       <td>{{items.id}}</td>
                       <td>{{items.username}}</td>
                       <td>{{items.phone_number}}</td>
                       <td>
                        <button class="btn indigo m-1 ml-2 mr-2">Edit</button>
                        <button class="btn red-colour m-1 ml-2 mr-2" id={{items.id}} @click="Delete(this)">Delete</button>
                       </td>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import { onMounted } from 'vue';
import ModalSection from './ModalSection.vue';

export default {
    name: "UsersFetch",
    
    components: {
        Modal: ModalSection
    }
    , data() {
        return {
            isModalVisible: false,
            v:null
        }
    }
    ,
    mounted() {
        console.log("hello")
        axios
            .get('http://localhost:8080/demo/webapi/userresource/getuser/')
            .then((Response => this.v=Response.data))
    }
    ,
    methods: {
        showModal() {
            this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false;
        },
        delete(this){
            console.log(this)
        }
    },


}
</script>