import React from 'react';

const Validation = (props) => {
    let ValidationMessage = "Text too Long";
    if(props.textLength<=5){
        ValidationMessage = "Text too short";
    }
    return (
      <div>
          <p>{ValidationMessage}</p>
      </div>  
    )
}

export default Validation;