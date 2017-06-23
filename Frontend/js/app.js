/*JS_for_Grupo_inn = {Author: Edgar Castro, Mail: edgar.castro.villa@outlook.com, Version: 0.1}*/
angular.module("myApp", ["ngRoute"])
    .config(function ($routeProvider, $httpProvider) {
        $routeProvider
            .when("/", {
                controller: "homeController",
                templateUrl: "templates/home.tmpl.html"
            })
            .when("/bicicletas/", {
                controller: "productsController",
                templateUrl: "templates/products.tmpl.html"
            })
            .when("/bicicletas/:id", {
                controller: "productController",
                templateUrl: "templates/product.tmpl.html"
            })
            .when("/bicicletas/categoria/infantil", {
                controller: "filterInfantil",
                templateUrl: "templates/products.tmpl.html"
            })
            .when("/bicicletas/categoria/ruta", {
                controller: "filterRuta",
                templateUrl: "templates/products.tmpl.html"
            })
            .when("/bicicletas/categoria/montaña", {
                controller: "filterMontania",
                templateUrl: "templates/products.tmpl.html"
            })
            .when("/bicicletas/categoria/carga", {
                controller: "filterCarga",
                templateUrl: "templates/products.tmpl.html"
            })
            .when("/bicicletas/categoria/motor", {
                controller: "filterMotor",
                templateUrl: "templates/products.tmpl.html"
            })
            .when("/bicicletas/categoria/electrica", {
                controller: "filterElectrica",
                templateUrl: "templates/products.tmpl.html"
            })
            .when("/servicios", {
                templateUrl: "templates/service.tmpl.html"
            })
            .when("/contactanos", {
                controller: "contactController",
                templateUrl: "templates/contact.tmpl.html"
            })
            

            $httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    });