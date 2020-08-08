<template>
  <Layout>
    <div>
      <div>My name is William Di Pasquale.</div>
      <div>I was born in Italy and I currently live in Sheffield, UK.</div>
      <div>I work at Comic Relief as Senior Engineer.</div>
      <div>I like philosophy and technology. In particular, how technology affects what we are able to think.</div>
      <div>You can drop me an email at <a href="mailto:wdp@dipasqualew.com">wdp@dipasqualew.com</a></div>
      <div>My PGP Public Key can be found below:</div>
      <div class="gpg-key">
        <pre>{{ GPG_PUBLIC_KEY }}</pre>
      </div>
    </div>


  </Layout>
</template>

<script>
import { GPG_PUBLIC_KEY } from '../../content/pgp';

export default {
  metaInfo: {
    title: "Hi, I'm William Di Pasquale",
  },

  data() {
    return {
      GPG_PUBLIC_KEY,
    }
  }
}
</script>

<style>
.gpg-key {
  height: 450px;
  overflow: auto;
  padding: 0 20px;
}
</style>
