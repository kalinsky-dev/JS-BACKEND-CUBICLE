const express = require('express');
const handlebars = require('express-handlebars');

const app = express();

app.use('/static', express.static('public'));

app.engine('hbs', handlebars.engine({ extname: 'hbs' }));
app.set('view engine', 'hbs');
app.set('views', './src/views');

app.get('/', (req, res) => {
  //   res.send('Hello World');
  res.render('index');
});

app.listen(3000, () => console.log(`App is listening on port 3000`));
