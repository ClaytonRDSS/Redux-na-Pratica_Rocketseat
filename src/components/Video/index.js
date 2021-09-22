import React, { Component } from 'react';

import {connect} from 'react-redux';


const Video = ({activeModule, activeLesson}) => (
    <div>
        <strong>Módulo {activeModule.title}</strong>
        <span>Aula {activeLesson.title}</span>
    </div>
)

export default connect(state => ({
    activeModule: state.curse.activeModule,
    activeLesson: state.curse.activeLesson,
}))(Video);