(function() {
	'use strict';

	angular.module('psi').component('languageList', {
		templateUrl : 'app/components/i18n/translation.component.html',
		controllerAs : 'vm',
		controller : controller

	});

	/** @ngInject */
	function controller($translate) {
		var vm = this;
		//translate
		vm.lang = {
			isopen : false
		};
		vm.langs = {
			en : 'English',
			es : 'Spanish'
		};
		vm.selectLang = vm.langs[localStorage.getItem("NG_TRANSLATE_LANG_KEY")]
				|| "English";
		vm.setLang = function(langKey) {
			// set the current lang
			vm.selectLang = vm.langs[langKey];
			// You can change the language during runtime
			$translate.use(langKey);
			vm.lang.isopen = !vm.lang.isopen;
		};
	}

})();
