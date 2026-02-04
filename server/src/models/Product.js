const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'El nombre del producto es obligatorio'],
        trim: true
    },
    price: {
        type: Number,
        required: [true, 'El precio es obligatorio'],
        min: 0
    },
    description: {
        type: String,
        required: [true, 'La descripcion es obligatoria']
    },
    imagen: {
        type: String,
        default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJf9R0M__InKs1-YwTG0D-2xDHFbaQmywMOg&s'
    },
    category: {
        type: String,
        required: true
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Product', productSchema)