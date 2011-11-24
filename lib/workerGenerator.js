function WorkerGenerator(args) {
  this.args = args;
}

WorkerGenerator.prototype.run = function (fs) {
  fs.mkdirSync(this.args.root);
};

exports.Generator = WorkerGenerator;
