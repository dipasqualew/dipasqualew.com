<template>
  <Layout :h1="metaInfo.title">
    <div>
      <div>
        We are living through the most interesting times of human history,
        and we have some tough problems to address.
        I am passionate about meeting challenges and enabling teams to design, implement and own solutions.
      </div>
      <div>
        I strongly believe in ownership, empowerment and alignment, and I build teams that resonate with these values.
      </div>
    </div>
    <Infogrid />
    <ComicRelief />
    <ZOODigitalSenior />
    <ZOODigital />
    <Lexiconnect />
  </Layout>
</template>

<script>
import ComicRelief from '../components/CV/Job/ComicRelief.vue';
import Infogrid from '../components/CV/Job/Infogrid.vue';
import Lexiconnect from '../components/CV/Job/Lexiconnect.vue';
import ZOODigital from '../components/CV/Job/ZOODigital.vue';
import ZOODigitalSenior from '../components/CV/Job/ZOODigitalSenior.vue';

export default {

  components: {
    ComicRelief,
    Infogrid,
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
