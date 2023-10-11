const Resources = require('../models/resource')
const Admins = require('../models/admin')
const Pages = require('../models/pages')
const Partials = require('../models/partials')
const Messages = require('../models/message')

const createMessage = async(req, res) => {
    try {
        await Messages.create(req.body)
        res.redirect('/contact')
    } catch (error) {
        console.log(error)
    }
}
const deleteMessage = async(req, res) => {
    try {
        await Messages.findByIdAndDelete(req.params.id)
        res.redirect('/admin/contact')
    } catch (error) {
        console.log(error)
    }
}

const createResource = async(req, res) => {
    try {
        if(req.file){
            await Resources.create({imageUrl: `/upload/${req.file.filename}`})
        }
        res.redirect('/admin')
    } catch (error) {
        console.log(error)
    }
}

const deleteResource = async(req, res) => {
    try {
        await Resources.findByIdAndDelete(req.params.id)
        res.redirect('/admin')
    } catch (error) {
        console.log(error)
    }
}

const updateResource = async(req, res) => {
    try {
        if(req.file){
            await Resources.findByIdAndUpdate(req.params.id, {imageUrl: `/upload/${req.file.filename}`})
        }
        res.redirect('/admin')
    } catch (error) {
        console.log(error)
    }
}

const updateHeaders = async(req, res) => {
    try {
        const page = req.params.page
        const {title, descr, location} = req.body
        const data = await Pages.findOne()

        switch(page){
            case 'header': 
                await Pages.findOneAndUpdate({}, {
                    homeHeader: {
                        bgImage: req.file?.filename ? `/upload/${req.file?.filename}` : data?.homeHeader?.bgImage, 
                        title, 
                        descr,
                    }
                })
                break; 
            case 'about': 
                await Pages.findOneAndUpdate({}, {
                    aboutHeader: {
                        bgImage: req.file?.filename ? `/upload/${req.file?.filename}` : data?.aboutHeader?.bgImage, 
                        title, 
                    }
                })
                break;
            case 'resource': 
                await Pages.findOneAndUpdate({}, {
                    resourceHeader: {
                        bgImage: req.file?.filename ? `/upload/${req.file?.filename}` : data?.resourceHeader?.bgImage, 
                        title, 
                    }
                })
                break;
            case 'contact': 
                await Pages.findOneAndUpdate({}, {
                    contactHeader: {
                        bgImage: req.file?.filename ? `/upload/${req.file?.filename}` : data?.contactHeader?.bgImage, 
                        title, 
                    }
                })
                break;
            case 'location': 
                await Pages.findOneAndUpdate({}, {
                    maps: {
                        title, 
                        location,
                    }
                })
                return res.redirect('/admin/location')
            case 'aboutcontent':  
                await Pages.findOneAndUpdate({}, {
                    aboutContent: {
                        imageUrl: req.file?.filename ? `/upload/${req.file?.filename}` : data?.aboutContent?.imageUrl, 
                        ...req.body,
                    }
                })
                return res.redirect('/admin/about')
        } 
        return res.redirect('/admin/pages/headers')
    } catch (error) {
        console.log(error) 
    }
}


module.exports = {
    createResource,
    deleteResource,
    updateResource,
    updateHeaders,
    createMessage,
    deleteMessage,
}