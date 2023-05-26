import React from 'react'
import {Chart as ChartJs, 
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js'

import {Line} from 'react-chartjs-2'
import styled from 'styled-components'
import { useGC } from '../../context/globalContext'
import { dateFormat } from '../../utils/dateFormat'

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
)

function Chart() {
    const {incomes, expenses} = useGC()

    const incomeData = incomes.sort((a, b) => new Date(a.date) - new Date(b.date)).map((inc) => {
        const {date, amount} = inc;
        return {x: dateFormat(date), y: amount};
    });

    const expenseData = expenses.sort((a, b) => new Date(a.date) - new Date(b.date)).map((exp) => {
        const {date, amount} = exp;
        return {x: dateFormat(date), y: amount};
    });

    const data = {
        labels: [...new Set([...incomeData.map((inc) => inc.x), ...expenseData.map((exp) => exp.x)])],
        datasets: [
            {
                label: 'Income',
                data: [...incomeData],
                backgroundColor: 'green',
                tension: .2
            },
            {
                label: 'Expenses',
                data: [...expenseData],
                backgroundColor: 'red',
                tension: .2
            }
        ]
    }

    // rest of the code




    return (
        <ChartStyled >
            <Line data={data} />
        </ChartStyled>
    )
}

const ChartStyled = styled.div`
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 20px;
    height: 100%;
`;

export default Chart
