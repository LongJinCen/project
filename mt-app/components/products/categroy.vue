<template>
    <div class="m-product-category">
        <dl class="classic">
            <dt>分类</dt>
            <dt>全部</dt>
            <dd
                v-for="(item, index) in types"
                :key="index"
            >
                <iselect
                    :name="item.name"
                    :list="item.child"
                />
            </dd>
        </dl>
        <dl class="classic">
            <dt>区域</dt>
            <dt>全部</dt>
            <dd
                v-for="(item, index) in areas"
                :key="index"
            >
                <iselect
                    :name="item.name"
                    :list="item.module"
                />
            </dd>
        </dl>
    </div>
</template>

<script>
import iselect from './iselect.vue'
export default {
    components: {
        iselect
    },
    props: {
        types: {
            type: Array,
            default(){
                return []
            }
        },
        areas: {
            type: Array,
            default () {
                return []
            }
        }
    }
}
</script>