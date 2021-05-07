import React from 'react';
import './Dashboard.scss';

const dashboard = () =>{
   
    return(
        <div className='container'>
            <div className='dashboard'>
                <div className='dashboardSideBar'>
                    <button>Dashboard</button>
                </div>
                <div className='dashboardMenu'>
                    <section className='content'>
                        <nav className='contentNavbar'>
                            <div className='contentNavbarSearch'>
                                <form>
                                    <input type='text' placeholder='Search'/>
                                </form>
                            </div>
                            <div className='contentNavbarProfile'>
                                <div className='contentNavbarSearchProfileName'>
                                    <h2>Hello</h2>
                                    <h2>Alexey Savitskiy</h2>
                                </div>
                                <img src='./assets/Image 9.png'/>
                                <h1>H</h1>        
                            </div> 
                        </nav>
                   </section>
                   
                   <section>

                   </section>
                </div>          
            </div>
        </div>
    )
    
}
export default dashboard;


{/* <nav className ='navBar'>
                    <div className='navBarContent'>
                        <div className='navBarContentSearch'>
                            <form className='navBarContentSearchField'>
                                <input type='text' placeholder='Search'/>
                            </form>
                        </div>
                        <div className='navBarContentProfile'>
                            <div className='navBarContentProfileName'>
                                <h2>Hello</h2>
                                <h2>Alexey Savitskiy</h2>
                            </div>
                            <img src='./assets/Image 9.png'/>
                            <h1>H</h1>        
                        </div>       
                    </div>
                </nav> */}