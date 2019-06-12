<template>
  <div class="root-page">
    <h1></h1>
    <h3>主要部件</h3>
    <ul>
        <li>layout</li>
        <li>tab</li>
        <li>panel</li>
        <li>modal</li>
        <li>link</li>
        <li>form-item</li>
    </ul>
    <div>
        <div class="layout-wrap">
            <div class="ui-flex-grid vertical-center horizontally-stretch" style="height: 100%">
                <div class="ui-flex-grid-none bg-gray-3">header</div>
                <div class="ui-flex-grid-item ui-flex-grid horizontally-stretch" >
                    <div class="ui-flex-grid-none bg-gray-5">left</div>
                    <div class="ui-flex-grid-item bg-gray-9">
                        content
                    </div>
                </div>
            </div>
        </div>
        <div class="layout-wrap">
            <div class="ui-flex-grid vertical-center horizontally-stretch" style="height: 100%">
                <div class="ui-flex-grid-none bg-gray-3">header</div>
                <div class="ui-flex-grid-item ui-flex-grid horizontally-stretch" >
                    <div class="ui-flex-grid-none bg-gray-5">left</div>
                    <div class="ui-flex-grid-item vertical-center ui-flex-grid horizontally-stretch">
                        <div class="ui-flex-grid-none bg-gray-7">top</div>
                        <div class="ui-flex-grid-item bg-gray-9 scroll-auto">
                                content
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="layout-wrap">
            <div class="ui-flex-grid vertical-center horizontally-stretch" style="height: 100%">
                <div class="ui-flex-grid-none bg-gray-3">header</div>
                <div class="ui-flex-grid-item ui-flex-grid horizontally-stretch" >
                    <div class="ui-flex-grid-none bg-gray-5">left</div>
                    <div class="ui-flex-grid-item vertical-center ui-flex-grid horizontally-stretch">
                        <div class="ui-flex-grid-none bg-gray-7">top</div>
                        <div class="ui-flex-grid-item bg-gray-9 scroll-auto">
                                content
                        </div>
                    </div>
                    <div class="ui-flex-grid-none bg-gray-5">right</div>
                </div>
            </div>
        </div>
        <div class="layout-wrap">
            <div class="ui-flex-grid vertical-center horizontally-stretch" style="height: 100%">
                <div class="ui-flex-grid-none bg-gray-3">header</div>
                <div class="ui-flex-grid-item ui-flex-grid horizontally-stretch" >
                    <div class="ui-flex-grid-none bg-gray-5">left</div>
                    <div class="ui-flex-grid-item vertical-center ui-flex-grid horizontally-stretch">
                        <div class="ui-flex-grid-item bg-gray-9 scroll-auto">
                                content
                        </div>
                        <div class="ui-flex-grid-none bg-gray-7">bottom</div>
                    </div>
                    <div class="ui-flex-grid-none bg-gray-5">right</div>
                </div>
            </div>
        </div>
        <div class="layout-wrap">
            <div class="ui-flex-grid vertical-center horizontally-stretch" style="height: 100%">
                <div class="ui-flex-grid-none bg-gray-3">header</div>
                <div class="ui-flex-grid-item ui-flex-grid horizontally-stretch" >
                    <div class="ui-flex-grid-none bg-gray-5">left</div>
                    <div class="ui-flex-grid-item bg-gray-9">
                        content
                    </div>
                    <div class="ui-flex-grid-none bg-gray-5">right</div>
                </div>
                <div class="ui-flex-grid-none bg-gray-7">footer</div>
            </div>
        </div>
    </div>
      <div>

      </div>
      <modal></modal>
  </div>
</template>

<script>
import Modal from "../components/Modal/Modal"
export default {
  name: 'Root',
    components: {Modal},
    props: {
    msg: String
  }
}
</script>

<style lang="less" scoped>
    .root-page {
        padding: 30px;
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

</style>
