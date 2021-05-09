import React from 'react';
import './Dashboard.scss';

const dashboard = () =>{
   
    return(
        <div className='container'>
            <div className='dashboard'>
                <div className='dashboardSideBar'>
                   <div className='dashboardSideBarAction'>
                        <button className='dashboardSideBarActionButton' dataIsActive='true'><span>@</span> Dashboard</button>
                        <button className='dashboardSideBarActionButton' dataIsActive='flase'><span>@</span> All Courses</button>
                        <button className='dashboardSideBarActionButton' dataIsActive='flase'><span>@</span> Investment</button>
                        <button className='dashboardSideBarActionButton' dataIsActive='flase'><span>@</span> Blog</button>     
                    </div>
                   <div className='dashboardSideBarContact'>
                        <button>Contact Us</button>
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
                                <h1>Exit</h1>        
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
                                        <span className='detailsAboutCompleteLine1'></span>
                                        <span className='detailsAboutCompleteLine2'></span>
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
                                    <div className='coursesList'>
                                        <div className='coursesListManagement'>
                                            <img src='./assets/image14.png'/>
                                            <div className='coursesListManagementDescription'>
                                                <h3>Project Management Masterclass - Spinning plates: A day in the life of a Project Manager</h3>
                                                <div className='coursesListManagementDescriptionDuration'>
                                                    <li>1h 53m</li>
                                                    <li>jan 16, 2021</li>
                                                </div>
                                                <p>Lesson Completed:4 / 12</p>
                                                <div className='coursesListManagementDescriptionLine'>
                                                    <span className='coursesListManagementDescriptionLineOne'></span>
                                                    <span className='coursesListManagementDescriptionLineTwo'></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='coursesListBusiness'>
                                            <img src='./assets/image17.png'/>
                                            <div className='coursesListBusinessDescription'>
                                                <h3>E-Commerce Essentials: How to Start a Successful Online Business</h3>
                                                <div className='coursesListBusinessDescriptionDuration'>
                                                    <li>2h 43m</li>
                                                    <li>jan 16,2021-May 16, 2021</li>
                                                </div>
                                                <p>Lesson Completed:4 / 12</p>
                                                <div className='coursesListBusinessDescriptionLine'>
                                                    <span className='coursesListBusinessDescriptionLineOne'></span>
                                                    <span className='coursesListBusinessDescriptionLineTwo'></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className='blog'>
                                    <nav className='blogNavbar'>
                                      <li className='blogNavbarTitle'>Blogs</li>
                                      <li className='blogNavbarView'>View Blogs</li>
                                    </nav>
                                    <div className='blogContent'>
                                        <div className='blogContentPublished'>
                                            <h3>Inclusion & Diversity at Work: Skills for Confident <br/> Conversations About Race</h3>
                                            <button>Published</button>
                                        </div>
                                        <div className='blogContentUnpublished'>
                                            <h3>Taking Your Team Remote: People, Process, and Tools</h3>
                                            <button>Unpublished</button>
                                        </div>
                                    </div>
                                </section>
                            </section>  

                            <section className='notification'>
                                <div className='notificationSegment'>
                                    <h2>Notification</h2>
                                    <div className='notificationSegmentParagraph'>
                                        <h3>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit</h3>
                                        <p>Saturday,January 16, 2021</p>
                                    </div>
                                    <div className='notificationSegmentParagraph'>
                                        <h3>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit</h3>
                                        <p>Saturday,January 16, 2021</p>
                                    </div>
                                    <div className='notificationSegmentParagraph'>
                                        <h3>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit</h3>
                                        <p>Saturday,January 16, 2021</p>
                                    </div>
                                    <div className='notificationSegmentParagraph'>
                                        <h3>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit</h3>
                                        <p>Saturday,January 16, 2021</p>
                                    </div>
                                    <div className='notificationSegmentParagraph'>
                                        <h3>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit</h3>
                                        <p>Saturday,January 16, 2021</p>
                                    </div>
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

