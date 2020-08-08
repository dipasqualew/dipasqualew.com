<template>
  <div class="wrapper">
    <div class="layout">
      <header class="header">
        <h1>Hi!</h1>
      </header>
      <main class="main">
        <slot/>
      </main>
      <footer class="footer">
        Source code available at <a href="https://github.com/dipasqualew/dipasqualew.com" target="_blank">github.com/dipasqualew/dipasqualew.com</a>
      </footer>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.wrapper {
  max-width: 850px;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  display: flex
}

.layout {
  max-width: 760px;
  max-height: 100vh;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content:space-around;
}

.header {
  width: 100%
}

.nav__link {
  margin-left: 20px;
}

.main {
  flex-grow: 1
}

div {
  margin: 15px 3px;
}
</style>
