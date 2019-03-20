import service from './request'

//通知列表
export const get_inform=data=>{
  return service({
    url:'api/user/zhannei_list',
    method:'post',
    data,
  })
};

//通知详情
export const get_inform_detail=data=>{
  return service({
    url:'api/user/zhannei_detail',
    method:'post',
    data,
  })
};

//图片验证
export const get_picyzm=params=>{
  return service({
    url:'api/index/check_picyzm',
    method:'get',
    params,
  })
};

//短信验证
export const note_verify=data=>{
  return service({
    url:'api/user/massage_edit_hqdx',
    method:'post',
    data,
  })
};

//修改个人信息

export const amend_info=data=>{
  return service({
    url:'api/user/massage_edit',
    method:'post',
    data,
  })
};

// 关于我们

export const getAbout_us=data=>{
  return service({
    url:'api/news/guanyuwomen',
    method:'post',
    data,
  })
};

//帮助中心列表

export const help_center=data=>{
  return service({
    url:'api/news/help_list',
    method:'post',
    data
  })
};

//帮助列表
export const get_help_detail=data=>{
  return service({
    url:'api/news/help_detail',
    method:'post',
    data
  })
};
