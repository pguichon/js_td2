import { Td2Page } from './app.po';

describe('td2 App', function() {
  let page: Td2Page;

  beforeEach(() => {
    page = new Td2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
