module.exports = function(app) {
  /* Render the landing page */
  app.get('/', function(request, response){
    reponse.render('index.html');
  });

  app.post('/pictures',function(request,response){
    if(!request.body.picture){
      response.send(422, 'Must provide a picture');
    }
    console.log(request.body)
    console.log("Requested Picture! " + request.body.picture);
  });

};
