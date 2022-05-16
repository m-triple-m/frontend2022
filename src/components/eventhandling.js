import { useState } from "react";

const EventHandling = () => {
  let c = 1;

  const [count, setCount] = useState(10);

  const [name, setName] = useState("");

  const handleClick = () => {
    // alert("That you have don't have to click it");
    c++;
    console.log(c);
  };

  const updateState = (e) => {
    console.log(e.target);

    console.log(count);
    //   count++;   ❌
    setCount(count + 1); //   ✔
  };

  const handleChange = (e) => {
    // console.log("data was changed");
    console.log(e.target.value);
    console.log(name);
    setName(e.target.value);
  };

  return (
    <div className="container">
      <h1 className="text-center">Event Handling</h1>
      <hr />
      <button className="btn btn-primary" onClick={handleClick}>
        Click to Know
      </button>
      <h1>{c}</h1>
      <button className="btn btn-primary" onClick={updateState}>
        Update The State
      </button>
      <h1>{count}</h1>
      <input className="form-control" onChange={handleChange} />
      <h1 className="display-4"> Mr. {name}</h1>
      {/* <img src={your_var} /> */}
    </div>
  );
};

export default EventHandling;
