<template>
  <div id="quadrantsGroup">
    <div class="myGroups" v-for="Group in myGroups" v-bind:style="{background:Group.color}">
      <h1>{{Group.name}}</h1>
      <tm-task></tm-task>
    </div>
  </div>
</template>

<script>
  // import Tasks component
  import Tasks from '../second-page/Tasks.vue'
  // import UUID
  import UUID from 'vue-uuid'
  // import vue for UUID
  import Vue from 'vue'

  Vue.use(UUID)
  export default {
    components: {
      'tm-task': Tasks
    },
    data: function () {
      return {
        myGroups: [
          {
            name: 'Urgent/Important',
            // uuid
            id: this.$uuid(),
            Item: '',
            color: '#FF9900'
          },
          {
            name: 'Not urgent/Important',
            // uuid https://www.uuidgenerator.net/
            id: this.$uuid(),
            Item: '',
            color: '#ff3a29'
          },
          {
            name: 'Urgent/Not important',
            // uuid https://www.uuidgenerator.net/
            id: this.$uuid(),
            Item: this.$uuid(),
            color: '#44ff20'
          },
          {
            name: 'Not urgent/Not important',
            // uuid https://www.uuidgenerator.net/
            id: this.$uuid(),
            Item: this.$uuid(),
            color: '#3fd1ff'
          }
        ]

      }
    }
  }
</script>

<style >
  #quadrantsGroup{
width:605px;
    height:802px;
    margin-left: auto;
    margin-right: auto;


  }

.myGroups{
  width:300px;
  height:400px;
  border:1px solid #a5ffb4;
  float: left;

}


</style>
