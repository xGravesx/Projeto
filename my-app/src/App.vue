<template>
  <div id="app">
    <div class="header">
      <img src="@/assets/logo.png" alt="Logo Santacrow" class="logo">
    </div>

    <ul class="nav">
      <li><router-link to="/home">Início</router-link></li>
      <li><router-link to="/black-friday">BLACK FRIDAY</router-link></li>
      <li><router-link to="/crow-prime">CROW PRIME</router-link></li>
      <li><router-link to="/colecoes">Coleções</router-link></li>
      <li><router-link to="/acessorios">Acessórios</router-link></li>
      <li><router-link to="/decoracao">Decoração</router-link></li>
    </ul>

    <div class="home-component">
      <router-view/>
    </div>
    <div class="black-friday-component">
      <router-view/>
    </div>
    <div class="crow-prime-component">
      <router-view/>
    </div>
    <div class="colecoes-component">
      <router-view/>
    </div>
    <div class="acessorios-component">
      <router-view/>
    </div>
    <div class="decoracao-component">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
