import { ChangeEvent, useEffect, useState } from "react";
import { response } from "./assets/data";
import "./App.css";
import { IUser, ICity } from "./models/response.interface";
import Select from "./components/Select";

function App() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [cities, setCities] = useState<ICity[]>([]);

  useEffect(() => {
    setUsers(response);
  }, []);

  const userChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    const { cities = [] } = users.filter((user) => user.id === +value)[0] || {};
    setCities(cities);
  };

  return (
    <div className="container">
      <header>
        <h1>Select cities</h1>
      </header>
      <section>
        <Select
          onUserChange={userChangeHandler}
          label={"Select user"}
          items={users}
        />

        {!!cities.length && (
          <Select
            onUserChange={userChangeHandler}
            label={"Select cities"}
            items={cities}
          />
        )}
      </section>
    </div>
  );
}

export default App;
