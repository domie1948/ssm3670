const base = {
    get() {
        return {
            url : "http://localhost:8080/ssm7b7gg/",
            name: "ssm7b7gg",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssm7b7gg/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "本科生导师指导平台"
        } 
    }
}
export default base
