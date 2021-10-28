<template>

        <form @submit.prevent="onSubmit"  class="card_three" >
          <div class="card text-center border-light mb-3 border-danger" style="width: 20rem;">
            <div class="card-header">
              Perdu ou Trouvé?
            </div>
            <ul class="list-group list-group-flush">        
              <li class="list-group-item">
                <select class="form-select" aria-label="Default select example" v-model="item.status">
                    <option  value="" disabled selected hidden>Précisez si perdu ou trouvé</option>
                    <option value="J'ai perdu un objet">J'ai perdu un objet</option>
                    <option value="J'ai trouvé un objet">J'ai trouvé un objet</option>
                </select>
              </li>
              <li class="list-group-item">
                <input type="text" name="nature" v-model="item.nature"  placeholder="Précisez la nature de l'objet"  required  >
              </li>
              <li class="list-group-item">
                <input type="text" name="address" v-model="item.address"  placeholder="Précisez le lieu"  required  >
              </li>
              <li class="list-group-item">
                <input type="datetime-local" name="time" v-model="item.time" required  >
              </li>
            </ul>
            <div>
              <input type="submit" class="btn btn-primary submitButton" value="Enrégistrer" >
            
          </div>
          </div>
        </form>


</template>


    <script>
        import axios from "axios";
        
        export default {
            data () {
                return {
                    item: {
                        status: "",
                        nature: "",
                        address: "",
                        time: ""
                    }
                }
            },
            methods : {
                onSubmit ()  {
                    let endpoint = `http://127.0.0.1:3001/api/item/addItem`;
                    axios.post(endpoint, this.item).then(() => {
                  this.item = {
                    status: "",
                    nature: "",
                    address: "",
                    time: ""
                  }
                alert('cet Objet a bien été ajouté', this.$router.push('/Liste'))
                }).catch((err) => {
                    
                    alert(err)
                });
               }
               
            }
    }    
    
</script>

