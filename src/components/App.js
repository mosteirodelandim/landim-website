// IMPORT PACKAGES

import React from 'react';
import { Provider } from 'react-redux';

// IMPORT STORE

import { createAppStore } from '../store/modules/stores/AppStore';

// IMPORT COMPONENTS

import { AppRouter } from '../navigation/AppRouter';


// COMPONENT

export const App = () => (
    <Provider store={createAppStore()}>
        <div className="container">
            <AppRouter />
        </div>
    </Provider>
);