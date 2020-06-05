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
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Monthly Expense ($)",
      dataIndex: "monthly",
      key: "monthly",
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
      category: "Transportation",
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
