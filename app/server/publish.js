/**
 * Meteor.publish('items', function (param1, param2) {
 *  this.ready();
 * });
 */
Meteor.publish("posts",function(userid){
    return Posts.find({});
})
Meteor.publish("likes",function(postid){
    return Likes.find({post:postid});
})
