<script setup>
import {getCurrentInstance, onMounted, reactive} from "vue";
import router from "@/router/index.js";
import {ElMessage} from "element-plus";
let HomeUserName = router.currentRoute.value.query.HomeUserName;
let GanderMessage = router.currentRoute.value.query.GanderMessage;


const goback = () => router.go(-1)//后退一步
const logoutMessage = () => {
  ElMessage.success('登出成功！')
}
const newData = []
import { ref } from 'vue'
import axios from "axios";
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
const state = reactive({
  formData: {
    select12359: 2,
    select47961: 7,
    date41838: "2023-12-24",
  },
  rules: {},
  select12359Options: [{
    "label": "第1学期",
    "value": 2
  }, {
    "label": "第2学期",
    "value": 3
  }],
  select47961Options: [{
    "value": "1",
    "label": "第1周"
  }, {
    "value": "2",
    "label": "第2周"
  }, {
    "value": "3",
    "label": "第3周"
  }, {
    "value": "4",
    "label": "第4周"
  }, {
    "value": "5",
    "label": "第5周"
  }, {
    "value": "6",
    "label": "第6周"
  }, {
    "value": 7,
    "label": "第16周"
  }],
})
const instance = getCurrentInstance()
const submitForm = () => {
  instance.proxy.$refs['vForm'].validate(valid => {
    if (!valid) return
    //TODO: 提交表单
  })
}
const resetForm = () => {
  instance.proxy.$refs['vForm'].resetFields()
}
</script>
<template>
  <div class="container">
    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
    >
      <el-menu-item index="1"><router-link :to="{path:'/Home',query:{fromLogin: 'true',finalUserName:HomeUserName,GanderMessage:GanderMessage}}">课程管理</router-link></el-menu-item>
      <el-sub-menu index="2">
        <template #title>课表查询</template>
        <el-menu-item index="2-1"><router-link :to="{path:'/Class',query:{fromLogin: 'true'}}" >软件工程专升本2班</router-link></el-menu-item>
        <el-menu-item index="2-1"><router-link :to="{path:'/Class3',query:{fromLogin: 'true',HomeUserName:HomeUserName,GanderMessage:GanderMessage}}" >软件工程专升本3班</router-link></el-menu-item>
      </el-sub-menu>
<!--      <el-menu-item index="3"><router-link :to="{path:'/Edit',query:{fromLogin: 'true',HomeUserName:HomeUserName,GanderMessage:GanderMessage}}" >课表修改</router-link></el-menu-item>-->
      <el-text>欢迎：{{HomeUserName+GanderMessage}}</el-text>
      <router-link to="/"><el-button type="primary" size="small" @click="logoutMessage"> 登出</el-button></router-link>
    </el-menu>
    <div class="main">
      <el-form  :model="state.formData" ref="vForm" :rules="state.rules" label-position="left" label-width="80px"
                size="default" @submit.prevent >
        <div class="table-container" style="color: #e1e2e3;margin-top: 20px;margin-left: 10px;margin-right: 10px;">
          <table class="table-layout">
            <tbody>
            <tr>
              <td class="table-cell">
              </td>
              <td class="table-cell" colspan="2">
                <div class="static-content-item">
                  <div>星期一</div>
                </div>
              </td>
              <td class="table-cell" colspan="2">
                <div class="static-content-item">
                  <div>星期二</div>
                </div>
              </td>
              <td class="table-cell" colspan="2">
                <div class="static-content-item">
                  <div>星期三</div>
                </div>
              </td>
              <td class="table-cell" colspan="2">
                <div class="static-content-item">
                  <div>星期四</div>
                </div>
              </td>
              <td class="table-cell" colspan="2">
                <div class="static-content-item">
                  <div>星期五</div>
                </div>
              </td>
              <td class="table-cell" colspan="2">
                <div class="static-content-item">
                  <div>星期六</div>
                </div>
              </td>
              <td class="table-cell" colspan="2">
                <div class="static-content-item">
                  <div>星期日</div>
                </div>
              </td>
            </tr>
            <tr>
              <td class="table-cell" rowspan="5">
                <div class="static-content-item">
                  <div>上午</div>
                </div>
              </td>
<!--              周一上午1-2节课-->
              <td class="table-cell" colspan="2" rowspan="3">
                <div class="static-content-item">
                  <div>操作系统 考试 刘志东 [1-16]周 1-2节 时-508</div>
                </div>
              </td>
<!--              周二上午1-2节课-->
              <td class="table-cell" colspan="2" rowspan="3">
                <div class="static-content-item">
                  <div>
                    软件工程 考试 陈曦 [1-8]周 5-6节 时-519
                    面向对象程序设计课程设计 考查 李璐 [18]周 1-4节 资-208(A类)
                  </div>
                </div>
              </td>
<!--              周三上午1-2节课-->
              <td class="table-cell" colspan="2" rowspan="3">
                <div class="static-content-item">
                  <div>
                    WEB前端综合实验 考查 李思佳 [1-16]周 1-2节 资-405
                  </div>
                </div>

              </td>
<!--              周四上午1-2节课-->
              <td class="table-cell" colspan="2" rowspan="3">
                <div class="static-content-item">
                  <div>
                    软件工程 考试 陈曦 [1-8]周 7-8节 时-519
                    软件工程 考试 陈曦 [9-16]周 7-8节 资-216(A类)
                  </div>
                </div>
              </td>
<!--              周五上午1-2节课-->
              <td class="table-cell" colspan="2" rowspan="3">

              </td>
<!--              周六上午1-2节课-->
              <td class="table-cell" colspan="2" rowspan="3">
                <div class="static-content-item">
                  <div>
                    数据结构课程设计 考查 戴可扬 [12]周 1-4节 资-208(A类)
                    面向对象程序设计课程设计 考查 李璐 [17]周 1-4节 资-208(A类)
                  </div>
                </div>
              </td>
<!--              周日上午1-2节课-->
              <td class="table-cell" colspan="2" rowspan="3">
                <div class="static-content-item">
                  <div>数据结构课程设计 考查 戴可扬 [13]周 1-4节 资-208(A类)</div>
                </div>
              </td>
            </tr>
            <tr></tr>
            <tr></tr>
            <tr>
              <!--            周一上午3-4节课-->
              <td class="table-cell" colspan="2" rowspan="2">
                <div class="static-content-item">
                  <div>Python程序设计 考查 郭迪 [1-16]周 3-4节 资-206(B类)</div>
<!--                  <div>WEB前端综合实验 考查 李思佳 [1-16]周 3-4节 资-405</div>-->
                </div>
              </td>
              <!--            周二上午3-4节课-->
              <td class="table-cell" colspan="2" rowspan="2">
                <div class="static-content-item">
                  <div>
                    面向对象程序设计课程设计 考查 李璐 [18]周 1-4节 资-208(A类)
                    软件质量保证与测试 考查 付丽方 [1-16]周 3-4节 资-309(B类)
                  </div>
                </div>
              </td>
              <!--            周三上午3-4节课-->
              <td class="table-cell" colspan="2" rowspan="2">
                <div class="static-content-item">
                  <div>
                    操作系统 考试 刘志东 [1-16]周 3-4节 时-508
                    形势与政策III 考查 谢楠楠 [4,8,12,16]周 3-4节 综-309
                    操作系统 考试 刘志东 [10,12,14,16]周 双周 3-4节 资-309(B类)
                  </div>
                </div>
              </td>
              <!--            周四上午3-4节课-->
              <td class="table-cell" colspan="2" rowspan="2">
                <div class="static-content-item">
                  <div>数据结构课程设计 考试 徐振强 [1-16]周 3-4节 时-417</div>
                </div>
              </td>
              <!--            周五上午3-4节课-->
              <td class="table-cell" colspan="2" rowspan="2">
                <div class="static-content-item">
                  <div>Linux服务器管理与应用 考察 赵晨言 [1-16周] 3-4节 资-408(A类)</div>
                </div>
              </td>
              <!--            周六上午3-4节课-->
              <td class="table-cell" colspan="2" rowspan="2">
                <div class="static-content-item">
                  <div>
                    数据结构课程设计 考查 戴可扬 [12]周 1-4节 资-208(A类)
                    面向对象程序设计课程设计 考查 李璐 [17]周 1-4节 资-208(A类)
                  </div>
                </div>
              </td>
              <!--            周日上午3-4节课-->
              <td class="table-cell" colspan="2" rowspan="2">
                <div class="static-content-item">
                  <div>数据结构课程设计 考查 戴可扬 [14]周 1-4节 资-208(A类)</div>
                </div>
              </td>
            </tr>
            <tr></tr>
            <tr>

              <td class="table-cell" rowspan="4">
                <div class="static-content-item">
                  <div>下午</div>
                </div>
              </td>
              <!--            周一下午6-7节课-->
              <td class="table-cell" colspan="2" rowspan="2">
              </td>
              <!--            周二下午6-7节课-->
              <td class="table-cell" colspan="2" rowspan="2">
                <div class="static-content-item">
                  <div>
                    面向对象程序设计 考察 朱强 [1-16]周 5-6节 资-207 （B类）
                    面向对象程序设计课程设计 考查 李璐 [18]周 1-4节 资-208(A类)
                  </div>
                </div>
              </td>
              <!--            周三下午6-7节课-->
              <td class="table-cell" colspan="2" rowspan="2">
                <div class="static-content-item">
                  <div>
                    操作系统 考试 刘志东 [1-8]周 双周 5-6节 时-421
                    操作系统 考试 刘志东 [4,8,12,16]周 双周 5-6节 资-309(B类)
                    面向对象程序设计课程设计 考查 李璐[18]周 5-8节 资-208(A类)
                  </div>
                </div>
              </td>
              <!--            周四下午6-7节课-->
              <td class="table-cell" colspan="2" rowspan="2">
              </td>
              <!--            周五下午6-7节课-->
              <td class="table-cell" colspan="2" rowspan="2">
              </td>
              <!--            周六下午6-7节课-->
              <td class="table-cell" colspan="2" rowspan="2">
                <div class="static-content-item">
                  <div>
                    数据结构课程设计 考查 戴可扬 [12]周 5-8节 资-208(A类)
                    面向对象程序设计课程设计 考查 李璐 [17]周 5-8节 资-208(A类)
                  </div>
                </div>
              </td>
              <!--            周日下午6-7节课-->
              <td class="table-cell" colspan="2" rowspan="2">
                <div class="static-content-item">
                  <div>数据结构课程设计 考查 戴可扬 [13]周 5-8节 资-208(A类)</div>
                </div>
              </td>
            </tr>
            <tr></tr>
            <tr>
              <!--            周一下午7-8节课-->
              <td class="table-cell" colspan="2" rowspan="2">
              </td>
              <!--            周二下午7-8节课-->
              <td class="table-cell" colspan="2" rowspan="2">
                <div class="static-content-item">
                  <div>
                    面向对象程序设计 考察 朱强 [1-16]周 5-6节 资-207 （B类）
                    面向对象程序设计课程设计 考查 李璐 [18]周 1-4节 资-208(A类)
                  </div>
                </div>
              </td>
              <!--            周三下午7-8节课-->
              <td class="table-cell" colspan="2" rowspan="2">
                <div class="static-content-item">
                  <div>
                    面向对象程序设计课程设计 考查 李璐[18]周 5-8节 资-208(A类)
                  </div>
                </div>
              </td>
              <!--            周四下午7-8节课-->
              <td class="table-cell" colspan="2" rowspan="2">
              </td>
              <!--            周五下午7-8节课-->
              <td class="table-cell" colspan="2" rowspan="2">
              </td>
              <!--            周六下午7-8节课-->
              <td class="table-cell" colspan="2" rowspan="2">
                <div class="static-content-item">
                  <div>
                    数据结构课程设计 考查 戴可扬 [12]周 5-8节 资-208(A类)
                    面向对象程序设计课程设计 考查 李璐 [17]周 5-8节 资-208(A类)
                  </div>
                </div>
              </td>
              <!--            周日下午7-8节课-->
              <td class="table-cell" colspan="2" rowspan="2">
                <div class="static-content-item">
                  <div>数据结构课程设计 考查 戴可扬 [13]周 5-8节 资-208(A类)</div>
                </div>
              </td>
            </tr>
            <tr></tr>
            <tr>
              <td class="table-cell" rowspan="2">
                <div class="static-content-item">
                  <div>晚上</div>
                </div>
              </td>
              <td class="table-cell" colspan="2" rowspan="2">
              </td>
              <td class="table-cell" colspan="2" rowspan="2">
              </td>
              <td class="table-cell" colspan="2" rowspan="2">
              </td>
              <td class="table-cell" colspan="2" rowspan="2">
                <div class="static-content-item">
                  <div>
                    数据结构课程设计 考试 徐振强 [1-16]周 单周 9-10节 时-417
                    数据结构课程设计 考试 徐振强 [1-16]周 双周 9-10节 资-405(B类)
                  </div>
                </div>
              </td>
              <td class="table-cell" colspan="2" rowspan="2">
              </td>
              <td class="table-cell" colspan="2" rowspan="2">
              </td>
              <td class="table-cell" colspan="2" rowspan="2">
              </td>
            </tr>
            <tr></tr>
            </tbody>
          </table>
        </div>
      </el-form>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.main{
  background-color: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  border: 0.666667px solid rgba(255, 255, 255, 0.18);
  box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
  -webkit-box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
  border-radius: 12px;
  -webkit-border-radius: 12px;
  color: rgba(255, 255, 255, 0.75);
  margin-top: 20px;
  height: 90%;
}
.container{
  height: 100vh;
  width: 120vh;
}
.el-input-number.full-width-input,
.el-cascader.full-width-input {
  width: 100% !important;
}

.el-form-item--medium {
  .el-radio {
    line-height: 36px !important;
  }

  .el-rate {
    margin-top: 8px;
  }
}

.el-form-item--small {
  .el-radio {
    line-height: 32px !important;
  }

  .el-rate {
    margin-top: 6px;
  }
}

.el-form-item--mini {
  .el-radio {
    line-height: 28px !important;
  }

  .el-rate {
    margin-top: 4px;
  }
}

.clear-fix:before,
.clear-fix:after {
  display: table;
  content: "";
}

.clear-fix:after {
  clear: both;
}

.float-right {
  float: right;
}
div.table-container {
  table.table-layout {
    table-layout: fixed;
    border-collapse: collapse;

    td.table-cell {
      display: table-cell;
      height: 36px;
      border: 1px solid #e1e2e3;
    }
  }
}

div.tab-container {}

.label-left-align :deep(.el-form-item__label) {
  text-align: left;
}

.label-center-align :deep(.el-form-item__label) {
  text-align: center;
}

.label-right-align :deep(.el-form-item__label) {
  text-align: right;
}

.custom-label {}

.static-content-item {
  min-height: 20px;
  display: flex;
  align-items: center;

  :deep(.el-divider--horizontal) {
    margin: 0;
  }
}
</style>
