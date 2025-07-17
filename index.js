const Koa = require('koa');
const app = new Koa();

// 简单的中间件
app.use(async (ctx) => {
  ctx.body = {
    message: 'Hello from Koa on Vercel!',
    timestamp: new Date().toISOString()
  };
});

// 注意：不要在 Vercel 上手动监听端口，Vercel 会自动处理
module.exports = app.callback();
