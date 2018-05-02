// // import fetch from './fetch'
// export default class User {
//     static async login(param){//登录
//         let url = "user1000/user_login";
//         // return fetch.get(url,param);
//     }

// }

import api from './http.js'
var storage = require('@system.storage')

export function login(username, password) {
  return api.login({
    user_mobile: username,
    user_pass: password
  })
    .then((response) => {
      var value = JSON.parse(response.data)
      console.log("-------执行登录--->",JSON.stringify(value))
      if(value.Tadpole.Head.code=="S0000"){
        console.log("lohin---success--")
        storage.set({
          key:'token',
          value:value.Tadpole.Body[0].token
        })
        console.log("登录的token----->",JSON.stringify(value.Tadpole.Body[0].token))
        storage.set({
          key:'user',
          value:value.Tadpole.Body[0]
        })
        return Promise.resolve(value.Tadpole.Body)
      }else{
        console.log("login----->err======>")
        return Promise.reject(value.Tadpole.Head.msg)
      }
    }).catch((err) => {
      return Promise.reject('登录失败')
    })
}

export function getUserInfo(param){
  return api.getApi('/user1000/user_get',param).then((res)=>{
  //  console.log("获取用户信息---成功------>",JSON.stringify(res))
  }).catch((err)=>{
    console.log("用户信息---失败------>",JSON.stringify(err))
  })
}