<template>
  <main class="faq">
    <h1>Frenquently Asked Questions</h1>
    <div class="error" v-if="error">
      Can't load the questions
    </div>
    <Loading v-if="loading"></Loading>
    <section class="list">
      <article v-for="question of questions" :key="question.title">
        <h2 v-html="question.title"></h2>
        <p v-html="question.content"></p>
        <p></p>
      </article>
    </section>
  </main>
</template>
<script>
import RemoteData from '../mixins/remoteData';
export default {
  data() {
    return {
      questions: [],
      error:null,
      loading:false
    };
  },
  async created() {
    this.loading=true;
    try {
      this.questions=await this.$get("/questions");
    } catch(e) {
      this.error=e
    }
    this.loading=false;
  },
  mixins:[RemoteData]
};
</script>
