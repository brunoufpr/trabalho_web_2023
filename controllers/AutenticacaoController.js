const { redirect } = require("express/lib/response")
const Usuario = require("../models/Usuario")

const getloginForm = async (req, res) => {
    res.render("loginForm")


}
 
 const getsignupForm = async (req, res) => {
    res.render("signupForm")

}
const cadastrar = async (req,res)=> {
    /// PEGAR OS DADOS DO FORMULARIO
    const usuario= req.body
    await Usuario.create(usuario) 
   res.redirect("/")
}
const login = async (req,res) => {
   /// PEGAR OS DADOS DO FORMULARIO
    const usuario= req.body
   let usuariodb = await Usuario.findOne({username:usuario.username})
   console.log(usuariodb)
   if (usuario.senha == usuariodb.senha) {
    req.session.usuarioLogado=usuariodb
   }
   res.redirect("/")
}
const logout = async(req,res) => {
    req.session.destroy()
    res.redirect("/")
}


module.exports = {getloginForm,getsignupForm, cadastrar, login, logout}