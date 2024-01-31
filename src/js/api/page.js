//
// export  default {
//
//     data() {
//         return {
//             list: "",//搜索结果数据
//             pageSize:4, //每页个数，后台默认15
//             pageNo: 1,//当前页码，不传默认第一页
//             pageAll: "", //数据总页数
//             jumpPage: "",//跳转页码
//         }
//     },
//     created() {
//         this.loadTeams();
//     },
//     methods:{
//         loadTeams(){
//             getData(param,this.pageNo,this.pageSize)
//                 .then((resp)=>{
//                     this.list=resp.data.data;
//                     this.pageSize=resp.data.pageSize;
//                     this.pageNo=resp.data.pageNo;
//                     this.pageAll=resp.data.pageAll;
//                     console.log(this.pageNo)
//                     //console.log(resp.data.data)
//                 })
//         },
//         pageClick(){
//             this.loadTeams(); //获取列表数据
//             window.scrollTo(0,500); //页面滚动到顶部
//         },
//         //点击页码或跳转指定页码
//         goPage(event){
//             if(event != this.pageNo && event != ""){
//                 this.pageNo = event
//                 this.loadTeams(); //获取列表数据
//                 window.scrollTo(0,500); //页面滚动到顶部
//             }
//         },
//     },
//     computed: {
//         pagesAll() {
//             // 开始数字
//             var leftNum = 1;
//             // 结束数字
//             var rightNum = this.pageAll;
//             // 存储页码数组
//             var pageArray = [];
//             // 显示页码的数量 最好是个单数
//             var showNum = 5;
//             // 因为是单数向上取整获取到中间的数字
//             var centerNum = Math.ceil(showNum / 2);
//             // 判断分析当总页数超过showNum展示页数时，需要判断分页情况
//             //1、在最左边第一个或者在centerNum的前面
//             //2、在中间
//             //3、最右边最后一个
//             if (this.pageAll >= showNum) {
//                 // 中间centerNum时左右都加上（centerNum-1)
//                 if (this.pageNo > centerNum && this.pageNo < this.pageAll - (centerNum - 1)) {
//                     //一定要用Number格式化一下获取的数据,防止获取的是字符串而不是数字
//                     leftNum = Number(this.pageNo) - (centerNum - 1)
//                     rightNum = Number(this.pageNo) + (centerNum - 1)
//                 } else {
//                     //最左边或者在showNum的中间
//                     if (this.pageNo <= centerNum) {
//                         leftNum = 1
//                         rightNum = showNum
//                         // 最右边时结束是总条数，开始是showNum减去1
//                     } else {
//                         rightNum = this.pageAll
//                         leftNum = this.pageAll - (showNum - 1)
//                     }
//                 }
//             }
//             while (leftNum <= rightNum) {
//                 pageArray.push(leftNum)
//                 leftNum++
//             }
//             return pageArray
//         }
//     },
// }