import { DockerFlexPage } from './app.po';

describe('docker-flex App', () => {
  let page: DockerFlexPage;

  beforeEach(() => {
    page = new DockerFlexPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
