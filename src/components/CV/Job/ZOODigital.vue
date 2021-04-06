<template>
  <Job
    org-name="ZOO Digital Group"
    title="Software Engineer"
    start="28 July 2017"
    end="8 September 2019"
  >
    <template #description>
      <div>
        As a Software Engineer at ZOO Digital Group, I autonomously developed critical features in ZOOdubs,
        migrated the application to a REST API server and improved the testability of the codebase.
      </div>

      <div>
        <strong>Core Responsibility:</strong>
        <ul>
          <li>Write testable, maintainable code</li>
          <li>Gradually phase out old technologies in favour of modern solutions</li>
          <li>Increase test coverage of the codebase</li>
          <li>Benchmark and tune up performance bottlenecks</li>
        </ul>
      </div>
      <div>
        <strong>Core Technologies:</strong>
        <ul>
          <li>AWS: S3, CloudFront, EC2, RDS</li>
          <li>MySQL, PostgreSQL</li>
          <li>Python2/Python3</li>
          <li>Django, REST Framework</li>
          <li>JavaScript</li>
          <li>Vue.js</li>
          <li>WebGL</li>
        </ul>
      </div>

      <div>
        <div>
          I was assigned to the ZOOdubs team. The multiple award winning product offers fast,
          reliable and localised voice acting to media-industry giants for their content.
        </div>
        <div>
          In my role, I designed and developed several of its central features,
          including a user-facing REST API that simplified the original monolithic views,
          and the lip-sync timeline that had prohibitive performance requirements;
          I profiled the bottlenecks of the application, both the web UI and the backend server,
          optimising slow queries and ineffective data handling, while also refactoring the legacy code in safety.
          This included an interesting and fun Python2 to Python3 migration!
        </div>
        <div>
          My primary concern was to provide thoughtfully tested, documented code respecting coding standards,
          without forgetting the most important Agile principle: to provide value to our clients at each release cycle.
        </div>
      </div>
    </template>
  </Job>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Job from '../Job.vue';

export default defineComponent({
  components: {
    Job,
  },
});
</script>
