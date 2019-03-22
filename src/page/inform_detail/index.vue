<template>
  <div class="inform_detail">
    <main>
      <div>
        <span class="now_date">{{inform_dataList.zn_creattime}}</span>
        <div class="detail_content">
          {{inform_dataList.zn_content}}
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import {get_inform_detail} from "../../api/user";
  import {formatDate} from "../../assets/js/dateTime";
  export default {
    data() {
      return {
        inform_dataList:[],
      }
    },
    created() {
      this.getDetail()
    },
    methods: {
      getDetail() {
        get_inform_detail({zn_id:Number(this.$route.params.id)}).then(res => {
          console.log(res);
          if(res){
            let d =new Date(res.data.zn_creattime);
            res.data.zn_creattime=formatDate(d);
            this.inform_dataList=res.data;
          }else {
            throw error(res.msg)
          }
        })
      }
    },
  }
</script>

<style scoped lang="scss">
  .inform_detail{
    background-color: #fff;
  }
  main {
    color: #555;
    padding: .5rem;
    .now_date {
      display: inline-block;
      font-size: .8em;
      margin-bottom: .25rem;
    }
    .detail_content {
      font-size: .8em;
      text-align: justify;
      word-wrap: break-word;
      /*text-indent: .25rem;*/
     /deep/ img {
        max-width: 100%;
        height: auto;
        vertical-align: middle;
      }
    }
  }

</style>
