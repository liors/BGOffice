function TeamCtrl($scope) {
	var yaron = { "name" : "Yaron Samid", "job" : "Founder & CEO", "img" : "yaronsamid"};
	var raphael = { "name" : "Raphael Ouzan", "job": "Founder & CTO", "img" : "raphael"};
  	var users = [yaron, raphael];
  	$scope.users = users;    
}

function FormCtrl($scope, $element, $http) {
	$scope.submit = function() {
        var url = "https://billguard.com/office-visitors?"+$element.serialize()+"&callback=JSON_CALLBACK";
        $http.jsonp(url).success(function(data){
			if (data.status === 'OK') {
        		window.bootbox.alert("Thanks!");
        		$scope.firstName = "";
        		$scope.lastName = "";
        		$scope.company = "";
        		$scope.visiting = "";
			} else {
				window.alert("Oops something went wrong...");
			}
       });
	
  };
}