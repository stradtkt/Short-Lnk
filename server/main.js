import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';
import '../imports/api/users';
import '../imports/api/links';
import '../imports/startup/simple-schema-configuration';

Meteor.startup(() => {
    WebApp.connectHandlers.use((req, res, next) => {
        console.log('This is from my custom middleware!');
        res.statusCode = 404;
        next();
    });
});
