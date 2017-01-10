import { FrontendnpPage } from './app.po';

describe('frontendnp App', function() {
  let page: FrontendnpPage;

  beforeEach(() => {
    page = new FrontendnpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
