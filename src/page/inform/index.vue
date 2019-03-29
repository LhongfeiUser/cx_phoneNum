<template>
  <div class="inform">
    <mt-loadmore :bottom-method="loadBottomUse"
                 :bottomPullText='bottomText'
                 :bottom-all-loaded="allLoaded"
                 :auto-fill=false
                 ref="loadmore">
      <ul class="inform_list">
        <li v-for="(item,index) in getScoreLog" :class="item.zn_state===2?'font_color':''" :key="index" @click="to_detail(item.zn_id)">
          <h3>【{{item.zn_title}}】</h3>
          <p v-html="item.zn_content"></p>
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
            let d =new Date(item.zn_creattime*1000);
            item.zn_creattime=formatDate(d);
          });
          if(res.length===0){
            this.allLoaded = true;// 若数据已全部获取完毕
          }
          this.getScoreLog=this.getScoreLog.concat(res);
        })
      },
      to_detail(item_id) {
        this.$router.push('/user/inform/detail/' + item_id);
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
    li {
      padding: .45rem .5rem .2rem;
      background-color: #fff;
      margin-bottom: .2rem;
      color:#515a6e;
      h3 {
        font-size: 1em;
        font-weight: 600;
        color: #17233d;
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
    li.font_color{
      color: #c5c8ce!important;
      h3{
        color:#c5c8ce;
      }
    }
  }
</style>
