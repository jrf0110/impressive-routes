var impressiveRoutes = (function(){
  var routes = { enter: {}, exit: {} }
  , scopes = {}
  , $framework = (typeof $ !== 'undefined' && $ !== null)
  , _addEvent = function(el, type, fn){
      if ($framework) return $(el).on(type, fn);
      return el.addEventListener(type, fn);
    }
  , _bind = function(fn, obj){
      if ($framework) return $.proxy(fn, obj);
      return fn.bind(obj);
    }
  , _addRoute = function(type, name, fn, scope){
      scopes[name] = scope || {};
      routes[type][name] = _bind(fn);
    };
  _addEvent(document, 'impress:stepenter', function(e){
    var route = e.target.id;
    if (routes.enter.hasOwnProperty("everything")) routes.enter["everything"].call(scopes["everything"], e.target, e);
    if (routes.enter.hasOwnProperty(route)) routes.enter[route].call(scopes[route], e.target, e);
  });
  _addEvent(document, 'impress:stepleave', function(e){
    var route = e.target.id;
    if (routes.exit.hasOwnProperty("everything")) routes.exit["everything"].call(scopes["everything"], e.target, e);
    if (routes.exit.hasOwnProperty(route)) routes.exit[route].call(scopes[route], e.target, e);
  });

  return {
    enter: function(name, fn, scope){ _addRoute('enter', name, fn, scope); }
  , exit: function(name, fn, scope){ _addRoute('exit', name, fn, scope); }
  };
})();