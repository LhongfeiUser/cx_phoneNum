import service from './request'

export const get_userInfo=data=>{
  return service({
    url:'api/user/massage',
    method:'post',
    data
  })
};
