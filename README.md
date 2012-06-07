#Impressive Routes - Routing for impress.js

If you need to execute some javascript for specific slides on impress.js, then setup some routing with Impressive Routes.

```javascript
impressiveRoutes.enter('slide-1', function(slide){
  console.log('Welcome to slide one');
});

impressiveRoutes.exit('slide-1', function(slide){
  console.log('Leaving slide one');
});
```

##That's it. Pretty simple.

