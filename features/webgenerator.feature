FEATURE: WebGenerator
	In order to generate web projects
	As a programmer
	I want to be able to encapsulate the project generation

	Scenario: Create a new web project
		Given I have a webGenerator
		And I pass a root arg "web_project"
		When I call run
		Then should create a new "web_project" folder
		And a subfolder "app"
		And a subfolder "app/middleware"
		And a subfolder "app/modules"
		And a subfolder "app/public"
		And a subfolder "app/public/css"
		And a subfolder "app/public/js"
		And a subfolder "app/public/js"
		And a subfolder "app/public/images"
		And a subfolder "tests"
		And a subfolder "tests/specs"
		And a subfolder "tests/features"
		And a subfolder "migrations"
		And a subfolder "migrations/web_project_main"
		And a "app/server.js" file
		And a "package.json" file
		And a "config.js" file
		And a ".travis.yml" file
		And a ".gitignore" file
		And a "readme.md" file
		And a ".nodemonignore" file
		And a "Jakefile" file
