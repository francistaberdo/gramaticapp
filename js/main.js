var app = angular.module("gramApp", ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: "partials/home.html",
      controller: 'indxController'
    })
    .when('/video', {
      templateUrl: "partials/video.html",
      controller: 'videoCtrl'
    })
    .when('/ejercicio-1', {
      templateUrl: "partials/ejercicio1.html",
      controller: 'ejercicio1Ctrl'
    })
    .when('/ejercicio-2', {
      templateUrl: "partials/ejercicio2.html",
      controller: 'ejercicio2Ctrl'
    })
    .when('/teoria', {
      templateUrl: "partials/teoria.html",
      controller: 'ejercicio2Ctrl'
    })
    .when('/error-404', {
      templateUrl: "partials/error-404.html",
      controller: 'errorController'
    })
    .otherwise({
      redirectTo: '/error-404'
    });
});

app.controller('indxController', function ($scope, $http) {
  $scope.links = [
    {
      linkIcon: "fa fa-play fa-4x",
      linkName: "Video explicativo",
      linkUrl: "#/video",
      cardColor: "red lighten-1"
    },
    {
      linkIcon: "fa fa-quote-right fa-4x",
      linkName: "Práctica de la coma",
      linkUrl: "#/ejercicio-1",
      cardColor: "teal"
    },
    {
      linkIcon: "fa fa-retweet fa-4x",
      linkName: "Práctica mixta",
      linkUrl: "#/ejercicio-2",
      cardColor: "amber"
    }
  ]
});

app.controller('videoCtrl', function ($scope, $http) {

});

app.controller('ejercicio1Ctrl', function ($scope, $http) {

});

app.controller('ejercicio2Ctrl', function ($scope, $http) {
  $scope.laComa = "La Coma"
  $scope.elPuntoComa = "El punto y coma"

  $scope.content = [
    {
      firstCardTitle: "Adjetivos explicativos pospuestos al sustantivo u oraciones adjetivas explicativas:",
      firstCardDesc: "Se utilizan para explicar el porqué, el cómo o el que de una persona, situación u objeto. Ejemplo: Mi cuarto, que está muy desordenado, es el del fondo.",
      secondCardTitle: "Aposiciones explicativas:",
      secondCardDesc: "Ejemplo: En ese momento Juan, mi compañero, habló muy fuerte."
    },
    {
      firstCardTitle: "Expresiones u oraciones de carácter accesorio:",
      firstCardDesc: "Para separar expresiones u oraciones de tipo accesorio, que no se vinculan con los elementos del enunciado. Ejemplo: Llegó a las 4 a.m, ¡apenas para no dejarla entrar!, borracha y sin poder caminar.",
      secondCardTitle: "Cualquier otra clase de comentario, explicación o precisión a algo dicho:",
      secondCardDesc: "Para separar comentarios, explicaciones o para darle precisión a algo dicho. Ejemplo: Cada compañero, hasta el que nunca habla, estaban haciendo una fiesta en clases."
    },
    {
      firstCardTitle: "Se utiliza para separar elementos dentro de una enumeración:",
      firstCardDesc: "Ejemplo: tengo pizza, hamburguesas, tacos, burritos y pollo frito. Si la enumeración es completa o exhaustiva lleva una conjunción (y, e, o, u, ni), ántes del último elemento. En cambio si la enumeración es incompleta y se utilizan sólo algunos elementos, no se escribe conjunción antes del último elemento si no, una coma, esta enumeración se puede cerrar con puntos suspensivos o con etcétera (etc).",
      secondCardTitle: "Se separan con coma los miembros gramaticalmente equivalentes dentro de un mismo enunciado y al igual que el caso anterior se pueden usar conjunciones al final:",
      secondCardDesc: "Ejemplo: Apaga las luces, cierra el grifo, camina hacia afuera y cierra la puerta."
    },
    {
      firstCardTitle: "Los sustantivos que funcionan como vocativos (los vocativos se utilizan para llamar o nombrar al interlocutor) se aíslan entre comas:",
      firstCardDesc: "Ejemplo: Vengan a almorzar, hijos.",
      secondCardTitle: "Se escriben entre comas las interjecciones o locuciones interjectivas:",
      secondCardDesc: "Las interjecciones son expresiones fuertes por ejemplo de asombro, alegría, admiración, saludo, etc. Ejemplo: ¡ay!, eso me dolió."
    },
    {
      firstCardTitle: "Se escribe con coma para separar el sujeto de los complementos verbales cuando el elemento ha sido mencionado con anterioridad:",
      firstCardDesc: "Ejemplo: Los que no están en la lista, se deben devolver.",
      secondCardTitle: "Se escribe coma delante de las oraciones o elementos coordinados encabezados por adverbios que funcionan como conjunciones distributivas:",
      secondCardDesc: "Lo hacemos, bien aquí, bien allá."
    },
    {
      firstCardTitle: "Se recomienda escribir coma delante de excepto, salvo y menos:",
      firstCardDesc: "Ejemplo: Estoy harto de todos, excepto de tí.",
      secondCardTitle: "Se escribe coma delante conjunciones como pero, mas, aunque, sino y delante de oraciones consecutivas introducidas por conque, así que, de manera que, etc:",
      secondCardDesc: "Ejemplo: Te dije q iba a estar contigo, así que, aquí me tienes."
    },
    {
      firstCardTitle: "Se utiliza la coma para separar los 2 términos de la construcción copulativa intensiva no solo …, si no también:",
      firstCardDesc: "Ejemplo: No solo me engañaste a mi, si no también a ella.",
      secondCardTitle: "Se escribe coma después de distintos enlaces como por ejemplo: esto es, es decir, a saber, pues bien, ahora bien, en primer lugar, por un/otro lado, por una/otra parte, en fin, por último, además, con todo, en tal caso, sin embargo, no obstante, por el contrario, en cambio y otros. También se utiliza la coma detrás de adverbios o locuciones adverbiales, siempre y cuando estos modifiquen a toda la oración y no solo a uno de sus elementos, por ejemplo: efectivamente, generalmente, naturalmente, por regla general, etc. Si estas palabras van medio de la oración se escribe entre comas:",
      secondCardDesc: "Ejemplo: Los bananos y las peras son frutas, en cambio, la zanahoria y el brócoli son hortalizas."
    },
    {
      firstCardTitle: "Se escribe con coma antes de los complementos encabezados por locuciones preposicionales de valor introductorio, condicional, concesivo, final, causal, etc del tipo en cuanto a, respecto de, con respecto a, en relación con, con referencia a, a tenor de, en ese caso, a pesar de todo, para eso, etc:",
      firstCardDesc: "Ejemplo: Para eso, mejor me hubiera quedado en la casa.",
      secondCardTitle: "Se pone coma antes de una palabra que se repite para dar una explicación sobre ella:",
      secondCardDesc: "Ejemplo: Ayer nació el bebé del vecino, bebé que, murió hoy en la mañana."
    },
    {
      firstCardTitle: "La palabra etcétera se separa del resto del enunciado con coma:",
      firstCardDesc: "Ejemplo: Recuerda llevar camisas, pantalones, ropa interior, etcétera, al paseo familiar.",
      secondCardTitle: "Cuando se menciona un sobrenombre seguido del nombre, este debe escribirse entre comas:",
      secondCardDesc: "Ejemplo: Se recordó hoy la muerte de Manuel Loureiro, Mani."
    },
    {
      firstCardTitle: "Se recomienda escribir el nombre del autor entre comas cuando es mencionado:",
      firstCardDesc: "Ejemplo: En su novela, Paulo Coelho, menciona…",
      secondCardTitle: "En la redacción de cartas se escribe coma entre el lugar y la fecha o entre el día de la semana y el del mes:",
      secondCardDesc: "Ejemplos: 1- San Ramón, 02 de Enero del 2016. 2- Martes, 02 de Enero del 2016."
    },
    {
      firstCardTitle: "En las direcciones, se escribe coma entre el nombre de la calle y el número del inmueble:",
      firstCardDesc: "Ejemplo: Calle de Pontevedra, 25; Avenida de la embajada, número 5.",
      secondCardTitle: "Se separan con comas el nombre de una colección y el número del volumen correspondiente:",
      secondCardDesc: "Ejemplo: Apocalipsis Z, 1."
    },
    {
      firstCardTitle: "Se separa con coma los componentes de un nombre o expresión cuando para ser integrados en una lista alfabética se alteró el orden de sus elementos:",
      firstCardDesc: "Ejemplo: Guerrero, Ignacio: Multimedia.",
      secondCardTitle: "Para distinguir entre sentidos posibles de un mismo enunciado:",
      secondCardDesc: "Ejemplo: Ya comí, como usted me indicó (me indicó que comiera); Ya comí como usted me indicó (Me indicó cómo debía comer)."
    },
    {
      firstCardTitle: "En una lista de elementos complejos que se separan unos de otros por punto y coma, se debe utilizar la coma delante de la conjunción que introduce el último de estos elementos:",
      firstCardDesc: "Ejemplo: El microondas está sobre el desayunador; el televisor, sobre el sillón; los platos, en el armario.",
      secondCardTitle: "Se escribe la coma delante de las conjunciones cuando la secuencia enlaza todo el predicado anterior:",
      secondCardDesc: "Ejemplo: Buscó un pantalón, una camisa y unas medias, se bañó, y se fue para la fiesta."
    },
    {
      firstCardTitle: "Si se enlazan miembros que sean equivalentes gramaticalmente dentro de un mismo enunciado, si el último no indica una conclusión o una consecuencia, se escribe coma delante de la conjunción:",
      firstCardDesc: "Ejemplo: Pintaron las paredes de la habitación, cambiaron la disposición de los muebles, pusieron alfombras nuevas, y quedaron encantados con el resultado.",
      secondCardTitle: "Se coloca como delante de la conjunción de oraciones coordinadas cuando la primer oración es extensa y principalmente cuando tienen sujetos distintos:",
      secondCardDesc: "Ejemplo: El candidato se levantaba temprano para ir a caminar y respirar aire fresco, mientras su guardaespaldas le seguía discretamente desde un automóvil."
    },
    {
      firstCardTitle: "Se coloca coma antes de la conjunción “y” cuando esta tiene valor adversativo (es equivalente a “pero”):",
      firstCardDesc: "Ejemplo: El médico le recomendó que dejara de tomar Coca Cola, y ella siguió tomando.",
      secondCardTitle: "Se debe escribir coma delante o detrás de las conjunciones si inmediatamente antes o después hay un inciso que se deba aislar por comas:",
      secondCardDesc: "Ejemplo: Si quieres puedes hacer el pedido con nosotros, o hacerlo por separado la siguiente semana."
    },
    {
      firstCardTitle: "No se escribe coma después de “pero”, cuando va antes de una oración exclamativa o interrogativa:",
      firstCardDesc: "Ejemplo: Pero ¿dónde escondiste la droga? Pero ¡qué valiente que eres!",
      secondCardTitle: "No se debe usar la coma después del saludo en cartas y documentos:",
      secondCardDesc: "Ejemplo incorrecto: Buenas tardes, le escribo para comunicarle que… Ejemplo correcto: Buenas tardes: le escribo para comunicarle que…"
    },
    {
      firstCardTitle: "En expresiones numéricas se utiliza la coma para separar la parte entera de la parte decimal:",
      firstCardDesc: "Ejemplos: 20,90; 1.200,37",
      secondCardTitle: "No se debe escribir coma después de la conjunción “que” cuando esta obtiene un sentido consecutivo y cuando antes de esta conjunción se escribe o no “tan” o “tal”:",
      secondCardDesc: "Ejemplo: El problema era tan grande que ya no se podía seguir evitando."
    }
  ]
});

app.controller('errorController', function ($scope, $http) {

});