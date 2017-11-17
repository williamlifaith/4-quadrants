<template>
  <ul class="category-selector">
    <li v-for="category in categories">
      <radio :style="'color:' + category.color" :name="category.id" :value="category.id" v-model="selected" @input="input">
        <span v-show="category.id == selected">{{category.name}}</span>
      </radio>
    </li>
  </ul>
</template>

<script>
  import CheckboxRadio from 'vue-checkbox-radio';
  import Vue from 'vue';

  Vue.use(CheckboxRadio);

  export default{
    props: ['categories'],
    data(){
      return {
        selected: this.categories[0].id,
      };
    },
    mounted(){
      this.setRadioColor();
      this.input();

    },
    methods:{
      input(){
        this.$emit('category-select-change', this.selected);
      },
      setRadioColor(){
        const radios = document.getElementsByClassName("radio-component");
        Array.from(radios).map(radioElement => {
          radioElement.querySelectorAll('input + label > .input-box').forEach(el=>{
            el.style.borderColor = radioElement.style.color;
            el.style.borderWidth = '2px';
          });
          radioElement.querySelectorAll('input + label > .input-box > .input-box-circle').forEach(el=>{
            el.style.backgroundColor = radioElement.style.color;
          });
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
.category-selector{
  margin:0;
  padding:0;
  display:flex;
  li{
    list-style:none;
    margin-right:20px;
  }
}
</style>
