import React from 'react';
import MyDiv from '../component/MyDiv';
import MyCounter from '../component/MyCounter';
import MyString from '../component/MyString';

const About = () => {
    return ( 
        <MyDiv>
            <MyCounter />
            <MyString />
        </MyDiv>
     );
}
 
export default About;