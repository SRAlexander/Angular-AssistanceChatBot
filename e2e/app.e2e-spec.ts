import { AssitanceChatBotPage } from './app.po';

describe('assitance-chat-bot App', function() {
  let page: AssitanceChatBotPage;

  beforeEach(() => {
    page = new AssitanceChatBotPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
