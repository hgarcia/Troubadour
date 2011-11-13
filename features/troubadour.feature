FEATURE: Troubadour
	In order to avoid repeating myself
	As a programmer
	I want to be able to generate projects

	Scenario: Create a new project
		Given I have a troubadour
		And I pass a first arg "new"
		And I second arg "test_project"
		When I call run
		Then should create a new "test_project" folder
