<template>
    <div class="page-cart">
        <el-row>
            <el-col
                v-if="cart.length"
                :span="24"
                class="m-cart"
            >
                <list :cart-data="cart"/>
                <p>
                    应付金额: <em class="money">¥{{ total }}</em>
                </p>
                <div class="post">
                    <el-button
                        type="primary"
                        @click="handleSubmit"
                    >
                        提交订单
                    </el-button>
                </div>
            </el-col>
            <el-col v-else class="empty">
                购物车为空
            </el-col>
        </el-row>
    </div>
</template>

<script>
import List from '@/components/cart/list.vue'
export default {
    components: {
        List
    },
    data() {
        return {
            cart: []
        }
    },
    computed: {
        total: function () {
            let total = 0
            this.cart.forEach(item => {
                total += item.price * item.count
            });
            return total
        }
    },
    methods: {
        handleSubmit: async function () {
            const order = {
                total: this.total,
                cartNo: this.cartNo,
                count: this.cart[0].count,
            }
            const result  = await this.$axios.post('/order/create', order)
            if(result.status === 200) {
                this.$router.push('/order')
            }
        }
    },
    async asyncData (ctx) {
        let { status, data } = await ctx.$axios.post('/cart/getCart', {
            id: ctx.query.id
        })
        if(status === 200) {
            return {
                cart: [{
                    name: data.data.name,
                    price: +data.data.price,
                    count: 1
                }],
                cartNo: ctx.query.id
            }
        }
    }
}
</script>

<style lang="scss">
@import "@/assets/css/cart/index.scss"
</style>
