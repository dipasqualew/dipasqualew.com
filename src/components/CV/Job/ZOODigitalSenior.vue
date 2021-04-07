<template>
  <Job
    org-name="ZOO Digital Group"
    title="Senior Software Engineer"
    start="9 September 2019"
    end="13 July 2020"
  >
    <template #description>
      <div>
        Promoted to Senior Software Engineer, my focus and day-to-day tasks shifted towards product design,
        planning and code review, while still writing code.
      </div>

      <div>
        <strong>Core Responsibilities</strong>
        <ul>
          <li>Research client needs and design fit-to-purpose solutions</li>
          <li>Deliver high quality code and respecting tight deadlines</li>
          <li>Code review and mentor junior developers</li>
          <li>Champion best practices and test-driven development</li>
        </ul>
      </div>
      <div>
        <strong>Core Technologies</strong>
        <ul>
          <li>AWS: S3, CloudFront, EC2, RDS</li>
          <li>MySQL, PostgreSQL</li>
          <li>Docker</li>
          <li>Python2/Python3</li>
          <li>Django, REST Framework</li>
          <li>JavaScript</li>
          <li>Vue.js</li>
          <li>WebGL</li>
        </ul>
      </div>

      <div>
        <div>
          I joined the ZOOstudio team, NAB Product of the Year 2019. Given the complex requirements of our clients,
          we worked in a fast-paced environment with quick release cycles, adapting to the changes of the industry landscape.
        </div>
        <div>
          While designing, implementing and monitoring features was still a big chunk of my daily routine,
          as a Senior Engineer I had the chance to mentor Junior and Middleweight Engineers,
          sharing with them the tricks of the trade and explaining the best practices and more importantly the reasons behind the best practices.
        </div>
        <div>
          Following my work on ZOOdubs and then ZOOstudio, I led the development of a new product,
          specific to the needs of one of the biggest names in the media industry.
          With my team, I interpreted the requirements of our client, designed and proposed its implementation,
          and delivered with an extremely tight deadline, without sacrificing the quality of the software.
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
