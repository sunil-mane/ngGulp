(function() {
  'use strict';

  angular
  .module('psi')
  .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, $translateProvider) {


    // Register a loader for the static files
        // So, the module will search missing translation tables under the specified urls.
        // Those urls are [prefix][langKey][suffix].
        $translateProvider.useStaticFilesLoader({
          prefix: 'app/i18n/',
          suffix: '.json'
        });

        $translateProvider.useSanitizeValueStrategy('sanitize');
        // Tell the module what language to use by default
        $translateProvider.preferredLanguage('en');
        //$translateProvider.useInterpolation('customInterpolation');
        // Tell the module to store the language in the local storage
        $translateProvider.useLocalStorage();

    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;

    //$httpProvider.defaults.headers.common['Authorization'] = "Basic dXNlcjozNDY4YTljYS00OTg5LTRiN2EtYjk1NS02ZTc2ODNmYTJmZTU=";
  }

})();
