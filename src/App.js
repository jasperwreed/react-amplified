import logo from "./logo.svg";
import "./App.css";

import { DataStore } from "@aws-amplify/datastore";
import { Cohort } from "./models";
import { useState, useEffect } from "react";

function App() {
  const [cohorts, setCohorts] = useState([]);

  useEffect(() => {
    const func = async () => {
      const models = await DataStore.query(Cohort);
      setCohorts(models);
    };

    func();
  }, []);

  const createCohort = async () => {
    const cohort = {
      name: window.prompt("Cohort Name"),
      startDate: parseInt(window.prompt("Cohort Start Date")),
    };

    const newCohort = await DataStore.save(new Cohort(cohort));

    console.log(newCohort);
  };

  return (
    <div className="App">
      {cohorts.map((cohort) => (
        <div key={cohort.id}>
          <h1>{cohort.name}</h1>
          <h2>{cohort.startDate}</h2>
        </div>
      ))}
      <button onClick={createCohort}>Create Cohort</button>
    </div>
  );
}

export default App;
