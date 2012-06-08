#Impressive Routes - Routing for impress.js

If you need to execute some javascript for specific slides on impress.js, then setup some routing with Impressive Routes.

```javascript
// The function argument is passed the step dom element and the event from impress
impressiveRoutes.enter('slide-1', function(slide, event){
  console.log('Welcome to slide one');
});

impressiveRoutes.exit('slide-1', function(slide, event){
  console.log('Leaving slide one');
});

// I'd probably setup a shortcut first actually
var routes = impressiveRoutes;
routes.enter('slide-2', function(slide, event){
  console.log("Enter slide 2");
});
```

##One more thing

Corresponding Enter and Exit routes share the same scope.

```javascript
routes.enter('slide-3', function(){
	this.hi = "Mom!";
});
routes.exit('slide-3', function(){
	console.log("Hi, " + this.hi); // "Hi, Mom!"
});
```

##That's it. Pretty simple.

