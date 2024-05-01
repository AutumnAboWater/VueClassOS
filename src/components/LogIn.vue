<script setup>
import {RouterLink} from "vue-router";
import {ref} from "vue";
import axios from "axios";
import {ElMessage} from "element-plus";
import router from "@/router/index.js";
const userData = ref(
    {
      id:'',
      userName:'',
<<<<<<< HEAD
      userPassWord:''
=======
      userPassWord:'',
      userGander:''
>>>>>>> 4ddbf2b (提交代码)
    }
)
const clearStyle = () => {


}
const userManager = ([])
const selectUserData = () => {
  let userExists = false;
  let passwordCorrect = false;
  axios
      .get('userData')
      .then((response)=>{
        userManager.value =response.data
<<<<<<< HEAD
        console.log("账户名为:",userData.value.userName)
        console.log("用户密码为:",userData.value.userPassWord)
        console.log("数据库用户名:",userManager.value[0].userName)
        console.log("数据库用户密码:",userManager.value[0].userPassWord)
=======
>>>>>>> 4ddbf2b (提交代码)
        for (let i = 0; i < userManager.value.length; i++) {
          if (userData.value.userName === userManager.value[i].userName) {
            userExists = true;
            if (userData.value.userPassWord === userManager.value[i].userPassWord) {
              passwordCorrect = true;
<<<<<<< HEAD
              const bodyElement = document.body
              bodyElement.setAttribute('style', '');
=======
              userData.value.userGander = userManager.value[i].userGander
>>>>>>> 4ddbf2b (提交代码)
              break;
            }
          }
        }
        if (userExists) {
          if (passwordCorrect) {
<<<<<<< HEAD
            router.push({path:'/Home', query: { fromLogin: 'true' }})
=======
            ElMessage.success('登录成功！！！！！！！！！！🛩')
            router.push({path:'/Home', query: {
              fromLogin: 'true',
                finalUserName: userData.value.userName,
                GanderMessage: userData.value.userGander
              }})
>>>>>>> 4ddbf2b (提交代码)
          } else {
            ElMessage.error('密码错误');
          }
        } else {
          ElMessage.error('用户不存在');
        }
          }
      )
      .catch(()=>ElMessage.error('登陆失败'))
}

</script>

<template>
  <el-card :data="userManager" shadow="always">
    <div class="card-header">
<<<<<<< HEAD
      <span>课程管理系统——登录</span>
=======
      <h2>课程管理系统😎</h2>
>>>>>>> 4ddbf2b (提交代码)
    </div>
    <el-form>
      <el-form-item label="账号">
        <!--    账号-->
        <el-input
            v-model="userData.userName"
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
      <el-form-item>
        <RouterLink to="/"><el-button @click="selectUserData()" type="primary">登录</el-button></RouterLink>
        <RouterLink to="/Register"><el-button type="success">注册</el-button></RouterLink>
<<<<<<< HEAD

=======
>>>>>>> 4ddbf2b (提交代码)
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
