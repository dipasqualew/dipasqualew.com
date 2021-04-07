<template>
  <section class="cv-job">
    <div>
      <div class="cv-job-title">
        <h3>{{ orgName }} - {{ title }}</h3>
      </div>
      <div class="cv-job-duration">
        <small>{{ start }} - {{ end }}</small>
      </div>
    </div>
    <slot name="summary" />
    <slot name="description" />
  </section>
</template>

<script>
export default {
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
};
</script>

<style>
.cv-job {
  margin-top: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #d8bdbd;
}

.app .cv-job-title {
  margin-bottom: 0;
}
.app .cv-job-duration {
  margin-top: 0rem;
}

h3 {
  margin-bottom: 0px;
}

small {
  font-size: 14px;
  color: gray;
}

ul {
  margin: 0px;
}
ul li {
  margin-top: 0px;
  list-style: circle;
  list-style-position: inside;
}
</style>
