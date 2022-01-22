import './App.scss';

function Message_name(props) {
    return (
      <div className="App card-width">
        <header className="App-header">
            <h3>Меня зовут</h3>
            <h3>{props.name}</h3>
        </header>
      </div>
    );
  }
  export default Message_name;