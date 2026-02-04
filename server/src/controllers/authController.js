const User = require('../models/User');const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        let user = await User.findOne({ email })
        if (user) return res.status(400).json({ msg: 'El usuario ya existe' })

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        user = new User({ name, email, password: hashedPassword })
        await user.save()

        res.status(201).json({ msg: 'Usuario creado correctamente' })
    }
    catch (error) {
        res.status(500).send('Hubo un error en el servidor')
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await User.findOne({ email })
        if (!user) return res.status(400).json({ msg: 'Usuario no encontrado' })

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) return res.status(400).json({ msg: 'Contraseña incorrecta' })

        const payload = { userId: user._id }
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '8h' })

        res.json({ token, user: { name: user.name, email: user.email } })
    } 
    catch (error) {
        res.status(500).send('Error en el servidor')
    }
}