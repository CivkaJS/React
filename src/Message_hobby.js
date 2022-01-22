const Message_hobby = (props) =>{
  return (
          <div className="App card-width">
                <h3>Мое хобби</h3>
                <h3>{props.hobby}</h3>
          </div>
        );
}

// function Message_hobby(props) {
//     return (
//       <div className="App card-width">
//         <header className="App-header">
//             <h3>Мое хобби</h3>
//             <h3>{props.hobby}</h3>
//         </header>
//       </div>
//     );
//   }

  export default Message_hobby;