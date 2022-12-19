import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './containers/navbar/App.jsx';
import {CalendarContextProvider} from './Context/calendar.context';

const rootElement = document.getElementById('body');

ReactDOM.render(
    <React.Fragment>
        <CalendarContextProvider>
            <Nav/>
        </CalendarContextProvider>
    </React.Fragment>,
    rootElement
);
