import { DemoPage } from './app.po';

describe('demo App', () => {
  let page: DemoPage;

  beforeEach(() => {
    page = new DemoPage();
  });

  it(`should display 'todos' in h1`, () => {
    page.navigateTo();
    expect(page.getTodos()).toBe('todos');
  });

  it('should placeHolder', () => {
    page.navigateTo();
    expect(page.getPlaceHolder()).toBe('What needs to be done?');
  });

});
