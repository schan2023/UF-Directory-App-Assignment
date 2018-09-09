angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.indexOfListing = undefined;

    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */
    $scope.addListing = function() {
      this.listings.push($scope.listingEntry);
      $scope.listingEntry = null;
    };

    $scope.deleteListing = function(index) {
      if($scope.detailedInfo === null) {
        return;
      }
      $scope.listings.splice($scope.indexOfListing, 1);
      $scope.detailedInfo = null;
    };

    $scope.showDetails = function(index) {
      $scope.detailedInfo = index;
      $scope.indexOfListing = $scope.listings.indexOf(index);
    };
    
  }
]);
