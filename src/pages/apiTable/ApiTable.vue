<template>
    <div class="padding-t-20">
        <table class="ui-normal-table">
            <thead>
                <tr>
                    <th>参数</th>
                    <th>说明</th>
                    <th>类型</th>
                    <th>可选值</th>
                    <th>默认值</th>
                </tr>
            </thead>
            <tbody>
            <template v-if="data && data.length">
                <tr v-for="idx in data">
                    <td v-for="value in idx">
                        {{value}}
                    </td>
                </tr>
            </template>
            <template v-else>
                <tr >
                    <td colspan="5"><div class="text-center">无参数</div></td>
                </tr>
            </template>
            </tbody>
        </table>
    </div>
</template>
<script>
    export default {
        name: 'ApiTable',
        props: {
            data: []
        }
    }
</script>

<style lang="less" scoped>

</style>