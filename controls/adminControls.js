const Resources = require('../models/resource')
const Admins = require('../models/admin')
const Pages = require('../models/pages')
const Partials = require('../models/partials')
const Messages = require('../models/message')

const getResource = async(req, res) => {
    try {
        const resources = await Resources.find().lean()

        res.render('admin/resource', {
            title: "Admin Resource",
            resources,
            isAdmin: true
        })
    } catch (error) {
        console.log(error)
    }
}

const getHeaders = async(req, res) => {
    try {
        const pages = await Pages.find().lean()

        res.render('admin/pages-headers', {
            title: "Pages headers",
            pages: pages[0],
            isAdmin: true
        })
    } catch (error) {
        console.log(error)
    }
}

const getContact = async(req, res) => {
    try {
        const messages = await Messages.find().lean()

        res.render('admin/contact', {
            title: "Xatlar",
            messages,
            isAdmin: true
        })
    } catch (error) {
        console.log(error)
    }
}

const getLocation = async(req, res) => {
    try {
        const pages = await Pages.findOne().lean()
        getAbout
        res.render('admin/location', {
            title: "Manzilni o'zgartirish",
            isAdmin: true,
            pages
        })
    } catch (error) {
        console.log(error)
    }
}

const getAbout = async(req, res) => {
    try {
        const pages = await Pages.findOne().lean()
        getAbout
        res.render('admin/about', {
            title: "Biz haqimizdani o'zgartirish",
            isAdmin: true,
            pages
        })
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    getResource,
    getHeaders,
    getContact,
    getLocation,
    getAbout
}