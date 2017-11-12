<template>
  <ul class="new-task">
    <li>
      <group-selector :groups="groups"  @group-select-change="groupSelectChange"/>
    </li>

    <li class="name">
      <input :style="'background-color:' + inputColor" :placeholder="$t('NEW_TASK.name_placeholder')" v-model="task.name"/>
    </li>

    <li>
      <category-selector :categories="categories" @category-select-change="categorySelectChange"/>
    </li>

    <li class="date">
      <input id="start-date" v-model="task.startDate" type="datetime-local"/>
      <span> &gt; </span>
      <input id="due-date" v-model="task.dueDate" type="datetime-local"/>
    </li>

    <li class="actions">
      <button @click="submit">{{ $t('NEW_TASK.submit') }}</button>
    </li>
  </ul>
</template>

<script>
  import GroupSelector from './GroupSelector.vue';
  import CategorySelector from './CategorySelector.vue';
  import {categories, groups} from './data';

  export default {
    data(){
      const startDate  = (new Date()).toISOString().split('.')[0];
      const oneHourLater = new Date();
      oneHourLater.setTime(oneHourLater.getTime() + (60*60*1000));
      const dueDate = oneHourLater.toISOString().split('.')[0];

      return {
        task: {
          id:'ba989d64-9326-4d90-b75f-f546bd8efd62',
          name:'',
          status:'to-do',
          startDate,
          dueDate,
        },
        categories,
        groups,
        inputColor:'none'
      };
    },
    components:{
      'group-selector': GroupSelector,
      'category-selector': CategorySelector
    },
    methods:{
      setInputColor(categoryId){
        const filteredCategories = this.categories.filter(category => {
          return categoryId == category.id;
        });
        this.inputColor = filteredCategories[0].color;
      },
      changeName(name){
        this.task.name = name;
      },
      submit(){
        //this.$emit('new-task', this.task);
        alert(JSON.stringify(this.task));
      },
      groupSelectChange(groupId){
        this.task.groupId = groupId;
      },
      categorySelectChange(categoryId){
        this.setInputColor(categoryId);
        this.task.categoryId = categoryId;
      }
    }
  };
</script>

<style lang="scss">
  body{
    background: none;
    margin:0 auto;
    width:600px;
  }
  .new-task{
    list-style: none;
    >li{
      padding: 10px 5px;
      border-bottom:1px solid #cccccc;

      &.name{
        padding: 0;
        input{
          width:96%;
          height:auto;
          font-size:30px;
          padding:5px 2%;
          border:none;
        }
      }

      &.date{
        input{
          height:25px;
        }
        span{
          padding:0px 10px;
          font-weight:bold;
        }
      }

      &.actions{
        border:none;
        text-align:right;

        button{
          width:100px;
          height:30px;
          font-size:18px;
        }
      }
    }
  }
</style>