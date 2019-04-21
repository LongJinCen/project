<template>
    <div class="menu">
        <dl>
            <dt>我的美团</dt>
            <template v-for="item in menu">
                <dt :key="item.title">{{ item.title }}</dt>
                <dd v-for="it in item.children" :key="it.key" :id="it.tab" @click="handleClick">
                    {{ it.content }}
                    <span v-if="menuData[it.key] && menuData[it.key] > 0"> {{ menuData[it.key]}}</span>
                    <i class="el-icon-arrow-right"></i>
                </dd>
            </template>
        </dl>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menu: [{
                title: '我的订单',
                children: [{
                    key: 'allOrder',
                    content: '全部订单',
                    tab: '0'
                }, {
                    key: 'pendingPayment',
                    content: '待付款',
                    tab: '1'
                }, {
                    key: 'pendingUse',
                    content: '待使用',
                    tab: '2'
                }, {
                    key: 'pendingEvaluate',
                    content: '待评价',
                    tab: '3'
                }, {
                    key: 'aftersale',
                    content: '退款/售后',
                    tab: '4'
                }]
            },{
                title: '我的收藏',
                children: [{
                    key: 'business',
                    content: '收藏的商家'
                }, {
                    key: 'groupBuying',
                    content: '收藏的团购'
                }]
            },{
                title: '抵用券',
                children: [{
                    key: 'availabel',
                    content: '可用券'
                }, {
                    key: 'invalid',
                    content: '失效券'
                }]
            }]
        }
    },
    props: {
        menuData: {
            type: Object,
            default: () => ({
                pendingPayment: 1
            })
        },
        changeTab: Function
    },
    methods: {
        handleClick: function (e) {
            if(e.target.id) {
                this.changeTab(e.target.id)
            }
        }
    },
}
</script>
