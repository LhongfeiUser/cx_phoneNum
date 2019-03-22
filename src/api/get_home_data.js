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
//通知
export const get_banner=data=>{
  return service({
    url:'api/index/banner',
    method:'post',
    data,
  })
};
