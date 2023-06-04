import React,{useContext,useState} from 'react'
import weatherContext from '../contexts/weatherContext'
import {Link,useNavigate} from "react-router-dom";

function Navbar(props) {
    const {setSearch}=useContext(weatherContext);
    const [searchQuery, setSearchQuery] = useState('')
    
    const navigate = useNavigate();//It is use to redirect the user (without reloading)

    const onChange=(e)=>{
        setSearchQuery(e.target.value)//This sets searchQuery to the value of input in search(input) field
    }
    
    const onSubmit=(e)=>{
        //This envokes when a person search
        e.preventDefault();//Prevent Page from being reloaded
        setSearch(searchQuery);//setSearch to searchQuery
        navigate('/');//redirects to '/'
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>

                        </ul>
                        <form className="d-flex" role="search" onSubmit={onSubmit}>
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={onChange}/>
                                <button className="btn btn-danger" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar