<template>
    <div class="root-page ui-flex-grid vertical-center horizontally-stretch">
      <div class="ui-flex-grid-none ">
          <header class="page-header">
              Common
              <!-- Style Doc-->
          </header>
      </div>
      <div class="ui-flex-grid-item ui-flex-grid horizontally-stretch" >
          <div class="ui-flex-grid-none left-menu">
              <left-menu :menuType="menuType" @typeValue="changeTypeName"></left-menu>
          </div>
          <div class="ui-flex-grid-item scroll-auto">
              <main-page :pageType="menuType"></main-page>
          </div>
      </div>
    </div>
</template>

<script>
import LeftMenu from './LeftMenu'
import MainPage from './MainPage'

export default {
  name: 'Root',
    components: {
        MainPage,
        LeftMenu
    },
    data () {
      return {
          menuType: 'common'
      }
    },
    methods: {
      changeTypeName (newValue) {
          this.menuType = newValue
      }
    }
}
</script>

<style lang="less">
    @import "index";
</style>
