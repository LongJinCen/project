<template>
    <el-row class="page-product">
        <el-col :span="19">
            <crumbs :keyword="keyword"/>
            <categroy :types="types" :areas="areas"/>
            <list :list="list"/>
        </el-col>
        <el-col :span="5">
            <amap
                v-if="point.length"
                :width="230"
                :height="290"
                :point="point"
            />
        </el-col>
    </el-row>
</template>

<script>
import Crumbs from '@/components/products/crumbs.vue'
import Categroy from '@/components/products/categroy.vue'
import List from '@/components/products/list.vue'
import Amap from '@/components/public/map.vue'
export default {
    components: {
        Crumbs,
        Categroy,
        List,
        Amap
    },
    data() {
        return {
            list: [],
            types: [],
            areas: [],
            keyword: '',
            point: []
        }
    },
    async asyncData(ctx) {
        const { status: status1, data: data1 } = await ctx.$axios.get('/search/productsarea', {
            params: {
                id: 130300
            }
        })
        const { status: status2, data: data2} = await ctx.$axios.get('/search/sproducts')
        const types = ctx.store.state.home.menu.filter(value => value.name.indexOf('/') === -1 )
        if (status1 === 200 && status2 === 200) {
            return {
                keyword: ctx.route.params.id,
                areas: data1.areas,
                types,
                list: data2.data
            }
        }
    }
}
</script>

<style lang="scss">
@import "@/assets/css/products/index.scss";
</style>