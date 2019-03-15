import service from './request'

//图片验证
export const get_picyzm=params=>{
    return service({
      url:'api/index/check_picyzm',
      method:'get',
      params,
    })
};

//通知列表
export const get_inform=data=>{
  return service({
    url:'api/user/zhannei_list',
    method:'post',
    data,
  })
};
