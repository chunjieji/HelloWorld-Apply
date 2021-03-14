const Router = require('koa-router')
const applyForm = require('../../models/applyForm')
const Excel =require('exceljs/modern.nodejs')


const router = new Router();

/**
 * @route POST api/apply/add
 * @desc 新生报名接口
 * @access 接口公开
 */

 router.post('/add', async ctx => {
   const findResult = await applyForm.find({phone: ctx.request.body.phone});
   if( findResult.length > 0 ){
    ctx.status = 500;
    ctx.body = { phone: "你已经报名过了!"};
   }else{
    const newForm = new applyForm({
      name: ctx.request.body.name,
      specialty: ctx.request.body.specialty,
      sex: ctx.request.body.sex,
      phone: ctx.request.body.phone,
      QQ: ctx.request.body.QQ,
      firstWish: ctx.request.body.firstWish,
      secondWish: ctx.request.body.secondWish,
      isAdjust: ctx.request.body.isAdjust,
      hobby: ctx.request.body.hobby,
      awardExperience: ctx.request.body.awardExperience,
      joinReason: ctx.request.body.joinReason,
     })
     await newForm.save();
     ctx.body = newForm;
   }
 })

 /**
 * @route POST api/apply/getList
 * @desc 获取新生目前报名情况列表
 * @access 接口公开
 */

 router.get('/getList', async ctx => {
  const findResult = await applyForm.find();
  ctx.status = 200;
  ctx.body = findResult;
 })

  /**
 * @route POST api/apply/getApplyInfo
 * @desc 查询新生报名情况
 * @access 接口公开
 */

router.post('/getApplyInfo', async ctx => {
  const findResult = await applyForm.find({phone: ctx.request.body.phone});
  if( findResult.length > 0 ){
    ctx.status = 200;
    ctx.body = { phone: "你已经报名过了!"};
  }else{
    ctx.status = 500;
    ctx.body = { phone: "你还没有报名!"};
  }
})

 /**
 * @route POST api/apply/exportList
 * @desc 导出新生目前报名情况列表Excel
 * @access 接口公开
 */

router.get('/exportList', async ctx => {
  const findResult = await applyForm.find();
  let workbook = new Excel.Workbook();
  workbook.created = new Date();
  workbook.modified = new Date();
  let sheet = workbook.addWorksheet("测试导出表");
  sheet.properties.defaultRowHeight = 25;

  sheet.columns = [
      { header: "姓名", key: "name", width: 10 },
      { header: "专业", key: "specialty", width: 10 },
      { header: "手机", key: "phone", width: 10 },
      { header: "QQ", key: "QQ", width: 20 },
      { header: "性别", key: "sex", width: 20 },
      { header: "第一志愿", key: "firstWish", width: 20 },
      { header: "第二志愿", key: "secondWish", width: 20 },
      { header: "是否服从调剂", key: "isAdjust", width: 5 },
      { header: "爱好特长", key: "hobby", width: 30 },
      { header: "获奖经历", key: "awardExperience", width: 50 },
      { header: "加入我们的理由", key: "joinReason", width: 50 },
  ];
  for ( let i=0; i < findResult.length;i++){
    sheet.addRow(findResult[i])
  }

  const buffer = await workbook.xlsx.writeBuffer();
  ctx.set('Content-Type', 'application/vnd.openxmlformats');
  ctx.set('Content-Disposition', 'attachment;filename=FileName.xlsx')
  ctx.body = buffer
  ctx.status = 200;
 })

 module.exports = router.routes();