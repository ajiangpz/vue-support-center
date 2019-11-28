<template>
  <p>{{ remoteData }}</p>
</template>
<script>
export default {
  data() {
    return {
      remoteData: []
    };
  },
  watch: {
    config: {
      handler:function(val) {
        try{
          this.getData(val.url)
        }catch(e){
          console.log(e)
        }
      },
      deep: true
    }
  },
  props: {
    config: {
      type: Object
    }
  },
  methods: {
    async getData(url) {
    this.remoteData= await this.$get(url);
    }
  }
};
</script>
<style lang="scss" scoped></style>
