#
# Troubadour
# Copyright 2011 Hernan Garcia (hernan@dynamicprogrammer.com)
# This build file is based (copied) from the Jake build file.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#         http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#

.PHONY: all build install clean uninstall

all: build

build:
	@echo 'Troubadour built.'

install:
	@mkdir -p /usr/local/lib/node_modules/troubadour && \
		cp -R ./* /usr/local/lib/node_modules/troubadour/ && \
		ln -snf /usr/local/lib/node_modules/troubadour/bin/cli.js /usr/local/bin/troubadour && \
		chmod 755 /usr/local/lib/node_modules/troubadour/bin/cli.js && \
		echo 'Troubadour installed.'

clean:
	@true

uninstall:
	@rm -f /usr/local/bin/troubadour && \
		rm -fr /usr/local/lib/node_modules/troubadour/ && \
		echo 'Troubadour uninstalled.'
