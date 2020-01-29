const Header = props => {
  return (
    <div className='header'>
      <img className='sign' src='images/sign2.png' />
      <p className='signText'>ARRRays</p>
      <img className='banner' src='images/banner.png' />
      <img className='banner2' src='images/banner.png' />

      <p className='leftText'>
        Array methods and iterators
        <br /> The Pirate way
      </p>

      <p className='rightText'>
        What happens on the ship
        <br /> Stays on the ship
      </p>

      <img className='skull1' src='images/skull2.png' />
      <img className='skull2' src='images/skull2.png' />
    </div>
  );
};

const Pirate = props => {
  return (
    <div className={props.className}>
      {props.parrot ? <img className='parrot' src='images/parrot2.png' /> : null}
      {props.treasure ? <img className='treasure' src='images/treasure.png' /> : null}
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
          <img className='barrelSea' src='images/barrel2.png' />
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
  } else if (props.concated1) {
    return (
      <div className={props.className}>
        <div className={props.tilt ? 'tilt' : 'test'}>
          <img className='shipImg' src='images/ship.png' />

          <Pirate src={'images/pirate1.png'} className={'pirate1'} />
        </div>

        <img className='waves' src='images/waves.png' />
      </div>
    );
  } else if (props.concated2) {
    return (
      <div className={props.className}>
        <div className={props.tilt ? 'tilt' : 'test'}>
          <img className='shipImg' src='images/ship.png' />

          <Pirate src={'images/pirate2.png'} className={'pirate2'} />
          <Pirate src={'images/pirate3.png'} className={'pirate3'} />
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
    <div className={`btn btn${props.side}`} onClick={props.onClick}>
      <p className={`btnText btnText${props.side}`}>{props.text}</p>
      <img className={`wheel wheel${props.side}`} src='images/wheel3.png' />
    </div>
  );
};

class UnderShip extends React.Component {
  constructor(props) {
    super(props);
  }

  //scroll to the top on mobile when updated
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className='underShipDiv'>
        <p className='underShipText'>{this.props.text}</p>
        <p className='underShipText'>{this.props.text2}</p>
        <p className='underShipText'>{this.props.text3}</p>
        <p className='underShipText4'>{this.props.text4}</p>
        {this.props.btnText ? <Btn side={'Middle'} text={this.props.btnText} onClick={this.props.onClick} /> : null}
      </div>
    );
  }
}

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
            <p className='aboveBtn'>Arrray Iterators</p>
            <Btn text='map()' onClick={() => this.setState({ mtd: 'map', clicked: false })} />
            <Btn text='forEach()' onClick={() => this.setState({ mtd: 'forEach', clicked: false })} />
            <Btn text='filter()' onClick={() => this.setState({ mtd: 'filter', clicked: false })} />
            <Btn text='find()' onClick={() => this.setState({ mtd: 'find', clicked: false })} />
            <Btn text='reduce()' onClick={() => this.setState({ mtd: 'reduce', clicked: false })} />
            <Btn text='every()' onClick={() => this.setState({ mtd: 'every', clicked: false })} />
            <Btn text='some()' onClick={() => this.setState({ mtd: 'some', clicked: false })} />
            <Btn text='findIndex()' onClick={() => this.setState({ mtd: 'findIndex', clicked: false })} />
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

            {/* pop / splice2 */}
            {(this.state.mtd === 'pop' || this.state.mtd === 'splice2') && this.state.clicked ? (
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

            {/* concat */}
            {this.state.mtd === 'concat' && this.state.clicked ? (
              <div className='mappedDiv'>
                <Ship className={'init mapped'} concated1={true} tilt={true} />
                <Ship className={'init mapped'} concated2={true} tilt={true} />
                <Ship className={'init mapped'} tilt={true} />
              </div>
            ) : null}

            {/* slice */}
            {this.state.mtd === 'slice' && this.state.clicked ? (
              <div className='mappedDiv'>
                <Ship className={'init mapped'} tilt={true} />
                <Ship className={'init mapped'} shifted={true} tilt={true} />
              </div>
            ) : null}

            {/* MIDDLE TEXT */}

            <p className='mtdTitle'>{this.state.mtd === 'splice2' ? 'splice()' : this.state.mtd ? this.state.mtd + '()' : null}</p>

            {/* Initial text */}

            {this.state.mtd === '' && !this.state.clicked ? (
              <UnderShip
                text={'Ahoy Matey!'}
                text2={
                  'As you very well know, the Array method has many properties and methods. They help the developers to handle their code easily and create awesome stuff.'
                }
                text3={
                  'Since we are exploring the Array the pirate way today, the scary ship will be our array and the fierce pirates will be the elements. There are many array methods but we will try only some of them today.'
                }
                text4={'Click on any of the buttons to try the different methods. Happy sailing!'}
              />
            ) : null}

            {/* MAP */}
            {this.state.mtd === 'map' && !this.state.clicked ? (
              <UnderShip
                text={'This method returns a new array with the updated elements after calling a callback function on every element in the array.'}
                text2={"Let's use MAP() to equip our pirates with parrots, because every real pirate needs a parrot."}
                text3={'So our pseudo code can go like that:'}
                text4={'let pirateShip2 = pirateShip.map((pirate) => {return pirate += parrot});'}
                btnText={'Try map()'}
                onClick={() => this.setState({ clicked: true })}
              />
            ) : this.state.clicked && this.state.mtd === 'map' ? (
              <UnderShip
                text={'Well done, Matey!'}
                text2={'Now our pirates are ready for adventure.'}
                text3={'If you want to learn more about map() visit: '}
                text4={
                  <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map' target='blank'>
                    The Docs
                  </a>
                }
                btnText={'Back to the port'}
                onClick={() => this.setState({ mtd: '', clicked: false })}
              />
            ) : null}

            {/* FOREACH */}
            {this.state.mtd === 'forEach' && !this.state.clicked ? (
              <UnderShip
                text={'This method executes a snippet of code or a function once for each element of the array.'}
                text2={"Let's use forEach() to find a treasure for each of our pirates."}
                text3={'So our pseudo code can go like that:'}
                text4={'pirateShip.forEach((pirate) => {find a treasure});'}
                btnText={'Try forEach()'}
                onClick={() => this.setState({ clicked: true })}
              />
            ) : this.state.clicked && this.state.mtd === 'forEach' ? (
              <UnderShip
                text={'Well done, Matey!'}
                text2={'Now our pirates can afford all the Rum they need.'}
                text3={'If you want to learn more about forEach() visit: '}
                text4={
                  <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach' target='blank'>
                    The Docs
                  </a>
                }
                btnText={'Back to the port'}
                onClick={() => this.setState({ mtd: '', clicked: false })}
              />
            ) : null}

            {/* FILTER */}
            {this.state.mtd === 'filter' && !this.state.clicked ? (
              <UnderShip
                text={
                  'This method checks each element in the array to see if it meets a condition. It returns a new array with the elements that meet the condition.'
                }
                text2={"Let's use filter() to clone and move to a new ship only the pirates that still have both their eyes."}
                text3={'So our pseudo code can go like that:'}
                text4={'let pirateShip2 = pirateShip.filter((pirate) => pirate.NumberOfEyes > 1);'}
                btnText={'Try filter()'}
                onClick={() => this.setState({ clicked: true })}
              />
            ) : this.state.clicked && this.state.mtd === 'filter' ? (
              <UnderShip
                text={'Well done, Matey!'}
                text2={'Now our new healthy crew is ready to sail. It is a bit unfair but the Pirate sea is a cruel place.'}
                text3={'If you want to learn more about filter() visit: '}
                text4={
                  <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter' target='blank'>
                    The Docs
                  </a>
                }
                btnText={'Back to the port'}
                onClick={() => this.setState({ mtd: '', clicked: false })}
              />
            ) : null}

            {/* FIND */}
            {this.state.mtd === 'find' && !this.state.clicked ? (
              <UnderShip
                text={
                  "This method returns the value of the first element of the array which satisfies a condition. The method will return 'undefined' if none of the elements satisfies this condition."
                }
                text2={"Let's use find() to find the pirate that didn't follow the safety procedures on the last plunder and lost his eye ."}
                text3={'So our pseudo code can go like that:'}
                text4={'let oneEyedPirate = pirateShip.find((pirate) => pirate.numberOfEyes < 2);'}
                btnText={'Try find()'}
                onClick={() => this.setState({ clicked: true })}
              />
            ) : this.state.clicked && this.state.mtd === 'find' ? (
              <UnderShip
                text={'Well done, Matey!'}
                tex2={'Now we know who is the poor one eyed pirate.'}
                text3={'If you want to learn more about find() visit: '}
                text4={
                  <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find' target='blank'>
                    The Docs
                  </a>
                }
                btnText={'Back to the port'}
                onClick={() => this.setState({ mtd: '', clicked: false })}
              />
            ) : null}

            {/* REDUCE*/}
            {this.state.mtd === 'reduce' && !this.state.clicked ? (
              <UnderShip
                text={
                  'This method is used to reduce the array to a single value. It executes a provided function for each value of the array (from left-to-right).'
                }
                text2={"Let's use reduce() to reduce our pirates to a single pile of pirates on top of a barrel, just for fun."}
                text3={'So our pseudo code can go like that:'}
                text4={'let pileOfPirates = pirateShip.reduce((pile, pirate) => pile += pirate);'}
                btnText={'Try reduce()'}
                onClick={() => this.setState({ clicked: true })}
              />
            ) : this.state.clicked && this.state.mtd === 'reduce' ? (
              <UnderShip
                text={'Well done, Matey!'}
                text2={'All our pirates are now nice and cosy on top of a barrel in the middle of the sea for no particular reason.'}
                text3={'If you want to learn more about reduce() visit: '}
                text4={
                  <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce' target='blank'>
                    The Docs
                  </a>
                }
                btnText={'Back to the port'}
                onClick={() => this.setState({ mtd: '', clicked: false })}
              />
            ) : null}

            {/*EVERY*/}
            {this.state.mtd === 'every' && !this.state.clicked ? (
              <UnderShip
                text={'This method tests if all elements in the array pass a condition. The return value is a boolean.'}
                text2={"Let's use every() to check if all our pirates have hats or someone was using it to catch seagulls and lost it again."}
                text3={'So our pseudo code can go like that:'}
                text4={'let allHaveHats = pirateShip.every((pirate) => pirate.hasAHat === true);'}
                btnText={'Try every()'}
                onClick={() => this.setState({ clicked: true })}
              />
            ) : this.state.clicked && this.state.mtd === 'every' ? (
              <UnderShip
                text={'Well done, Matey!'}
                text2={'Seems like there all hats are there and everyone is taking their job seriously.'}
                text3={'If you want to learn more about every() visit: '}
                text4={
                  <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every' target='blank'>
                    The Docs
                  </a>
                }
                btnText={'Back to the port'}
                onClick={() => this.setState({ mtd: '', clicked: false })}
              />
            ) : null}

            {/*SOME*/}
            {this.state.mtd === 'some' && !this.state.clicked ? (
              <UnderShip
                text={'This method tests if some of the elements in the array pass a condition. The return value is a boolean.'}
                text2={"Let's use some() to check if some of our pirates have a bandana or not."}
                text3={'So our pseudo code can go like that:'}
                text4={'let someHaveBandanas = pirateShip.some((pirate) => pirate.hasABandana === true);'}
                btnText={'Try some()'}
                onClick={() => this.setState({ clicked: true })}
              />
            ) : this.state.clicked && this.state.mtd === 'some' ? (
              <UnderShip
                text={'Well done, Matey!'}
                text2={'Looks like some of them actually have bandanas, much better in the sea.'}
                text3={'If you want to learn more about some() visit: '}
                text4={
                  <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some' target='blank'>
                    The Docs
                  </a>
                }
                btnText={'Back to the port'}
                onClick={() => this.setState({ mtd: '', clicked: false })}
              />
            ) : null}

            {/*FIND INDEX*/}
            {this.state.mtd === 'findIndex' && !this.state.clicked ? (
              <UnderShip
                text={"This method returns the index of the first occurrence of the element, -1 if the element doesn't exist."}
                text2={"Let's use findIndex() to find on which position is the pirate that didn't separate his washing and stained his trousers orange."}
                text3={'So our pseudo code can go like that:'}
                text4={'let findOrangeTrousers = pirateShip.findIndex((pirate) => pirate.hasOrangeTrousers === true);'}
                btnText={'Try findIndex()'}
                onClick={() => this.setState({ clicked: true })}
              />
            ) : this.state.clicked && this.state.mtd === 'findIndex' ? (
              <UnderShip
                text={'Well done, Matey!'}
                text2={'We found who needs to be more careful with the washing and who is going to scrub the deck all day.'}
                text3={'If you want to learn more about findIndex() visit: '}
                text4={
                  <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex' target='blank'>
                    The Docs
                  </a>
                }
                btnText={'Back to the port'}
                onClick={() => this.setState({ mtd: '', clicked: false })}
              />
            ) : null}

            {/*POP*/}
            {this.state.mtd === 'pop' && !this.state.clicked ? (
              <UnderShip
                text={'This method removes the last element from the array.'}
                text2={"Let's use pop() to get rid of the last pirate, who apparently likes chicken so much that he ate his parrot."}
                text3={'So our pseudo code can go like that:'}
                text4={'pirateShip.pop()'}
                btnText={'Try pop()'}
                onClick={() => this.setState({ clicked: true })}
              />
            ) : this.state.clicked && this.state.mtd === 'pop' ? (
              <UnderShip
                text={'Well done, Matey!'}
                text2={'We did the necessary stuff reduction and can continue to sail.'}
                text3={'If you want to learn more about pop() visit: '}
                text4={
                  <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop' target='blank'>
                    The Docs
                  </a>
                }
                btnText={'Back to the port'}
                onClick={() => this.setState({ mtd: '', clicked: false })}
              />
            ) : null}

            {/*PUSH*/}
            {this.state.mtd === 'push' && !this.state.clicked ? (
              <UnderShip
                text={'This method adds a new element to the end of the array.'}
                text2={"Let's use push() to add a new crew member on our ship. The more the merrier."}
                text3={'So our pseudo code can go like that:'}
                text4={'pirateShip.push(newPirate)'}
                btnText={'Try push()'}
                onClick={() => this.setState({ clicked: true })}
              />
            ) : this.state.clicked && this.state.mtd === 'push' ? (
              <UnderShip
                text={'Well done, Matey!'}
                text2={"We didn't know that the new hire is the twin brother of one of our pirates, but he had great recommendations."}
                text3={'If you want to learn more about push() visit: '}
                text4={
                  <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push' target='blank'>
                    The Docs
                  </a>
                }
                btnText={'Back to the port'}
                onClick={() => this.setState({ mtd: '', clicked: false })}
              />
            ) : null}

            {/*SHIFT*/}
            {this.state.mtd === 'shift' && !this.state.clicked ? (
              <UnderShip
                text={'This method removes the first element from the array and "shifts" all other elements to a lower index.'}
                text2={"Let's use shift() to send the first pirate to a well deserved holiday."}
                text3={'So our pseudo code can go like that:'}
                text4={'pirateShip.shift()'}
                btnText={'Try shift()'}
                onClick={() => this.setState({ clicked: true })}
              />
            ) : this.state.clicked && this.state.mtd === 'shift' ? (
              <UnderShip
                text={'Well done, Matey!'}
                text2={'We have less pirates now, but that means more Rum for the rest.'}
                text3={'If you want to learn more about shift() visit: '}
                text4={
                  <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift' target='blank'>
                    The Docs
                  </a>
                }
                btnText={'Back to the port'}
                onClick={() => this.setState({ mtd: '', clicked: false })}
              />
            ) : null}

            {/*UNSHIFT*/}
            {this.state.mtd === 'unshift' && !this.state.clicked ? (
              <UnderShip
                text={'This method adds a new element at the beginning of the array.'}
                text2={"Let's use unshift() to hire the twin brother of our one eyed pirate."}
                text3={'So our pseudo code can go like that:'}
                text4={'pirateShip.unshift(newPirate)'}
                btnText={'Try unshift()'}
                onClick={() => this.setState({ clicked: true })}
              />
            ) : this.state.clicked && this.state.mtd === 'unshift' ? (
              <UnderShip
                text={'Well done, Matey!'}
                text2={" We didn't know that the new pirate is also one eyed, but apparently it runs in the family."}
                text3={'If you want to learn more about unshift() visit: '}
                text4={
                  <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift' target='blank'>
                    The Docs
                  </a>
                }
                btnText={'Back to the port'}
                onClick={() => this.setState({ mtd: '', clicked: false })}
              />
            ) : null}

            {/*SPLICE*/}
            {this.state.mtd === 'splice' && !this.state.clicked ? (
              <UnderShip
                text={
                  'This method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. We can specify on which position we add the element and are we removing any elements. '
                }
                text2={
                  "Let's use splice() to hire the twin brother of our one eyed pirate and put him in the position of our second pirate without firing anyone."
                }
                text3={'So our pseudo code can go like that:'}
                text4={'pirateShip.splice(position1, remove0pirates, addNewPirate)'}
                btnText={'splice()'}
                onClick={() => this.setState({ clicked: true })}
              />
            ) : this.state.clicked && this.state.mtd === 'splice' ? (
              <UnderShip
                text={'Well done, Matey!'}
                text2={' All pirates set with new positions.'}
                text3={'If you want to learn more about splice() visit: '}
                text4={
                  <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice' target='blank'>
                    The Docs
                  </a>
                }
                btnText={'Back to the port'}
                onClick={() => this.setState({ mtd: '', clicked: false })}
              />
            ) : null}

            {/*SPLICE2*/}
            {this.state.mtd === 'splice2' && !this.state.clicked ? (
              <UnderShip
                text={'We can use splice() to remove elements without leaving "holes" in the array.'}
                text2={"Let's use splice() to get rid of our one eyed pirate as he secretly drunk all the Rum on the ship last night."}
                text3={'So our pseudo code can go like that:'}
                text4={'pirateShip.splice(pirateWithIndex2, remove1)'}
                btnText={'Try splice()'}
                onClick={() => this.setState({ clicked: true })}
              />
            ) : this.state.clicked && this.state.mtd === 'splice2' ? (
              <UnderShip
                text={'Well done, Matey!'}
                text2={'We need only team players onboard.'}
                text3={'If you want to learn more about splice() visit: '}
                text4={
                  <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice' target='blank'>
                    The Docs
                  </a>
                }
                btnText={'Back to the port'}
                onClick={() => this.setState({ mtd: '', clicked: false })}
              />
            ) : null}

            {/*CONCAT*/}
            {this.state.mtd === 'concat' && !this.state.clicked ? (
              <UnderShip
                text={
                  'This method creates a new array by merging  existing arrays.The method does not change the existing arrays. It always returns a new array.'
                }
                text2={"Let's use concat() to create a new crew from two under staffed ships and put them on a new ship."}
                text3={'So our pseudo code can go like that:'}
                text4={'pirateShip3 = pirateShip1.concat(pirateShip2)'}
                btnText={'Try concat()'}
                onClick={() => this.setState({ clicked: true })}
              />
            ) : this.state.clicked && this.state.mtd === 'concat' ? (
              <UnderShip
                text={'Well done, Matey!'}
                text2={'Much better like that. With three pirate ships nothing can stop us now.'}
                text3={'If you want to learn more about concat() visit: '}
                text4={
                  <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat' target='blank'>
                    The Docs
                  </a>
                }
                btnText={'Back to the port'}
                onClick={() => this.setState({ mtd: '', clicked: false })}
              />
            ) : null}

            {/*SLICE*/}
            {this.state.mtd === 'slice' && !this.state.clicked ? (
              <UnderShip
                text={'This method slices out a piece of the array into a new array.'}
                text2={"Let's use slice() to copy two of the pirates and put them on a new ship."}
                text3={'So our pseudo code can go like that:'}
                text4={'pirateShip2 = pirateShip1.slice(startingWithPirateWithIndex1)'}
                btnText={'Try slice()'}
                onClick={() => this.setState({ clicked: true })}
              />
            ) : this.state.clicked && this.state.mtd === 'slice' ? (
              <UnderShip
                text={'Well done, Matey!'}
                text2={'Now we have two ships and less Rum for everyone, but the Pirate sea is a cruel place.'}
                text3={'If you want to learn more about slice() visit: '}
                text4={
                  <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice' target='blank'>
                    The Docs
                  </a>
                }
                btnText={'Back to the port'}
                onClick={() => this.setState({ mtd: '', clicked: false })}
              />
            ) : null}
          </div>

          <div className='left'>
            {/*BUTTONS */}
            {/*Iterators */}

            <p className='aboveBtn'>Arrray Methods</p>
            <Btn side={'Right'} text='pop()' onClick={() => this.setState({ mtd: 'pop', clicked: false })} />
            <Btn side={'Right'} text='push()' onClick={() => this.setState({ mtd: 'push', clicked: false })} />
            <Btn side={'Right'} text='shift()' onClick={() => this.setState({ mtd: 'shift', clicked: false })} />
            <Btn side={'Right'} text='unshift()' onClick={() => this.setState({ mtd: 'unshift', clicked: false })} />
            <Btn side={'Right'} text='splice()' onClick={() => this.setState({ mtd: 'splice', clicked: false })} />
            <Btn side={'Right'} text='more splice()' onClick={() => this.setState({ mtd: 'splice2', clicked: false })} />
            <Btn side={'Right'} text='concat()' onClick={() => this.setState({ mtd: 'concat', clicked: false })} />
            <Btn side={'Right'} text='slice()' onClick={() => this.setState({ mtd: 'slice', clicked: false })} />
          </div>

          <img className='barrelLeft' src='images/barrel.png' />
          <img className='barrelRight' src='images/barrel.png' />
        </div>
      </div>
    );
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(<Container />, domContainer);
