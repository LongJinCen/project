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
                        @submit="handleSubmit"
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
            console.log(this.cart)
            let total = 0
            this.cart.forEach(item => {
                total += item.price * item.count
            });
            return total
        }
    },
    methods: {
        handleSubmit: async function () {
            
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
