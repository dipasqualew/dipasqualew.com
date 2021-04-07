<template>
  <Job
    org-name="Lexiconnect"
    title="Web Programmer"
    start="20 March 2016"
    end="27 July 2017"
  >
    <template #description>
      <div>
        My day to day activities were an overlap of several roles, from the backend engineer, to the product manager, to the project manager.
      </div>

      <div>
        <div>
          I managed VPS and dedicated servers for our clients, an experience that gave me insight in the LAMP and LEMP stacks, and on how to manage *NIX environments.
          I built integrations with several APIs, such as TrustPilot and Microsoft Bing, that showed me how great APIs are structured.
          The biggest project I worked on was a Python service that would serve the original applications’ contents in different languages.
        </div>
      </div>
    </template>
  </Job>
</template>

<script lang="ts">
import Job from '../Job.vue';

export default {
  components: {
    Job,
  },
};
</script>
