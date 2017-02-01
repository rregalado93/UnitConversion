# Unit Calculator

## this calculator converts Unit

* [Git CheatSheet]https://www.git-tower.com/blog/git-cheat-sheet/
* [Markdown cheatsheet]https://github.com/adam-p/markdown-here/wiki/Markdown-Here-Cheatsheet#emphasis

### Angular MVC
![Angular is a client-side Javascript MVC framework](http://hop.ie/talks/angular-intro/images/angularjs.jpeg)
this `code` is _**simple**_:

```html
<html>

<head>
    <title>Page Title</title>
    <script src="/node_modules/jquery/dist/jquery.min.js"></script>

</head>

<body>

    <div class="container">
        <div class="yellow">1</div>
        <div class="red">2</div>
        <div class="green">3</div>
        <div class="blue">4</div>
        <div class="pink">5</div>
        <div class="orange">6</div>
        <div class="black">7</div>
        <div class="white">8</div>
    </div>

    <script lang="javascript">
        var $container = $("div.container");
        $container.html(shuffle($container.children().get()));

        function shuffle(o) {
            for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
            return o;
        };
    </script>

</body>

</html>

```

```javascript
var myApp = angular.module('myApp', []);

myApp.controller('DoubleController', [$scope, function($scope)
{
    $scope.double = function(value) {return value * 2;}
}]);