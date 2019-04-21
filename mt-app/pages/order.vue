<template>
    <div class="page-order">
        <el-row>
            <el-col :span="5">
                <Menu
                    :changeTab="changeTab"
                    :curTab="curTab"
                />
            </el-col>
            <el-col :span="18">
                <Order
                    :curTab="curTab"
                />
            </el-col>
        </el-row>
    </div>
</template>

<script>
import Menu from '@/components/order/menu.vue'
import Order from '@/components/order/order.vue'
export default {
    data() {
        return {
            curTab: '0'
        }
    },
    components: {
        Menu,
        Order
    },
    methods: {
        changeTab: function (tab) {
            this.curTab = tab
        }
    },
    mounted() {
        
    },
}
</script>

<style lang="scss">
@import "@/assets/css/order/index.scss"
</style>

