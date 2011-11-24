function WebGenerator(args) {
  this.args = args;
}

WebGenerator.prototype.run = function (fs) {
  fs.mkdirSync(this.args.root);
};

exports.Generator = WebGenerator;
