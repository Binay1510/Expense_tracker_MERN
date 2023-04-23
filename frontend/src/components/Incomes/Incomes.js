import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/layouts';
import { useGlobalContext } from '../../context/gloablContext';


function Incomes(){
    const{addIncome}=useGlobalContext()
    return (
        <IncomesStyled>
            <InnerLayout>
            <h1>Incomes</h1>
            <div className="income-contnet">
                <div className="form-container"> </div> 
                <div className="incomes">
                      
                </div>
            </div>

            </InnerLayout>
        </IncomesStyled>
    )
}



const IncomesStyled= styled.div`


`;

export default Incomes