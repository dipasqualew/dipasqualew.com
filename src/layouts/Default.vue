<template>
  <div class="app">
    <header>
      <div class="app-menu">
        <div class="mr-2">
          <g-link to="/">
          Home
          </g-link>
        </div>
        <div class="ml-2 flex-grow">
          <g-link to="/cv">
          CV
          </g-link>
        </div>
        <div>
          <g-link to="/contact">
          Contact
          </g-link>
        </div>
      </div>
    </header>
    <transition name="fade" appear>
      <main>
        <h1>{{ h1 }}</h1>
        <slot />
      </main>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    h1: {
      type: String,
      required: true,
    }
  }
}
</script>

<style scoped>
.fade-enter-active {
  transition: opacity .5s;
}

.fade-enter {
  opacity: 0;
}
</style>
