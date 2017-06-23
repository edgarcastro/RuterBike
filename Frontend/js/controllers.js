var host = "https://ruterbike.herokuapp.com";

angular.module("myApp")
    .controller("homeController", function ($scope, $http) {
        $http({
            method: 'GET',
            url: host + '/',
        }).then(function successCallback(response) {
            $scope.productos = response.data;
        }, function errorCallback(response) {
            console.log("Error" + response);
        });
    })
    .controller("productsController", function ($scope, $http) {
        $http({
            method: 'GET',
            url: host + '/products',
        }).then(function successCallback(response) {
            $scope.productos = response.data;
        }, function errorCallback(response) {
            console.log("Error" + response);
        });
    })
    .controller("productController", function ($scope, $http, $routeParams) {
        $http({
            method: 'GET',
            url: host + '/products/' + $routeParams.id + '/',
        }).then(function successCallback(response) {
            $scope.producto = response.data;
        }, function errorCallback(response) {
            console.log("Error" + response);
        });

        function esSimilar(bicicleta) {
            return $scope.producto.id != bicicleta.id && $scope.producto.categoria == bicicleta.categoria;
        };
        $http({
            method: 'GET',
            url: host + '/products',
        }).then(function successCallback(response) {
            $scope.similares = response.data;
            $scope.similares = $scope.similares.filter(esSimilar);
        }, function errorCallback(response) {
            console.log("Error" + response);
        });
    })
    .controller("contactController", function ($scope, $http) {
        $http({
            method: 'GET',
            url: host + '/contact',
        }).then(function successCallback(response) {
            $scope.info = response.data;
        }, function errorCallback(response) {
            console.log("Error" + response);
        });
    })
    .controller("filterInfantil", function ($scope, $http) {
        function esInfantil(bicicleta) {
            return bicicleta.categoria.toUpperCase() == "INFANTIL";
        };
        $http({
            method: 'GET',
            url: host + '/products',
        }).then(function successCallback(response) {
            $scope.productos = response.data;
            $scope.productos = $scope.productos.filter(esInfantil);

        }, function errorCallback(response) {
            console.log("Error" + response);
        });
    })
    .controller("filterRuta", function ($scope, $http) {
        function esRuta(bicicleta) {
            return bicicleta.categoria.toUpperCase() == "RUTA";
        };
        $http({
            method: 'GET',
            url: host + '/products',
        }).then(function successCallback(response) {
            $scope.productos = response.data;
            $scope.productos = $scope.productos.filter(esRuta);

        }, function errorCallback(response) {
            console.log("Error" + response);
        });
    })
    .controller("filterMontania", function ($scope, $http) {
        function esMontania(bicicleta) {
            return bicicleta.categoria.toUpperCase() == "MONTAÑA";
        };
        $http({
            method: 'GET',
            url: host + '/products',
        }).then(function successCallback(response) {
            $scope.productos = response.data;
            $scope.productos = $scope.productos.filter(esMontania);

        }, function errorCallback(response) {
            console.log("Error" + response);
        });
    })
    .controller("filterCarga", function ($scope, $http) {
        function esCarga(bicicleta) {
            return bicicleta.categoria.toUpperCase() == "CARGA";
        };
        $http({
            method: 'GET',
            url: host + '/products',
        }).then(function successCallback(response) {
            $scope.productos = response.data;
            $scope.productos = $scope.productos.filter(esCarga);

        }, function errorCallback(response) {
            console.log("Error" + response);
        });
    })
    .controller("filterMotor", function ($scope, $http) {
        function esMotor(bicicleta) {
            return bicicleta.categoria.toUpperCase() == "MOTOR";
        };
        $http({
            method: 'GET',
            url: host + '/products',
        }).then(function successCallback(response) {
            $scope.productos = response.data;
            $scope.productos = $scope.productos.filter(esMotor);

        }, function errorCallback(response) {
            console.log("Error" + response);
        });
    })
    .controller("filterElectrica", function ($scope, $http) {
        function esElectrica(bicicleta) {
            return bicicleta.categoria.toUpperCase() == "ELECTRICA";
        };
        $http({
            method: 'GET',
            url: host + '/products',
        }).then(function successCallback(response) {
            $scope.productos = response.data;
            $scope.productos = $scope.productos.filter(esElectrica);

        }, function errorCallback(response) {
            console.log("Error" + response);
        });
    });