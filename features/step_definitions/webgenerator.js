var Steps = require('cucumis').Steps;

Steps.Given(/^I have a webGenerator$/, function (ctx) {
  ctx.pending();
});

Steps.Given(/^I pass a root arg "([^"]*?)"$/, function (ctx, arg1) {
  ctx.pending();
});

Steps.Then(/^a subfolder "([^"]*?)"$/, function (ctx, arg1) {
  ctx.pending();
});

Steps.Then(/^a "([^"]*?)" file$/, function (ctx, arg1) {
  ctx.pending();
});

Steps.export(module);
