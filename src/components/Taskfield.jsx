import React from 'react';

class Taskfield extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          userInput: "",
          list: []
        };
      }

    render() { 
        this.changeHandel = (e) => {
            console.log(e.target.value);
            this.setState({ userInput: e.target.value.trim() });
          };

        this.add = (e) => {
            const userText = this.state.userInput;
            this.setState({
                userInput: "",
                list: [
                    ...this.state.list,
                    { id: this.state.list.length, title: userText, done: false },
                  ],
                });
        };
        console.log(this.userInput);

        return <div className="add-to-section">
                    <div className="add-todo">
                        <div className="text-input">
                            <input type="text" id="userText" value={this.state.userInput} onChange={this.changeHandel} placeholder="Type a task here and click + to add"/>
                            <div className="underline"></div>
                        </div>
                        <button className="buttonAdd" onClick="add" ><img src="./img/add-button.svg" alt=""/></button>
                    </div>
                </div>
    }
}
export default Taskfield;                


