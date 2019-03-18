<template>
  <div class="inform">
    <mt-header fixed title="系统通知">
      <router-link to="/user" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <mt-loadmore :bottom-method="loadBottomUse"
                 :bottomPullText='bottomText'
                 :bottom-all-loaded="allLoaded"
                 :auto-fill=false
                 ref="loadmore">
      <ul class="inform_list">
        <li v-for="(item,index) in getScoreLog" :key="index" @click="to_detail(item.zn_id)">
          <h3>【{{item.zn_title}}】</h3>
          <p>{{item.zn_content}}</p>
          <span>{{item.zn_creattime}}</span>
        </li>
      </ul>
    </mt-loadmore>
  </div>
</template>

<script>
  import {get_inform} from "../../api/user";
  import {formatDate} from "../../assets/js/dateTime";

  export default {
    data() {
      return {
        getScoreLog: [],
        pageNo: 1,
        allLoaded: false,
        bottomText: '上拉加载数据...',
      }
    },
    created(){
      this.inform_list(1)
    },
    methods: {
      inform_list(pageNo) {
        get_inform({page: pageNo}).then( res => {
           res.forEach((item,index)=>{
            let d =new Date(item.zn_creattime);
            item.zn_creattime=formatDate(d)
          });
          if(res.length===0){
            this.allLoaded = true;// 若数据已全部获取完毕
          }
          this.getScoreLog=this.getScoreLog.concat(res);
        })
      },
      to_detail(item) {
        this.$router.push('/user/inform/detail/' + item);
      },
      loadBottomUse() {
        this.pageNo += 1;
        setTimeout(()=>{
          this.$refs.loadmore.onBottomLoaded();
          this.inform_list(this.pageNo)
        },1500);
      },
    }
  }
</script>

<style scoped lang="scss">
  .inform_list {
    margin-top: 40px;
    li {
      padding: .45rem .5rem .2rem;
      background-color: #fff;
      margin-bottom: .2rem;
      h3 {
        font-size: 1em;
        font-weight: 600;
        color: #555;
        margin-bottom: .2rem;
      }
      p {
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        text-indent: .25rem;
        text-align: justify;
        line-height: .4rem;
        font-size: .8em;
      }
      span {
        width: 100%;
        display: inline-block;
        font-size: .8em;
        margin-top: .2rem;
        text-align: right;
      }
    }
  }
</style>
