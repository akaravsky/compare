import React, { Component } from 'react';
import './Input.css';

class Input extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lines: []
    };
    this.handleFileSelect = this.handleFileSelect.bind(this);
  }
  
  handleFileSelect(evt) {
    var files = evt.target.files; 
    var lines;
    for (var i = 0, f; f = files[i]; i++) {


      var reader = new FileReader();

      reader.onload = (function(reader)
        {
            return function()
            {
                var contents = reader.result;
                lines = contents.split('\n'); 
                lines.splice(lines.length-1, 1)
                this.setState({lines: lines});
                this.props.onChangeText(this.state.lines);
            }.bind(this)
        }.bind(this))(reader);

        reader.readAsText(f);
    } 
    
  }


  render() {
    return (
      <div className = "container">
        <input type="file" id="files" name="files[]" onChange={this.handleFileSelect} multiple />
        <div className = "input-container">
          <ol>{this.state.lines.map((line) =>  
              <li key={Math.random().toString()}>{line}</li>  
            )}
          </ol>
        </div>
      </div>
    );
  }
}

export default Input;
