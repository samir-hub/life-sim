import React from "react";
import Table from "antd/es/table";
import "antd/es/table/style/css";
import styled from "styled-components";

function ExpensesTable({
  housing,
  food,
  medical,
  transportation,
  necessities,
  personal,
}) {
  const columns = [
    {
      title: "",
      dataIndex: "color",
      key: "color",
      align: "right",
      render: (text, record, index) =>
  {    switch (index) {
        case 0:
          return <div
          style={{ backgroundColor: "#F38704", borderRadius: "50%", width: '18px', height: '18px' }}
        ></div>
        case 1:
          return <div
          style={{ backgroundColor: "#F35B59", borderRadius: "50%", width: '18px', height: '18px' }}
        ></div>
        case 2:
          return <div
          style={{ backgroundColor: "#C95086", borderRadius: "50%", width: '18px', height: '18px' }}
        ></div>
        case 3:
          return <div
          style={{ backgroundColor: "#865794", borderRadius: "50%", width: '18px', height: '18px' }}
        ></div>
        case 4:
          return <div
          style={{ backgroundColor: "#475580", borderRadius: "50%", width: '18px', height: '18px' }}
        ></div>
        case 5:
          return <div
          style={{ backgroundColor: "#2F4858", borderRadius: "50%", width: '18px', height: '18px' }}
        ></div>
        default:
          console.log(`Oops`);
      }}
 
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      align: "center",
    },
    {
      title: "Monthly Expense ($)",
      dataIndex: "monthly",
      key: "monthly",
      align: "center",
    },
  ];

  const data = [
    {
      key: "1",
      category: "Housing",
      monthly: (housing.rent + housing.utilities)
        .toFixed(0)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
    },
    {
      key: "2",
      category: "Food",
      monthly: (food.groceries + food.restaurant)
        .toFixed(0)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
    },
    {
      key: "3",
      category: "Medical",
      monthly: (medical.medExpenses + medical.premiums)
        .toFixed(0)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
    },
    {
      key: "4",
      category: "Transport",
      monthly: (
        transportation.gas +
        transportation.carMaintenance +
        transportation.carPayment +
        transportation.insurance
      )
        .toFixed(0)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
    },
    {
      key: "5",
      category: "Necessities",
      monthly: (
        necessities.internet +
        necessities.cell +
        necessities.studentLoans +
        necessities.tv
      )
        .toFixed(0)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
    },
    {
      key: "6",
      category: "Personal",
      monthly: (personal.clothing + personal.entertainment + personal.other)
        .toFixed(0)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
    },
  ];

  return (
    <WrapperDiv>
      <Table
        className="table"
        pagination={false}
        columns={columns}
        dataSource={data}
      />
    </WrapperDiv>
  );
}

export default ExpensesTable;

const WrapperDiv = styled.div`
  margin: 10px 0;
  .table {
    width: 400px;
    @media only screen and (max-width: 600px) {
      width: 300px;
    }
  }
`;
