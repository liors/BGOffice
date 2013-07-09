var appModule = angular.module('app',[]);

appModule.factory('service', function() {  
    return {
        employees : {
            data : [
                { "name" : "Yaron Samid", "job" : "Founder & CEO", "img" : "yaron"},
                { "name" : "Raphael Ouzan", "job": "Founder & CTO", "img" : "raphael"},
                { "name" : "Chof Golan", "job": "Art Director", "img" : "chofgolan"},
                { "name" : "Lea Aharonovitch", "job": "Director, Product Management", "img" : "lea"},
                { "name" : "Ella Ayalon", "job": "Senior Analyst at BillGuard", "img" : "ella"},
                { "name" : "Marina Boykis", "job": "Community Manager", "img" : "marina"},
                { "name" : "David Brailovsky", "job": "Software Engineer", "img" : "david"},
                { "name" : "Nimrod Gutman", "job": "Software Engineer", "img" : "guti"},
                { "name" : "Yoni Levy", "job": "Software Engineer", "img" : "yoni"},
                { "name" : "Noam Nelke", "job": "Analyst and backoffice developer", "img" : "noam"},
                { "name" : "Dan Peguine", "job": "Director of Product Marketing", "img" : "dan"},
                { "name" : "Danna Raz", "job": "Head of HR & Operations", "img" : "dan"},
                { "name" : "Elad Mallel", "job": "BillGuard Resolve Tech Lead", "img" : "elad"},
                { "name" : "Limor Manyevich", "job": "Interactive Designer", "img" : "limor"},
                { "name" : "Hilla Peled Kalo", "job": "Data Science", "img" : "hilla"},
                { "name" : "Lior Shefer", "job": "Senior Software Engineer", "img" : "lior"},
                { "name" : "Michael Yoffe", "job": "Software Developer", "img" : "michael"}                
            ]
        }
    };
});

function TeamCtrl($scope, service) {
    var firstIndex = getIndex();
    var list = [firstIndex];
    var secondIndex = getNewIndex(list);
    list.push(secondIndex);
    var thirdIndex = getNewIndex(list);

    var users = [service.employees.data[firstIndex], 
    service.employees.data[secondIndex],
    service.employees.data[thirdIndex]];
    $scope.users = users;   

    function getIndex() {
        var minimum = 0;
        var maximum = service.employees.data.length - 1;
        return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    } 

    function getNewIndex(list) {
        var index = getIndex();
        while (!$.inArray(index, list)) {
            index = getIndex();                                                                                               
        }
        return index;
    }
}

function FormCtrl($scope, $element, $http, service) {
    $scope.employees = service.employees.data;
    $scope.submit = function() {
        var url = "https://billguard.com/office-visitors?"+$element.serialize()+"&callback=JSON_CALLBACK";
        $http.jsonp(url).success(function(data){
            if (data.status === 'OK') {
                resetForm();
                window.bootbox.alert("Thanks!");                
            } else {
                window.alert("Oops something went wrong...");
            }
       });   
    };

    function resetForm() {
        $scope.firstName = "";
        $scope.lastName = "";
        $scope.company = "";
        $scope.visiting = "";
    };
    
}