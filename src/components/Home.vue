<template>
  <div class="container">
    <!--    导航-->
    <div class="navbar">
      <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
      >
        <el-menu-item index="1"><router-link :to="{path:'/Home',query:{fromLogin: 'true'}}">课程管理</router-link></el-menu-item>
        <el-sub-menu index="2">
          <template #title>课表查询</template>
          <el-menu-item index="2-1"><router-link :to="{path:'/Class',query:{fromLogin: 'true',HomeUserName:finalUserName,GanderMessage:finalUserGander}}" >软件工程专升本2班</router-link></el-menu-item>
          <el-menu-item index="2-2"><router-link :to="{path:'/Class3',query:{fromLogin: 'true',HomeUserName:finalUserName,GanderMessage:finalUserGander}}" >软件工程专升本3班</router-link></el-menu-item>
        </el-sub-menu>
<!--        <el-menu-item index="3"><router-link :to="{path:'/Edit',query:{fromLogin: 'true',HomeUserName:finalUserName,GanderMessage:finalUserGander}}" >课表修改</router-link></el-menu-item>-->
        <el-text>欢迎：{{finalUserName+finalUserGander}}</el-text>
        <router-link to="/"><el-button v-if="logout" type="primary" size="small" @click="logoutMessage "> 登出</el-button></router-link>
      </el-menu>
    </div>
    <el-button type="primary" size="large" @click="dialogFormVisible = true" style="float: right;margin-top: 10px;margin-bottom: 10px">添加</el-button>

      <el-table :data="tableData" style="width: 100%">
        <el-table-column  prop="course" label="课程" width="120" />
        <el-table-column prop="name" label="任课教师" width="120" />
        <el-table-column prop="address" label="上课地点" width="120" />
        <el-table-column prop="time" label="上课时间" width="150" />
        <el-table-column prop="grade" label="学分" width="600" />
        <el-table-column fixed="right" label="操作" width="120">

          <template #default="scope">
            <el-button link type="primary" size="small" @click="deletePerson(scope.row.id, scope.$index)" style="color: #ff414b"
            >删除</el-button
            >
            <el-button link type="primary" size="small" @click="edit(scope.row.id)">修改</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog v-model="dialogFormVisible" title="添加课程" >
      <template #footer>
        <el-form :model="tableForm">
          <el-form-item label="课程" :label-width="100">
            <el-input v-model="tableForm.course" autocomplete="off" />
          </el-form-item>
          <el-form-item label="任课教师" :label-width="100">
            <el-input v-model="tableForm.name" autocomplete="off" />
          </el-form-item>
          <el-form-item label="上课地点" :label-width="100">
            <el-input v-model="tableForm.address" autocomplete="off" />
          </el-form-item>
          <el-form-item label="上课时间" :label-width="100">
            <el-input v-model="tableForm.time" autocomplete="off" />
          </el-form-item>
          <el-form-item label="学分" :label-width="100">
            <el-input v-model="tableForm.grade" autocomplete="off" />
          </el-form-item>
        </el-form>
        <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary"  @click="createPerson();dialogFormVisible = false;">
          确定
        </el-button>
      </span>
      </template>
    </el-dialog>
</template>
<script setup>
import router from "@/router/index.js";
import {ElMessage} from "element-plus";
let finalUserName = router.currentRoute.value.query.finalUserName;
let finalUserGander = router.currentRoute.value.query.GanderMessage;
let LoginToken = router.currentRoute.value.query.fromLogin
let logout = false
logout = LoginToken === 'true';
let dialogFormVisible=ref(false);
let tableForm=ref(
    {
      course:'',
      name:'',
      address:'',
      time:'',
      grade:''
    }
)
const goback = () => router.go(-1)//后退一步
const logoutMessage = () => {
  ElMessage.success('登出成功！')
}
const newData = []
import { ref } from 'vue'
import axios from "axios";
const createPerson = () => {
  axios
      .post('tableData', tableForm.value)
      .then((response) => {
        // 添加完newPerson对象后，重置newPerson对象
        tableForm.value = {
          course:'',
          name:'',
          address:'',
          time:'',
          grade:''
        }
        ElMessage.success('添加成功!')
        fetchData();
      })
      .catch((error) => console.log(error)) // 请求失败处理
}
const fetchData = () => {
  axios
      .get('tableData')
      .then((response) => {
        tableData.value = response.data;
      })
      .catch((error) => console.log(error));
};
onMounted(() => {
  // 在组件挂载时获取初始数据
  fetchData();
});
const activeIndex = ref('1')
const activeIndex2 = ref('1')



import {onMounted} from "vue";


onMounted(()=>{
  axios
      .get('tableData')
      .then((response)=>{
        tableData.value=response.data
      })
  console.log(tableData)
})
const tableData=ref()
const deletePerson = (id, index) => {
  // 后端删除
  axios
      .delete('tableData/' + id)
      .then((response) => {
        tableData.value.splice(index, 1)
        ElMessage.success('删除成功')
      })
      .catch((error) => ElMessage.error('删除失败'))
}


const edit= (id) =>{
  router.push({
  name:'newEdit',
  params:{i:id}
  })
}

const dialogConfirm =()=>{
 dialogFormVisible=false
  let index=tableData.findIndex(item =>item.id===tableForm.id)
  console.log(index);
}
</script>
<style >
.container{
  height: 100vh;
  width: 100vh;
}
.main{
  margin-top: 10px;
}
</style>
