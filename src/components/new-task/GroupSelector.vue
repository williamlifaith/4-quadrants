<template>
  <div class="group-selector">
    <multiselect v-model="selected" label="name" track-by="id" :allow-empty="false"
      :options="groups" @input="change" :show-labels="false">
      <template slot="option" slot-scope="props">
        <div class="option">
          <img class="option-image" :src="props.option.img" />
          <span class="option-title">{{ props.option.name }}</span>
        </div>
      </template>
    </multiselect>
  </div>
</template>

<script>
  import Multiselect from 'vue-multiselect'

  export default{
    components: {
      'multiselect': Multiselect
    },
    props: ['groups'],
    data(){
      return {
        selected: this.groups[0],
      };
    },
    created(){
      this.change();
    },
    methods:{
      change(){
        this.$emit('group-select-change', this.selected.id);
      }
    }
  }
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="scss" >
  .group-selector{
    .option{
      display:flex;
      align-items: center;
      .option-image{
        width:30px;
        height:30px;
      }
      .option-title{
        margin-left:10px;
      }
    }
  }
</style>
