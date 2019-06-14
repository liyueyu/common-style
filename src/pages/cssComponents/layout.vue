<template>
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
</template>

<script>
    export default {
        name: 'layout'
    }
</script>
