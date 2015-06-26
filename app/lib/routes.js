Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('/', {
  name: 'splash'
});
Router.route('/messages', {
  name: 'messages'
});
Router.route('/home', {
  name: 'home'
});
