<template>

 
    <div >
            <Notification :message="error" v-if="error"/>     
            <form  @submit.prevent="register" class="card_two" >
                <div class="has-text-centered top_register" style="margin-top: 20px">
                    Vous avez déjà un compte? <nuxt-link to="/">connection</nuxt-link>
                </div>
                <div class="card text-center  border-light mb-3" style="width: 20rem;">
                    <div class="card-header">
                        IINSCRIPTION
                    </div>
                    <div >
                        <img src="../static/img/user_icon.jpg" alt="User Icon" id="top_icon">
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <label class="validation-message">Prénom et Nom:</label>
                            <div>
                                <input type="text" class="input" name="fullname" v-model="user.fullname" required>
                            </div>
                         </li>
                        <li class="list-group-item">
                             <label class="validation-message">E-mail:</label>
                             <div>
                                <input type="email" class="input" name="email" v-model="user.email" required>
                             </div>
                        </li>
                        <li class="list-group-item">
                             <label class="validation-message">Addresse:</label>
                             <div>
                                <input type="text" class="input" name="address" v-model="user.address" required />
                            </div>
                        </li>
                        <li class="list-group-item">
                            <label class="validation-message">Ville :</label>
                            <div>
                                <input type="text" class="input" name="town" v-model="user.town" required /> 
                            </div>                      
                        </li>
                        <li class="list-group-item">
                             <label class="validation-message">Pays :</label>
                             <div>
                                <input type="text" class="input" name="country" v-model="user.country" required />
                            </div>
                        </li>
                        <li class="list-group-item">
                             <label class="validation-message">Mot de Passe:</label>
                             <div>
                                <input type="password" class="input" name="password" v-model="user.password" required />
                            </div>
                        </li>
                        <div>
                        <input type="submit" class="btn  registerButton" value="S'inscrire" >
                        </div>
                    </ul>
                    
                    
                </div>
            </form>
    </div>
          
</template>

<script>


    export default {


  data() {
    return {
        user: {
            fullname: '',
            email: '',
            address: '',
            town: '',
            country:'',
            password:'',
            }
    }
  },

  methods: {
    async register() {
      try {
        let endpoint = `http://127.0.0.1:3001/api/register`;
        await this.$axios.post(endpoint, this.user).then(() => {
            this.user ={
                fullname: '',
                email: '',
                address: '',
                town: '',
                country:'',
                password:''

            }
        alert('Félicitation!, Connectez-vous', this.$router.push('/'))      

        })

        await this.$auth.loginWith('local', {
          user: {
          email: this.user.email,
          password: this.user.password
          },
        })

        } catch (e) {
        this.error = e.response.data.message
      }
    }
  }
}
</script>















