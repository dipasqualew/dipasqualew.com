<template>
  <section class="cv-job">
    <div>
      <div class="cv-job-title">
        <span class="text-2xl">{{ orgName }} - {{ title }}</span>
      </div>
      <div class="cv-job-duration">
        <span class="text-sm text-gray-500">{{ start }} - {{ end }}</span>
      </div>
    </div>
    <slot name="summary" />
    <slot name="description" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    orgName: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    start: {
      type: String,
      required: true,
    },
    end: {
      type: String,
      required: true,
    },
  },
});
</script>

<style>
.cv-job {
  margin-top: 3rem;
}

.cv-job-title {
  margin-bottom: 0;
}
.cv-job-duration {
  margin-top: 0rem;
}

ul li {
  list-style: circle;
  list-style-position: inside;
}
</style>
