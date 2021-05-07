import React from 'react';
import './Dashboard.scss';

const dashboard = () =>{
   
    return(
        <div className='container'>
            <div className=''>
                <nav className ='navBar'>
                    <div className='navBarContent'>
                        <div className='navBarContentSearch'>
                            <form className='navBarContentSearchField'>
                                <input type='text' placeholder='Search'/>
                            </form>
                        </div>
                        <div className='navBarContentDashboard'>
                            <div className='navBarContentDashboardName'>
                                <h2>Hello</h2>
                                <h2>Alexey Savitskiy</h2>
                            </div>
                            <img src='./assets/Image 9.png'/>
                            <h1>H</h1>        
                        </div>       
                    </div>
                </nav>
            </div>
        </div>
    )
    
}
export default dashboard;
