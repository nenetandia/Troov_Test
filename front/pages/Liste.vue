<template>

   
     <table class="table tab">

        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">status</th>
            <th scope="col">nature</th>
            <th scope="col">Addresse</th>
            <th scope="col">période</th>
            <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody >
            <tr v-for="item in ITEM" :key="item._id">
            <th scope="row">1</th>
            <td> {{ item.status }}</td>
            <td> {{ item.nature }}</td>
            <td> {{ item.address }}</td>
            <td> {{ item.time }}</td>
            <td>
                <nuxt-link :to="{ name: 'UpdateObjet', params: { id: item._id }}">&#9998;</nuxt-link>

                <span class="btn text-danger" @click.prevent="removeItem(item._id)">&#10005;</span>
            </td>
            </tr>
        </tbody>
    </table>

</template>



<script>
    import axios from "axios";

    export default {
        data() {
            return {
                ITEM: [

                ]
            }
        },
        created() {
            let endpoint = `http://127.0.0.1:3001/api/item/addItem`;
                axios.get(endpoint).then((response) => {
                    this.ITEM = response.data;
                }).catch(error => {
                    console.log(error)
                });
        },
        methods: {
            removeItem(id){
                let endpoint = `http://127.0.0.1:3001/api/item/${id}`;
                let itemIndex = this.ITEM.findIndex(i => i._id === id);
                
                axios.delete(endpoint).then(() => {
                    this.ITEM.splice(itemIndex, 1);
                }).catch((err) => {
                    console.log(err)
                });
            }
        }
    }
</script>
