import React from 'react';

const componentName = () => {
    return (
        <div className="cta-top">
            <div className="cta-top__img" />
            <div className="cta-top__textbox">
                <div className="cta-top__textbox--headline">
                    Learn Coding for Automate Your Future
                </div>
                <div className="cta-top__textbox--story">
                    Did you know, 25% of business owners work over 60h per week?
                    Learn to work smarter, by leveraging technology.
                </div>
                <div className="cta-top__textbox--story">
                    In This two week course you will learn implementing world class System of Technology to build your future.
                </div>
                <input 
                className="cta-top__textbox--button"
                type="button"
                value="Join our team to grow your career"
                />
               
            </div>
        </div>
    );
};

export default componentName;