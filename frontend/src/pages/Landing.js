import React, { Fragment } from 'react';
import Courses from '../components/courses/Courses';
import CtaTop from '../components/ctaTop/CtaTop';
import Partner from '../components/partner/Partner';
import Reviews from '../components/reviews/Reviews';

const componentName = () => {
    return (
            <Fragment>
                <CtaTop />
                <Courses />
                <Reviews />
                <Partner />
            </Fragment>
    );
};

export default componentName;