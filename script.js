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
            <div>
              <Cats className={'init'} />
              <Cats className={'mapped'} />
            </div>
          ) : null}

          {this.state.mtd === 'forEach' ? <Cats className={'forEach'} /> : null}
          {this.state.mtd === 'filter' ? (
            <div>
              <Cats className={'init'} /> <Cat1 className={'filtered'} />
            </div>
          ) : null}
          {this.state.mtd === 'find' ? (
            <div>
              <Cats className={'init'} />
              <Cat2 className={'filtered'} />
            </div>
          ) : null}

          <BtnBck onClick={() => this.setState({ mtd: '' })} />
        </div>
      </div>
    );
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(<Container />, domContainer);
