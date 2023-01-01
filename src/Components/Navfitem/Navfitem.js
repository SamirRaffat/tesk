import './Navfitem.css'

const Navfitem = (props) =>{
    return(
            <li className='nav-item'>
                {props.children} 
            </li>

    )
}


const NavfitemDropDown = (props) =>{
    return(
            <li className='nav-item dropdown'>
                {props.children} 
            </li>

    )
}

export default Navfitem
export{NavfitemDropDown}