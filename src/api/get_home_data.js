import service from './request'
export const getVip_info=data=>{
  return service({
    url:'api/index/levellist',
    method:'post',
    data,
  })
}
//通知
export const get_note=data=>{
  return service({
    url:'api/news/tongzhi',
    method:'post',
    data,
  })
};

//banner
export const get_banner=data=>{
  return service({
    url:'api/index/banner',
    method:'post',
    data,
  })
};

//get_order
export const get_order=data=>{
  return service({
    url:'api/zhifu/order_add',
    method:'post',
    data,
  })
};

//分享

export const get_share=data=>{
  return service({
    url:'api/user/fenxiang',
    method:'post',
    data,
  })
};
