import React, { useState, useEffect } from 'react';
import gotop from './top.png';
import './Gotop.css';

const docuEle = document.documentElement as any;

export default function Gotop() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return (() => {
            window.removeEventListener('scroll', handleScroll)
        });
    }, [])

    function handleScroll() {
        const scrolltop = docuEle.scrolltop;
        const minHeight = docuEle.clientHeight / 2;
        setShow(scrolltop > minHeight);
    }

    function goTop() {
        let time = 0;
        const fasetSpeed = (docuEle.scrollTop - 100) / 100 > 10 ? (docuEle.scrollTop - 100) / 100 : 10;

        let t = setInterval(() => {
            const distance = docuEle.scrollTop;
            if (time < 50) {
                docuEle.scrollTop = distance - 1;
            }
            else if (docuEle.scrollTop < 50) {
                docuEle.scrollTop = distance - 1;
            }
            else {
                docuEle.scrollTop = distance - fasetSpeed;
            }
            if (docuEle.scrollTop <= 0) {
                clearInterval(t)
            }
            time++;
        }, 1);

        // firfox,ie
        document.addEventListener('DOMMouseScroll', () => clearInterval(t), false)
        // google
        window.onmousewheel = () => {
            clearInterval(t)
        }
    }

    return (
        <div className={`Gotop ${show ? "active" : ""}`} onClick={goTop} >
            <img src={gotop} alt="回到顶部" />
        </div>
    );
}