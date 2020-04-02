const fs = require('fs');
const path = require('path')
module.exports = {
  index: (req, res) => {
    const servicos = [
      {nome: 'desenvolvimento web', imagem: 'imagens/undraw_dev_focus.svg'},
      {nome: 'Marketing Digital', imagem:  'imagens/undraw_social_dashboard.svg'},
      {nome: 'Consultoria UX', imagem: 'imagens/undraw_mobile_apps.svg'}
    ]
    const banner = [
       'imagens/banner.jpg',
       'imagens/img2.jpg',
       'imagens/img3.jpg',
       'imagens/img4.jpg'
    ]
    res.render('index', {title: 'Home', listaServico: servicos, listBanner: banner})
  },
  contato : (req, res) => {
    const {nome, email, mensagem} = req.body;
    
    let infoContato = {nome, email, mensagem};
    // caminho do arquivo
    let fileContato = path.join('db', 'contatos.json');
    let listaContato = []
    
    if(fs.existsSync(fileContato)){
      listaContato = fs.readFileSync(fileContato, {encoding: 'utf-8'});
      
      listaContato = JSON.parse(listaContato) // converte pra obj

    } 
    
    listaContato.push(infoContato)
    
    listaContato = JSON.stringify(listaContato);
    
    fs.writeFileSync(fileContato, listaContato);

    res.render('contato', {nome, email, mensagem, title: 'contato'})
    
  },
  newsletter : (req, res) => {
    const {nome, email} = req.body;
    let infoContato = {nome, email};
    const date = new Date();

   
    infoContato.data = `${date.getDate()}:${(date.getMonth() + 1)}:${date.getFullYear()}`
    infoContato.horario = `${date.getHours()}:${date.getMinutes()}`
    // caminho do arquivo
    let fileContato = path.join('db', 'newletter.json');
    let listaContato = []
    
    if(fs.existsSync(fileContato)){
      listaContato = fs.readFileSync(fileContato, {encoding: 'utf-8'});
      
      listaContato = JSON.parse(listaContato) // converte pra obj

    } 
    
    listaContato.push(infoContato)
    
    listaContato = JSON.stringify(listaContato);
    
    fs.writeFileSync(fileContato, listaContato);

    res.render('sucesso', {nome, email, title: 'Newsletter Sucesso'})
  },
  listFiles: (req, res) => {
      let filewNewletter = path.join('db', 'newletter.json');
      let fileContato = path.join('db', 'contatos.json');
      let listaContato = []
      let listaNew = []
      let lista = []
      if(fs.existsSync(fileContato)){
        listaContato = fs.readFileSync(fileContato, {encoding: 'utf-8'});
        
      

        listaNew =fs.readFileSync( filewNewletter, {encoding: 'utf-8'});
        listaContato = JSON.parse(listaContato);
        listaNew = JSON.parse(listaNew)
        
        // converte pra obj
        console.log(lista)
      } 
      
     
      res.render('listFiles', { title: 'Ola Sucesso', listaNew, listaContato})
    }
}