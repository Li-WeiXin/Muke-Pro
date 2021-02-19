// 首页 注重复用性
<template>
  <div>
    <service-bar></service-bar>
  </div>
</template>

<script>
import ServiceBar from './../components/ServiceBar'
export default {
  name: 'nav-home',
  components: {
    ServiceBar
  }
}
</script>

<style>

</style>
