<template>
  <SmartForm title="New Ticket" :operation="operation" :valid="valid">
    <FormInput
      v-model="title"
      name="title"
      placeholder="description your problem hear"
    >
    </FormInput>
    <FormInput
      type="textarea"
      name="description"
      v-model="description"
      placeholder="description your problem hear"
      rows="4"
    >
    </FormInput>
    <span>{{title}}</span>
    <template slot="actions">
      <router-link tag="button" :to="{name:'tickets'}" >Go Back</router-link>
      <button type="submit" :disabled="valid" >Send Ticket</button>
    </template>
  </SmartForm>
</template>
<script>
import PersistantData from '../mixins/persistantData'
export default {
  data() {
    return {
      title: "",
      description: ""
    };
  },
  mixins:[PersistantData('NewTicket',['title','description'])],

  computed: {
    valid() {
      return !!this.title && !!this.description;
    }
  },
  methods:{
    async operation(){
      await  this.$axios('tickets/new',{
        methods:'POST',
        body:JSON.stringify({
          title:this.title,
          description:this.description
        })
      })
      this.title=this.description=''
    }
  }
};
</script>
