import React from 'react';

class Taskfield extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          userInput: "",
          list: []
        };
      }
      changeHandel = (e) => {
        this.setState({ ...this.state, userInput: e.target.value.trim() });
        console.log("this is e.target.value", e.target.value);
      };

      add = (e) => {
        const userText = this.state.userInput;
        this.setState({
            userInput: "",
            list: [
                ...this.state.list,
                { id: this.state.list.length, title: userText, done: false },
              ],
            });
            console.log(this.state);
    };
    
    render() { 
        
        return <React.Fragment>
                <div className="add-to-section">
                      <div className="add-todo">
                          <div className="text-input">
                              <input type="text" id="userText" value={this.state.userInput} onChange={this.changeHandel} placeholder="Type a task here and click + to add"/>
                              <div className="underline"></div>
                          </div>
                          <button className="buttonAdd" onClick={this.add} ><img src="./img/add-button.svg" alt=""/></button>
                      </div>
                </div>
                      <div className="tasks"> 
                          {this.state.list.map(item => <div className="divResult"><div className="tasksText">{item.title}</div></div>)}
                      </div>
              </React.Fragment> 
    }
}
export default Taskfield;                


