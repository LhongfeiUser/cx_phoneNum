import service from './request'
export const getVip_info=data=>{
  return service({
    url:'api/index/levellist',
    method:'post',
    data,
  })
}
