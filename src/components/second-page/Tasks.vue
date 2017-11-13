<!--suppress ALL -->
<template>
  <div id="task">
    <ul v-for="task in tasks">
      <li> {{task.time}}</li>
      <li >{{task.name}}</li>
      <li> {{task.qunty}}</li>
    </ul>
  </div>
</template>

<script>
  // import UUID
  import UUID from 'vue-uuid'
  // import vue for UUID
  import Vue from 'vue'
  Vue.use(UUID)

  export default {
    data: function () {
      return {
        tasks: [{
          id: this.$uuid(),
          name: '熟读唐诗三百首',
          time: '周一',
          quty: '3首'
        }, {
          id: this.$uuid(),
          name: '健身房一小时',
          time: '周二',
          qunty: '举重100下'
        }
        ]
      }
    }
  }
</script>

<style>
  li {
    list-style-type: none
  }

</style>
