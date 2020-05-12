import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div id="page1">
      </div>
      <div id="page2">
      </div>
    </div>
  );
}

class Topics extends React.Component
{
  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this.count = 1;
  }

  handleClick()
  {
    let randNum = Math.round(Math.random() * this.props.topics.length);
    let topicsBox = document.querySelector("#theTopic");
    if(randNum === this.props.topics.length) randNum--;
    if(randNum === -1) {
      topicsBox.innerHTML = `<p>Done</p>`;
      return;
    }
    topicsBox.innerHTML = `<p>${this.count}. ${this.props.topics[randNum]}</p>`;
    this.props.topics.splice(randNum, 1);
    this.count++;
  }

  render()
  {
    return (
      <div id="topics" className="centeredItems">
        <button onClick={this.handleClick}>Get Random Topic</button>
        <span id="theTopic" className="centeredItems"><p>No topic</p></span>
      </div>
    );
  }
}

export { App };
export { Topics };
