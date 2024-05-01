<script setup>
import {RouterLink} from "vue-router";
import {ref} from "vue";
import axios from "axios";
import {ElMessage} from "element-plus";
<<<<<<< HEAD

=======
const value = ref('')

const options = [
  {
    value: '小帅哥',
    label: '男',
  },
  {
    value: '小美女',
    label: '女'
  }
]
>>>>>>> 4ddbf2b (提交代码)
const userData = ref(
    {
      id:'',
      userName:'',
<<<<<<< HEAD
      userPassWord:''
=======
      userPassWord:'',
      userGender:''
>>>>>>> 4ddbf2b (提交代码)
    }
)
const createNewUser = () => {
  axios
      .post('userData',userData.value)
      .then((response)=>{
      userData.value = {
        id:'',
        userName:'',
<<<<<<< HEAD
        userPassWord:''
=======
        userPassWord:'',
        userGender:''
>>>>>>> 4ddbf2b (提交代码)
      }
      ElMessage.success('注册成功！')
  })
      .catch(()=> ElMessage.error('注册失败'))
}
</script>

<template>
  <el-card  shadow="always">
    <div class="card-header">
      <span>课程管理系统——注册</span>
    </div>
    <el-form>
      <el-form-item label="名称">
        <el-input
            v-model="userData.userName"
            clearable
        />
      </el-form-item>
      <el-form-item label="账号">
        <!--账号-->
        <el-input
            v-model="userData.id"
            clearable
        />
      </el-form-item>
      <el-form-item label="密码">
        <el-input
            v-model="userData.userPassWord"
            type="password"
            show-password
        />
      </el-form-item>
<<<<<<< HEAD
=======
      <el-form-item label="性别">
        <el-select v-model="userData.userGender" class="m-2">
          <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
          />
        </el-select>
      </el-form-item>
>>>>>>> 4ddbf2b (提交代码)
      <el-form-item>
        <RouterLink to="/"><el-button type="primary">返回登录</el-button></RouterLink>
        <el-button type="success" @click="createNewUser()">提交</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>
<style scoped>
.card-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
