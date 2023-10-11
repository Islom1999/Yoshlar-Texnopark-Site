const {Router} = require('express')

const {
    createMessage
} = require('../controls/crudControls')

const {
    getHome,
    getAbout, 
    getResource,
    getContact,
} = require('../controls/pagesControls')

const router = Router()

router.get('/', getHome)
router.get('/about', getAbout)
router.get('/resource', getResource)
router.get('/contact', getContact)

router.post('/contact/message', createMessage)

module.exports = router









