import Router from 'koa-router'
import Poi from '../dbs/models/poi'
import Area from '../dbs/models/areas'
import axios from 'axios'

const router = new Router({
  prefix: '/search'
})

router.get('/top', async (ctx) => {
  const top = await axios.get('https://www.meituan.com/ptapi/suggest?keyword=' + encodeURIComponent(ctx.query.input))
  ctx.body = {
    code: 0,
    top: top.data.data.suggestItems
  }
})

router.get('/tab', async (ctx) => {
  const { tab } = ctx.query
  const data = await axios.get('https://cd.meituan.com/ptapi/getScenesList?theme=quality&tab='+ tab +'&ci=59&limit=10')
  if (data.status === 200) {
    ctx.body = {
      data: data.data
    }
  }
})

router.get('/hotplace', async (ctx) => {
  let city = ctx.query.city ? ctx.query.city : '三亚'
  const data = await Poi.find({ city })
  ctx.body = {
    hotPlace: data
  }
})

router.get('/productsarea', async (ctx) => {
  const id = ctx.query.id
  const data = await Area.findOne({ id })
  ctx.body = {
    areas: data.value
  }
})

router.get('/sproducts', async (ctx) => {
  
})

export default router