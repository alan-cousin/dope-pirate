window.dragon = {
  /// after unity instace loaded, this method will be called by unity object(dragonEventHandler)
  initialize: function () {
    var root = document.getElementById('root');
    root.style.display = 'block';
  },

  walletConnect: function (address) {
    window.dragon.walletAddress = address.toString();
    if (unityInstance != undefined)
      unityInstance.SendMessage('DragonWeb3Connector', 'WalletConnected', address.toString());
  },

  checkWalletConnect: function () {
    if (window.dragon.walletAddress != undefined)
      unityInstance.SendMessage('DragonWeb3Connector', 'WalletConnected', window.dragon.walletAddress);
  }
}
