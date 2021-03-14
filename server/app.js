const koa = require('koa');
const Router = require('koa-router')
const mongoose = require('mongoose')
const bodyParser = require('koa-bodyparser')
const apply = require('./routes/api/apply')
const login = require('./routes/api/login')
const cors = require('koa-cors')

const app = new koa();
const router = new Router();

app.use(cors());
app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());
router.use('/api/apply', apply)
router.use('/api/login', login)

mongoose.connect('mongodb://localhost/2019HelloWorld', {userNewUrlParser: true});
let db = mongoose.connection;
db.on('error', () => { console.log('连接失败！') });
db.once('open', () => { console.log('连接成功！') });


const port = process.env.PORT || 1234;

app.listen(port, async () => {
  console.log(`the app run at port ${port}!`);
})