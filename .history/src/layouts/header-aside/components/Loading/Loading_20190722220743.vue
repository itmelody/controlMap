<template>
  <a-spin size="large" spinning :indicator="indicator">
    <slot></slot>
  </a-spin>
</template>

<script>
import { mapState } from 'vuex'
import Logo from '../components/loading-logo/LoadingLogo.vue'
export default {
  name: 'Loading',
  data() {
    return {
      indicator: h => {
        return <Logo></Logo>
      }
    }
  },
  computed: {
    ...mapState('cgadmin', {
      //页面加载提示 ====> login接口resolve后消失
      Spinning: state => state.page.Spinning
    })
  }
}
</script>

<style lang="scss" scoped>
/* ant-Vue spin修改样式*/
/deep/.ant-spin-nested-loading {
  width: 100%;
  height: 100%;
}
/deep/.ant-spin-container {
  width: 100%;
  height: 100%;
}
/deep/.ant-spin-nested-loading > div > .ant-spin {
  height: 100%;
  width: 100%;
  z-index: 4;
}
</style>