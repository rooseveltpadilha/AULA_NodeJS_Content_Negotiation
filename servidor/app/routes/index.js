module.exports = function(application){
	application.get('/', function(req, res){
	/*	res.format({
			html: function() {
				res.send('Bem vindo a sua app NodeJS!');
			},
			json: function() {
				var retorno = {
					body: 'Bem vindo ao app Json'
				}
				res.json(retorno);
			}
		});
		*/
		res.render('josa');
	}); 
	application.post('/', function(req, res){
		var dados = req.body;
		res.send(dados);
	});
}