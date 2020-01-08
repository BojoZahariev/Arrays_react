const Cat1 = props => {
  return <div>1</div>;
};

const Cat2 = props => {
  return <div>2</div>;
};

class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      myArray: [1, 2, 3]
    };
  }

  render() {
    const ar = [<Cat1 />, <Cat2 />];
    const itemsMapped = ar.map(element => (
      <li className='red' key={ar.indexOf(element)}>
        {element}
      </li>
    ));
    return <div className='main'>{itemsMapped}</div>;
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(<Container />, domContainer);
