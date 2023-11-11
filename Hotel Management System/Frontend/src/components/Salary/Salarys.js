import React, { useEffect, useState } from "react";
import "./Salary";
import axios from "axios";
import Salary from "./Salary";
const URL = "http://localhost:5000/salarys";
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Salarys = () => {
  const [salarys, setSalarys] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setSalarys(data.salarys));
  }, []);
  console.log(Salarys);
  return (
    <div>
      <ul>
        {salarys &&
          salarys.map((salary, i) => (
            <li key={i}>
              <Salary salary={salary} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Salarys;
