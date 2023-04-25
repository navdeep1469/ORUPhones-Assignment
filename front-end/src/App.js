import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import "./App.css";
import { TableCell } from "@mui/material";

function App() {
  const url = "https://oruphones-backend-deploy-bsh6.onrender.com/users";
  const cellStyle = {
    fontWeight: "bold",
    color: "white",
  };
  const rowStyle = {
    color: "white",
  };
  const [query1, setQuery1] = useState([]);
  const [query2, setQuery2] = useState([]);
  const [query3, setQuery3] = useState([]);
  const [query4, setQuery4] = useState([]);
  const [query5, setQuery5] = useState([]);
  const [Userdata, setUserData] = useState(query1);
  const [msg, setmsg] = useState("Press the buttons to get desired data.");

  const arr = [
    {
      val: 1,
      name: query1,
      msg: " Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.",
    },
    {
      val: 2,
      name: query2,
      msg: "Male Users which have phone price greater than 10,000.",
    },
    {
      val: 3,
      name: query3,
      msg: "Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.",
    },
    {
      val: 4,
      name: query4,
      msg: "Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.",
    },
    {
      val: 5,
      name: query5,
      msg: "Data of top 10 cities which have the highest number of users and their average income.",
    },
  ];

  useEffect(() => {
    axios
      .get(`${url}/bmwMercedes`)
      .then((response) => setQuery1(response.data))
      .catch((error) => console.error(error));

    axios
      .get(`${url}/phonePrice`)
      .then((response) => setQuery2(response.data))
      .catch((error) => console.error(error));

    axios
      .get(`${url}/lastName`)
      .then((response) => setQuery3(response.data))
      .catch((error) => console.error(error));

    axios
      .get(`${url}/carAndEmail`)
      .then((response) => setQuery4(response.data))
      .catch((error) => console.error(error));

    axios
      .get(`${url}/top10Cities`)
      .then((response) => setQuery5(response.data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className='App'>
      <div className='btns'>
        {arr.map((item) => {
          return (
            <Button
              style={{ backgroundColor: "black", color: "white" }}
              variant='outlined'
              onClick={() => {
                setUserData(item.name);
                setmsg(item.msg);
              }}
              key={item.val}
            >
              Query {item.val}
            </Button>
          );
        })}
      </div>
      <h2>{msg}</h2>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 650 }}
          aria-label='simple table'
          bgcolor='#454545'
        >
          <TableHead style={{ backgroundColor: "black" }}>
            <TableRow>
              <TableCell style={cellStyle}>First Name</TableCell>
              <TableCell style={cellStyle}>Last Name</TableCell>
              <TableCell style={cellStyle}>Email</TableCell>
              <TableCell style={cellStyle}>Gender</TableCell>
              <TableCell style={cellStyle}>Income</TableCell>
              <TableCell style={cellStyle}>City</TableCell>
              <TableCell style={cellStyle}>Car</TableCell>
              <TableCell style={cellStyle}>Quote</TableCell>
              <TableCell style={cellStyle}>Phone Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Userdata.map((item) => {
              return (
                <TableRow
                  key={item.name}
                  // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell style={rowStyle}>{item.first_name}</TableCell>
                  <TableCell style={rowStyle}>{item.last_name}</TableCell>
                  <TableCell style={rowStyle}>{item.email}</TableCell>
                  <TableCell style={rowStyle}>{item.gender}</TableCell>
                  <TableCell style={rowStyle}>{item.income}</TableCell>
                  <TableCell style={rowStyle}>{item.city}</TableCell>
                  <TableCell style={rowStyle}>{item.car}</TableCell>
                  <TableCell style={rowStyle}>{item.quote}</TableCell>
                  <TableCell style={rowStyle}>{item.phone_price}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default App;
