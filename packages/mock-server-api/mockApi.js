// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const provideMockData = require('./data.js')
const router = jsonServer.router(provideMockData())

router.render = (req, res) => {
  if (req.path === '/products') {
    res.jsonp({
      products: res.locals.data
    })
  } else {
    res.jsonp(res.locals.data)
  }
}

server.use(jsonServer.defaults())
server.use(router)

server.listen(7005, () => {
  console.log('JSON Server is running')
})
