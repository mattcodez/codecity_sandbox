import styles from './index.scss';
import __codemirrorstyle from 'codemirror/lib/codemirror.css';
import __jsstyle from 'codemirror/mode/javascript/javascript';
import __paraiso from 'codemirror/theme/paraiso-dark.css';
import React from 'react';
import CodeMirror from 'react-codemirror';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {code:
      '// Code\n'+
      'function hi(){\n'+
      '  console.log(\'hello\');\n'+
      '}'
    };
  }

  updateCode(newCode){
    this.setState({code:newCode});
  }

  render() {
    const options = {lineNumbers:true, mode:'javascript',theme : 'paraiso-dark'};
    return (
      <CodeMirror value={this.state.code} onChange={this.updateCode.bind(this)} options={options} />
    )
  }
}
