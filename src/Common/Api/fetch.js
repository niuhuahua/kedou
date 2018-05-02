import fetch from '@system.fetch'
import prompt from '@system.prompt'
export default class http {
    static async request(method,url,data){
        let resurl = 'http://tshop.zrbao.net/index.php/api/';
        let baseData = {'Tadpole':{"Tadpole":{"Head": { "channel": "01", "version": "1.0.0", "service": "dataQuery" }, "Body": { }}} };
        Object.assign(baseData['Tadpole']['Tadpole']['Body'],data)
        return new Promise((resolve, reject) => {
            fetch.fetch({
            url: resurl + url,
            data: data,
            header: baseData,
            method: method,
            success: function(data) {
                console.log("请求正确=======>success--->",data)
                resolve(data)
            },
            fail: function(data, code) {
                console.log("请求失败============>",data)
                reject(data)
            }
       })
     })
  }

  static get(url,data){
    return this.request('get',url,data)
  }




}