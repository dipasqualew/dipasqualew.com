<template>
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
    <pre class="p-2 text-xs">{{ william.gpgPublicKey }}</pre>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import * as william from '../data/william';

export default defineComponent({
  /**
   * Setup
   */
  setup() {
    return { william };
  },
});
</script>
