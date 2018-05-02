import fetch from '@system.fetch'
import prompt from '@system.prompt'
import storage from '@system.storage'

 function request(method,url,data){
    let resurl = 'http://tshop.zrbao.net/index.php/api/';
    // let resurl = 'http://tshop.zrbao.net/index.php/apiwl/' 
    let baseData = {'Tadpole':{"Tadpole":{"Head": { "channel": "01", "version": "1.0.0", "service": "dataQuery" }, "Body": { }}} };
    Object.assign(baseData['Tadpole']['Tadpole']['Body'],data)
    return new Promise((resolve, reject) => {
        fetch.fetch({
        url: resurl + url,
        data: baseData,
        method: method,
        success: function(data) {
            console.log("请求的参数------baseData----->",JSON.stringify(baseData))
            console.log("requestData---->",JSON.stringify(data))
            resolve(data)
        },
        fail: function(data, code) {
            console.log("---------请求失败============>",JSON.stringify(data))
            reject(data)
        }
   })
 })
}

function get(url,data){
   return request('get',url,data)
} 

export default {
    /**
   * 登录
   */
  login(params) {
    return get('user1000/user_login', params)
  },
  getApi(url,data){
      return get(url,data);
  }
}




