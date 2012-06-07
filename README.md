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

##That's it. Pretty simple.

