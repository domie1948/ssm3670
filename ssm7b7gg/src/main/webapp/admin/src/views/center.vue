<template>
  <div>
    <el-form
      class="detail-form-content"
      ref="ruleForm"
      :model="ruleForm"
      label-width="80px"
    >  
     <el-row>
      <el-col :span="12">
        <el-form-item   v-if="flag=='xuesheng'"  label="学工号" prop="xuegonghao">
          <el-input v-model="ruleForm.xuegonghao" readonly              placeholder="学工号" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item   v-if="flag=='xuesheng'"  label="学生姓名" prop="xueshengxingming">
          <el-input v-model="ruleForm.xueshengxingming"               placeholder="学生姓名" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item v-if="flag=='xuesheng'"  label="性别" prop="xingbie">
          <el-select v-model="ruleForm.xingbie" placeholder="请选择性别">
            <el-option
                v-for="(item,index) in xueshengxingbieOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item v-if="flag=='xuesheng'"  label="学院" prop="xueyuan">
          <el-select v-model="ruleForm.xueyuan" placeholder="请选择学院">
            <el-option
                v-for="(item,index) in xueshengxueyuanOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item v-if="flag=='xuesheng'"  label="专业" prop="zhuanye">
          <el-select v-model="ruleForm.zhuanye" placeholder="请选择专业">
            <el-option
                v-for="(item,index) in xueshengzhuanyeOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item v-if="flag=='xuesheng'"  label="年级" prop="nianji">
          <el-select v-model="ruleForm.nianji" placeholder="请选择年级">
            <el-option
                v-for="(item,index) in xueshengnianjiOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item v-if="flag=='xuesheng'"  label="班级" prop="banji">
          <el-select v-model="ruleForm.banji" placeholder="请选择班级">
            <el-option
                v-for="(item,index) in xueshengbanjiOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item   v-if="flag=='xuesheng'"  label="邮箱" prop="youxiang">
          <el-input v-model="ruleForm.youxiang"               placeholder="邮箱" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item   v-if="flag=='xuesheng'"  label="手机" prop="shouji">
          <el-input v-model="ruleForm.shouji"               placeholder="手机" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item   v-if="flag=='xuesheng'"  label="个人简介" prop="gerenjianjie">
          <el-input v-model="ruleForm.gerenjianjie"               placeholder="个人简介" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="24">  
        <el-form-item v-if="flag=='xuesheng'" label="照片" prop="zhaopian">
          <file-upload
          tip="点击上传照片"
          action="file/upload"
          :limit="3"
          :multiple="true"
          :fileUrls="ruleForm.zhaopian?ruleForm.zhaopian:''"
          @change="xueshengzhaopianUploadChange"
          ></file-upload>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item   v-if="flag=='daoshi'"  label="导师账号" prop="daoshizhanghao">
          <el-input v-model="ruleForm.daoshizhanghao" readonly              placeholder="导师账号" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item   v-if="flag=='daoshi'"  label="导师姓名" prop="daoshixingming">
          <el-input v-model="ruleForm.daoshixingming"               placeholder="导师姓名" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item v-if="flag=='daoshi'"  label="性别" prop="xingbie">
          <el-select v-model="ruleForm.xingbie" placeholder="请选择性别">
            <el-option
                v-for="(item,index) in daoshixingbieOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item   v-if="flag=='daoshi'"  label="职称" prop="zhicheng">
          <el-input v-model="ruleForm.zhicheng"               placeholder="职称" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item   v-if="flag=='daoshi'"  label="手机" prop="shouji">
          <el-input v-model="ruleForm.shouji"               placeholder="手机" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item   v-if="flag=='daoshi'"  label="邮箱" prop="youxiang">
          <el-input v-model="ruleForm.youxiang"               placeholder="邮箱" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item v-if="flag=='daoshi'"  label="导师组" prop="daoshizu">
          <el-select v-model="ruleForm.daoshizu" placeholder="请选择导师组">
            <el-option
                v-for="(item,index) in daoshidaoshizuOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item v-if="flag=='daoshi'"  label="研究方向" prop="yanjiufangxiang">
          <el-select v-model="ruleForm.yanjiufangxiang" placeholder="请选择研究方向">
            <el-option
                v-for="(item,index) in daoshiyanjiufangxiangOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item   v-if="flag=='daoshi'"  label="研究方向介绍" prop="yanjiufangxiangjieshao">
          <el-input v-model="ruleForm.yanjiufangxiangjieshao"               placeholder="研究方向介绍" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item   v-if="flag=='daoshi'"  label="个人简介" prop="gerenjianjie">
          <el-input v-model="ruleForm.gerenjianjie"               placeholder="个人简介" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item   v-if="flag=='daoshi'"  label="学术成果" prop="xueshuchengguo">
          <el-input v-model="ruleForm.xueshuchengguo"               placeholder="学术成果" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="24">  
        <el-form-item v-if="flag=='daoshi'" label="照片" prop="zhaopian">
          <file-upload
          tip="点击上传照片"
          action="file/upload"
          :limit="3"
          :multiple="true"
          :fileUrls="ruleForm.zhaopian?ruleForm.zhaopian:''"
          @change="daoshizhaopianUploadChange"
          ></file-upload>
        </el-form-item>
      </el-col>
      <el-form-item v-if="flag=='users'" label="用户名" prop="username">
        <el-input v-model="ruleForm.username" 
        placeholder="用户名"></el-input>
      </el-form-item>
      <el-col :span="24">
      <el-form-item>
        <el-button type="primary" @click="onUpdateHandler">修 改</el-button>
      </el-form-item>
      </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import { isNumber,isIntNumer,isEmail,isMobile,isPhone,isURL,checkIdCard } from "@/utils/validate";

export default {
  data() {
    return {
      ruleForm: {},
      flag: '',
      usersFlag: false,
      xueshengxingbieOptions: [],
      xueshengxueyuanOptions: [],
      xueshengzhuanyeOptions: [],
      xueshengnianjiOptions: [],
      xueshengbanjiOptions: [],
      daoshixingbieOptions: [],
      daoshidaoshizuOptions: [],
      daoshiyanjiufangxiangOptions: [],
    };
  },
  mounted() {
    var table = this.$storage.get("sessionTable");
    this.flag = table;
    this.$http({
      url: `${this.$storage.get("sessionTable")}/session`,
      method: "get"
    }).then(({ data }) => {
      if (data && data.code === 0) {
        this.ruleForm = data.data;
      } else {
        this.$message.error(data.msg);
      }
    });
    this.xueshengxingbieOptions = "男,女".split(',')
    this.$http({
      url: `option/xueyuan/xueyuan`,
      method: "get"
    }).then(({ data }) => {
      if (data && data.code === 0) {
        this.xueshengxueyuanOptions = data.data;
      } else {
        this.$message.error(data.msg);
      }
    });
    this.$http({
      url: `option/zhuanye/zhuanye`,
      method: "get"
    }).then(({ data }) => {
      if (data && data.code === 0) {
        this.xueshengzhuanyeOptions = data.data;
      } else {
        this.$message.error(data.msg);
      }
    });
    this.$http({
      url: `option/nianji/nianji`,
      method: "get"
    }).then(({ data }) => {
      if (data && data.code === 0) {
        this.xueshengnianjiOptions = data.data;
      } else {
        this.$message.error(data.msg);
      }
    });
    this.$http({
      url: `option/banji/banji`,
      method: "get"
    }).then(({ data }) => {
      if (data && data.code === 0) {
        this.xueshengbanjiOptions = data.data;
      } else {
        this.$message.error(data.msg);
      }
    });
    this.daoshixingbieOptions = "男,女".split(',')
    this.$http({
      url: `option/daoshizu/daoshizu`,
      method: "get"
    }).then(({ data }) => {
      if (data && data.code === 0) {
        this.daoshidaoshizuOptions = data.data;
      } else {
        this.$message.error(data.msg);
      }
    });
    this.$http({
      url: `option/yanjiufangxiang/yanjiufangxiang`,
      method: "get"
    }).then(({ data }) => {
      if (data && data.code === 0) {
        this.daoshiyanjiufangxiangOptions = data.data;
      } else {
        this.$message.error(data.msg);
      }
    });
  },
  methods: {
    xueshengzhaopianUploadChange(fileUrls) {
        this.ruleForm.zhaopian = fileUrls;
    },
    daoshizhaopianUploadChange(fileUrls) {
        this.ruleForm.zhaopian = fileUrls;
    },
    onUpdateHandler() {
      if((!this.ruleForm.xuegonghao)&& 'xuesheng'==this.flag){
        this.$message.error('学工号不能为空');
        return
      }
      if((!this.ruleForm.mima)&& 'xuesheng'==this.flag){
        this.$message.error('密码不能为空');
        return
      }
      if((!this.ruleForm.xueshengxingming)&& 'xuesheng'==this.flag){
        this.$message.error('学生姓名不能为空');
        return
      }
      if( 'xuesheng' ==this.flag && this.ruleForm.youxiang&&(!isEmail(this.ruleForm.youxiang))){
        this.$message.error(`邮箱应输入邮箱格式`);
        return
      }
      if( 'xuesheng' ==this.flag && this.ruleForm.shouji&&(!isMobile(this.ruleForm.shouji))){
        this.$message.error(`手机应输入手机格式`);
        return
      }
      if((!this.ruleForm.daoshizhanghao)&& 'daoshi'==this.flag){
        this.$message.error('导师账号不能为空');
        return
      }
      if((!this.ruleForm.mima)&& 'daoshi'==this.flag){
        this.$message.error('密码不能为空');
        return
      }
      if((!this.ruleForm.daoshixingming)&& 'daoshi'==this.flag){
        this.$message.error('导师姓名不能为空');
        return
      }
      if( 'daoshi' ==this.flag && this.ruleForm.shouji&&(!isMobile(this.ruleForm.shouji))){
        this.$message.error(`手机应输入手机格式`);
        return
      }
      if( 'daoshi' ==this.flag && this.ruleForm.youxiang&&(!isEmail(this.ruleForm.youxiang))){
        this.$message.error(`邮箱应输入邮箱格式`);
        return
      }
      if('users'==this.flag && this.ruleForm.username.trim().length<1) {
	this.$message.error(`用户名不能为空`);
        return	
      }
      this.$http({
        url: `${this.$storage.get("sessionTable")}/update`,
        method: "post",
        data: this.ruleForm
      }).then(({ data }) => {
        if (data && data.code === 0) {
          this.$message({
            message: "修改信息成功",
            type: "success",
            duration: 1500,
            onClose: () => {
            }
          });
        } else {
          this.$message.error(data.msg);
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
