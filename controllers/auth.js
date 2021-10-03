'use strict'
const {User} = require('../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


class authController{
    static register = async (req, res, next) => {
        try{
            const {name , email, password} = req.body

            await User.create({
                name,
                email,
                password: bcrypt.hashSync(password, 8),
                role: 'member'
            })

            res.status(201).json({
                message: 'Register Success',
                user: {
                    name, email
                }
            })
        } catch(error){
            next(error)
        }
    }

    static login = async (req, res, next) => {
        try {
            const {email, password} = req.body
            // check user
            const user = await User.findOne({ where: {email}})
            if(!user){
                return next({name: "Validation" , message: "Invalid Email/Password"})
            }

            // verify password
            let check = await bcrypt.compare(password, user.password)
            if (!check) {
                return next({name: "Validation" , message: "Invalid Email/Password"})
            } 

            // create token
            const jwtPayload = {
                userId: user.id
            }
            const accessToken = jwt.sign(jwtPayload, process.env.JWT_SECRET_KEY)
            
            res.status(200).json({
                message: "Success, you've been logged in",
                accessToken: accessToken
                
            })
            
        } catch(error) {
            next(error)
        }
    }

    static getAll = async (req, res, next) => {
        try{
            let users = await User.findAll({ attributes: ['id' , 'name' , 'email'] })
            res.status(200).json(users)
        }catch(error){
            next(error)
        }
    }

    static getDetail = async(req,res,next) => {
        try {
            let {id} = req.params
            const user = await User.findByPk(id , {
                attributes: ['id' , 'name' , 'email' , 'createdAt' , 'updatedAt']
            })
            if(!user) return next({name: "NotFound"})

            res.status(200).json({
                message: 'detail',
                user
            })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = authController