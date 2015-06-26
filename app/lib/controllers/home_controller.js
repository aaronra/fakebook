HomeController = RouteController.extend({
  layoutTemplate: 'MasterLayout',

  subscriptions: function() {
  },

  action: function() {
    this.render('Home');
  },
  action: function() {
    this.render('Messages');
  },
  action: function() {
    this.render('Splash');
  }
});
