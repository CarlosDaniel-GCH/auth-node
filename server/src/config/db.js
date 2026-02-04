const mongoose = require('mongoose')

const connectBD = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('✅ MongoDB Conectado exitosamente');
    }catch(error){
        console.error('Error al conectar a MongoDB:', error.message);
        process.exit(1);
    }
}

module.exports = connectBD