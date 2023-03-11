# Cards of tweets

This project was created based on the
[React-template](https://github.com/facebook/create-react-app). There you can
get acquainted with the commands for installation/starting this project.

## Source data

1. Technical assignment located
   [here](https://drive.google.com/file/d/1YJuJ1nhaJv7SRlJLH05OTw08dxW2TQGK/view)
2. The design of the project is presented in
   [Figma](https://www.figma.com/file/zun1oP6NmS2Lmgbcj6e1IG/Test?node-id=0%3A1&t=KJpDzmo0ozHiB73G-0).

## Briefly about the application

The page shows cards with tweets and information about their number of tweets and
followers. Presented interactivity on the page: if you want to follow, you can click on the FOLLOW button. If you want to recall which of the characters you are subscribed to and which are not, just open this page once
again in your browser. All data on your personal subscriptions are stored and will be immediately displayed on the page.

### Functionality

By clicking on the FOLLOW button, the user subscribes to the character. At the
same time, the counter of the followers number (FOLLOWERS) increases by 1, and
the button changes its color and text label to FOLLOWING.

Data about all characters is stored in Local Storage, so it always available
during subsequent sessions in the browser.

If the user wants to unfollow the character, he needs to click on the FOLLOWING
button and it will return to its original color and the text label FOLLOW. At
the same time, the number of subscribers will be decreased by 1.

### Application implementation

Initially, character data is read from the user.json file and passes into state.
State is implemented on the parent component for all cards - 'ul'. When clicking
on the buttons, the state changes and immediately after that, using the
componentDidUpdate lifecycle method, information is recorded/updated in Local
Storage. All components are made with a class approach. Styling provided through
css modules using Flex. There are no additional libraries.
