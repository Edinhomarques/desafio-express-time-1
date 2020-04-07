const bcrypt = require('bcrypt');
const fs = require('fs')
const path = require('path')
module.exports = {
  listUser:(req, res) => {
      
    res.render('cadastroUsuario', {title: 'cadastro-Usuario'})
    
  },
  cadastroUsuario:(req, res) => {
    const {nome, email} = req.body;
    const senha = bcrypt.hashSync(req.body.senha, 10);
    const caminho = path.join('db', 'usuarios.json')
    let listaContato = []
    if(fs.existsSync(caminho)){
      listaContato = fs.readFileSync(caminho, {encoding: 'utf-8'});
      
      listaContato = JSON.parse(listaContato) // converte pra obj

    } 
    
    listaContato.push({nome, email, senha})
    
    listaContato = JSON.stringify(listaContato);
    
    fs.writeFileSync(caminho, listaContato);
    
    
    
  },

  listLogin: (req, res) =>{
    res.render('login', {title: "Login"})
  },

  usuarioAutenticado: (req, res) => {

    res.redirect("/listFiles")
  }
}