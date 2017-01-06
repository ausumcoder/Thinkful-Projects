var app = angular.module('myApp', []);
app.directive('yoYo',function(){

	return{
		template: '<strong> Heyy Yo Yo! </strong>',
		restrict: 'E'
	}
})