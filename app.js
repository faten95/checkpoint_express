const express = require("express");
const app = express();

const port=5000;
app.listen(port,(err)=>{
    if(err)
    console.log("Connection failed!");
    else console.log(`Server is running on port ${port}`)
  });
  app.set('view engine', 'pug');
  app.set('views', './views');
 app.use(express.static('public'));

app.use(verifDate = (req, res, next)=>
{
    const date = new Date();
    const day = date.toDateString().substring(0,3);
    const hour = date.toTimeString().substring(0,2);
    let tmp=false;
    switch(day)
    {
        case 'Mon':
        case 'Tue':
        case 'Wed':
        case 'Thu':
        case 'Fri': tmp = true;
    }
    if(tmp === true && hour<= 17 && hour>=9)
    {next();}
    else{ res.send("Web Closed!!")}
}
)

app.get('/', (req, res) => {
    res.render('Home')
})
app.get('/Services', (req, res) => {
    res.render('Services')
})
app.get('/Contact', (req, res) => {
    res.render('Contact')
})