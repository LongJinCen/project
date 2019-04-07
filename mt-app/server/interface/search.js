import Router from 'koa-router'
import Pio from '../dbs/models/pio'

const router = new Router({
  prefix: '/search'
})

router.get('/hotplace', async (ctx) => {
  let city = ctx.query.city ? ctx.query.city : '三亚'
  const data = await Pio.find({ city })
  ctx.body = {
    hotPlace: data
  }
})


export default router