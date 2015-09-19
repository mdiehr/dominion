// Global singleton router
var RouterService = exports;

let router = null;

RouterService.setRouter = function(newRouter) {
    router = newRouter;
};

RouterService.transitionTo = function(path) {
    router.transitionTo(path);
};

RouterService.getRouter = function() {
    return router;
};

RouterService.getParams = function() {
    return router.state.params;
};
