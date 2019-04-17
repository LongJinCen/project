<template>
    <div>
        <dl class="m-categroy">
            <dt>按拼音首字母选择：</dt>
            <dd
                v-for="item in list"
                :key="item"
            >
                <a :href="'#city-' + item">{{ item }}</a>
            </dd>
        </dl>
        <dl
            v-for="(item, key) in block"
            :key="key"
            class="m-categroy-section"
        >
            <dt :id="'city-' + key">{{ key }}</dt>
            <dd
                @click="handleClick"
            >
                <span v-for="c in item" :key="c.id">{{ c.name }}</span>
            </dd>
        </dl>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
        }
    },
    computed: {
        block () {
            const province = this.$store.state.changecity.province
            const block = {}
            province.forEach(p => {
                p.cityInfoList.forEach(c => {
                    if(block[c.firstChar]) {
                        block[c.firstChar].push(c)
                    } else {
                        block[c.firstChar] = []
                    }
                })
            });
            return block
        }
    },
    methods: {
        handleClick: function (event) {
            const ele = event.target
            this.$store.dispatch('geo/setPosition', {
                address: ele.innerText
            })
            this.$router.push({
                path: '/'
            })
        }
    },
}
</script>

<style lang="scss">
@import "@/assets/css/changeCity/categroy.scss"
</style>
