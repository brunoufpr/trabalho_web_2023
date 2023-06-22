const mongoose = require ("mongoose");

const PostSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    conteudo: {
        type: String,
        required: true
    },
    idCriadordoPost: {
        type: String,
        required:false  ///Mudar para true depois de criar o usuario
    },
    dataCriacao: {
        type: Date,
        default: Date.now()
    },
    qtdeCurtidas: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model("Post",PostSchema)


const exemplopost = {
    titulo: "Vendo livro de programacao",
    conteudo: "livro seminovo com preco acessivel",
    idCriadordoPost:"asdfewrfgfdgfdergfdd",
    dataCriacaoPost:new Date("2023-07-01"),
    qtdeCurtidas:3
}