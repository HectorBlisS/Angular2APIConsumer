import { TallerWeworkPage } from './app.po';

describe('taller-wework App', function() {
  let page: TallerWeworkPage;

  beforeEach(() => {
    page = new TallerWeworkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
