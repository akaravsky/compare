import React, { Component } from 'react';
import './Compare.css';

class Compare extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resArr: []
    };
  }
  shouldComponentUpdate(nextProps, nextState){
    if(nextProps.firstArr.length != 0 && nextProps.secondArr.length != 0){
      return true;
    }else return false;
  }

  componentWillReceiveProps(nextProps){
  var firstArr = nextProps.firstArr;
    var secondArr = nextProps.secondArr;
    var resArr = [];
    
       firstArr.forEach(item => {
        //нет во втором есть в первом 
        if(secondArr.indexOf(item) === -1 ){
          resArr.push('-');
        }
        //есть во втором но сдругим индексом 
        if(secondArr.indexOf(item) !== -1 && secondArr.indexOf(item) !== firstArr.indexOf(item)){
          resArr.push('*');
        }
        //индекс не изменился
        if(secondArr.indexOf(item) === firstArr.indexOf(item)){
          resArr.push(' ')
        }
      });
      secondArr.forEach(item => {
        //нет в первом есть во втором
        if(firstArr.indexOf(item) === -1){
          resArr.push('+');
        }
      });
      this.setState({
        resArr: resArr
      })    
  }


  render() {
    let borderClassName
    if(this.props.firstArr.length === 0 || this.props.secondArr.length === 0){
      borderClassName = "compare-container-border-hide"
    } else {
      borderClassName = "compare-container-border"
    }

    return (
      <div className = "compare-container">
        <div className = {borderClassName}>
          <ol>{this.state.resArr.map((line) =>  
              <li key={Math.random().toString()}>{line}</li>  
            )}
          </ol>
        </div>
      </div>
    );
  }
}

export default Compare;
