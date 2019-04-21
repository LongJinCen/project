<template>
    <div class="page-order">
        <el-row>
            <el-col :span="5">
                <Menu
                    :changeTab="changeTab"
                    :curTab="curTab"
                    :menuData="menuData"
                />
            </el-col>
            <el-col :span="18">
                <Order
                    :curTab="curTab"
                    :list="orderList"
                    :changeTab="changeTab"
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
            curTab: '0',
            orderList: [],
            menuData: {}
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
        this.$axios.get('/order/list').then(({ status, data }) => {
            if(status === 200) {
                this.orderList  = data.list
                this.menuData = {
                    allOrder: data.list.length,
                    pendingPayment: data.list.filter(value => value.status == '1').length,
                    pendingUse: data.list.filter(value => value.status == '2'),
                }
            }
        })
    },
}
</script>

<style lang="scss">
@import "@/assets/css/order/index.scss"
</style>

