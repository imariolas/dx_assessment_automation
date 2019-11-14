import { ClientFunction } from 'testcafe';
import HomePage, {homePage} from './PageModel/HomePage';
import JavascriptAlertsPage, {JSAlerts} from './PageModel/JavascriptAlertsPage';

// Base url
const baseURL = 'http://the-internet.herokuapp.com/';

// gets the title of the current page
const getPageTitle = ClientFunction(() => window.document.title);

// Test description and navigation to the website page
fixture('Navigate to The Internet website\n'
		 + 'Click on Javascript Alerts link\n'
		 + 'Click on the JS Confirm and accept the native dialog').page(baseURL);

// Test method
test('Verify the result status for the JS Confirm Native Dialog', async(t) => {
	await homePage._navigateToJavascriptAlerts();
	await JSAlerts._clickOnJSConfirmButton();
	await JSAlerts.assertResultStatus();
});
