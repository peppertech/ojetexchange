/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */

'use strict';

/**
 * Example of Require.js boostrap javascript
 */

requirejs.config(
  {
    baseUrl: 'js',

    // Path mappings for the logical module names
    // Update the main-release-paths.json for release mode when updating the mappings
    paths:
//injector:mainReleasePaths

{
  "hellojs":"libs/hellojs/hello.all",
  "knockout":"https://static.oracle.com/cdn/jet/v6.0.0/3rdparty/knockout/knockout-3.4.2.debug",
  "jquery":"https://static.oracle.com/cdn/jet/v6.0.0/3rdparty/jquery/jquery-3.3.1",
  "jqueryui-amd":"https://static.oracle.com/cdn/jet/v6.0.0/3rdparty/jquery/jqueryui-amd-1.12.1",
  "promise":"https://static.oracle.com/cdn/jet/v6.0.0/3rdparty/es6-promise/es6-promise",
  "hammerjs":"https://static.oracle.com/cdn/jet/v6.0.0/3rdparty/hammer/hammer-2.0.8",
  "ojdnd":"https://static.oracle.com/cdn/jet/v6.0.0/3rdparty/dnd-polyfill/dnd-polyfill-1.0.0",
  "ojs":"https://static.oracle.com/cdn/jet/v6.0.0/default/js/debug",
  "ojL10n":"https://static.oracle.com/cdn/jet/v6.0.0/default/js/ojL10n",
  "ojtranslations":"https://static.oracle.com/cdn/jet/v6.0.0/default/js/resources",
  "text":"https://static.oracle.com/cdn/jet/v6.0.0/3rdparty/require/text",
  "touchr":"https://static.oracle.com/cdn/jet/v6.0.0/3rdparty/touchr/touchr",
  "signals":"https://static.oracle.com/cdn/jet/v6.0.0/3rdparty/js-signals/signals",
  "customElements":"https://static.oracle.com/cdn/jet/v6.0.0/3rdparty/webcomponents/custom-elements.min",
  "css":"https://static.oracle.com/cdn/jet/v6.0.0/3rdparty/require-css/css"
}

//endinjector
  }
);

/**
 * A top-level require call executed by the Application.
 * Although 'ojcore' and 'knockout' would be loaded in any case (they are specified as dependencies
 * by the modules themselves), we are listing them explicitly to get the references to the 'oj' and 'ko'
 * objects in the callback
 */
require(
  ['ojs/ojcore', 'knockout', 'appController', 'jquery', 'ojs/ojknockout',
    'ojs/ojmodule', 'ojs/ojrouter', 'ojs/ojnavigationlist', 'ojs/ojbutton', 'ojs/ojtoolbar'],
  function (oj, ko, app, $) { // this callback gets executed when all required modules are loaded
    $(function () {
      function init() {
        oj.Router.sync().then(
          function () {
            app.loadModule();
            // Bind your ViewModel for the content of the whole page body.
            ko.applyBindings(app, document.getElementById('globalBody'));
          },
          function (error) {
            oj.Logger.error('Error in root start: ' + error.message);
          }
        );
      }

      // If running in a hybrid (e.g. Cordova) environment, we need to wait for the deviceready
      // event before executing any code that might interact with Cordova APIs or plugins.
      if ($(document.body).hasClass('oj-hybrid')) {
        document.addEventListener('deviceready', init);
      } else {
        init();
      }
    });
  }
);
