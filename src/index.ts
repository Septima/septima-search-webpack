
import DefaultView from '@septima/septima-search/defaultview/View.js'
import ControllerBuilder from '@septima/septima-search/ControllerBuilder.js';

var options = {
    "controller": {
      "_type": "Septima.Search.Controller",
      "_options": {"blankBehavior": "search"},
      "searchers": [
        {
          "_type": "Septima.Search.DawaSearcher",
          "_options": {
            "kommunekode": 157,
            "minimumShowCount": 0
          }
        }
      ]
    }
  }

const controllerBuilder = new ControllerBuilder();
const controller = await controllerBuilder.setOptions(options).build();

new DefaultView({
    input: 'septimasearch',
    controller
});

console.log("Hello from Webpack!");

const appDiv = document.getElementById('app');
if (appDiv)
  appDiv.innerHTML = '<h1>Hello, Webpack!</h1>';


