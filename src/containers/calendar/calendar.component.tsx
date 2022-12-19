import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion';
import {useContext, useEffect} from 'react';
import {CALENDAR_VIEW} from '../../constants';
import {calendarContext} from '../../Context/calendar.context';
import {Flexbox} from '../../elements/Flexbox';
import {calendarMainLogic} from './calendar.function';
import CalendarLayout from './calendar.layout';

import * as H from './style';

const CalendarView = () => {
    const contextTesting = useContext(calendarContext);
    const {state, dispatch} = contextTesting;
    return (
        <div className="card-body">
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, j) => (
                <Flexbox key={j} alignCenter justifyCenter className="card-body-header">
                    <p color="#9E9E9E">{day}</p>
                </Flexbox>
            ))}
            {state.dates.map((day: any, j: any) => (
                <Flexbox
                    alignCenter
                    justifyCenter
                    className={
                        day.dumpDay
                            ? 'card-body-inner'
                            : 'card-body-inner card-body-inner__active'
                    }
                    onClick={() => {
                        if (day.event) {
                            dispatch({type: 'UPDATE_CALENDAR_VIEW', data: 2});
                            dispatch({
                                type: 'SHOW_EVENTS_FOR_SELECTED_DATE',
                                data: state.dates[j].events
                            });
                        } else {
                            alert('No events');
                        }
                    }}
                    key={j}
                >
                    {day.event ? (
                        <p className="card-body-inner__active__event">{day.day}</p>
                    ) : (
                        <p>{day.day}</p>
                    )}
                </Flexbox>
            ))}
        </div>
    );
};

const EventsView = () => {
    const contextTesting = useContext(calendarContext);
    const {state} = contextTesting as any;
    return (
        <H.EventContainer>
            {state.selectedData.map((event: any, j: number) => (
                <H.Event
                    key={j}
                    onClick={() => {
                        window.open(event.link, '_blank');
                    }}
                >
                    <div className="event-subcard">
                        <h3>{event.title}</h3>
                        <p>{event.timings}</p>
                    </div>
                    <button>Add to calendar</button>
                </H.Event>
            ))}
        </H.EventContainer>
    );
};

export const Calendar = ({data}: any) => {
    const contextTesting = useContext(calendarContext);
    const {state, dispatch} = contextTesting;

    useEffect(() => {
        calendarMainLogic(state, dispatch, data);
    }, [state.month]);

    return (
        <CalendarLayout
            handleActionProceed={
                state.index === CALENDAR_VIEW
                    ? {type: 'MONTH_FORWARD'}
                    : {type: 'DISABLED'}
            }
            handleActionBack={
                state.index === CALENDAR_VIEW
                    ? {type: 'MONTH_BACKWARD'}
                    : {type: 'UPDATE_CALENDAR_VIEW', data: 1}
            }
        >
            <AnimatePresence exitBeforeEnter>
                <motion.div
                    key={state.index ?? 'empty'}
                    initial={{y: 10, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    exit={{y: -1, opacity: 0}}
                    transition={{duration: 0.2}}
                >
                    {state.index === CALENDAR_VIEW ? <CalendarView/> : <EventsView/>}
                </motion.div>
            </AnimatePresence>
        </CalendarLayout>
    );
};
