<template>
    <div class="order">
        <el-menu
            :default-active="curTab"
            mode="horizontal"
            @select="handleSelect"
            active-text-color="#31BBAC"
        >
            <el-menu-item index="0">全部订单</el-menu-item>
            <el-menu-item index="1">待付款</el-menu-item>
            <el-menu-item index="2">待使用</el-menu-item>
            <el-menu-item index="3">待评价</el-menu-item>
            <el-menu-item index="4">退款/售后</el-menu-item>
        </el-menu>
        <Item v-for="(item, index) in curlist" :item="item" :key="index"/>
    </div>
</template>

<script>
import Item from './item.vue'
export default {
    components: {
        Item
    },
    computed: {
        curlist: function () {
            if(this.curTab == '0') {
                return this.list
            }
            return this.list.filter(value =>value.status === +this.curtap)
        }
    },
    methods: {
        handleSelect: function (index) {
            this.changeTab(index)
        }
    },
    props: {
        curTab: {
            type: String,
            default: '0'
        },
        list: {
            type: Array,
            default: () => []
        }
    }
}
</script>

