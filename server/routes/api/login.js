const Router = require('koa-router');
const user = require('../../models/users')
const router = new Router();
const jwt = require('jsonwebtoken')


/**
 * @route POST api/login/login
 * @desc 后台登录接口
 * @access 接口公开
 */
router.post('/login', async ctx => {
  const findResult = await user.find({username: ctx.request.body.username});
  if( findResult.length === 0 ){
   ctx.status = 404;
   ctx.body = { name: "用户不存在!"};
  }else{
    const user = findResult[0];
    const password = ctx.request.body.password;
    if( password !== user.password ){
      ctx.status = 400;
      ctx.body = { password: "密码错误!"};
    }else{
      const payload = { id: user._id, name: user.name}
      const token = jwt.sign(payload, 'sercet', { expiresIn: 3600 });
      ctx.status = 200;
      ctx.body = {success: true, token: 'Bearer' + token};
    }
  }
})

module.exports = router.routes();