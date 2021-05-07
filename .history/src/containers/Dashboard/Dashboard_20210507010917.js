import React from 'react';
import './Dashboard.scss';

const dashboard = () =>{
   
    return(
        <div className='container'>
            <div className='dashboard'>
                <div className='dashboardSideBar'>
                   <div className='dashboardSideBarTitle'>
                        <h3 className='dashboardSideBarTitleDashboard'>Dashboard</h3>
                        <h3 className='dashboardSideBarTitleCourses'>All Courses</h3>
                        <h3 className='dashboardSideBarTitleInvestment'>Investment</h3>
                        <h3 className='dashboardSideBarTitleBlog'>Blog</h3>
                   </div>
                   <div className='dashboardSideBarContact'>
                        <p>Contact Us</p>
                   </div>
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
                                <div className='contentNavbarProfileName'>
                                    <h3>Hello</h3>
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