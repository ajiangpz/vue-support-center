<template>
  <main class="faq">
    <h1>Frenquently Asked Questions</h1>
    <div class="error" v-if="hasRemoteErrors">
      Can't load the questions
    </div>
    <Loading v-if="remoteDataBusy"></Loading>
    <section>
      <article v-for="(question,key) in questionList" :key="key">
        <h2 v-html="question.title"></h2>
        <p v-html="question.content"></p>
      </article>
    </section>
  </main>
</template>
<script>
import RemoteData from "../mixins/remoteData";
export default {
  mixins: [RemoteData({ questionList: "/questions" })]
};
</script>