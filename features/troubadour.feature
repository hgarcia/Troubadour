FEATURE: Troubadour
	In order to avoid repeating myself
	As a programmer
	I want to be able to generate projects

	Scenario: Create a new web project
		Given I have a troubadour
		And I pass a first arg "web"
		And a second arg "test_project"
		When I call run
		Then should create a new "test_project" folder

	Scenario: Create a default project
		Given I have a troubadour
		And I pass a first arg "default_project"
		When I call run
		Then should create a new "default_project" folder
