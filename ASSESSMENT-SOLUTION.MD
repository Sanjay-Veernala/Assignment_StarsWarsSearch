# QA Engineer Assessment Solution

## Introduction

Use this file to document your solution and findings.

Name: Sanjay Veernala (Mobile number : 9677296403)

Solutions or Changes:

1. Created file .vscode and added a settings.json file under .vscode
	-added the code for cucumber autocomplete steps :
	{
    		"cucumberautocomplete.steps": [
    		    "e2e/steps/*.ts"
   		 ],
   		 "cucumberautocomplete.strictGherkinCompletion": true
	}

2. Chages done in protractor.conf.js:
	- './e2e/features/*/*.feature' to 'e2e/**/*.feature' to make the specs file path correct.
	-  Installed the custom framework "protractor-cucumber-framework" and added the same in dev dependencies  		in Package .json by running the command: npm install --save-dev protractor-cucumber-framework.
	-  Added the framework path realed tho the current config file as below:
		frameworkPath: require.resolve('protractor-cucumber-framework')
	- Changed  './e2e/**/*.steps.ts' to ' e2e/**/*.steps.ts'
	
3. Created a cucumber-test-results.json file in sync to json:test-reports/cucumber-test-results.json in protractor.conf.js

4.  ALL Scenarios are wriiten in search-person.feature.

5. All stp definitions are written in app.step.ts

6. All locaters are written in search=form.po.ts



## Remarks 


...