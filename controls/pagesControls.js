const Resources = require('../models/resource')
const Admins = require('../models/admin')
const Pages = require('../models/pages')
const Partials = require('../models/partials')


const getHome = async(req, res) => {
    try {
        const resources = await Resources.find().lean()
        const pages = await Pages.find().lean()

        res.render('home', {
            title: "Bosh sahifa",
            resources,
            pages: pages[0]
        })
    } catch (error) {
        console.log(error)
    }
}

const getAbout = async(req, res) => {
    try {
        const pages = await Pages.find().lean()

        res.render('about', {
            title: "Biz haqimizda",
            pages: pages[0]
        })
    } catch (error) {
        console.log(error)
    }
}

const getResource = async(req, res) => {
    try {
        const resources = await Resources.find().lean()
        const pages = await Pages.find().lean()

        res.render('resource', {
            title: "Yoshlar texnoparki loyihasi",
            resources,
            pages: pages[0]
        })
    } catch (error) {
        console.log(error)
    }
}

const getContact = async(req, res) => {
    try {
        const pages = await Pages.find().lean()

        res.render('contact', {
            title: "Aloqalar",
            pages: pages[0]
        })
    } catch (error) {
        console.log(error) 
    }
}

module.exports = {
    getHome,
    getAbout,
    getResource,
    getContact,
}