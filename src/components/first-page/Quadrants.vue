<template>
  <div class="hello">
    <h1>Hello 4-quadrants</h1>
    This is a time management app!
    <span v-text="$t('lang.browse')"></span>
    <p>{{ $t('m.time') }}</p>

  </div>
</template>

<script>
  export default {
    name: '',
    data () {
      return {
        msg: ''
      }
    }
  }
</script>

<style lang="sass">
h1

  color: #ffff00


</style>
