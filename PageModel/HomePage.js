import {Selector, t} from 'testcafe';
import { ClientFunction } from 'testcafe';
import { Role } from 'testcafe';

var javascriptAlertsLink, JSConfirmButton;
var baseURL = "http://the-internet.herokuapp.com/";

var getPageURL = ClientFunction(() => window.document.URL);
var alert = ClientFunction(() => window.confirm);

export var navigate = Role(baseURL, async t => {
	await t.expect(getPageURL()).contains('the-internet.herokuapp.com', {timeout:15000});
});

class HomePage{

	constructor(){
		javascriptAlertsLink = Selector('#content ul li a').withText('JavaScript Alerts');
		JSConfirmButton = Selector('#content div.example ul > li > button').nth(1);
	}

	async _navigateToJavascriptAlerts(){
		await t
		.click(javascriptAlertsLink)
		.expect(getPageURL()).contains('javascript_alerts', {timeout:10000});
	}

	async _clickOnJSConfirmButton(){
		await t
		.click(JSConfirmButton).setNativeDialogHandler((type) => {
			if(type == 'confirm')
				return true;
			else
				return 'Nooo confirm';
		});
		handleConfirm('OK');
	}
}

export const homePage = new HomePage();