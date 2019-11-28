export default function(resources) {
  return {
    data() {
      let initData = {
        remoteDataLoading: 0
      };
      initData.remoteErrors = {};
      for (const key in resources) {
        initData[key] = null;
        initData.remoteErrors[key] = null;
      }
      return initData;
    },
    computed: {
      remoteDataBusy() {
        return this.$data.remoteDataLoading !== 0;
      },
      hasRemoteErrors() {
        return Object.keys(this.$data.remoteErrors).some(
          key => this.$data.remoteErrors[key]
        );
      }
    },
    created() {
      for (const key in resources) {
        let url = resources[key];
        this.getResource(key, url);
      }
    },
    methods: {
      async getResource(key, url) {
        this.remoteDataLoading++;
        try {
          this.$data[key] = await this.$axios(url);
        } catch (e) {
          console.log(e);
          this.$data.remoteErrors[key] = e;
        }
        this.remoteDataLoading--;
      }
    }
  };
}
