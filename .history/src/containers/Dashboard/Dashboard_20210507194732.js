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

                        <div className='contentBody'>
                            <section className='details'>
                                <div className='detailsAbout'>
                                    <div className='detailsAboutProfile'>
                                        <img src='./assets/Image 12.png'/>
                                        <h3>Alexey Savitskiy</h3>
                                        <p>Student</p>
                                        <button>Edit Profile</button>
                                    </div>
                                    <div className='detailsAboutComplete'>
                                        <p>Complete your profile</p>
                                    </div>
                                    <div className='detailsAboutProgress'>
                                        <div className='detailsAboutProgressCompleted'>
                                            <p>Courses Completed</p>
                                            <h1>03</h1>
                                        </div>
                                        <div className='detailsAboutProgressContinue'>
                                            <p>Courses In Progress</p>
                                            <h1>02</h1>
                                        </div>
                                        <div className='detailsAboutProgressBlogs'>
                                            <p>Blogs Submitted</p>
                                            <h1>12</h1>
                                        </div>
                                        <div className='detailsAboutProgressPoints'>
                                            <p>Points Earned</p>
                                            <h1>30</h1>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className='view'>
                                <section className='courses'>
                                    <nav className='coursesNavbar'>
                                      <li className='coursesNavbarTitle'>Your Courses</li>
                                      <li className='coursesNavbarView'>View Courses</li>
                                    </nav>
                                    <div className='courseList'>
                                        <div className='courseListManagement'>
                                            <img src='./assets/Image 15.png'/>
                                            <div className='courseListManagementDescription'>
                                                <h3>Project Management Masterclass - Spinning plates: A day in the life of a Project Manager</h3>
                                                <div>
                                                    <li>1h 53m</li>
                                                    <li>jan 16,2021</li>
                                                </div>
                                                <p>Lesson Completed:4 / 12</p>
                                            </div>
                                        </div>
                                        <div>
                                            <img src='./Image 16.png'/>
                                            <div>
                                                <h3>E-Commerce Essentials: How to Start a Successful Online Business</h3>
                                                <div>
                                                    <li>2h 43m</li>
                                                    <li>jan 16,2021-May</li>
                                                </div>
                                                <p>Lesson Completed:4 / 12</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className='blog'>

                                </section>
                            </section>  

                            <section className='notification'>
                                <div className='notificationBar'>

                                </div>
                            </section>                  
                        </div>
                   </section>
                </div>          
            </div>
        </div>
    )
    
}
export default dashboard;

