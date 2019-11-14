import { ClientFunction } from 'testcafe';
import HomePage, {homePage} from './PageModel/HomePage';

const baseURL = 'http://the-internet.herokuapp.comm/';
const getPageTitle = ClientFunction(() => window.document.title);

fixture('Navigate to The Internet website').page(baseURL);

test('Click on Javascript Alerts link', async(t) => {
	await homePage._navigateToJavascriptAlerts();
	await homePage._clickOnJSConfirmButton();
	//await t.expect(getPageTitle()).contains('The Internet', {timeout:10000});
});
