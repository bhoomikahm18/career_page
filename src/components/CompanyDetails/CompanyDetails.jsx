import React from 'react';
import './CompanyProfile.css';

function CompanyDetails() {
    return (
        <div className='profile'>
            {/* <h1>Welcome to company</h1> */}
            <img className='img-1' src='https://www.slideegg.com/image/multi_slide/2571/50595-Company-Profile-PPT_01.PNG' />
            <h2 className='heading-1'>Technology is the application of conceptual knowledge to achieve practical goals, especially in a reproducible way.</h2>
            <hr />
            <h1 className='heading-2'>Work Toward Your Goals</h1>
            <img className='img-2' src='https://cms-article.forbesindia.com/media/images/2023/Sep/img_218241_workfromhome.jpg' />
            <h1 className='heading-3'>Work Smart, Learn More</h1>
        </div>
    )
}

export default CompanyDetails