import React from "react";

export default function ElInput(props) {
    return(
        <div>
            {props.label}: <input {...props}/>
        </div>
    )

}
