<template>
    <nav class="navbar navbar-expand-lg nav-color py-2">
  <div class="container-fluid">
    <router-link to="/" class="navbar-bran text-dark"><img src="../../public/download (1).png" class="navbar-img"></router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon text-white"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <div class="navbar-nav me-auto mb-2 mb-lg-0 h5">
          <router-link to="/" class="nav-link nav-item">Home</router-link>
          <router-link to="/About" class="nav-link nav-item">About</router-link>
          <router-link to="/Contact" class="nav-link nav-item">Contact</router-link>
          <router-link to="/dashboard" class="nav-link nav-item">Dashboard</router-link>
      </div>
      <div class="navbar-nav ms-auto mb-2 mb-lg-0 h5">
        <router-link to="/Login" class="nav-link nav-item text-dark">Login</router-link>
          <router-link to="/Register" class="nav-link nav-item text-dark">Register</router-link>
      </div>
    </div>
  </div>
</nav>
</template>
<script>
export default{
    name:'Header',
    components: {
        }
}
</script>