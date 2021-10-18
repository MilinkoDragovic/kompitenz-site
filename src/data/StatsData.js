import * as React from "react";
import { GiEarthAmerica } from 'react-icons/gi';
import { MdAirplanemodeActive, MdTimer } from 'react-icons/md';
import { FaMoneyCheck } from 'react-icons/fa';

export const StatsData = [
    {
        icon: (
            <GiEarthAmerica
                style={{
                    color: '#047bf1'
                }}
            />
        ),
        title: "Over 50 clients",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
    },
    {
        icon: (
            <MdAirplanemodeActive 
                style={{
                    color: '#047bf1'
                }}
            />
        ),
        title: "Over 50 clients",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
    },
    {
        icon: (
            <MdTimer 
                style={{
                    color: '#047bf1'
                }}
            />
        ),
        title: "Over 50 clients",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
    },
    {
        icon: (
            <FaMoneyCheck 
                style={{
                    color: '#047bf1'
                }}
            />
        ),
        title: "Over 50 clients",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
    },
]