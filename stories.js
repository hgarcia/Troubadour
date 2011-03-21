var CouchClient = require('couch-client');

module.exports = function(app){

	app.get('/stories',function(req,res){
		res.render('stories/new',{
			title:'List of stories.',
			projectName: 'First project.',
			iteration: 'version 1.',
			stories:[{name:'First story'},{name: 'Second story.'}]
			});
});

	app.post('/stories',function(req,res){
		
		var Troubadour = CouchClient("http://hernan:gong696stew773@dynamicprogrammer.couchone.com/troubadour");
		var data = req.body.story;
		var story = {_id:data.feature,feature:data.feature,description:data.description};
		Troubadour.save(story,function(err,doc){
			
		});
		res.render('stories/new', {title:'The story have been saved.'});
});
}
