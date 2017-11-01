<!--suppress ALL -->
<template>
  <div id="task">
    <h1>很重要-很紧急</h1>
    <ul>
      <li v-if="index>0" v-for="(task,index) in tasks">{{index}}.{{task}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        tasks: ['', '学习编程', '打篮球', '给汽车换机油']
      }
    }
  }
</script>

<style>
li{
  list-style-type: none}

</style>
