import React from "react";
import Row from "antd/es/row";
import "antd/es/row/style/css";
import Table from "antd/es/table";
import "antd/es/table/style/css";
import styled from "styled-components";


function ExpensesTable() {


//   const columns = [
//     {
//       title: "Earnings",
//       dataIndex: "earnings",
//       key: "earnings"
//     },
//     {
//       title: "rate",
//       dataIndex: "rate",
//       key: "rate"
//     },
//     {
//       title: "hours",
//       dataIndex: "hours",
//       key: "hours"
//     },
//     {
//       title: "total",
//       dataIndex: "total",
//       key: "total"
//     }
//   ];

//   const data = [
//     {
//       key: "1",
//       earnings: "Regular",
//       rate: (
//         state.userInfo.details[state.userInfo.details.length - 1].avgmajor /
//         1920
//       ).toFixed(2),
//       hours: 80,
//       total: (
//         state.userInfo.details[state.userInfo.details.length - 1].avgmajor / 24
//       )
//         .toFixed(2)
//         .toString()
//         .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
//     },
//     {
//       key: "2",
//       earnings: "PTO",
//       rate: (
//         state.userInfo.details[state.userInfo.details.length - 1].avgmajor /
//         1920
//       ).toFixed(2),
//       hours: 0,
//       total: 0
//     },
//     {
//       key: "3",
//       earnings: "Overtime",
//       rate: (
//         (state.userInfo.details[state.userInfo.details.length - 1].avgmajor /
//           1920) *
//         1.5
//       ).toFixed(2),
//       hours: 0,
//       total: 0
//     },
//     {
//       key: "4",
//       earnings: "",
//       rate: "Gross Pay",
//       hours: "",
//       total: (
//         state.userInfo.details[state.userInfo.details.length - 1].avgmajor / 24
//       )
//         .toFixed(2)
//         .toString()
//         .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
//     }
//   ];

//   const deduColumns = [
//     {
//       title: "Deductions",
//       dataIndex: "deductions",
//       key: "deductions"
//     },
//     {
//       title: "Statutory",
//       dataIndex: "statutory",
//       key: "statutory"
//     },
//     {
//       title: "",
//       dataIndex: "hours",
//       key: "hours"
//     },
//     {
//       title: "",
//       dataIndex: "total",
//       key: "total"
//     }
//   ];

//   const deduData = [
//     {
//       key: "1",
//       statutory: "Federal Income Tax",
//       hours: "",
//       total: -(
//         (state.userInfo.details[state.userInfo.details.length - 1].avgmajor /
//           24) *
//         0.1
//       ).toFixed(2)
//     },
//     {
//       key: "2",
//       statutory: "Social Security Tax",
//       hours: "",
//       total: -(
//         (state.userInfo.details[state.userInfo.details.length - 1].avgmajor /
//           24) *
//         0.062
//       ).toFixed(2)
//     },
//     {
//       key: "3",
//       statutory: "Medicare Tax",
//       hours: "",
//       total: -(
//         (state.userInfo.details[state.userInfo.details.length - 1].avgmajor /
//           24) *
//         0.009
//       ).toFixed(2)
//     },
//     {
//       key: "4",
//       statutory: "Net Pay",
//       hours: "",
//       total: (
//         state.userInfo.details[state.userInfo.details.length - 1].avgmajor /
//           24 -
//         (state.userInfo.details[state.userInfo.details.length - 1].avgmajor /
//           24) *
//           0.1 -
//         (state.userInfo.details[state.userInfo.details.length - 1].avgmajor /
//           24) *
//           0.062 -
//         (state.userInfo.details[state.userInfo.details.length - 1].avgmajor /
//           24) *
//           0.009
//       )
//         .toFixed(2)
//         .toString()
//         .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
//     }
//   ];

  return (
    <h1>Hello</h1>
  );
}

export default ExpensesTable;
