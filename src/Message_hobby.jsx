import './App.scss';

function Message_place(props) {
    return (
      <div className="App card-width">
        <header className="App-header">
            <h3>Мое хобби</h3>
            <h3>{props.hobby}</h3>
        </header>
      </div>
    );
  }

  export default Message_place;