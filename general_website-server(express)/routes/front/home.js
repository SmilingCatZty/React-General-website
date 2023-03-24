const NewsController = require('../../app/controller/news')
var express = require('express')
var router = express.Router()

// // ProRouter.post("/frontapi/Txt/add", upload.single('file'), ProController.add)
// // //实现用户列表的增删改查
router.get('/home/main', NewsController.create)

module.exports = router
