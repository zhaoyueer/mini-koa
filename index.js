const MiniKoa = require('./source')

const app = new MiniKoa()

app.use(async (ctx, next) => {
  ctx.body = '1'
  await next()
  ctx.body += '4'
})
app.use(async (ctx, next) => {
  ctx.body += '2'
  await next()
  ctx.body += '3'
})
app.listen(3000, () => {
  console.log('监听端口3000');
})