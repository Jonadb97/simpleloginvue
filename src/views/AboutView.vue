<script setup>
import { ref } from "vue";

let authenticated = ref(false);

if (localStorage.getItem("sb-ymvckvunaqtimabkkyvn-auth-token")) {
  if (
    JSON.parse(localStorage.getItem("sb-ymvckvunaqtimabkkyvn-auth-token")).user
      .email
  ) {
    authenticated.value = true;
  } else {
    authenticated.value = false;
  }
}
</script>

<template>
  <main v-if="authenticated">
    <h1>About</h1>
  </main>

  <h1 v-else>Not authenticated...</h1>
</template>
