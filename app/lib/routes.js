Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('/', {
  name: 'splash',
  controller: 'HomeController',
  action: 'action',
  where: 'client'
});
Router.route('/messages', {
  name: 'messages',
  controller: 'HomeController',
  action: 'action',
  where: 'client'
});
