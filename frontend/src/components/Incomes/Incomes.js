import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/layouts';
import { useGlobalContext } from '../../context/gloablContext';
import Form from '../Form/Form';
import IncomeItem from '../IncomeItem/IncomeItem';


function Incomes(){
    const{addIncome,Incomes,getIncomes}=useGlobalContext()

    useEffect(()=>{
        getIncomes()
    },[])
    return (
        <IncomesStyled>
            <InnerLayout>
            <h1>Incomes</h1>
            <div className="income-contnet">
                <div className="form-container">
                    <Form/>
                 </div> 
                <div className="incomes">
                      {Incomes.map((income)=>{
                        const {_id, title, amount, date, category, description, type} = income;
                        return <IncomeItem
                        key={_id}
                        id={_id} 
                        title={title} 
                        description={description} 
                        amount={amount} 
                        date={date} 
                        type={type}
                        category={category} 
                        indicatorColor="var(--color-green)"
                        //deleteItem={deleteIncome}
                        />
                      })}
                </div>
            </div>

            </InnerLayout>
        </IncomesStyled>
    )
}



const IncomesStyled= styled.div`


`;

export default Incomes