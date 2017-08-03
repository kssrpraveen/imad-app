var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
'articleone':{
    title:'article-one|praveen',
    heading:'hello',
    date:'sep 2 10',
    content:
    `<p>hello this is praveen .</p>`
},
'articletwo':{
    title:'article-two|praveen',
    heading:'GVPCOE',
    date:'sep 15 2010',
    content:
    `<p>GO TO GAYATRI COLLGE WEBSITE.VIST THIS LINK</p>
     <a href="http://gvpce.ac.in/" target="_blank">this is a link</a>`
},
'articlethree':{
    title:'article-three|praveen',
    heading:'third',
    date:'sep 2 10',
    content:
    `<p>hello this is praveens third page'</p>`

}
};
function createTemplate(data) {
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
var hTemplate=`
<html>
<head>
<title>
 ${title};
</title>
 <link href="/ui/style.css" rel="stylesheet" />
 </head>
<body>
<div class="cat">
<div>
<h1>${heading}</h1>
</div>
<div>
<p>${date}</p>
</div>
<div>
<p>${content}</p>
</div>
</div>
</body>
`;
return hTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/:articleName',function(req,res){
    var articleName=req.params.articleName;
res.send(createTemplate(articles[articleName]));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
