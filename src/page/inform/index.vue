<template>
  <div class="inform">
    <mt-header fixed title="系统通知">
      <router-link to="/user" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <mt-loadmore :bottom-method="loadBottomUse"
                 :bottom-all-loaded="allLoaded"
                 :bottomPullText='bottomText'
                 ref="loadmore">
      <ul class="inform_list">
        <li v-for="i in 6" :key="i" @click="to_detail(i)">
          <h3>【通知】</h3>
          <p>
            我们还可以考虑到系统的“跨行销售”和“上游销售”。这个要素对于
            消费者行为的各个角度来说都是有效的。营销需要综合考虑各个时间消
            费者行为的其他角度。
          </p>
          <span>2019-03-08   13:0{{i}}</span>
        </li>
      </ul>
    </mt-loadmore>
  </div>
</template>

<script>
  import {get_inform} from "../../api/user";

  export default {
    data() {
      return {
        getScoreLog: [],
        pageNo: 1,
        allLoaded: false,
        bottomText: '上拉加载更多...',
        totalCount: '',
      }
    },
    created(){
      this.inform_list(1)
    },
    methods: {
      inform_list(pageNo) {
        get_inform({page: pageNo}).then(res => {
          /*if (res.length === 0) {
            this.allLoaded = true;
          }*/
          console.log(res);
        })
      },
      to_detail(item) {
        this.$router.push('/user/inform/detail/' + item);
      },
      loadBottomUse() {
        this.pageNo += 1;
       /* if (this.pageNo === this.totalGetCount) {
          this.allLoaded = true;
        }*/
        console.log(this.pageNo);
        setTimeout(() => {
          this.inform_list(this.pageNo)
        }, 1500);
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
        display: -webkit-box;
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
