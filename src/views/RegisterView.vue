<script setup>
import { ref } from 'vue'
import { supabase } from '../main'

const mail = ref()
const password = ref()

async function log() {
  try {
    const { data, error } = await supabase.auth.signUp({
  email: mail.value,
  password: password.value,
})
  } catch (err) {
    console.log(err)
  }
}

</script>

<template>
    <h1>Register</h1>

    <div class="form">
      Email:
      <input v-model="mail" class="form-control" type="email" name="" id="">
      Password:
      <input v-model="password" class="form-control" type="password" name="" id="">
      <br>
      <button  @click="log()" class="btn btn-primary">Register</button>
    </div>
</template>
