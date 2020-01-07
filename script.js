class Container extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className='main'>test</div>;
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(<Container />, domContainer);
