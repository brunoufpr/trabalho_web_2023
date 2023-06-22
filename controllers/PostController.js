const Post = require("../models/Post")

const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find()
        res.render("index", { posts })

    } catch (err) {
        res.status(500).send({ error: err.message })
    }
}

const criarPost = async (req, res) => {
    /// Pegar os dados do Formulario
    const post = req.body
    /// Salvar o post no banco 
    try {
        await Post.create(post) 
        return res.redirect("/");
    } catch (err) {
        res.status(500).send({ error: err.message })
    }
    /// Redirecionar para a rota / 
    res.redirect("/")
}



module.exports = {
    getAllPosts, criarPost
}
