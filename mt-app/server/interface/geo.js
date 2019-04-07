import Router from 'koa-router'
import axios from './utils/axios'
import Menu from '../dbs/models/menu'
import City from '../dbs/models/city'
import Province from '../dbs/models/province'

let router = new Router({
  prefix: '/geo'
})

router.get('/getPosition', async ctx => {
  let {
    status,
    data: {
      content: { address }
    }
  } = await axios.get(
    'http://api.map.baidu.com/location/ip?ak=rfAvrxNFKqADgT8QOZ23vmplzjIwrEeN'
  )
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

router.get('/province', async (ctx) => {
  const province = await Province.find()
  ctx.body = {
    province: province.map(item => ({
      id: item.id,
      name: item.value[0]
    }))
  }
})

router.get('/province/:id', async (ctx) => {
  console.log(ctx)
  let city = await City.findOne({ id: ctx.params.id })
  ctx.body = {
    code: 0,
    city: city.value.map(item => ({
      province: item.province,
      id: item.id,
      name: item.name
    }))
  }
})

router.get('/city', async (ctx) => {
  let city = []
  let result = await City.find()
  result.forEach(item => {
    city = city.concat(item.value)
  })
  ctx.body = {
    code: 0,
    city: city.map(item => {
      return {
        province: item.province,
        id: item.id,
        name: item.name === '市辖区' || item.name === '省直辖县级行政区划'
          ? item.province
          : item.name
      }
    })
  }
})

router.get('/hotcity', async ctx => {
  let list = ['北京市', '上海市', 
              '广州市', '深圳市',
              '天津市', '西安市',
              '杭州市', '南京市',
              '武汉市', '成都市']
  let result = await City.find()
  let nList = []
  result.forEach(item => {
    let record = item.value.filter(value => list.includes(value.province) || list.includes(value.name))
    nList = nList.concat(record)
  })
  ctx.body = {
    nList
  }
})

router.get('/getMenu', async ctx => {
  const data = await Menu.findOne()
  if (data) {
    ctx.body = {
      menu: data.menu
    }
  }
})

export default router
