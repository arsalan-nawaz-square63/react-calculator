import React from 'react';
import OutputScreen from './outputScreen.js';
import Button from './button.js';

class Calculator extends React.Component {
  constructor() {
    super();

    this.state = {
      question: '',
      answer: ''
    }

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleClick);
  }

  handleClick(event) {
    let value = '';
    if (event.key) {
      if ((event.key >= "0") && (event.key <= "9") )
        value = event.key;
    } else {
      value = event.target.value;
    }

    switch (value) {
      case '=': {
        if (this.state.question!=='') {
          var ans='';
          try {
              ans = eval(this.state.question);
          }
          catch(err) {
            this.setState({answer: "Math Error"});
          }
          if (ans===undefined)
            this.setState({answer: "Math Error"});
          else {
            this.setState({ answer: ans , question: ''});
            break;
          }
        }
      }
      case 'Clear': {
        this.setState({ question: '', answer: '' });
        break;
      }
      case 'Delete': {
        var str = this.state.question;
        str = str.substr(0,str.length-1);
        this.setState({question: str});
        break;
      }
      default: {
        this.setState({ question: this.state.question += value})
        break;
      }
    }
    value = '';
  }

  render() {
    return (
      <div className="frame">
        <div className="mainCalc">
          <OutputScreen question = {this.state.question} answer = {this.state.answer} />
          <div className="button-row">
            <Button label={' '} />
            <Button label={'Clear'} handleClick = {this.handleClick}/>
            <Button label={'Delete'} handleClick = {this.handleClick}/>
            <Button label={' '} />
          </div>
          <div className="button-row input-button">
            <Button label={'7'} handleClick = {this.handleClick}/>
            <Button label={'8'} handleClick = {this.handleClick}/>
            <Button label={'9'} handleClick = {this.handleClick}/>
            <Button label={'*'} handleClick = {this.handleClick}/>
          </div>
          <div className="button-row">
            <Button label={'4'} handleClick = {this.handleClick}/>
            <Button label={'5'} handleClick = {this.handleClick}/>
            <Button label={'6'} handleClick = {this.handleClick}/>
            <Button label={'-'} handleClick = {this.handleClick}/>
          </div>
          <div className="button-row">
            <Button label={'1'} handleClick = {this.handleClick}/>
            <Button label={'2'} handleClick = {this.handleClick}/>
            <Button label={'3'} handleClick = {this.handleClick}/>
            <Button label={'+'} handleClick = {this.handleClick}/>
          </div>
          <div className="button-row">
            <Button label={'.'} handleClick = {this.handleClick}/>
            <Button label={'0'} handleClick = {this.handleClick}/>
            <Button label={'='} handleClick = {this.handleClick}/>
            <Button label={'/'} handleClick = {this.handleClick}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
