<template>
  <ul class="category-selector">
    <li v-for="category in categories">
      <input type="radio" :id="category.id" :value="category.id"
             v-model="selected" @change="change"/>
      <label :style="'border-left:2px solid'+ category.color + ';color:' + category.color" :for="category.id">
        <span>&nbsp;</span>
        <span v-show="category.id == selected">{{category.name}}</span>
      </label>
    </li>
  </ul>
</template>

<script>

  export default{
    props: ['categories'],
    data(){
      return {
        selected: this.categories[0].id,
      };
    },
    created(){
      this.change();
    },
    methods:{
      change(){
        this.$emit('category-select-change', this.selected);
      }
    }
  }
</script>

<style lang="scss">
.category-selector{
  margin:0;
  padding:0;
  display:flex;
  li{
    list-style:none;
    margin-right:10px;
  }
}
</style>
