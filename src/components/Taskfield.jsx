import React from 'react';

class Taskfield extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          userInput: ""
        };
      }

    render() { 

        this.add = (e) => {
            const userText = this.state.userInput;
            this.setState({
                userInput: ""
            });
        };
        console.log(this.userInput);

        return <div className="add-to-section">
                    <div className="add-todo">
                        <div className="text-input">
                            <input type="text" id="userText" value={this.state.userInput} placeholder="Type a task here and click + to add"/>
                            <div className="underline"></div>
                        </div>
                        <button className="buttonAdd" onClick="add" ><img src="./img/add-button.svg" alt=""/></button>
                    </div>
                </div>
    }
}
export default Taskfield;                


