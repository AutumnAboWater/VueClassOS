<script setup>
import {onMounted} from "vue";
import router from "@/router/index.js";
import {ElMessage} from "element-plus";

const checkLoginStatus = () => {
  const fromLogin = router.currentRoute.value.query.fromLogin ==='true';

  if (fromLogin) {
    ElMessage.success('登录成功！');
  } else {
    ElMessage.warning('请先登录');
    router.push('/');
  }
};

onMounted(() => {
  checkLoginStatus();
});
import { ref } from 'vue'

const activeIndex = ref('1')
const activeIndex2 = ref('1')
</script>
<template>
  <div class="container">
    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
    >
      <el-menu-item index="1">Processing Center</el-menu-item>
      <el-sub-menu index="2">
        <template #title>Workspace</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
        <el-sub-menu index="2-4">
          <template #title>item four</template>
          <el-menu-item index="2-4-1">item one</el-menu-item>
          <el-menu-item index="2-4-2">item two</el-menu-item>
          <el-menu-item index="2-4-3">item three</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="3" disabled>Info</el-menu-item>
      <el-menu-item index="4">Orders</el-menu-item>
    </el-menu>
  </div>
</template>
<style >
.container{
  height: 100vh;
  width: 100vh;
}
</style>
