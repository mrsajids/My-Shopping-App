const express = require('express')
const { getAllOrder, updateOrder } = require('../../controller/admin/adminControllerforOrder')
const router = express.Router()

router.get('/getorders', getAllOrder)

router.put('/:id', updateOrder)

module.exports = router