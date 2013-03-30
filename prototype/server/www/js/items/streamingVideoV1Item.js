angular.module('streamingVideoV1Item', [
	'edit-map', //maps
	'disp-map'  //maps
])

.controller('TileStreamingVideoV1ItemCtrl', function($scope) {

})

.directive('tileStreamingVideoV1Item', function() {
	return {
		restrict: 'E',
		scope: {
			item: "="
		},
		templateUrl: '/template/items/streamingVideoV1/tile-streamingVideoV1-item.html',
		controller: 'TileStreamingVideoV1ItemCtrl',
		link: function(scope, element, attr) {

		}
	};
})

.controller('CloseupStreamingVideoV1ItemCtrl', function($scope, ItemCache, CloseupItemDialog) {

})

.directive('closeupStreamingVideoV1Item', function() {
	return {
		restrict: 'E',
		scope: {
			item: "=",
			dialog: "="
		},
		templateUrl: '/template/items/streamingVideoV1/closeup-streamingVideoV1-item.html',
		controller: 'CloseupStreamingVideoV1ItemCtrl',
		link: function(scope, element, attr) {

		}
	};
});