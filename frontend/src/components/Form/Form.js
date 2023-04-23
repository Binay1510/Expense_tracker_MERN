import React from "react";
import styled from "styled-components";

function Form(){
    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        date: '',
        category: '',
        description: '',
    })

    const { title, amount, date, category,description } = inputState;

    const handleSubmit = e => {
        setInputState({...inputState,[name]:e.target.value})


        // e.preventDefault()
        // addIncome(inputState)
        // setInputState({
        //     title: '',
        //     amount: '',
        //     date: '',
        //     category: '',
        //     description: '',
        // })
    }


    return(
        <FormStyled>
            <div className="input-control">
                <input 
                    type=""
                    value={title}
                    name={'title'} 
                    placeholder="Salary Title"
                    onChange={handleInput('title')}
                
                />
            </div>
        </FormStyled>
    )
}


const FormStyled=styled.form`


`;
export default Form