<template>
  <Layout :h1="metaInfo.title">
    <div>
      <div>I love balancing business realism and code quality.</div>
      <div>
        I believe software exists to make things happen,
        and I am an enthusiast when it comes to changing and improving our world,
        even when tech debt or shortcuts are necessary.
        But I also believe that leading a team with best practices
        and test-driven development in mind is the recipe for success.
      </div>
      <div>
        In my career, I have planned, designed, implemented technical solutions and led teams of engineers,
        in a variety of technologies, including TypeScript, JavaScript, Python.
        I have also managed infrastructure via CI/CD and Cloud providers like AWS.
      </div>
    </div>
    <ComicRelief />
    <ZOODigitalSenior />
    <ZOODigital />
    <Lexiconnect />
  </Layout>
</template>

<script>
import ComicRelief from '../components/CV/Job/ComicRelief.vue';
import Lexiconnect from '../components/CV/Job/Lexiconnect.vue';
import ZOODigital from '../components/CV/Job/ZOODigital.vue';
import ZOODigitalSenior from '../components/CV/Job/ZOODigitalSenior.vue';

export default {

  components: {
    ComicRelief,
    ZOODigitalSenior,
    ZOODigital,
    Lexiconnect,
  },

  data() {
    return {
      metaInfo: {
        title: 'Curriculum Vitae'
      },
    };
  },

  metaInfo() {
    return this.metaInfo;
  }

};
</script>
