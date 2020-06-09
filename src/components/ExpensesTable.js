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
      align: "center",
      render: (text, record, index) =>
        index === 0 ? (
          <div
            style={{ backgroundColor: "#F38704", borderRadius: "50%", width: '20px', height: '20px' }}
          ></div>
        ) : (
          <span>
            <a style={{ marginRight: 16 }}>shit</a>
            <a className="ant-dropdown-link">fuck</a>
          </span>
        ),
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
