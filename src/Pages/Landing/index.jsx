import { memo, useState, useTransition } from "react";
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
];

function Landing() {
  const [isPending, startTransition] = useTransition();
  const [State, SetState] = useState({
    name: "",
    email: "",
    password: "",
  });
  const OnSubmit = (e, Form) => {
    e.preventDefault();
    const Name = document.getElementById("name").value;
    const Email = document.getElementById("email").value;
    const Password = document.getElementById("password").value;
    console.log(State);
    console.log(Form);
  };
  const OnChange = (e) => {
    startTransition(() => {
      SetState({
        ...State,
        [e.target.name]: e.target.value,
      });
    });
  };
  return (
    <div>
      <h1>Landing Page </h1>
      <div className="Info">
        <p>Name : {State.name}</p>
        <p>Email : {State.email}</p>
        <p>Password : {State.password}</p>
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
        <button type="submit"

        
        >Submit</button>
      </form>
    </div>
  );
}

export default memo(Landing);
