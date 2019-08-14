<template>
    <div class="ui-modal">
        <div v-if="modal" class="ui-overlay fadein"></div>
        <div class="ui-modal-wrapper"
            :style="{width: boxWidth, height:boxHeight}">
            <div class="ui-modal-title">
                <slot name="title">
                    <span>{{title}}</span>
                </slot>
                <span class='ui-modal-close ui-icon ui-close' @click="close"></span>
            </div>
            <div class="ui-modal-body" :style="{'padding-bottom': btnBar ? '58px' : '0'}">
                <div class="ui-modal-content-wrap" :class="bodyContentClass">
                    <slot>
                    </slot>
                </div>
            </div>
            <div class="ui-modal-footer" :class="btnAlign" v-if="btnBar">
                <slot name="bottomLeft"></slot>
                <slot name="footer">
                    <button class="ui-btn ui-btn-gray"
                            @click="cancel">{{cancelText}}
                    </button>
                    <button class="ui-btn ui-btn-theme" :disabled="confirmDisabled"
                            @click="confirm">{{confirmText}}
                    </button>
                </slot>
            </div>
        </div>
    </div>
</template>
<script>

    export default {
        name: 'modal',
        props: {
            title: {
                type: String,
                default: '标题'
            },
            boxWidth: {
                type: String,
                default: '700px'
            },
            boxHeight: {
                type: String,
                default: '460px'
            },
            modal: {
                type: Boolean,
                default: true
            },
            cancelText: {
                type: String,
                default: '取消'
            },
            confirmText: {
                type: String,
                default: '确认'
            },
            confirmDisabled: {
                type: Boolean,
                default: false
            },
            appendToBody: {
                type: Boolean,
                default: false
            },
            btnAlign: {
                type: String,
                default: 'btn-right'
            },
            btnBar: { // 兼容不需要btn bar的场景
                type: Boolean,
                default: true
            },
            bodyContentClass: { // 给body内容层加单独的class
                type: String,
                default: ''
            }
        },
        computed: {
        },
        mounted () {
            if (this.appendToBody) {
                document.body.appendChild(this.$el)
            }
        },

        methods: {
            cancel () {
                this.$emit('cancel')
            },

            close () {
                this.$emit('close')
            },

            confirm () {
                this.$emit('confirm')
            }
        }
    }
</script>
