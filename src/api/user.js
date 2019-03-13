import service from './request'
export const get_picyzm=params=>{
    return service({
      url:'api/index/check_picyzm',
      method:'get',
      params,
    })
}
