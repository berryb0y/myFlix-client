import React from 'react';
import ReactDOM from 'react-dom/client';
import { MainView } from './components/main-view/main-view';

//import statement to indicate that you need to bundle `./index.scss`
import './index.scss';

//Main component (will eventually use all others)
class MyFlixApplication extends React.Component {
    render() {
        return (
            <MainView></MainView>
        );
    }
}

//Find the root of your app
const container = document.getElementsByClassName('app-container')[0];

//Tells react to render your app in the root DOM element
const root = ReactDOM.createRoot(container);
root.render(<MyFlixApplication/>);