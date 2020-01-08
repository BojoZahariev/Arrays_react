const Cat1 = props => {
  return <div>1</div>;
};

const Cat2 = props => {
  return <div>2</div>;
};

const BtnM = props => {
  return <button onClick={props.onClick}>map</button>;
};

class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mtd: ''
    };

    //this.clickControl = this.clickControl.bind(this);
  }

  /*
  clickControl(par) {
    this.setState({
      mtd: par
    });
    console.log(this.state.mtd);
  }
  */

  render() {
    const ar = [<Cat1 />, <Cat2 />];
    const itemsMapped = ar.map(element => (
      <li className='red' key={ar.indexOf(element)}>
        {element}
      </li>
    ));
    return (
      <div className='main'>
        <BtnM onClick={() => this.setState({ mtd: 'map' })} />
        {this.state.mtd === 'map' ? itemsMapped : ar}
      </div>
    );
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(<Container />, domContainer);
