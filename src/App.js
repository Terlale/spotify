import { useState } from "react";
import Router from "./Router/Router";
import { MainContext } from "./context/Context";
import Premium from "./premium/Premium";
import Home from "./main/Home";
import Main from "./main/Main";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [day, setDay] = useState("");
  const [db, setDb] = useState([]);
  const [error, setError] = useState("");
  const [emailError, setEmailErrors] = useState("");
  const [passwordError, setPasswordErrors] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    name: "",
  });
 
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
    db,
    setDb,
    error,
    setError,
    emailError,
    setEmailErrors,
    passwordError,
    setPasswordErrors,
    errors,
    setErrors,
  };
  return (
    <div className="App">
      <MainContext.Provider value={data}>
        <Router />
      </MainContext.Provider>
    </div>
  );
}

export default App;
