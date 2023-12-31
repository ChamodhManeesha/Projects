import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import { NavLink } from "react-router-dom";
const Header = () => {
  const [value, setValue] = useState();
  return (
    <div>
      <AppBar sx={{ backgroundColor: "#232F3D" }} position="sticky">
        <Toolbar>
          <NavLink to="/" style={{ color: "white" }}>
            <Typography>
              <LibraryBooksOutlinedIcon />
            </Typography>
          </NavLink>
          <Tabs
            sx={{ ml: "auto" }}
            textColor="inherit"
            indicatorColor="primary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={NavLink} to="/add" label="Add salary" />
            <Tab LinkComponent={NavLink} to="/salarys" label="Salarys" />
            <Tab LinkComponent={NavLink} to="/about" label="About Us" />

            <Tab LinkComponent={NavLink} to="/addf" label="Add Food" />
            <Tab LinkComponent={NavLink} to="/foods" label="AFoods" />
            <Tab LinkComponent={NavLink} to="/cusfoods" label="Foods" />

            <Tab LinkComponent={NavLink} to="/addr" label="Add Reservation" />
            <Tab LinkComponent={NavLink} to="/customers" label="Bookings" />

          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
