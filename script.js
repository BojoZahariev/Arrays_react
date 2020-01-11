const Header = props => {
  return (
    <div className='header'>
      <img className='sign' src='images/sign2.png' />
      <p className='signText'>Arrrays!</p>
    </div>
  );
};

const Pirate = props => {
  return (
    <div className={props.className}>
      {props.parrot ? <img className='parrot' src='images/parrot2.png' /> : null}
      {props.treasure ? <img className='treasure' src='images/treasure2.png' /> : null}
      <img className='pirateImg' alt='pirate' src={props.src} />
    </div>
  );
};

const Ship = props => {
  return (
    <div className={props.className}>
      <div className={props.tilt ? 'tilt' : ''}>
        {!props.reduce ? <img className='shipImg' src='images/ship.png' /> : null}
        <Pirate treasure={props.treasure} parrot={props.parrot} src={'images/pirate1.png'} className={props.reduce ? 'pirate1reduced' : 'pirate1'} />
        <Pirate treasure={props.treasure} parrot={props.parrot} src={'images/pirate2.png'} className={props.reduce ? 'pirate2reduced' : 'pirate2'} />
        {!props.filter ? <Pirate treasure={props.treasure} parrot={props.parrot} src={'images/pirate3.png'} className={props.reduce ? 'pirate3reduced' : 'pirate3'} /> : null}
      </div>

      {props.find ? <Pirate treasure={props.treasure} parrot={props.parrot} src={'images/pirate3.png'} className={'find'} /> : null}
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
        <Header />

        <div className='left'>
          <p>This method returns a new array with the updated elements after calling a callback function on every element in the array.</p>
          <Btn text='map()' onClick={() => this.setState({ mtd: 'map' })} />
          <p>This method executes a snippet of code (or a function) once for every element of an array.</p>
          <Btn text='forEach()' onClick={() => this.setState({ mtd: 'forEach' })} />
          <p>This method checks each element in an array to see if it meets a condition. It returns a new array with the elements that meet the condition.</p>
          <Btn text='filter()' onClick={() => this.setState({ mtd: 'filter' })} />
          <p>This method returns the value of the first element of an array which satisfies a condition.</p>
          <Btn text='find()' onClick={() => this.setState({ mtd: 'find' })} />
          <p>
            The reduce method is used to reduce the array to a single value. It executes a provided function for each value of the array (from left-to-right).
            The return value of the function is stored in an accumulator.
          </p>
          <Btn text='reduce()' onClick={() => this.setState({ mtd: 'reduce' })} />
        </div>

        <div className='right'>
          {this.state.mtd === '' ? <Ship className={'init'} tilt={true} /> : null}

          {/* MAP */}
          {this.state.mtd === 'map' ? (
            <div className='mappedDiv'>
              <Ship className={'init mapped'} tilt={true} />
              <Ship className={'init mapped'} parrot={true} tilt={true} />
            </div>
          ) : null}

          {/* forEach */}
          {this.state.mtd === 'forEach' ? <Ship className={'init'} treasure={true} tilt={true} /> : null}

          {/* Filter */}
          {this.state.mtd === 'filter' ? (
            <div className='mappedDiv'>
              <Ship className={'init mapped'} tilt={true} />
              <Ship className={'init mapped'} filter={true} tilt={true} />
            </div>
          ) : null}

          {/* Find */}
          {this.state.mtd === 'find' ? (
            <div>
              <Ship className={'init'} find={true} tilt={true} />
            </div>
          ) : null}

          {/* REDUCE */}
          {this.state.mtd === 'reduce' ? (
            <div className='mappedDiv'>
              <Ship className={'init mapped'} tilt={true} />
              <Ship className={'init mapped'} reduce={true} />
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
