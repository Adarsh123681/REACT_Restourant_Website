import React from 'react'

import  add,{sub,multiply,division} from "./Import";
function Export() {
    return (
        <div>
            <li>Sum of two number is :{add(60,40)}</li>
            <li>Subtraction of two number is :{sub(60,40)}</li>
            <li>Multiplication of two number is :{multiply(60,40)}</li>
            <li>Division of two number is:{division(60,40)}</li>
        </div>
    )
}

export default Export
