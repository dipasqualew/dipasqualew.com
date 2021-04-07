<template>
  <Layout :h1="metaInfo.title">
    <div>
      Easiest way to contact me is to send an email to:<br>
      <a :href="`mailto:${william.email}`" target="_blank" rel="noopener">{{ william.email }}</a>
    </div>
    <div>
      Alternatively, you can add me on Linkedin:<br>
      <a :href="william.linkedin" target="_blank" rel="noopener">{{ william.linkedin }}</a>
    </div>
    <div>
      Fancy GPG? Here's my public key:<br>
      <pre class="p-2">{{ william.gpgPublicKey }}</pre>
    </div>
  </Layout>
</template>

<script>
import * as william from '../data/wdp';

export default {
  /**
   * Data
   */
  data() {
    return {
      metaInfo: {
        title: 'Contact'
      },
      william
    };
  },

  metaInfo() {
    return this.metaInfo;
  }

};
</script>

<style scoped>
pre {
  font-size: 0.6rem;
}
</style>
