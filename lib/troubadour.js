function parseArgs(args){
  if (args.length === 1) {
    return {type: 'Web', root: args[0]};
  }
  return {type: (args[0].toLowerCase() === 'web') ? 'Web' : 'Worker',
    root: args[1]
  };
}

function Troubadour(args, version) {
  this.args = parseArgs(args);
  this.version = version;
}

Troubadour.prototype.getProjectGenerator = function () {
  var Generator = require('./' + this.args.type + 'Generator').Generator;
  var g = new Generator(this.args);
  return g;
};

Troubadour.prototype.run = function (fs) {
  this.getProjectGenerator().run(fs);
};

exports.Troubadour = Troubadour;
