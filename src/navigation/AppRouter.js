// IMPORT PACKAGE REFERENCES

import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// IMPORT PROJECT REFERENCES

import { Header } from '../components/Header/Header';
import { HomePage } from '../components/pages/HomePage';
import { AboutPage } from '../components/pages/AboutPage';
import { ZipCodesPage } from '../components/pages/ZipCodesPage';


// COMPONENT

export const AppRouter = () => (
    <BrowserRouter>
        <Fragment>
            <Header />            
            <Switch>
                <Route path='/' component={HomePage} exact={true} />
                <Route path='/zipcodes' component={ZipCodesPage} />
                <Route path='/about' component={AboutPage} />
                <Redirect to="/" />
            </Switch>
        </Fragment>
    </BrowserRouter>
);