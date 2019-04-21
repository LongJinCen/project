<template>
    <div class="list-item">
        <img :src="item.imgUrl" :alt="item.name">
        <div>
            <p>{{ item.name}}</p>
            <p>数量: {{ item.count }}</p>
        </div>
        <p class="price">总价: ${{ item.total }}</p>
        <p class="status">{{ statusText[item.status]}}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            statusText: {
                0: '待付款',
                1: '待使用',
                2: '待评价',
                3: '退款'
            }
        }
    },
    props: {
        item: {
            type: Object,
            default: () => ({})
        }
    }
}
</script>
