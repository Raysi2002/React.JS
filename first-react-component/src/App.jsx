import CompButton from "./CompButton";

function App(){
  return  <div className="container">
    <header className="heading">This is my first react program</header>
    <CompButton/>
  </div>
}

export default App;


// But theere is one more way of  exproting the component are the named exporting

// export default function App(){
//   return  <div className="container">
//     <header className="heading">This is my first react program</header>
//     <CompButton/>
//   </div>
// }

// export default App;