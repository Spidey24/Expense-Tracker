import React from 'react'
import styled from 'styled-components';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import { InnerLayout } from '../../styles/Layouts';
import { useGC } from '../../context/globalContext';
import { dateFormat } from '../../utils/dateFormat';

function Trans() {
  const {incomes,totalIncome,expenses,totalExpenses} = useGC()
  return (
    <TransStyled>
        <InnerLayout>
            <h1>Transaction History</h1>
            <h2 className='total-income'>Total Income: <span>₹{totalIncome()}</span>Total Expense:<span >₹{totalExpenses()}</span></h2>
            <div className="table-container">
            <div className="income-table">
              <h3>Income Table</h3>
            <table className='table-1' id='income-table'>
      <thead>
        <tr>
          <th>Income Source</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {[...incomes].reverse().map(item => (
          <tr key={item.id}>
            <td>{item.title}</td>
            <td>{item.amount}</td>
            <td>{dateFormat(item.date)}</td>
            <td>{item.description}</td>
          </tr>
        ))}
      </tbody>
    </table>

    <ReactHTMLTableToExcel
        id='income-table-button'
        className='download-btn'
        table='income-table'
        filename='income'
        sheet='sheet 1'
        buttonText='Download Income'
      />
          </div>

    <div className="income-table">
    <h3>Expense Table</h3>
            <table className='table-2' id='expense-table'>
      <thead>
        <tr>
          <th>Expense Source</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {[...expenses].reverse().map(item => (
          <tr key={item.id}>
            <td>{item.title}</td>
            <td>{item.amount}</td>
            <td>{dateFormat(item.date)}</td>
            <td>{item.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <ReactHTMLTableToExcel
        id='expense-table-button'
        className='download-btn'
        table='expense-table'
        filename='expense'
        sheet='sheet 1'
        buttonText='Download Expenses'
      />
    </div>
    </div>
        </InnerLayout>

    </TransStyled>
  )
}

const TransStyled = styled.div`
display: flex;
overflow: auto;
.table-container{
  display:flex;
}
.table-1, .table-2 {
  flex: 1;
  margin-right: 10px; /* Add margin for spacing between tables */
}

.total-income{
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin: 1rem 0;
    font-size: 1.5rem;
    gap: .5rem;
    span{
        font-size: 1.5rem;
        font-weight: 800;
    }
}
.income-content{
    display: flex;
    gap: 2rem;
    .incomes{
        flex: 1;
    }
}
.download-btn {
  background-color: #00B7FF;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.download-btn:hover {
  background-color: #0095FF;
}

.download-btn:active {
  box-shadow: none;
  transform: translateY(2px);
}

.income-table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 14px;
}

.income-table th,
.income-table td {
  padding: 10px;
  text-align: left;
  border: 1px solid #ccc;
}

.income-table th {
  background-color: #f2f2f2;
  font-weight: bold;
}

.income-table tr:nth-child(even) {
  background-color: #f9f9f9;
}

.income-table tr:hover {
  background-color: #e0e0e0;
}
`;

export default Trans

