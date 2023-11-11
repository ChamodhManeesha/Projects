import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddSalary from "./components/AddSalary";
import Salary from "./components/Salary/Salarys";
import About from "./components/About";
import SalaryDetail from "./components/Salary/SalaryDetail";

import AddFood from "./components/AddFood";
import Foods from "./components/Food/Foods";
import FoodDetail from "./components/Food/FoodDetail";
import Cusfoods from "./components/Food/Cusfoods";

import AddCustomer from "./components/AddCustomer";
import Customers from "./components/Customer/Customers";
import CustomerDetail from "./components/Customer/CustomerDetail";

function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/add" element={<AddSalary />} exact />
          <Route path="/salarys" element={<Salary />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/salarys/:id" element={<SalaryDetail />} exact />

          <Route path="/addf" element={<AddFood />} exact />
          <Route path="/foods" element={<Foods />} exact />
          <Route path="/foods/:id" element={<FoodDetail />} exact />
          <Route path="/cusfoods" element={<Cusfoods />} exact />

          <Route path="/addr" element={<AddCustomer />} exact />
          <Route path="/customers" element={<Customers />} exact />
          <Route path="/customers/:id" element={<CustomerDetail />} exact />

        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
