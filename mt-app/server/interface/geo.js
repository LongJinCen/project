import Router from 'koa-router'
import axios from './utils/axios'
import Menu from '../dbs/models/menu'

let router = new Router({
  prefix:'/geo'
})

router.get('/getPosition', async (ctx) => {
  let { status, data: { content: { address } }} = await axios.get('http://api.map.baidu.com/location/ip?ak=rfAvrxNFKqADgT8QOZ23vmplzjIwrEeN')
  if (status === 200) {
    ctx.body = {
      address
    }
  } else {
    ctx.body = {
      address: ''
    }
  }
})

router.get('/getMenu', async (ctx) => {
  const data = await Menu.findOne()
  if (data) {
    ctx.body = {
      menu: data.menu
    }
  }
})

export default router