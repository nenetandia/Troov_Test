<template>
    
    <nav class="navbar navbar-dark navbar-expand-lg" id="navbar" style="background-color: #e3f2fd;">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div class="p-2 flex-grow-1 bd-highlight">
                    <img class="logo-dark logo-img logo-img-lg" src="../static/img/troov-logo.png" alt="" width="80" height="40" />            
                </div>
               
            
                <div class="d-flex">
                    <div class="nav-item">            
                        <nuxt-link type="submit" class="nav-link btn top" to="/SignIn" >SIGN IN</nuxt-link>
                    </div>
                    <div class="nav-item top">
                        <nuxt-link type="submit" class="nav-link btn top" to="/Register" >SIGN UP</nuxt-link>
                    </div>
                </div>
            </div>
        </div>
  </nav>
</template>