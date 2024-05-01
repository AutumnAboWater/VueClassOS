<script setup>
import {onMounted} from "vue";
import {ElMessage} from "element-plus";
import { ref } from 'vue'
import axios from "axios";
import {useRoute, useRouter} from "vue-router";
const router = useRouter()
const route = useRoute()
const depts = ref([])
const newData = ref({})
onMounted(() => {
  // 查询所有学院
  axios
      .get('tableData')
      .then((response) => {
        depts.value = response.data
        console.log(response.data)
      })
      .catch((error) => console.log(error)) // 请求失败处理

  // 发送get请求; 查询学院
  axios
      .get('tableData/' + route.params.i)
      .then((response) => {
        newData.value = response.data
        console.log(response.data)
      })
      .catch((error) => console.log(error)) // 请求失败处理
})

const goback = () => router.go(-1)//后退一步
const logoutMessage = () => {
  ElMessage.success('登出成功！')
}

const updateData=()=>{
axios
    .put('tableData/'+newData.value.id, newData.value)
    .then((response)=>{
      console.log(response.data)
      ElMessage.success('修改成功')
      goback()
    })
    .catch((error)=>ElMessage.error('修改失败'))
}

const getUserName=()=>{
  axios
      .get('userData')
      .then((response)=>{
        newData.value = response.data
        console.log(newData.value[0].userName)
      })
}
const activeIndex = ref('1')
const activeIndex2 = ref('1')
</script>
<template>
  <div class="container">
    <el-form :model="newData">
      <el-form-item label="课程" :label-width="100">
        <el-input v-model="newData.course" autocomplete="off" />
      </el-form-item>
      <el-form-item label="任课教师" :label-width="100">
        <el-input v-model="newData.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="上课地点" :label-width="100">
        <el-input v-model="newData.address" autocomplete="off" />
      </el-form-item>
      <el-form-item label="上课时间" :label-width="100">
        <el-input v-model="newData.time" autocomplete="off" />
      </el-form-item>
      <el-form-item label="学分" :label-width="100">
        <el-input v-model="newData.grade" autocomplete="off" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="updateData">提交</el-button>
        <el-button @click="goback">返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<style >
.container{
  height: 100vh;
  width: 100vh;
}
</style>
