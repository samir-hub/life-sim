import React from "react";
import Row from "antd/es/row";
import "antd/es/row/style/css";
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
        key: "category"
      },
      {
        title: "Monthly Expense",
        dataIndex: "monthly",
        key: "monthly"
      },
    ];

    const data = [
      {
        key: "1",
        category: "Housing",
        monthly: (housing.rent + housing.utilities).toFixed(0)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
   
      },
      {
        key: "2",
        category: "Food",
        monthly: (food.groceries + food.restaurant).toFixed(0)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
     
      },
      {
        key: "3",
        category: "Medical",
        monthly: (medical.medExpenses + medical.premiums).toFixed(0)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    
      },
      {
        key: "4",
        category: "Transportation",
        monthly: (transportation.gas + transportation.carMaintenance + transportation.carPayment + transportation.insurance).toFixed(0)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  
      },
      {
        key: "5",
        category: "Necessities",
        monthly: (housing.rent + housing.utilities).toFixed(0)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  
      },
      {
        key: "6",
        category: "Personal",
        monthly: (housing.rent + housing.utilities).toFixed(0)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")

       
      }
    ];

  return <Table pagination={false} columns={columns} dataSource={data} />;
}

export default ExpensesTable;
