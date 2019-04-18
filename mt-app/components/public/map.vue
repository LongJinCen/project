<template>
    <div 
        :id="id"
        :style="{ width: width + 'px', height: height + 'px', margin: '34px auto'}"
    />
</template>
// TODO: 地图部分
<script>
export default {
    data() {
        return {
            id: 'map',
            key: 'rfAvrxNFKqADgT8QOZ23vmplzjIwrEeN'
        }
    },
    props: {
        width: {
            type: Number,
            default: 300
        },
        height: {
            type: Number,
            default: 300
        },
        point: {
            type: Array,
            default () {
                return [116.46, 39.92]
            }
        }
    },
    mounted() {
        console.log('enter')
        let self = this
        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = 'http://api.map.baidu.com/api?v=2.0&ak=' + self.key
        script.onload = function () {
            console.log(window.BMap, 'xxx')
            var map = new BMap.Map(self.id);
            // 创建地图实例  
            var point = new BMap.Point(116.404, 39.915);
            // 创建点坐标  
            map.centerAndZoom(point, 15);
        }
        document.body.appendChild(script)
    },
}
</script>