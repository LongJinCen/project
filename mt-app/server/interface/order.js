import Order from '../dbs/models/order'
import Cart from '../dbs/models/cart'
import md5 from 'crypto-js/md5'
import Router from 'koa-router'

const router = new Router({
    prefix: '/order'
})


router.post('/create', async ctx => {
    const order = ctx.request.body
    const cart = await Cart.findOne({
        carNO: order.carNO
    })
    const time = Date()
    const id = md5(Math.random() * 10000 + time).toString()
    const newOrder = new Order({
        ...order,
        id,
        time,
        imgUrl: cart.detail[0].imgs[0].url,
        status: 1,
        name: cart.detail[0].name
    })
    const result = await newOrder.save()
    await cart.remove()
    if(result) {
        ctx.body = {
            code: 1,
            message: '创建成功'
        }
    } else {
        ctx.body = {
            code: -1,
            message: '创建失败'
        }
    }
})

router.get('/list', async ctx => {
    const result = await Order.find()
    if (result) {
        ctx.body = {
            list: result
        }
    } else {
        ctx.body = {
            message: '查询失败'
        }
    }
})

export default router