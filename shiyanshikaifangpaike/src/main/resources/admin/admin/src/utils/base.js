const base = {
    get() {
        return {
            url : "http://localhost:8080/shiyanshikaifangpaike/",
            name: "shiyanshikaifangpaike",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/shiyanshikaifangpaike/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "开放实验室预约管理系统"
        } 
    }
}
export default base
