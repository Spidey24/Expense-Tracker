import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGC } from '../../context/globalContext';
import History from '../../History/History';
import { InnerLayout } from '../../styles/Layouts';
import { rupee } from '../../utils/Icons';
import Chart from '../Chart/Chart';

function Dashboard() {
    const {totalExpenses,totalDebit,incomes, expenses, totalIncome, totalBalance, getIncomes, getExpenses } = useGC()

    useEffect(() => {
        getIncomes()
        getExpenses()
    }, [getExpenses,getIncomes])

    return (
        <DashboardStyled>
            <InnerLayout>
                <h1>All Transactions</h1>
                <div className="stats-con">
                    <div className="chart-con">
                        <Chart />
                        <div className="amount-con">
                            <div className="income">
                                <h2>Total Income</h2>
                                <p>
                                    {rupee} {totalIncome()}
                                </p>
                            </div>
                            <div className="expense">
                                <h2>Total Expense</h2>
                                <p>
                                    {rupee} {totalExpenses()}
                                </p>
                            </div>
                            <div className="balance">
                                <h2> Balance</h2>
                                <p>
                                ₹{totalBalance()}
                                </p>
                            </div>
                            <div className="debit">
                                <h2>Total debt</h2>
                                <p>
                                ₹{totalDebit()}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="history-con">
                        <History />
                        <h2 className="salary-title">Min <span>Incomes</span>Max</h2>
                        <div className="salary-item">
                            <p>
                            ₹{Math.min(...incomes.map(item => item.amount))}
                            </p>
                            <p>
                            ₹{Math.max(...incomes.map(item => item.amount))}
                            </p>
                        </div>
                        <h2 className="salary-title">Min <span>Expense</span>Max</h2>
                        <div className="salary-item">
                            <p>
                            ₹{Math.min(...expenses.map(item => item.amount))}
                            </p>
                            <p>
                            ₹{Math.max(...expenses.map(item => item.amount))}
                            </p>
                        </div>
                    </div>
                </div>
            </InnerLayout>
        </DashboardStyled>
    )
}

const DashboardStyled = styled.div`
    .stats-con{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 2rem;
        .chart-con{
            grid-column: 1 / 4;
            height: 400px;
            .amount-con{
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 2rem;
                margin-top: 2rem;
                        
                  
                .income, .expense, .balance, .debit {
                    background: #FCF6F9;
                    border: 2px solid #FFFFFF;
                    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                    border-radius: 20px;
                    padding: 1rem;
                    width: 100%;
                    height: 85%;
                  }
                  
                  .income, .expense {
                    grid-column: span 2;
                  }
                  
                  .balance, .debit {
                    grid-column: span 2;
                    height:85%
                  }
                  
                  .income p, .expense p, .balance p, .debit p {
                    font-size: 1.75rem;
                    font-weight: 700;
                  }
                  
                  .income, .balance {
                    margin-bottom: 1rem;
                  }
                  

                    p{
                        opacity: 0.6;
                        font-size: 4.5rem;
                    }
                }
            }
        }

        .history-con{
            grid-column: 4 / -1;
            h2{
                margin: 1rem 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .salary-title{
                font-size: 1.2rem;
                span{
                    font-size: 1.8rem;
                }
            }
            .salary-item{
                background: #FCF6F9;
                border: 2px solid #FFFFFF;
                box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                padding: 1rem;
                border-radius: 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                p{
                    font-weight: 600;
                    font-size: 1.6rem;
                }
            }
        }
    }
`;

export default Dashboard
