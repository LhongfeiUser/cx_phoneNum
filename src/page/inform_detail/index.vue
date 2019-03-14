<template>
    <div class="inform_detail">
      <mt-header fixed title="通知详情">
        <router-link to="/user/inform" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
      </mt-header>
      <main>
        <div>
          <span class="now_date">2019-03-08   13:00</span>
          <div class="detail_content">
            营销策划的核心要点是有机组合策划各要素，最大化提升品牌资产。品
            牌识别系统、品牌化战略与品牌架构就好像宪法，企业的营销传播活动
            就像组织与个人日常的政治、经济与社会活动，把营销策略、广告创意
            、终端陈列与促销当作品牌战略管理的工作，就等于把公民日常的社会
            活动如升学、就医、谈恋爱、婚嫁当作宪法的制定与实施了。像全国人
            大的工作职责一样，企业品牌战略管理部门的职责首先是品牌宪法的制
            定，然后是执法检查即对品牌的营销策略、广告公关促销等传播活动的
            每一个环节是否有效地体现品牌宪法进行检查。

            机构品牌营销顾问认为，快速发展的互联网时代让各大中小型企业不再
            忽视网络互动营销的潜在市场，如今正是网络营销的黄金时代。营销策
            划也注定离不开网络营销这一块。

            网络营销时代的营销方法不断的创新，事件营销就是其中一种方式。事
            件营销又被称为“事件炒作”。

            通过事件营销一夜成名的例子有许多。其背后拥有一支经验丰富的策划
            团队。事件营销就是经过策划团队的精密策划来为你的企业或是网站亦
            或是个人来打造独特卖点，然后通过在网上雇佣大量水军帮其转载传播
            ，最后经过媒体宣传从而达到知名度的迅速提升。
          </div>
        </div>
      </main>
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped lang="scss">
  main{
    color:#555;
    margin-top:40px;
    padding:.5rem;
    .now_date{
      display: inline-block;
      font-size:.8em;
      margin-bottom:.25rem;
    }
    .detail_content{
      font-size:.8em;
      text-align: justify;
      text-indent: .25rem;
      img{
        max-width:100%;
        height:auto;
        vertical-align: center;
      }
    }
  }

</style>
