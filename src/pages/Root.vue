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
    .root-page {
        height: 100%;
        min-width: 800px;
        background-color: #f1f3f5;
        .page-header {
            padding: 20px 30px;
            font-size: 18px;
            font-weight: bold;
            color: #fff;
            background-color: #1d415d ;
        }
        .left-menu {
            width: 220px;
            height: 100%;
        }
        .layout-wrap {
            display: inline-block;
            width: 20%;
            vertical-align: top;
            height: 200px;
            padding: 20px 20px 0 0;
        }
        .bg-gray-3 {
            background-color: #333;
        }
        .bg-gray-5 {
            background-color: #555;
        }
        .bg-gray-7 {
            background-color: #777;
        }
        .bg-gray-9 {
            background-color: #999;
        }
        // 展示区
        .style-wrap {
            margin-bottom: 20px;
        }
        // 代码区域
        .code-wrap {
            border: 1px solid #e1eaf1;
            line-height: 20px;
        }
        .text-wrap {
            line-height: 24px;
        }
    }
</style>
