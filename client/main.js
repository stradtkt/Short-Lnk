import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Tracker } from 'meteor/tracker';
import Signup from './../imports/ui/Signup';
import Link from './../imports/ui/Link';
import Login from './../imports/ui/Login';
import NotFound from './../imports/ui/NotFound';

const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/links'];
const onEnterPublicPage = () => {
    if(Meteor.userId()) {
        browserHistory.push('/links');
    }
};
const onEnterPrivatePage = () => {
    if(!Meteor.userId()) {
        browserHistory.push('/');
    }
};
const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={Login} onEnter={onEnterPublicPage}/>
        <Route path="/signup" component={Signup} onEnter={onEnterPublicPage}/>
        <Route path="/link" component={Link} onEnter={onEnterPrivatePage}/>
        <Router path="*" component={NotFound}/>
    </Router>
);


Tracker.autorun(() => {
    const isAuthenticated = !!Meteor.userId();
    const pathname = browserHistory.getCurrentLocation().pathname;
    const isUnAuthenticatedPage = unauthenticatedPages.includes(pathname);
    const isAuthenticatedPage = authenticatedPages.includes(pathname);
    if(isUnAuthenticatedPage && isAuthenticated) {
        browserHistory.push('/links');
    } else if(isAuthenticatedPage && !isAuthenticated) {
        browserHistory.push('/');
    }
});

Meteor.startup(() => {
    ReactDOM.render(routes, document.getElementById('app'));
});
