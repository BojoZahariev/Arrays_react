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
  if (props.filter) {
    return (
      <div className={props.className}>
        <div className={props.tilt ? 'tilt' : 'test'}>
          <img className='shipImg' src='images/ship.png' />
          <Pirate src={'images/pirate1.png'} className={'pirate1'} />
          <Pirate src={'images/pirate2.png'} className={'pirate2'} />
        </div>

        <img className='waves' src='images/waves.png' />
      </div>
    );
  } else if (props.find) {
    return (
      <div className={props.className}>
        <div className={props.tilt ? 'tilt' : 'test'}>
          <img className='shipImg' src='images/ship.png' />
          <Pirate src={'images/pirate1.png'} className={'pirate1'} />
          <Pirate src={'images/pirate2.png'} className={'pirate2'} />
          <Pirate src={'images/pirate3.png'} className={'pirate3'} />
        </div>

        <Pirate src={'images/pirate3.png'} className={'find'} />
        <img className='waves' src='images/waves.png' />
      </div>
    );
  } else if (props.reduce) {
    return (
      <div className={props.className}>
        <div className={props.tilt ? 'tilt' : 'test'}>
          <Pirate src={'images/pirate1.png'} className={'pirate1reduced'} />
          <Pirate src={'images/pirate2.png'} className={'pirate2reduced'} />
          <Pirate src={'images/pirate3.png'} className={'pirate3reduced'} />
        </div>

        <img className='waves' src='images/waves.png' />
      </div>
    );
  } else if (props.every || props.some) {
    return (
      <div className={props.className}>
        <div className={props.tilt ? 'tilt' : 'test'}>
          <img className='shipImg' src='images/ship.png' />
          <Pirate src={'images/pirate1.png'} className={'pirate1'} />
          <Pirate src={'images/pirate2.png'} className={'pirate2'} />
          <Pirate src={'images/pirate3.png'} className={'pirate3'} />
        </div>

        <img className='waves' src='images/waves.png' />

        <svg className='checkIcon'>
          <path id='check' d='M10,50 l25,40 l95,-70' />
        </svg>
      </div>
    );
  } else if (props.findIndex) {
    return (
      <div className={props.className}>
        <div className={props.tilt ? 'tilt' : 'test'}>
          <img className='shipImg' src='images/ship.png' />
          <Pirate src={'images/pirate1.png'} className={'pirate1'} />
          <Pirate src={'images/pirate2.png'} className={'pirate2'} />
          <Pirate src={'images/pirate3.png'} className={'pirate3'} />
        </div>

        <img className='waves' src='images/waves.png' />

        <div className='findIndex'>1</div>
      </div>
    );
  } else if (props.pushed) {
    return (
      <div className={props.className}>
        <div className={props.tilt ? 'tilt' : 'test'}>
          <img className='shipImg' src='images/ship.png' />
          <Pirate src={'images/pirate1.png'} className={'pirate1'} />
          <Pirate src={'images/pirate2.png'} className={'pirate2'} />
          <Pirate src={'images/pirate3.png'} className={'pirate3pushed'} />
          <Pirate src={'images/pirate1.png'} className={'pirate4pushed'} />
        </div>

        <img className='waves' src='images/waves.png' />
      </div>
    );
  } else if (props.shifted) {
    return (
      <div className={props.className}>
        <div className={props.tilt ? 'tilt' : 'test'}>
          <img className='shipImg' src='images/ship.png' />

          <Pirate src={'images/pirate2.png'} className={'pirate2shifted'} />
          <Pirate src={'images/pirate3.png'} className={'pirate3shifted'} />
        </div>

        <img className='waves' src='images/waves.png' />
      </div>
    );
  } else if (props.unshifted) {
    return (
      <div className={props.className}>
        <div className={props.tilt ? 'tilt' : 'test'}>
          <img className='shipImg' src='images/ship.png' />
          <Pirate src={'images/pirate3.png'} className={'pirate3unshifted'} />
          <Pirate src={'images/pirate1.png'} className={'pirate1unshift'} />
          <Pirate src={'images/pirate2.png'} className={'pirate2unshift'} />
          <Pirate src={'images/pirate3.png'} className={'pirate3unshift'} />
        </div>

        <img className='waves' src='images/waves.png' />
      </div>
    );
  } else if (props.spliced) {
    return (
      <div className={props.className}>
        <div className={props.tilt ? 'tilt' : 'test'}>
          <img className='shipImg' src='images/ship.png' />

          <Pirate src={'images/pirate1.png'} className={'pirate1 pirate1spliced'} />
          <Pirate src={'images/pirate3.png'} className={'pirate3spliced'} />
          <Pirate src={'images/pirate2.png'} className={'pirate2unshift'} />
          <Pirate src={'images/pirate3.png'} className={'pirate3unshift'} />
        </div>

        <img className='waves' src='images/waves.png' />
      </div>
    );
  } else {
    return (
      <div className={props.className}>
        <div className={props.tilt ? 'tilt' : 'test'}>
          <img className='shipImg' src='images/ship.png' />
          <Pirate treasure={props.treasure} parrot={props.parrot} src={'images/pirate1.png'} className={'pirate1'} />
          <Pirate treasure={props.treasure} parrot={props.parrot} src={'images/pirate2.png'} className={'pirate2'} />
          <Pirate treasure={props.treasure} parrot={props.parrot} src={'images/pirate3.png'} className={'pirate3'} />
        </div>

        <img className='waves' src='images/waves.png' />
      </div>
    );
  }
};

const Btn = props => {
  return (
    <div className='btn' onClick={props.onClick}>
      <p className='btnText'>{props.text}</p>
    </div>
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
      <div className='container'>
        <Header />
        <div className='main'>
          <div className='left'>
            {/*BUTTONS */}
            {/*Iterators */}
            <p>Array Iterators</p>
            <Btn text='map()' onClick={() => this.setState({ mtd: 'map', clicked: false })} />
            <Btn text='forEach()' onClick={() => this.setState({ mtd: 'forEach', clicked: false })} />
            <Btn text='filter()' onClick={() => this.setState({ mtd: 'filter', clicked: false })} />
            <Btn text='find()' onClick={() => this.setState({ mtd: 'find', clicked: false })} />
            <Btn text='reduce()' onClick={() => this.setState({ mtd: 'reduce', clicked: false })} />
            <Btn text='every()' onClick={() => this.setState({ mtd: 'every', clicked: false })} />
            <Btn text='some()' onClick={() => this.setState({ mtd: 'some', clicked: false })} />
            <Btn text='findIndex()' onClick={() => this.setState({ mtd: 'findIndex', clicked: false })} />

            <p>Array methods</p>
            <Btn text='pop()' onClick={() => this.setState({ mtd: 'pop', clicked: false })} />
            <Btn text='push()' onClick={() => this.setState({ mtd: 'push', clicked: false })} />
            <Btn text='shift()' onClick={() => this.setState({ mtd: 'shift', clicked: false })} />
            <Btn text='unshift()' onClick={() => this.setState({ mtd: 'unshift', clicked: false })} />
            <Btn text='splice()' onClick={() => this.setState({ mtd: 'splice', clicked: false })} />
          </div>

          {/*SHIP STATE */}
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

            {/* findIndex */}
            {this.state.mtd === 'findIndex' && this.state.clicked ? (
              <div>
                <Ship className={'init'} findIndex={true} tilt={true} />
              </div>
            ) : null}

            {/* pop */}
            {this.state.mtd === 'pop' && this.state.clicked ? (
              <div>
                <Ship className={'init'} filter={true} tilt={true} />
              </div>
            ) : null}

            {/* push */}
            {this.state.mtd === 'push' && this.state.clicked ? (
              <div>
                <Ship className={'init'} pushed={true} tilt={true} />
              </div>
            ) : null}

            {/* shift */}
            {this.state.mtd === 'shift' && this.state.clicked ? (
              <div>
                <Ship className={'init'} shifted={true} tilt={true} />
              </div>
            ) : null}

            {/* unshift */}
            {this.state.mtd === 'unshift' && this.state.clicked ? (
              <div>
                <Ship className={'init'} unshifted={true} tilt={true} />
              </div>
            ) : null}

            {/* splice */}
            {this.state.mtd === 'splice' && this.state.clicked ? (
              <div>
                <Ship className={'init'} spliced={true} tilt={true} />
              </div>
            ) : null}

            {/* RIGHT SIDE TEXT */}

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

            {this.state.mtd === 'findIndex' ? (
              <UnderShip
                text={"This method returns the index of the first occurrence of the element, -1 if the element doesn't exist."}
                btnText={'findIndex()'}
                onClick={() => this.setState({ clicked: true })}
              />
            ) : null}

            {this.state.mtd === 'pop' ? (
              <UnderShip text={'The pop() method removes the last element from an array.'} btnText={'pop()'} onClick={() => this.setState({ clicked: true })} />
            ) : null}

            {this.state.mtd === 'push' ? (
              <UnderShip text={'This method adds a new element to the end of the array.'} btnText={'push()'} onClick={() => this.setState({ clicked: true })} />
            ) : null}

            {this.state.mtd === 'shift' ? (
              <UnderShip
                text={'This method removes the first array element and "shifts" all other elements to a lower index.'}
                btnText={'shift()'}
                onClick={() => this.setState({ clicked: true })}
              />
            ) : null}

            {this.state.mtd === 'unshift' ? (
              <UnderShip
                text={'This method adds a new element at the beginning of the array.'}
                btnText={'unshift()'}
                onClick={() => this.setState({ clicked: true })}
              />
            ) : null}

            {this.state.mtd === 'splice' ? (
              <UnderShip
                text={'This method can be used to add new items to an array. pirates.splice(position: 1, remove:0, add:"pirate3") '}
                btnText={'splice()'}
                onClick={() => this.setState({ clicked: true })}
              />
            ) : null}

            <BtnBck onClick={() => this.setState({ mtd: '', clicked: false })} />
          </div>
        </div>
      </div>
    );
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(<Container />, domContainer);
