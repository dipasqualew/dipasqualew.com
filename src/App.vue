<template>
  <header>
    <div class="px-4 text-xl">
      <router-link to="/">
        Home
      </router-link>
    </div>
    <div class="px-4 text-xl">
      <router-link to="/cv">
        CV
      </router-link>
    </div>
    <div class="px-4 text-xl">
      <router-link to="/contact">
        Contact
      </router-link>
    </div>
  </header>
  <main>
    <router-view />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<style>
#app {
  width: 100%;
  max-width: 750px;
  margin: 2rem auto;
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

header {
  display: flex;
  justify-content: center;
}

main {
  margin-top: 5rem;
}

div {
  margin: 1rem 0;
}

a {
  color: #6485ff;
}
</style>
