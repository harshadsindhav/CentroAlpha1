import { HarshadPage } from './app.po';

describe('harshad App', function() {
  let page: HarshadPage;

  beforeEach(() => {
    page = new HarshadPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
