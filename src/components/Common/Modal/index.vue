<template>
    <div id="modal">
        fadsfdasfdsaf
        <div class="modal-content">
            <p class="modal-title">{{ title }}</p>
            <div class="">
                <input
                    type="text"
                    v-bind:placeholder="placeholder"
                    v-model="typetext"
                />
            </div>
            <p class="modal-operate">
                <v-touch @tap="handleTaps('cancle')">取消</v-touch>
                <v-touch @tap="handleTaps('confirm')">确定</v-touch>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Modal',
    props: {
        title: {
            type:String,
            default: '新建'
        },
        placeholder: {
            type: String,
            default: '请输入'
        },
        handleCancle: Function,
        handleConfirm: Function
    },
    data() {
        return {
            typetext: ''
        }
    },
    methods: {
        handleTaps(type) {
            switch(type) {
                case 'cancle':

                break;
                case 'confirm':

                break;
                default:
                break;
            }
        }
    },
}
</script>

<style scoped>
#modal {
    position: fixed;
    z-index: 100;
    width: 100px;
    height: 100px;
    background-color: red;
}
</style>

