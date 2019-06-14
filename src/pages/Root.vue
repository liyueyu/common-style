<template>
    <div class="root-page ui-flex-grid vertical-center horizontally-stretch">
      <div class="ui-flex-grid-none ">
          <header class="page-header border-b">
              Common
              <!-- Style Doc-->
          </header>
      </div>
      <div class="ui-flex-grid-item ui-flex-grid horizontally-stretch" >
          <div class="ui-flex-grid-none left-menu">
              <left-menu></left-menu>
          </div>
          <div class="ui-flex-grid-item">
              <main-page></main-page>
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
    props: {
    msg: String
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
    }
</style>
