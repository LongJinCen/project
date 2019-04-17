import axios from 'axios'
import Router from 'koa-router'

const router = new Router({
    prefix: '/changecity'
})

router.get('/cities', async function (ctx) {
    const { status, data } = await axios.get('https://www.meituan.com/ptapi/getprovincecityinfo/')
    if(status === 200) {
        ctx.body = {
            province: data
        }
    }
})

router.get('/search', async function (ctx) {
    console.log(ctx.request.query)
    const { status, data } = await axios.get('https://apimobile.meituan.com/group/v1/area/search/' + encodeURIComponent(ctx.request.query.key))
    if(status === 200) {
        ctx.body = {
            data
        }
    }
})

export default router