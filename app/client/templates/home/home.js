/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({
    'keyup .posttext': function (evt, tmpl) {
        if (evt.which === 13) {
            var posttext = tmpl.find('.posttext').value;
            Posts.insert({text: posttext, owner: Meteor.userId(), date: new Date(), parent: null});
            $('.posttext').val("").select().focus();
        }
    }
});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.Home.helpers({});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Home.created = function () {
};

Template.Home.rendered = function () {
    Deps.autorun(function () {
        Meteor.subscribe("posts", Meteor.userId());
        Meteor.subscribe("likes");
    })
};

Template.Home.destroyed = function () {
};
Template.Home.posts = function () {
    return Posts.find({}, {sort: {date: -1}});
};