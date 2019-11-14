import {Selector, t} from 'testcafe';

// Variable decleration for the page objects:
// - 'JS Confirm' button
// - the result text
var JSConfirmButton, resultText;

class JavascriptAlertsPage{

	// constructor that sets the locators for the page objects
	constructor(){
		JSConfirmButton = Selector('#content div.example ul > li > button').nth(1);
		resultText = Selector('#result')
	}

	// method that clicks on the 'JS Confirm' button and
	// accepts the confim dialog
	async _clickOnJSConfirmButton(){
		await t
		.setNativeDialogHandler(() => true)
		.click(JSConfirmButton);
	}

	// Asserts the result status
	async assertResultStatus(){
		await t
		.expect(resultText.innerText).eql('You clicked: Ok', {timeout:10000})
	}

}

export const JSAlerts = new JavascriptAlertsPage();