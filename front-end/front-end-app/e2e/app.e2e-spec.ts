import { FrontEndAppPage } from './app.po';

describe('front-end-app App', () => {
  let page: FrontEndAppPage;

  beforeEach(() => {
    page = new FrontEndAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
