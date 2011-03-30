var CouchClient = require('couch-client'),
    Config = require('./config')();

module.export = funciont(){
		db: function(){
			return  CouchClient(Config.couchConn);
		},

		save: function(data){
		var story = {_id:data.feature,feature:data.feature,description:data.description};
		Troubadour.save(story,function(err,doc){
		}
}
