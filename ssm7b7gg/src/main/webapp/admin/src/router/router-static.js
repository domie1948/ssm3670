import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import xuesheng from '@/views/modules/xuesheng/list'
    import daoshixuanzeliebiao from '@/views/modules/daoshixuanzeliebiao/list'
    import wodexuesheng from '@/views/modules/wodexuesheng/list'
    import xueyuan from '@/views/modules/xueyuan/list'
    import xueshengchengji from '@/views/modules/xueshengchengji/list'
    import daoshi from '@/views/modules/daoshi/list'
    import nianji from '@/views/modules/nianji/list'
    import zhuanye from '@/views/modules/zhuanye/list'
    import yanjiufangxiang from '@/views/modules/yanjiufangxiang/list'
    import forum from '@/views/modules/forum/list'
    import xueqi from '@/views/modules/xueqi/list'
    import wodedaoshi from '@/views/modules/wodedaoshi/list'
    import xueshengpingjia from '@/views/modules/xueshengpingjia/list'
    import yixuandaoshi from '@/views/modules/yixuandaoshi/list'
    import banji from '@/views/modules/banji/list'
    import daoshizu from '@/views/modules/daoshizu/list'
    import laoshipingjia from '@/views/modules/laoshipingjia/list'
    import config from '@/views/modules/config/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/xuesheng',
        name: '学生',
        component: xuesheng
      }
      ,{
	path: '/daoshixuanzeliebiao',
        name: '导师选择列表',
        component: daoshixuanzeliebiao
      }
      ,{
	path: '/wodexuesheng',
        name: '我的学生',
        component: wodexuesheng
      }
      ,{
	path: '/xueyuan',
        name: '学院',
        component: xueyuan
      }
      ,{
	path: '/xueshengchengji',
        name: '学生成绩',
        component: xueshengchengji
      }
      ,{
	path: '/daoshi',
        name: '导师',
        component: daoshi
      }
      ,{
	path: '/nianji',
        name: '年级',
        component: nianji
      }
      ,{
	path: '/zhuanye',
        name: '专业',
        component: zhuanye
      }
      ,{
	path: '/yanjiufangxiang',
        name: '研究方向',
        component: yanjiufangxiang
      }
      ,{
	path: '/forum',
        name: '指导中心',
        component: forum
      }
      ,{
	path: '/xueqi',
        name: '学期',
        component: xueqi
      }
      ,{
	path: '/wodedaoshi',
        name: '我的导师',
        component: wodedaoshi
      }
      ,{
	path: '/xueshengpingjia',
        name: '学生评价',
        component: xueshengpingjia
      }
      ,{
	path: '/yixuandaoshi',
        name: '已选导师',
        component: yixuandaoshi
      }
      ,{
	path: '/banji',
        name: '班级',
        component: banji
      }
      ,{
	path: '/daoshizu',
        name: '导师组',
        component: daoshizu
      }
      ,{
	path: '/laoshipingjia',
        name: '老师评价',
        component: laoshipingjia
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
