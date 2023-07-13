document.addEventListener("DOMContentLoaded", function () {
  var button = document.getElementById("myButton");
  button.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      // Perform some action on the active tab
      var activeTab = tabs[0];
      console.log("Active tab:", activeTab);
      // Add your logic here
    });
  });
});
