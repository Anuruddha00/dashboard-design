import React from 'react';
import './Dashboard.scss';

const Dashboard = () =>{
   
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
                        <h2></h2>
                        <h2></h2>
                    </div>
                    <img/>        
                </div>       
            </div>
        </nav>
    </div>
    
}
export default Dashboard;
