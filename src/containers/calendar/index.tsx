import React from 'react';
import {schedule} from '../../Module/General';
import {Calendar} from './calendar.component';

export default function MyCalendar(props: any) {
    return <Calendar data={schedule} {...props} />;
}
