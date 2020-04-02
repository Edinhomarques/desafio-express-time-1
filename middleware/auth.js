const bcrypt = require('bcrypt');
const fs = require('fs')
const path = require('path')

const auth = (req, res, next) => {
    let {email, senha} = req.body
    const caminho = path.join('db', 'usuarios.json')
    let info = fs.readFileSync(caminho, {encoding:"utf-8"})
    info = JSON.parse(info)
    console.log(typeof info)
    info.forEach(usuario => {
        if (usuario.email ==email && bcrypt.compareSync(senha, usuario.senha)) {
            return next()
        }
    });
    
    res.redirect("/login")

}


module.exports = auth