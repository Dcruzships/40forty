import React from 'react';
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Countdown from 'react-countdown';

class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
      components: [
        "<Countdown date={'June 20, 2020 00:00:00'} onClick={handleClick} />",
        "<div></div>"
      ]
    };
    this.mainTopics = [
      "Race",
      "Sexuality",
      "School",
      "Parents",
      "Medication",
      "Drugs / Alcohol",
      "Art",
      "Love",
      "Violence",
      "Self Worth",
      "Sex",
      "Friendship",
      "Purpose",
      "Wants / Needs",
      "Physicality",
      "Judgement",
      "Sense of Self",
      "Adulthood",
      "World",
      "Dreams",
      "Meditation"
    ];
  }

  handleClick(i) {
    console.log(this.num)
  }

  render()
  {

    const current = this.state.num;

    return (
      <div id="panel" onClick={this.handleClick}><Countdown date={'June 20, 2020 00:00:00'} /></div>
    )

    // let comp;
    //
    // if (this.num === 1)
    // {
    //   return (
    //     <div id="panel" onClick={this.handleClick}><Countdown date={'June 20, 2020 00:00:00'} /></div>
    //   );
    // }
    // else {
    //   return (
    //     <div id="panel" onClick={this.handleClick}><Countdown date={'June 20, 2020 00:00:00'} /></div>
    //   );
    // }
  }
}

function Topics(props) {
  return (
    <div id="topics" className="centeredItems">
      <button onClick={this.handleClick}>Get Random Topic</button>
      <span id="theTopic" className="centeredItems"><p>No topic</p></span>
    </div>
  );
}

// class Topics extends React.Component
// {
//   constructor(props) {
//     super(props);
//     // This binding is necessary to make `this` work in the callback
//     this.handleClick = this.handleClick.bind(this);
//     this.count = 1;
//   }
//
//   handleClick()
//   {
//     let randNum = Math.round(Math.random() * this.props.topics.length);
//     let topicsBox = document.querySelector("#theTopic");
//     if(randNum === this.props.topics.length) randNum--;
//     if(randNum === -1) {
//       topicsBox.innerHTML = `<p>Done</p>`;
//       return;
//     }
//     topicsBox.innerHTML = `<p>${this.count}. ${this.props.topics[randNum]}</p>`;
//     this.props.topics.splice(randNum, 1);
//     this.count++;
//   }
//
//   render()
//   {
//     return (
//       <div id="topics" className="centeredItems">
//         <button onClick={this.handleClick}>Get Random Topic</button>
//         <span id="theTopic" className="centeredItems"><p>No topic</p></span>
//       </div>
//     );
//   }
// }

export default Panel;
