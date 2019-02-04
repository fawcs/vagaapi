module.exports = function(app) {
   app.post('/candidaturas',function(req,res,next){
      res.status(200)
   });

   app.get('/candidaturas',function(req,res,next){
      res.status(200)
   });

   app.get('/candidaturas/ranking',function(req,res,next){

   })
};