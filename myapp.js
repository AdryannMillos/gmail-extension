InboxSDK.load(2, 'sdk_Adryann_6a1d89bf45').then(function (sdk) {
  // the SDK has been loaded, now do something with it!
  sdk.Compose.registerComposeViewHandler(function (composeView) {
    // a compose view has come into existence, do something with it!
    composeView.addButton({
      title: "Adryann",
      hasDropdown: true,
      iconUrl: 'https://img2.gratispng.com/20180517/vle/kisspng-puppy-miniature-pinscher-german-pinscher-whiskers-5afdaceb3696e5.8948515215265743152236.jpg',
      onClick: function (event) {
        event.dropdown.el.innerHTML = "<iframe src='http://localhost:3000/' id='iframeId'title='list of templetes'></iframe>";
      },
    });
    const handler = event => {
      const data = event.data;
      if (data.message) {
        composeView.setBodyHTML(data.message)
      }
    }
    window.addEventListener("message", handler)
  });
});