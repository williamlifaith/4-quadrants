<template>
  <div class="hello">
    <h1>Hello 4-quadrants</h1>
    This is a time management app!
    <span v-text="$t('lang.browse')"></span>
    <p>{{ $t('m.time') }}</p>
<tm-task></tm-task>
  </div>
</template>

<script>
  /* eslint-disable key-spacing */

  import Tasks from '../second-page/Tasks.vue'
  export default {
    components:{
      'tm-task':Tasks
    }
  }
</script>

<style lang="sass">
h1

  color: #ffff00


</style>
