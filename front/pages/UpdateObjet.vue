<template>

        <form @submit.prevent="onUpdate"  class="card_two" >
          <div class="card text-center border-light mb-3 border-danger" style="width: 20rem;">
            <div class="card-header">
              Trouvé ou Volé?
            </div>
            <ul class="list-group list-group-flush">        
              <li class="list-group-item">
                <select class="form-select" aria-label="Default select example" v-model="ITEM.status">
                    <option selected>status</option>
                    <option value="J'ai perdu un objet">J'ai perdu un objet</option>
                    <option value="J'ai trouvé un objet">J'ai trouvé un objet</option>
                </select>
              </li>
              <li class="list-group-item">
                <input type="text" name="nature" v-model="ITEM.nature"  placeholder="Quel est la nature de cet objet?"  required  >
              </li>
              <li class="list-group-item">
                <input type="text" name="address"  v-model="ITEM.addressls"  placeholder="Où avez-vous trouvez cet Obejt?"  required  >
              </li>
              <li class="list-group-item">
                <input type="datetime-local" name="time" v-model="ITEM.time" placeholder="Quand avez-vous trouver cet objet?" required  >
              </li>
            </ul>
            <div>
              <input type="submit" class="btn btn-primary submitButton" value="Modifier" />
             
          </div>
          </div>
        </form>


</template>



<script>
import axios from "axios";

    export default {
        data() {
            return {
                ITEM: {}
            }
        },
    created() {
        let endpoint = `http://127.0.0.1:3001/api/item/${this.$route.params.id}`;
        axios.get(endpoint)
        .then((response) => {
          console.log('this is hjkkkkl', response.data)
            this.ITEM = response.data;
        })
    },
    methods: {
        onUpdate() {
            let endpoint = `http://127.0.0.1:3001/api/item/${this.$route.params.id}`;
            axios.put(endpoint, this.ITEM)
            .then((response) => {
                console.log(response)
                this.$router.push('/Liste')
            }).catch((err) => {
                alert(err)
            });
        }
    }
}
</script>
