<template>
  <div>
    <div class="div-categoryContainer entry">
        <img src="../static/img/man.png" class="capitain"> 
        <form id="app" method="post" @submit.prevent="login" class="card_one" >
          <div class="card text-center border-light mb-3 border-danger" style="width: 20rem;">
            <div class="card-header">
              CONNEXION
            </div>
            <div>
                  <img src="../static/img/top_icon.png" alt="user Icon" id="top_icon">
            </div>
            <ul class="list-group list-group-flush">        
              <li class="list-group-item">
                <input v-model="user.email" type="email" name="email"  placeholder="me@gmail.com" required > 

              </li>
              <li class="list-group-item">
                <input type="password" name="password" v-model="user.password"  placeholder="mot de Passe" minlength="6" required  >
              </li>
            </ul>
            <div>
              <input type="submit" class="btn btn-primary submitButton" value="Se Connecter" routerLink="/">
              
          </div>
          <div>
            <p>Vous êtes pas encore inscrit?</p>
              <nuxt-link type="submit" class="nav-link btn signButton" to="/Register" >S'inscrire</nuxt-link>
          </div>
          </div>
        </form>
          
    </div>
  </div>
</template>

<script>

    export default {
  data() {
    return {
        user: {email: '', password:'' }
            }
         },
  methods: {
   
    async login() {
      try {
        await this.$auth.loginWith('local', { user: { email: this.email, password:this.password } })
        .then(() => this.$toast.success('Logged In!'))

        alert('Bienvenue!', this.$router.push('/Profile'))      
      } catch (e) {
        this.error = e.response.data.message
      }
    }
  }
}
</script>
