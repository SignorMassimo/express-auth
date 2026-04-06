import { Router } from 'express'
import { UserModel } from '../database/models/user.model'

const router = Router()

router.get('/all', (req, res) => {
    res.json(UserModel.findAll())
})

router.post('/login', (req, res) => {
    const { name } = req.body,
        user = UserModel.find('name', name)
    if (user == null) {
        res.send('user not found')
        return
    }
    res.send('success login')
})

router.post('/register', (req, res) => {
    const { name } = req.body,
        user = UserModel.find('name', name)
    if (user != null) {
        res.send('user aleardy exists')
        return
    }
    UserModel.create({ id: UserModel.findAll().length + 1, name })
    res.send('success register')
})

export default router
