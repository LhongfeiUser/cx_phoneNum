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

//支付状态
export const isOrder=data=>{
  return service({
    url:'api/user/order_find',
    method:'post',
    data
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

//获取资源
export const get_phone=data=>{
  return service({
    url:'api/user/huoqudianhua',
    method:'post',
    data,
  })
};
