import api from './http.js'
var storage = require('@system.storage')
let router = require("@system.router")
//获取订单列表
export  function getOrderList(param){
  return api.getApi("/Order1000/get_order_list",param)
         .then((res)=>{
           let  value = JSON.parse(res.data)
           console.log("getList-->",JSON.stringify(value))
          if(value.Tadpole.Head.code=="S0000"){
            console.log("返回的结果成功了------->")
            return Promise.resolve(value.Tadpole.Body)
           }else{
            if(value.Tadpole.Head.code=="E0020"){
              router.push({
                uri:'Login'
              })
            }
            console.log("--返回的结果---失败了---->")
            return Promise.reject(value.Tadpole.Head.msg)
          }
         }).catch((err)=>{
          return Promise.reject('获取订单列表失败')
         })
  
}