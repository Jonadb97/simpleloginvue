<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { supabase } from './main'
import { router } from './router/index.js'

async function logout() {
  const { error } = await supabase.auth.signOut()
  if (router.currentRoute.value.path != '/') {
    router.push('/')
  } else {
    router.push('/login')
  }
}
</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/login">Log in</RouterLink>

        <button @click="logout()" class="btn btn-danger">Log out</button>
      </nav>
  </header>
    <RouterView />  
</template>
