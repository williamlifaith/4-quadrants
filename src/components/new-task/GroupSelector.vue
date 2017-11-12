<template>
  <div class="group-selector">
    <label for="group-selector">{{$t('NEW_TASK.group')}}</label>
    <select id="group-selector" v-model="selected" @change="change">
      <option disabled value="">{{$t('NEW_TASK.select_group')}}</option>
      <option v-for="group in groups" :value="group.id">{{group.name}}</option>
    </select>
  </div>
</template>

<script>

  export default{
    props: ['groups'],
    data(){
      return {
        selected: this.groups[0].id,
      };
    },
    created(){
      this.change();
    },
    methods:{
      change(){
        this.$emit('group-select-change', this.selected);
      }
    }
  }
</script>
