<template>

    <div class="container d-flex justify-content-center profile">
    <div class="card p-3 py-4">
        <div class="text-center"> <img src="../static/img/top_icon.png" width="100" class="rounded-circle">
            <h3 class="mt-2">fullname</h3> <span class="mt-1 clearfix">email</span>
                <span class="mt-1 clearfix">address</span>
                <span class="mt-1 clearfix">town</span>
                <span class="mt-1 clearfix">
                    <NuxtLink to="/liste">liste des objets</NuxtLink>
                </span>
            <hr class="line">Bonjour! Vous pouvez ajouter tout objet perdu ou trouvé. 
            <div class="profile mt-5"> 
                <button class="item_button px-5">
                    <NuxtLink to="/Objet">Ajouter</NuxtLink>
                </button> 
            </div>
        </div>
    </div>
</div>


</template>

<script>
   

    export default {
        created() {
            if (this.loggedIn) {
            this.$router.push('/profile');
  }
},
    }
</script>



