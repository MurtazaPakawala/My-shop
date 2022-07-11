import React from "react";
import { useState, useEffect } from "react";
import { firestore } from "../firebase";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from "recharts";
import "./dashboard.css";
const Dashboard = () => {
  // Sample data
  const [items, setItems] = useState([]);
  useEffect(() => {
    firestore
      .collection("items")
      .get()
      .then((snapshot) => {
        const items = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });

        console.log("items", items);
        setItems(items);
      });
  }, []);
  // const data = [
  //   { name: "Geeksforgeeks", students: 400 },
  //   { name: "Technical scripter", students: 700 },
  //   { name: "Geek-i-knack", students: 200 },
  //   { name: "Geek-o-mania", students: 1000 },
  // ];
  // const table = [
  //   {
  //     name: "Apolo Tier",
  //     qty: 35,
  //     total: 1100,
  //     MonthlyProjection: 234,
  //     YearlyProjection: 12300,
  //     AAGR: 9,
  //   },
  //   {
  //     name: "WindSheild",
  //     qty: 65,
  //     total: 1100,
  //     MonthlyProjection: 432,
  //     YearlyProjection: 15360,
  //     AAGR: 7,
  //   },
  //   {
  //     name: "Headlights",
  //     qty: 52,
  //     total: 1100,
  //     MonthlyProjection: 42,
  //     YearlyProjection: 19600,
  //     AAGR: 4,
  //   },
  //   {
  //     name: "Windscreen",
  //     qty: 98,
  //     total: 4095,
  //     MonthlyProjection: 634,
  //     YearlyProjection: 190859,
  //     AAGR: 8,
  //   },
  // ];

  return (
    <div>
      <BarChart width={500} height={500} data={items}>
        <Bar dataKey="qty" fill="yellow" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="title" />
        <YAxis />
      </BarChart>
      <div className="dashboard">
        <table className="table">
          <tr>
            <th className="th">Name</th>
            <th className="th">Quantity sold</th>
            <th className="th">Total Revenue</th>
            <th className="th">Monthly Projection</th>
            <th className="th">Yearly Projection</th>
            <th className="th">AAGR</th>
          </tr>
          {items.map((val, key) => {
            return (
              <tr key={key}>
                <td className="td">{val.title}</td>
                <td className="td">{val.qty}</td>
                <td className="td">${val.qty * val.price}</td>
                <td className="td">${val.qty * val.price * 30}</td>
                <td className="td">${val.qty * val.price * 365}</td>
                {/* <td className="td">${0}</td>
                <td className="td">${0}</td> */}
                <td className="td">{val.AAGR}%</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
