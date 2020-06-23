import React from 'react';
import Header from './components/Header';
import Taskfield from './components/Taskfield';

class App extends React.Component {

    render() { 

        return (
            <React.Fragment>
                <Header />
                <Taskfield />

            </React.Fragment>
        );
    }
}
 
export default App;