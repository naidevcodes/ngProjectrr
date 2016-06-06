angular.module('ngProjectrr.services',[]).factory('Project',function($resource){
    return $resource('http://localhost:3000/projects/:id',{
        update: {
            method: 'PUT'
        }
    });
}).service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});