import {
  memo,
  useCallback,
  useContext,
  useEffect,
  useState,
  useTransition,
} from "react";
import { ThemeContext } from "../../Utils";
const Fildes = [
  {
    id: 1,
    name: "name",
    type: "text",
    placeholder: "Enter Your Name",
  },
  {
    id: 2,
    name: "email",
    type: "email",
    placeholder: "Enter Your Email",
  },
  {
    id: 3,
    name: "password",
    type: "password",
    placeholder: "Enter Your Password",
  },
  {
    id: 4,
    name: "Number",
    type: "number",
    placeholder: "Enter Your Number",
  },
  {
    id: 5,
    name: "Age",
    type: "text",
    placeholder: "Enter Your Age",
  },
];

function Landing() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [Runs, setRuns] = useState(0);
  const [isPending, startTransition] = useTransition();
  const [State, SetState] = useState({
    name: "",
    email: "",
    password: "",
    Number: 0,
    Age: 0,
  });
  const CalcNumber = useCallback((Num) => {
    return Num * 1;
  }, []);
  const OnSubmit = useCallback((e, Form) => {
    e.preventDefault();
  }, []);
  const OnChange = useCallback(
    (e) => {
      let Value =
        e.target.type == "number" ? parseInt(e.target.value) : e.target.value;
      startTransition(() => {
        SetState({
          ...State,
          [e.target.name]: Value,
        });
      });
    },
    [State]
  );
  useEffect(() => {
    console.log("Fire - Runs First Time");
    // SetState((prev) => ({
    //   ...prev,
    //   Number: prev.Number + 1,
    // }));
  }, []);

  useEffect(() => {
    console.log("Fire - Runs Every Time");
    /** Runs Every Time
     * 1 - If Theres An SetState Will Make Infinte Loop
     * 2 - Uses Only If I Need To Track Every Thing In Page
     */
    // SetState((prev) => ({
    //   ...prev,
    //   Number: prev.Number + 1,
    // }));
  });
  useEffect(() => {
    console.log("Fire - Runs If Any Of Dependency Change");
    SetState((prev) => ({
      ...prev,
      Age: prev.Age + 1,
    }));
  }, [State.Number, State.email]);
  return (
    <div>
      <h1>Landing Page </h1>
      <div className="Info">
        <p>Theme : {theme}</p>
        <p>Name : {State.name}</p>
        <p>Email : {State.email}</p>
        <p>Password : {State.password}</p>
        <p>Number : {State.Number}</p>
        <p>Age : {State.Age}</p>
      </div>
      <form action="" onSubmit={(e) => OnSubmit(e, State)}>
        {Fildes.map((item) => {
          return (
            <div className="form-control" key={item.id}>
              <label htmlFor={item.name} className="form-label">
                {item.name}:
              </label>
              <input
                type={item.type}
                name={item.name}
                className="form-inpt"
                id={item.name}
                placeholder={item.placeholder}
                // value={State[item.name]}
                onChange={OnChange}
                required
              />
            </div>
          );
        })}
        <button type="submit">Submit</button>
        <button
          type="button"
          onClick={() => SetState({ ...State, Age: CalcNumber(State.Number) })}
        >
          Calc Number
        </button>
        <button
          type="button"
          onClick={() => toggleTheme(theme == "dark" ? "light" : "dark")}
        >
          Change Theme
        </button>
      </form>
    </div>
  );
}

export default memo(Landing);
