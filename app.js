var app = angular.module("ShoppingList", []);

app.controller("ListController", function ($scope) {
            $scope.list = ["milk", "cheese", "egg"];
            $scope.delete = [];

            $scope.addItem = function (z) {
                if (z == "") {
                    alert("Enter valid item");
                } else {
                    $scope.list.push(z);
                    $scope.newItem = "";
                }
            }
                $scope.remove = function ($event, y) {
                    if($event.target.id ==="removeItem"){
                        var removeItem = $scope.list.indexOf(y);
                        $scope.list.splice(removeItem, 1);
                        $scope.delete.push(y);
                    }else{
                        var removeItem = $scope.delete.indexOf(y);
                        $scope.delete.splice(removeItem, 1);
                        $scope.list.push(y);
                    }
                }
            });