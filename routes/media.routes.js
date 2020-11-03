const Media = require('../models/Media')
const { Router } = require('express')
const router = Router()

router.get('/', async (req, res) => {
  try {
    const media = await Media.find({})
    res.status(200).json(media)
  } catch (err) {
    console.log(`❌ Media error: ${err.message}`)
  }
})

module.exports = router