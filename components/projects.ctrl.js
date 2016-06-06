(function() {
  "use strict";

  angular
    .module("ngProjectrr.projectsCtrl",[])
    .controller("ProjectListCtrl", function($scope,$stateParams,popupService,$window,Project) {
      $scope.projects = Project.query();

      $scope.deleteProject = function(project) {
        if (popupService.showPopup('Are you sure you want to delete this project?')) {
          project.$delete(function() {
            $window.location.href = '';
          });
        }
      };
    }).controller('ProjectViewController', function($scope, $stateParams, Project) {
      $scope.project = Project.get({ id: $stateParams.id });
    }).controller('ProjectCreateController', function($scope, $state, $stateParams, Project) {
      $scope.project = new Project();

      $scope.addProject = function() {
        $scope.project.$save(function() {
          $state.go('projects');
        });
      };
    }).controller('ProjectEditController', function($scope, $state, $stateParams, Project) {
      $scope.updateProject = function() {
        $scope.project.$update(function() {
          $state.go('projects');
        });
      };

      $scope.loadProject = function() {
        $scope.project = Project.get({ id: $stateParams.id });
      };

      $scope.loadProject();
    });
})();