import React from 'react';
import ReactDOM from 'react-dom';
import Todos from './components/Todos'

const render = () => {
    ReactDOM.render(
        <Todos />,
        document.getElementById('content')
    );
};

render();
