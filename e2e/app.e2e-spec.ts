import { TestSelectPage } from './app.po';

describe('test-select App', () => {
  let page: TestSelectPage;

  beforeEach(() => {
    page = new TestSelectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
