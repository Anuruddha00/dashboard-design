import React from 'react';
import './Dashboard.scss';

const dashboard = () =>{
   
    return(
        <div className='container'>
            <nav className ='navBar'>
                <div className='navBarContent'>
                    <div className='navBarContentSearch'>
                        <form className='navBarContentSearchField'>
                            <input type='text' placeholder='Search'/>
                            <h1>H</h1>
                        </form>
                    </div>
                    <div className='navBarContentDashboard'>
                        <div className='navBarContentDashboardName'>
                            <h2>Hello</h2>
                            <h2>Alexey Savitskiy</h2>
                        </div>
                        <img/>
                        <h1>H</h1>        
                    </div>       
                </div>
            </nav>
        </div>
    )
    
}
export default dashboard;
