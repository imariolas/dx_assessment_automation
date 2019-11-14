import {Selector, t} from 'testcafe';
import { ClientFunction } from 'testcafe';

// Variable decleration for the page objects:
// - 'Javascript Alerts' link
var javascriptAlertsLink

// get the url of the current page
var getPageURL = ClientFunction(() => window.document.URL);

class HomePage{

	// constructor that sets the locators for the page objects
	constructor(){
		javascriptAlertsLink = Selector('#content ul li a').withText('JavaScript Alerts');
	}

	// method that clicks on the 'Javascript Alerts' link and
	// asserts that the url in the new page contains the correct value
	async _navigateToJavascriptAlerts(){
		await t
		.click(javascriptAlertsLink)
		.expect(getPageURL()).contains('javascript_alerts', {timeout:10000});
	}

}

export const homePage = new HomePage();