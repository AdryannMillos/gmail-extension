InboxSDK.load(2, 'sdk_Adryann_6a1d89bf45').then(function(sdk){
    // the SDK has been loaded, now do something with it!
    sdk.Compose.registerComposeViewHandler(function(composeView){
      // a compose view has come into existence, do something with it!
      composeView.addButton({
        title: "Working",
        hasDropdown: true,
        iconUrl: 'https://example.com/foo.png',
        onClick: function(event) {
          event.dropdown.el.innerHTML = "<iframe src='http://localhost:3000/' title='react'></iframe>";
        },

      });
    });
  });