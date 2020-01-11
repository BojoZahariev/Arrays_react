const Header = props => {
  return (
    <div className='header'>
      <img className='sign' src='images/sign2.png' />
      <p className='signText'>Arrrays!</p>

      <img className='skull1' src='images/skull2.png' />
      <img className='skull2' src='images/skull2.png' />
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
      <div className={props.tilt ? 'tilt' : 'test'}>
        {!props.reduce ? <img className='shipImg' src='images/ship.png' /> : null}
        <Pirate treasure={props.treasure} parrot={props.parrot} src={'images/pirate1.png'} className={props.reduce ? 'pirate1reduced' : 'pirate1'} />
        <Pirate treasure={props.treasure} parrot={props.parrot} src={'images/pirate2.png'} className={props.reduce ? 'pirate2reduced' : 'pirate2'} />
        {!props.filter ? (
          <Pirate treasure={props.treasure} parrot={props.parrot} src={'images/pirate3.png'} className={props.reduce ? 'pirate3reduced' : 'pirate3'} />
        ) : null}
      </div>

      {props.find ? <Pirate treasure={props.treasure} parrot={props.parrot} src={'images/pirate3.png'} className={'find'} /> : null}

      <img className='waves' src='images/waves.png' />

      {props.every ? (
        <svg className='checkIcon'>
          <path id='check' d='M10,50 l25,40 l95,-70' />
        </svg>
      ) : null}
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

const UnderShip = props => {
  return (
    <div className='underShipDiv'>
      <p>{props.text}</p>
      <Btn text={props.btnText} onClick={props.onClick} />
    </div>
  );
};

const BtnBck = props => {
  return <button onClick={props.onClick}>back</button>;
};

class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mtd: '',
      clicked: false
    };
  }

  render() {
    return (
      <div className='main'>
        <Header />

        <div className='left'>
          <Btn text='map()' onClick={() => this.setState({ mtd: 'map', clicked: false })} />
          <Btn text='forEach()' onClick={() => this.setState({ mtd: 'forEach', clicked: false })} />
          <Btn text='filter()' onClick={() => this.setState({ mtd: 'filter', clicked: false })} />
          <Btn text='find()' onClick={() => this.setState({ mtd: 'find', clicked: false })} />
          <Btn text='reduce()' onClick={() => this.setState({ mtd: 'reduce', clicked: false })} />
          <Btn text='every()' onClick={() => this.setState({ mtd: 'every', clicked: false })} />
          <Btn text='some()' onClick={() => this.setState({ mtd: 'some', clicked: false })} />
        </div>

        <div className='right'>
          {!this.state.clicked ? <Ship className={'init'} tilt={true} /> : null}

          {/* MAP */}
          {this.state.mtd === 'map' && this.state.clicked ? (
            <div className='mappedDiv'>
              <Ship className={'init mapped'} tilt={true} />
              <Ship className={'init mapped'} parrot={true} tilt={true} />
            </div>
          ) : null}

          {/* forEach */}
          {this.state.mtd === 'forEach' && this.state.clicked ? <Ship className={'init'} treasure={true} tilt={true} /> : null}

          {/* Filter */}
          {this.state.mtd === 'filter' && this.state.clicked ? (
            <div className='mappedDiv'>
              <Ship className={'init mapped'} tilt={true} />
              <Ship className={'init mapped'} filter={true} tilt={true} />
            </div>
          ) : null}

          {/* Find */}
          {this.state.mtd === 'find' && this.state.clicked ? (
            <div>
              <Ship className={'init'} find={true} tilt={true} />
            </div>
          ) : null}

          {/* REDUCE */}
          {this.state.mtd === 'reduce' && this.state.clicked ? (
            <div className='mappedDiv'>
              <Ship className={'init mapped'} tilt={true} />
              <Ship className={'init mapped'} reduce={true} />
            </div>
          ) : null}

          {/* Every/ Some */}
          {(this.state.mtd === 'every' || this.state.mtd === 'some') && this.state.clicked ? (
            <div>
              <Ship className={'init'} every={true} tilt={true} />
            </div>
          ) : null}

          <p className='mtdTitle'>{this.state.mtd ? this.state.mtd + '()' : null}</p>

          {this.state.mtd === 'map' ? (
            <UnderShip
              text={'This method returns a new array with the updated elements after calling a callback function on every element in the array.'}
              btnText={'map'}
              onClick={() => this.setState({ clicked: true })}
            />
          ) : null}

          {this.state.mtd === 'forEach' ? (
            <UnderShip
              text={'This method executes a snippet of code (or a function) once for every element of an array.'}
              btnText={'forEach'}
              onClick={() => this.setState({ clicked: true })}
            />
          ) : null}

          {this.state.mtd === 'filter' ? (
            <UnderShip
              text={
                'This method checks each element in an array to see if it meets a condition. It returns a new array with the elements that meet the condition.'
              }
              btnText={'filter'}
              onClick={() => this.setState({ clicked: true })}
            />
          ) : null}

          {this.state.mtd === 'find' ? (
            <UnderShip
              text={'This method returns the value of the first element of an array which satisfies a condition.'}
              btnText={'find'}
              onClick={() => this.setState({ clicked: true })}
            />
          ) : null}

          {this.state.mtd === 'reduce' ? (
            <UnderShip
              text={
                'The reduce method is used to reduce the array to a single value. It executes a provided function for each value of the array (from left-to-right).The return value of the function is stored in an accumulator.'
              }
              btnText={'reduce'}
              onClick={() => this.setState({ clicked: true })}
            />
          ) : null}

          {this.state.mtd === 'every' ? (
            <UnderShip
              text={"The 'every' tests if all elements in the array pass a condition. The return value is a boolean."}
              btnText={'every'}
              onClick={() => this.setState({ clicked: true })}
            />
          ) : null}

          {this.state.mtd === 'some' ? (
            <UnderShip
              text={"The 'some' method tests if some of the elements in the array pass a condition. The return value is a boolean."}
              btnText={'some'}
              onClick={() => this.setState({ clicked: true })}
            />
          ) : null}

          <BtnBck onClick={() => this.setState({ mtd: '' })} />
        </div>
      </div>
    );
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(<Container />, domContainer);
