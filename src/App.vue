<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {

  },
  data () {
    return {
      res: {}
    }
  },
  mounted () {
    // 本地加载请求静态json文件的形式
    // this.axios.get('/mock/user/login.json').then((res) => {
    //   this.res = res
    // })
    // 通过easymock平台
    // 本地集成 mock js
    this.axios.get('/user/login').then((res) => {
      this.res = res
    })
  }
}
</script>

<style >

</style>
