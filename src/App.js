import { useState } from "react";
import Router from "./Router/Router";
import { MainContext } from "./context/Context";
import Premium from "./premium/Premium";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [day, setDay] = useState("");

  const data = {
    email,
    password,
    name,
    month,
    year,
    day,
    setEmail,
    setPassword,
    setName,
    setMonth,
    setYear,
    setDay,
  };
  return (
    <div className="App">
      <MainContext.Provider value={data}>
        {/* <Premium/> */}

        <Router />
      </MainContext.Provider>
    </div>
  );
}

export default App;
