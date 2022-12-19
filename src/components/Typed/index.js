import React from 'react';
import {TypeAnimation} from 'react-type-animation';
import {TOP_SECTION} from '../../Module/General';
import './style.css';

export default function AnimatedTyping () {
    return (
        <div className="typing-div">
            <h1>
                <TypeAnimation sequence={TOP_SECTION.Typed_effect} repeat={Infinity} cursor={true} />
            </h1>
        </div>
    );
}
