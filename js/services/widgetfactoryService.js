(function(){
	'use strict';

	angular.module('webviewer')
			.service('widgetfactoryService', widgetfactoryService);

	function widgetfactoryService(){
		var factory = this;

		factory.getContentFrame = function(scope){
			console.log("Adding content frame");
			var target = angular.element(document.getElementById('grid_stack_content'));

			var showPage = angular.element('<img src="../res/img/SVG/32-office-icons_21.svg" ng-click="getPage()" class="icons" title="View Document"/>');
			var nextPage = angular.element('<img src="../res/img/SVG/32-office-icons_22.svg" ng-click="removePage()" class="icons" title="Next Document"/>');
			angular.element(target).append(showPage);
			angular.element(target).append(nextPage);

			var newWidget = {
                x: 0,
                y: 0,
                width: 1,
                height: 1
            };
            scope.widgets.push(newWidget);
			return true;
		}

		factory.getThumbnailPanel = function(scope){
			console.log("Adding thumbnail frame");
			var newWidget = {
                x: 0,
                y: 0,
                width: 1,
                height: 1
            };
            scope.widgets.push(newWidget);
			return true;
		}

		factory.getNotesPanel = function(scope){
			console.log("Adding notes panel");
			var newWidget = {
                x: 0,
                y: 0,
                width: 1,
                height: 1
            };
            scope.widgets.push(newWidget);
			return true;
		}

		factory.getHelpFrame = function(scope){
			console.log("adding help panel");
			var newWidget = {
                x: 0,
                y: 0,
                width: 1,
                height: 1
            };
            scope.widgets.push(newWidget);
			return true;
		}
	}

})();