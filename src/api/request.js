import axios from 'axios'
import qs from 'qs'
import cookie from 'js-cookie'
axios.defaults.withCredentials = true;
const service =axios.create({
  baseURL:process.env.NODE_ENV,
  timeout:3000
});
service.interceptors.request.use(config => {
  config.headers['X-Requested-With'] = 'xmlhttprequest';
  if(config.method==='post'){
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    config.data.hy_openid=JSON.parse(cookie.get('userInfo')).hy_openid;
    config.data.hy_touxiang=JSON.parse(cookie.get('userInfo')).hy_touxiang;
    if(config.data instanceof FormData){
      config.headers['Content-Type'] = 'multipart/form-data;boundary';
    }else {
      config.data = qs.stringify({...config.data});
    }
  }else {
    config.params = {...config.params};
   /* config.params.hy_openid=JSON.parse(cookie.get('userInfo')).hy_openid;
    config.params.hy_touxiang=JSON.parse(cookie.get('userInfo')).hy_touxiang;*/
  }
  return config;
}, error => {  //请求错误处理
  Promise.reject(error)
});

service.interceptors.response.use(
  response => {  //成功请求到数据
    //这里根据后端提供的数据进行对应的处理
    if(response.status===200){
      return response.data;
    } else{
     throw error('请求数据有误，请刷新重试')
    }
  },
  error => {  //响应错误处理
    return Promise.reject(error)
  }
);

export default service;
