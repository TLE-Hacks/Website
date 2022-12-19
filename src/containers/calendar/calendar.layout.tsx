import React, {useContext} from 'react';
import {CALENDAR_VIEW} from '../../constants';
import {months} from '../../constants';
import {calendarContext} from '../../Context/calendar.context';
import {Flexbox} from '../../elements/Flexbox';
import * as H from './style';

interface actionTypes {
    type: string;
    data?: number | string;
}

interface CalendarLayoutProps {
    handleActionProceed?: actionTypes;
    handleActionBack?: actionTypes;
}

const CalendarLayout: React.FC<CalendarLayoutProps> = ({
                                                           children,
                                                           handleActionProceed,
                                                           handleActionBack
                                                       }) => {
    const contextTesting = useContext(calendarContext);
    const {state, dispatch} = contextTesting as any;
    return (
        <H.Container>
            <Flexbox className="card-top" flexRow>
                <h3 style={{fontSize: 20}} color="white">
                    Events schedule {months[state.month - 1]} {state.year}
                </h3>
                <Flexbox flexRow className="card-top-inner">
                    <Flexbox
                        justifyCenter
                        alignCenter
                        className="card-top-inner-item"
                        onClick={() => dispatch(handleActionBack)}
                    >
                        P
                    </Flexbox>
                    <Flexbox
                        justifyCenter
                        alignCenter
                        className={`card-top-inner-item ${
                            state.index !== CALENDAR_VIEW && 'card-top-inner-item__disabled'
                        }`}
                        onClick={() => dispatch(handleActionProceed)}
                    >
                        N
                    </Flexbox>
                </Flexbox>
            </Flexbox>
            {children}
        </H.Container>
    );
};

export default CalendarLayout;
