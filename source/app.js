var React = require('react');
var ReactDOM = require('react-dom');

const names = ["Chris","Tara","Curtis","Modou","Corynn","Linux"];
const listNames = names.map((name) =>
    <li>{name}</li>        
);

class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
      }
    
    render(){
        return <h1>Hello Corynn</h1>;
    };
}

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
      }
    render() {
        return <button>Go</button>;      
    };
}


ReactDOM.render(
 <Hello name="World" />,
 document.getElementById('react-container')
);

var mountNode = document.getElementById('react-root');
ReactDOM.render(<Button />, mountNode);
ReactDOM.render(<ul>{listNames}</ul>,mountNode);