<script setup>
import { ref } from 'vue'
import { supabase } from '../main'
import { router } from '../router/index.js'

const mail = ref()
const password = ref()

async function log() {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
    email: mail.value,
    password: password.value,
})
  console.log(data)
  console.log('Errors: ' + error)
  router.push('/')
  } catch (err) {
    console.log(err)
  }
}

</script>

<template>
    <h1>Log in</h1>

    <div class="form">
      Email:
      <input v-model="mail" class="form-control" type="email" name="" id="">
      Password:
      <input v-model="password" class="form-control" type="password" name="" id="">
      <br>
      <button  @click="log()" class="btn btn-primary">Log</button> <RouterLink to="/register" class="btn btn-warning">Register</RouterLink>
    </div>
</template>
