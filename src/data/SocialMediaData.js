import * as React from "react";
import { FaFacebookF, FaLinkedinIn, FaXing } from 'react-icons/fa';

export const SocialMediaData = [
    { 
        title: "Facebook",
        icon: (
            <FaFacebookF />
        ),
        link: 'http://facebook.com'
    },
    { 
        title: "LinkedIn",
        icon: (
            <FaLinkedinIn />
        ),
        link: 'http://linkedin.com'
    },
    { 
        title: "Xing",
        icon: (
            <FaXing />
        ),
        link: 'http://xing.com'
    },
];