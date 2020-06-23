import React from 'react';

class Taskfield extends React.Component {
    render() { 
        return <div className="add-to-section">
                    <div className="add-todo">
                        <div className="text-input">
                            <input type="text" id="userText" placeholder="Type a task here and click + to add"/>
                            <div className="underline"></div>
                        </div>
                    </div>
                </div>
    }
}
export default Taskfield;                


