
import { browser, by, element } from 'protractor';

export class DemoPage {
  navigateTo() {
    return browser.get('/');
  }

  getTodos() {
    return element(by.css('app-root h1')).getText();
  }
}