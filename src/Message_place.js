const Message_place = (props) =>{
  return (
          <div className="App card-width">
                <h3>Мой город</h3>
                <h3>{props.town}</h3> 
          </div>
        );
}

// function Message_place(props) {
//     return (
//       <div className="App card-width">
//         <header className="App-header">
//             <h3>Мой город</h3>
//             <h3>{props.town}</h3>
//         </header>
//       </div>
//     );
//   }

  export default Message_place;