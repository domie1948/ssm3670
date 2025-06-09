
var projectName = '本科生导师指导平台';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
{
	name: '我的发布',
	url: '../forum/list-my.html'
},

]


var indexNav = [

{
	name: '导师选择列表',
	url: './pages/daoshixuanzeliebiao/list.html'
}, 

{
	name: '指导中心',
	url: './pages/forum/list.html'
}, 
]

var adminurl =  "http://localhost:8080/ssm7b7gg/admin/dist/index.html";

var cartFlag = false

var chatFlag = false




var menu = [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"学生","menuJump":"列表","tableName":"xuesheng"}],"menu":"学生管理"},{"child":[{"buttons":["新增","查看","修改","删除","加入导师列表"],"menu":"导师","menuJump":"列表","tableName":"daoshi"}],"menu":"导师管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"学院","menuJump":"列表","tableName":"xueyuan"}],"menu":"学院管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"专业","menuJump":"列表","tableName":"zhuanye"}],"menu":"专业管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"年级","menuJump":"列表","tableName":"nianji"}],"menu":"年级管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"班级","menuJump":"列表","tableName":"banji"}],"menu":"班级管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"学期","menuJump":"列表","tableName":"xueqi"}],"menu":"学期管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"导师选择列表","menuJump":"列表","tableName":"daoshixuanzeliebiao"}],"menu":"导师选择列表管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"我的导师","menuJump":"列表","tableName":"wodedaoshi"}],"menu":"我的导师管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"已选导师","menuJump":"列表","tableName":"yixuandaoshi"}],"menu":"已选导师管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"导师组","menuJump":"列表","tableName":"daoshizu"}],"menu":"导师组管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"研究方向","menuJump":"列表","tableName":"yanjiufangxiang"}],"menu":"研究方向管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"我的学生","menuJump":"列表","tableName":"wodexuesheng"}],"menu":"我的学生管理"},{"child":[{"buttons":["删除","修改","查看"],"menu":"学生评价","menuJump":"列表","tableName":"xueshengpingjia"}],"menu":"学生评价管理"},{"child":[{"buttons":["修改","删除","查看"],"menu":"老师评价","menuJump":"列表","tableName":"laoshipingjia"}],"menu":"老师评价管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"学生成绩","menuJump":"列表","tableName":"xueshengchengji"}],"menu":"学生成绩管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"指导中心","tableName":"forum"}],"menu":"指导中心"},{"child":[{"buttons":["查看","修改"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"buttons":["查看","选择"],"menu":"导师选择列表列表","menuJump":"列表","tableName":"daoshixuanzeliebiao"}],"menu":"导师选择列表模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["查看"],"menu":"我的导师","menuJump":"列表","tableName":"wodedaoshi"}],"menu":"我的导师管理"},{"child":[{"buttons":["查看","加入我的导师"],"menu":"已选导师","menuJump":"列表","tableName":"yixuandaoshi"}],"menu":"已选导师管理"},{"child":[{"buttons":["查看"],"menu":"学生评价","menuJump":"列表","tableName":"xueshengpingjia"}],"menu":"学生评价管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"老师评价","menuJump":"列表","tableName":"laoshipingjia"}],"menu":"老师评价管理"},{"child":[{"buttons":["查看"],"menu":"学生成绩","menuJump":"列表","tableName":"xueshengchengji"}],"menu":"学生成绩管理"}],"frontMenu":[{"child":[{"buttons":["查看","选择"],"menu":"导师选择列表列表","menuJump":"列表","tableName":"daoshixuanzeliebiao"}],"menu":"导师选择列表模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"学生","tableName":"xuesheng"},{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除","审核","同意"],"menu":"已选导师","menuJump":"列表","tableName":"yixuandaoshi"}],"menu":"已选导师管理"},{"child":[{"buttons":["查看"],"menu":"导师组","menuJump":"列表","tableName":"daoshizu"}],"menu":"导师组管理"},{"child":[{"buttons":["查看","修改","删除","新增"],"menu":"我的学生","menuJump":"列表","tableName":"wodexuesheng"}],"menu":"我的学生管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"学生评价","menuJump":"列表","tableName":"xueshengpingjia"}],"menu":"学生评价管理"},{"child":[{"buttons":["查看"],"menu":"老师评价","menuJump":"列表","tableName":"laoshipingjia"}],"menu":"老师评价管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"学生成绩","menuJump":"列表","tableName":"xueshengchengji"}],"menu":"学生成绩管理"}],"frontMenu":[{"child":[{"buttons":["查看","选择"],"menu":"导师选择列表列表","menuJump":"列表","tableName":"daoshixuanzeliebiao"}],"menu":"导师选择列表模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"导师","tableName":"daoshi"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
