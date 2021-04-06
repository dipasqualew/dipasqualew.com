<template>
  <Job
    org-name="Comic Relief"
    title="Senior Engineer"
    start="14 July 2020"
    end="Current"
  >
    <template #description>
      <div>
        As a Senior Engineer at Comic Relief, I am responsible for our microservices tech stack,
        from planning the architecture to monitor the healthy state of services in production.
      </div>

      <div>
        <strong>Core responsibilities:</strong>
        <ul>
          <li>Plan sound, resilient and autoscale-ready architecture</li>
          <li>Code review for fit-to-purpose but still high quality, test driven code</li>
          <li>Improve upon and simplify E2E testing and contractual testing</li>
          <li>Improve observability and monitoring of microservices</li>
          <li>Make sure monitoring our TV shows is uneventful and extremely boring!</li>
        </ul>
      </div>
      <div>
        <strong>Core technologies:</strong>
        <ul>
          <li>AWS: API Gateway, Lambda, Cloudformation, CloudWatch, DynamoDB, RDS, SQS, SES, S3, Cloudfront, Glue, Athena, Route53</li>
          <li>JavaScript and TypeScript (NodeJS and Browser)</li>
          <li>Serverless Framework</li>
          <li>Concourse CI</li>
          <li>Grafana</li>
        </ul>
      </div>

      <div>
        <div>
          My first project at Comic Relief was designing and implementing a new data repository solution for our complex needs,
          resilient to the spike of traffic that we need to sustain, especially during TV shows.
          The new data pipeline successfully ingested the high traffic of Red Nose Day without errors or fatigue.
        </div>
        <div>
          I was also responsible for designing and implementing Comic Relief's new Prize Platform backend,
          a collection of microservices integrating with our existing donation platform, feeding immutable data into our pipelines.
          The platform deployed on February 2, 2021 and has been processing prize entries requests since.
        </div>
        <div>
          As a test-driven development enthusiast, I worked on the testing strategy for our services,
          focusing on simplifying E2E workflows spanning several headless applications.
          In particular, email testing and contractual testing have been automated,
          providing a high level of confidence into our deployments.
        </div>
        <div>
          All services at Comic Relief are able to scale infinitely without delays,
          and with a high degree of robustness, covering the case of dependency failures.
          The systems were designed to stay operational in case of major failures of our service components or cloud provider components.
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
