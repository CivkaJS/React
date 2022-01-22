import './App.scss';
import Message_name from './Message_name';
import Message_place from './Message_place';
import Message_hobby from './Message_hobby';

function App() {
  return (
    <div className="App top-width">
      <header className="App-header">
          <h1>My first React App</h1>
          <div className='box-message'>
          <Message_name name = {'Андрей'}/>
          <Message_place town = {'Коломна'}/>
          <Message_hobby hobby = {'Плавание'}/>
          </div>
      </header>
    </div>
  );

}

export default App;
