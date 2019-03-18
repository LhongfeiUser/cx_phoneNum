<template>
  <div class="about">
    <mt-header fixed title="关于我们">
      <router-link to="/user" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <main>
      <div class="about_content" v-html="about_content.content"></div>
    </main>
  </div>
</template>

<script>
  import {getAbout_us} from "../../api/user";
  export default {
    data() {
      return {
        about_content:'',
      }
    },
    created(){
       this.about_us();
    },
    methods: {
      about_us(){
        getAbout_us({}).then(res=>{
          this.about_content=res.data;
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .about {
    background: #fff;
    min-height: 100vh;
  }

  main {
    margin-top: 40px;
    .about_content {
      padding: .8rem .5rem 0;
      font-size: .8em;
      text-align: justify;
      text-indent: .25rem;
      color: #555;
      line-height: .5rem;
     /deep/ img {
        max-width: 100%;
        height: auto;
        vertical-align: middle;
      }
    }
  }
</style>
