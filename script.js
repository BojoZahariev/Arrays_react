const Pirate = props => {
  return (
    <div className={props.className}>
      {props.parrot ? <img className='parrot' src='images/parrot2.png' /> : null}
      {props.treasure ? <img className='treasure' src='images/treasure2.png' /> : null}
      <img className='pirateImg' alt='pirate' src={props.src} />
    </div>
  );
};

const Cats = props => {
  return (
    <div className={props.className}>
      <div className='tilt'>
        <img className='shipImg' src='images/ship.png' />
        <Pirate treasure={props.treasure} parrot={props.parrot} src={'images/pirate1.png'} className={'pirate1'} />
        <Pirate treasure={props.treasure} parrot={props.parrot} src={'images/pirate2.png'} className={'pirate2'} />
        <Pirate treasure={props.treasure} parrot={props.parrot} src={'images/pirate3.png'} className={'pirate3'} />
      </div>
      <img className='waves' src='images/waves.png' />
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
    return (
      <div className='main'>
        <div className='header'></div>
        <div className='left'>
          <p>This method returns a new array with the updated elements after calling a callback function on every element in the array.</p>
          <Btn text='map()' onClick={() => this.setState({ mtd: 'map' })} />
          <p>This method executes a snippet of code (or a function) once for every element of an array.</p>
          <Btn text='forEach()' onClick={() => this.setState({ mtd: 'forEach' })} />
          <p>This method checks each element in an array to see if it meets a condition. It returns a new array with the elements that meet the condition.</p>
          <Btn text='filter()' onClick={() => this.setState({ mtd: 'filter' })} />
          <p>This method returns the value of the first element of an array which satisfies a condition.</p>
          <Btn text='find()' onClick={() => this.setState({ mtd: 'find' })} />
        </div>

        <div className='right'>
          {this.state.mtd === '' ? <Cats className={'init'} /> : null}
          {this.state.mtd === 'map' ? (
            <div className='mappedDiv'>
              <Cats className={'init mapped'} />
              <Cats className={'init mapped'} parrot={true} />
            </div>
          ) : null}

          {this.state.mtd === 'forEach' ? <Cats className={'init'} treasure={true} /> : null}

          {this.state.mtd === 'filter' ? (
            <div>
              <Cats className={'init'} /> <Pirate src={'images/pirate2.png'} className={'pirate3'} />
            </div>
          ) : null}
          {this.state.mtd === 'find' ? (
            <div>
              <Cats className={'init'} />
              <Pirate src={'images/pirate3.png'} className={'pirate3'} />
            </div>
          ) : null}
          <p className='mtdTitle'>{this.state.mtd ? this.state.mtd + '()' : null}</p>
          <BtnBck onClick={() => this.setState({ mtd: '' })} />
        </div>
      </div>
    );
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(<Container />, domContainer);
