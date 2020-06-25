import React from 'react';

class Taskfield extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          userInput: "",
          list: []
        };
      }
      change = (e) => {
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
    };
  
      remove = (taskToRemove) => {
  
          console.log("remove", taskToRemove);
          const newList = this.state.list.filter((item) => item.id !== taskToRemove);
          this.setState({
            list: newList
          });
      };
      
    render() { 
        return <React.Fragment>
                <div className="add-to-section">
                      <div className="add-todo">
                          <div className="text-input">
                              <input type="text" id="userText" value={this.state.userInput} onChange={this.change} placeholder="Type a task here and click + to add"/>
                              <div className="underline"></div>
                          </div>
                          <button className="buttonAdd" onClick={this.add} ><img src="./img/add-button.svg"/></button>
                      </div>
                </div>
                      <div className="tasks"> 
    {this.state.list.map(item => <div key={item.id} className="divResult">
        <div className="tasksText">{item.title}</div><button onClick={ () => this.remove(item.id)} className="button-delete"><img src="./img/delete-button.svg"></img></button></div>)}
                      </div>
              </React.Fragment> 
    }
}
export default Taskfield;                


