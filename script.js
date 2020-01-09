const Cat1 = props => {
  return <div className={props.className}>1</div>;
};

const Cat2 = props => {
  return <div className={props.className}>2</div>;
};

const Cats = props => {
  return (
    <div className={props.className}>
      [
      <Cat1 className={props.className} /> ,
      <Cat2 className={props.className} />]
    </div>
  );
};

const Btn = props => {
  return (
    <button className='btn' onClick={props.onClick}>
      {props.text}
    </button>
  );
};

const BtnBck = props => {
  return <button onClick={props.onClick}>back</button>;
};

class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mtd: ''
    };
  }

  render() {
    const ar = [<Cat1 />, <Cat2 />];

    /*
    const itemsMapped = ar.map(element => (
      <div className='mapped' key={ar.indexOf(element)}>
        {element}
      </div>
    ));

    const itemsForEach = ar.map(element => (
      <div className='forEach' key={ar.indexOf(element)}>
        {element}
      </div>
    ));
*/
    return (
      <div className='main'>
        <div className='left'>
          <Btn text='map' onClick={() => this.setState({ mtd: 'map' })} />
          <Btn text='forEach' onClick={() => this.setState({ mtd: 'forEach' })} />
          <Btn text='filter' onClick={() => this.setState({ mtd: 'filter' })} />
        </div>

        <div className='right'>
          <Cats className={'init'} />
          {this.state.mtd === 'map' ? <Cats className={'mapped'} /> : null}
          {this.state.mtd === 'forEach' ? <Cats className={'forEach'} /> : null}
          {this.state.mtd === 'filter' ? <Cat1 className={'filtered'} /> : null}

          <BtnBck onClick={() => this.setState({ mtd: '' })} />
        </div>
      </div>
    );
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(<Container />, domContainer);
