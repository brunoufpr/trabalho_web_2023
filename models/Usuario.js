const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    senha: {
        type: String,
        required: true,
    },
    nome: {
        type: String,
        required: true,
    },
    dataNascimento: {
        type: Date,
        required:true,
    },
});

module.exports = mongoose.model("Usuario", usuarioSchema);
