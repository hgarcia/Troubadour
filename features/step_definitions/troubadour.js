var Steps = require('cucumis').Steps;
var Troubadour;
var args = [];
var fs = {
  folderName : '',
  mkdirSync: function (n) {
    this.folderName = n;
  }
};

Steps.Given(/^I have a troubadour$/, function (ctx) {
  Troubadour = require('../../lib/troubadour').Troubadour;
  args = [];
  ctx.done();
});

Steps.Given(/^I pass a first arg "([^"]*?)"$/, function (ctx, arg1) {
  args.push(arg1);
  ctx.done();
});

Steps.Given(/^a second arg "([^"]*?)"$/, function (ctx, arg1) {
  args.push(arg1);
  ctx.done();
});

Steps.When(/^I call run$/, function (ctx) {
  new Troubadour(args, "0.1").run(fs);
  ctx.done();
});

Steps.Then(/^should create a new "([^"]*?)" folder$/, function (ctx, arg1) {
  fs.folderName.should.eql(arg1);
  ctx.done();
});

Steps.export(module);



