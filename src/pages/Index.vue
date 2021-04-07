<template>
  <Layout :h1="metaInfo.title">
    <div>My name is William Di Pasquale.</div>
    <div>I was born in Italy and I currently live in Sheffield, UK.</div>
    <div>I work at Comic Relief as Senior Engineer.</div>
    <div>I like philosophy and technology. In particular, how technology affects what we are able to think.</div>
  </Layout>
</template>

<script>
export default {
  data() {
    return {
      metaInfo: {
        title: 'A personal website',
      },
    };
  },
  metaInfo() {
    return this.metaInfo;
  },
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
