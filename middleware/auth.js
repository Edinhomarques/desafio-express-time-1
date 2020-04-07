const bcrypt = require('bcrypt');
const fs = require('fs')
const path = require('path')

const auth = (req, res, next) => {
    let {usuarioLogado} = req.session

    if(usuarioLogado != undefined && usuarioLogado != null){
        return next();
    }

    return res.redirect('/login')
}





module.exports = auth