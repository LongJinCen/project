<template>
    <div class="page-detail">
        <el-row>
            <el-col :span="24">
                <crumbs
                    :keyword="keyword"
                    :type="type"
                />
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <summa :meta="product"/>
            </el-col>
        </el-row>
        <el-row class="m-title">
            <el-col :span="24">
                <h3>商家团购及优惠</h3>
            </el-col>
        </el-row>
        <el-row v-if="canOrder || !login">
            <el-col :span="24">
                <list 
                    v-if="login"
                    :list="list"
                />
                <div
                    v-else
                    class="deal-need-login"
                >
                    <img
                        src="//p0.meituan.net/codeman/56a7d5abcb5ce3d90fc91195e5b5856911194.png"
                        alt="登录查看">
                    <span>请登录后查看详细团购优惠</span>
                    <el-button
                        type="primary"
                        round
                    >
                        <a href="/login">立即登录</a>
                    </el-button>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import Crumbs from '@/components/detail/crumbs.vue'
import Summa from '@/components/detail/summary.vue'
import List from '@/components/detail/list.vue'
export default {
    components: {
        Crumbs,
        Summa,
        List
    },
    data() {
        return {
            keyword: '火锅',
            product: {},
            type: '美食',
            list: [{
                photos: [{
                    url: 'http://p0.meituan.net/208.126/deal/4718f907ba21aa1f9677eb15fcf5281166921.jpg@100w_100h_1e_1c',
                    title: 'xxx'
                }],
                name: '精致双人菜品套餐1份',
                solidNum: '1435',
                deadline: '2019-7-21',
                cost1: '88',
                cost2: '158'
            }, {
                photos: [{
                    url: 'http://p0.meituan.net/208.126/deal/4718f907ba21aa1f9677eb15fcf5281166921.jpg@100w_100h_1e_1c',
                    title: 'xxx'
                }],
                name: '2店通用6-8人午餐，包间免费',
                solidNum: '1435',
                deadline: '2019-7-21',
                cost1: '316',
                cost2: '218'
            }],
            login: false
        }
    },
    computed: {
        canOrder: function () {
            return this.list.filter(item => item.photos.length).length
        }
    },
    mounted() {
        this.$axios.get('/search/islogin').then(res => {
            this.login = res.data.islogin
        })
    },
}
</script>

<style lang="scss">
@import "@/assets/css/detail/index.scss"
</style>
