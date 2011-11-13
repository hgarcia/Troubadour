#!/usr/bin/env node
/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
*/

var troubadourPath = __dirname + '/../lib';

var args = process.argv.slice(2);
var fs = require('fs');
var Troubadour = require(troubadourPath + '/troubadour').Troubadour;
var pkg = JSON.parse(fs.readFileSync(__dirname + '/../package.json').toString());
var tr = new Troubadour(args, pkg.version);

process.addListener('uncaughtException', function (err) {
  tr.handleErr(err);
});

tr.run(fs);
