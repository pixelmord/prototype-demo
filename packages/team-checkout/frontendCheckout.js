/**
 * This is an example layout service, it serves a page template with slots, that compoxure
 * can then use as a layout to add content to from apps.
 *
 * At Tes we the layout holds our overall page structure and common components used across apps.
 */

const express = require('express')
const morgan = require('morgan')
const serveStatic = require('serve-static')

const app = express()
app.disable('x-powered-by')
app.use(morgan('combined'))
process.on('uncaughtException', function(err) {
  console.log(err)
})
/**
 * The application can let compoxure know that it uses a layout, and where to find it.
 */
app.use(function(req, res, next) {
  res.set('cx-parse-me', 'true')
  res.set('cx-layout', '{{server:frontend-shell}}/layout.html')
  return next()
})

app.use(serveStatic('static', { index: ['index.html'] }))

app.listen(7004, function() {
  console.log('Example team checkout server on http://localhost:7004')
})
