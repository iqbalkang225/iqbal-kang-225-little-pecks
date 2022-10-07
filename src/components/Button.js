import './Button.css'

const Button = ( props ) => {

    const btnClasses = `btn ${props.className}` 
    return (
        <button 
            className = {btnClasses}
            onClick = {props.onClick}
        > 
        {props.children} 
        </button>
    )
}

export default Button