const { getloginForm, getsignupForm, cadastrar,login,logout } = require("../controllers/AutenticacaoController");
const { getAllPosts, criarPost } = require("../controllers/PostController");

const routes = require("express").Router();


routes.get("/", getAllPosts)
routes.post("/criarpost",criarPost)

routes.get("/loginForm",getloginForm)
routes.get("/signupForm",getsignupForm)
routes.post("/signup",cadastrar)
routes.post("/login",login)
routes.get("/logout",logout)

module.exports=routes