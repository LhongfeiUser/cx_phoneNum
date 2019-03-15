import service from './request'
export const get_discover=data=>{
   return service({
     url:'api/news/list',
     method:'post',
     data
   })
};

export const get_discover_detail=data=>{
  return service({
    url:'api/news/detail',
    method:'post',
    data
  })
};
