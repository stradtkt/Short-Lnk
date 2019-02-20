import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Signup from './../ui/Signup';
import Link from './../ui/Link';
import Login from './../ui/Login';
import NotFound from './../ui/NotFound';

const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/links'];
const onEnterPublicPage = () => {
    if(Meteor.userId()) {
        browserHistory.replace('/links');
    }
};
const onEnterPrivatePage = () => {
    if(!Meteor.userId()) {
        browserHistory.replace('/');
    }
};

export const onAuthChange = (isAuthenticated) => {
    const pathname = browserHistory.getCurrentLocation().pathname;
    const isUnAuthenticatedPage = unauthenticatedPages.includes(pathname);
    const isAuthenticatedPage = authenticatedPages.includes(pathname);
    if(isUnAuthenticatedPage && isAuthenticated) {
        browserHistory.replace('/links');
    } else if(isAuthenticatedPage && !isAuthenticated) {
        browserHistory.replace('/');
    }
};

export const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={Login} onEnter={onEnterPublicPage}/>
        <Route path="/signup" component={Signup} onEnter={onEnterPublicPage}/>
        <Route path="/link" component={Link} onEnter={onEnterPrivatePage}/>
        <Router path="*" component={NotFound}/>
    </Router>
);
