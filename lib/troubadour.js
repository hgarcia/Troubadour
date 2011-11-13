function Troubadour(args, version) {
  this.args = args;
  this.version = version;
}

Troubadour.prototype.run = function (fs) {
  fs.mkdirSync(this.args[1]);
};

exports.Troubadour = Troubadour;
