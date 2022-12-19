import React, {createContext, Reducer, useMemo, useReducer} from 'react';
import {Action, ContextType, State} from '../../types/calendarState.types';
import {calendarReducer, initialState} from '../reducers/calendar.reducer';

export const calendarContext = createContext<ContextType>(null as any);

export const CalendarContextProvider: React.FC = ({children}) => {
    const [state, dispatch] = useReducer<Reducer<State, Action>>(
        calendarReducer,
        initialState
    );
    const value: ContextType = useMemo(
        () => ({
            state,
            dispatch
        }),
        [state]
    );

    return (
        <calendarContext.Provider value={value}>
            {children}
        </calendarContext.Provider>
    );
};
