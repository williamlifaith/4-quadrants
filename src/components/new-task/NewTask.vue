<template>
  <ul class="new-task">
    <li>
      <group-selector :groups="groups"  @group-select-change="groupSelectChange"/>
    </li>

    <li class="name">
      <img src="https://newcdn.iconfinder.com/data/icons/simplicity/512/microphone-24.png"/>
      <input :style="'background-color:' + inputColor" :placeholder="$t('NEW_TASK.name_placeholder')" v-model="task.name"/>
    </li>

    <li>
      <category-selector :categories="categories" @category-select-change="categorySelectChange"/>
    </li>

    <li class="date">
      <img src="https://newcdn.iconfinder.com/data/icons/streamline-time/60/cell-6-0-30.png"/>
      <input id="start-date" v-model="task.startDate" type="datetime-local"/>
      <span> &gt; </span>
      <input id="due-date" v-model="task.dueDate" type="datetime-local"/>
    </li>

    <li class="actions">
      <img src="https://newcdn.iconfinder.com/data/icons/flat-icons-web/40/OK-48.png" @click="submit"/>
    </li>
  </ul>
</template>

<script>
  import Vue from 'vue';
  import UUID from 'vue-uuid';
  import Color from 'color';
  import GroupSelector from './GroupSelector.vue';
  import CategorySelector from './CategorySelector.vue';
  import {categories, groups} from './data';
  import {mapMutations} from 'vuex';
  import * as types from '../../store/mutation-types';

  Vue.use(UUID);

  export default {
    data(){
      const startDate  = (new Date()).toISOString().split('.')[0];
      const oneHourLater = new Date();
      oneHourLater.setTime(oneHourLater.getTime() + (60*60*1000));
      const dueDate = oneHourLater.toISOString().split('.')[0];

      return {
        task: {
          id: this.$uuid(),
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
      ...mapMutations({
        'addTask': types.ADD_TASK,
      }),
      setInputColor(categoryId){
        const filteredCategories = this.categories.filter(category => {
          return categoryId == category.id;
        });
        this.inputColor  = Color(filteredCategories[0].color).alpha(0.2).string();
      },
      submit(){
        this.addTask({task:this.task});
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
        position: relative;
        input{
          width:90%;
          height:auto;
          font-size:30px;
          padding:5px 2% 5px 8%;
          border:none;
        }
        img{
          position:absolute;
          top:10px;
          left:3px;
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
        img{
          width:20px;
          height:20px;
          margin-right:5px;
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
