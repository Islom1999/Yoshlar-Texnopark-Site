const {Router} = require('express')
const upload = require('../utils/fileUpload')

const {
    getResource,
    getHeaders,
    getContact,
    getLocation,
    getAbout
} = require('../controls/adminControls')

const {
    createResource,
    deleteResource,
    updateResource,
    updateHeaders,
    deleteMessage,
} = require('../controls/crudControls')

const router = Router()

router.get('/', getResource)
router.post('/resource/create', upload.single('image'), createResource)
router.post('/resource/delete/:id', deleteResource)
router.post('/resource/update/:id', upload.single('image'), updateResource)

router.get('/pages/headers', getHeaders)
router.post('/pages/headers/update/:page', upload.single('image'), updateHeaders)

router.get('/contact', getContact)
router.post('/message/delete/:id', deleteMessage)

router.get('/location', getLocation)

router.get('/about', getAbout)

module.exports = router
