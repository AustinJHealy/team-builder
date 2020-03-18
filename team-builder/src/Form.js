import React, { useState } from 'react';

function Form (props) {
    
    const [formState, setFormState] = useState({});

    const formChangeHandler = event => {
        setFormState( {...formState, [event.target.name]: event.target.value })
    }
    const formSubmitHandler =  event => {
        
        event.preventDefault();

        props.addMember({
            ...formState, 
            id: Date.now(),
            memberName: formState.memberName,
            email: formState.email,
            role: formState.role
        })


    }


    return(
        <div className="Form">
            <form onSubmit={formSubmitHandler}>
               <label htmlFor="memberName">Name: </label>
                <input 
                type="text"
                name="memberName"
                value={formState.memberName}
                placeholder="Enter a name"
                onChange={formChangeHandler}
                 />
                
                <br></br>
                
                <label htmlFor="email">Email: </label>
                <input 
                type="text"
                value={formState.email} 
                name= "email"
                placeholder="Enter an Email Address"
                onChange={formChangeHandler}
    
                />
                <br></br>
                
                <label>Role: </label>
                <input 
                type="text"
                value={formState.role}
                name= "role"
                placeholder="Enter a Role"
                onChange={formChangeHandler} 
                />
                <br></br>

                <input type="submit" value="Submit"></input>
            </form>    
        </div>
    )

}

export default Form;