import bcrypt from 'bcrypt'
import User from '../models/user.js';
import jwt from 'jsonwebtoken'
const saltRounds = 10;
const secret = 'secret'

export const register = async (req, res) => {
    const {name,email,password,phone} = req.body
    const hashpassword = await bcrypt.hash(password,saltRounds)
    try {
        const user = await User.create({
            name,
            email,
            password:hashpassword,
            phone
        })
        res.status(200).json(user)
    } catch (err) {
        res.status(500).json({error: err.message})
    }
}

export const login = async (req, res)=> {
    const {email, password} = req.body
    try {
        const user = await User.findOne({where:{email}})
        if (!user) {
            return res.status(400).json({error:'invalid email and password'})
        }
        const isPassword = await bcrypt.compare(password, user.password)
        if (!isPassword) {
            return res.status(400).json({error:'invalid email and password'})
        }
        const token = jwt.sign({ id:user.id},secret ,{expiresIn: '2h'})
        res.status(200).json({token})
    } catch (err) {
        res.status(500).json({error: err.message})
    }
}