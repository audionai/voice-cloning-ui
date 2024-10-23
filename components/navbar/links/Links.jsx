"use client";
import Link from "next/link";
import styles from "../navbar.module.css";
import NavLink from "./navlink/navLink";
import Image from "next/image"
// import styles from "./links.module.css";
import { useState } from 'react';
import { title } from "process";

const Links = () => {

    // const [dropdownVisible, setDropdownVisible] = useState(false);

    // const handleMouseEnter = () => setDropdownVisible(true);
    // const handleMouseLeave = () => setDropdownVisible(false);
    // const handleClick = () => setDropdownVisible(!dropdownVisible);
  
    const links = [
        {
            title: "Home",
            path: "/",
        },
        {
            title: "Services",
            path: "/services",
            img: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.41438 9.53151C6.67313 9.20806 7.1451 9.15562 7.46855 9.41438L12 13.0396L16.5315 9.41438C16.855 9.15562 17.3269 9.20806 17.5857 9.53151C17.8444 9.85495 17.792 10.3269 17.4685 10.5857L12.4685 14.5857C12.1946 14.8048 11.8054 14.8048 11.5315 14.5857L6.53151 10.5857C6.20806 10.3269 6.15562 9.85495 6.41438 9.53151Z" fill="rgb(var(--color))"/></svg>,
            dropdown: [
                {
                    title: "AI Voice Cloning",
                    path: "/service/",
                    preview: "clone any of your voice"
                },
                {
                    title: "AI Voice Translation",
                    path: "/service/",
                    preview: ""
                },
                {
                    title: "Text to Speech",
                    path: "/service/",
                    priview: ""
                },
                {
                    title: "voice cutter",
                    path: "service/cut",
                    preview: ""
                },
                {
                    title: "AI voice checker",
                    path: "/service/check",
                    preview: ""
                }
                // {
                //     title: "Text to speech",
                //     path: "/"
                // },
                // {
                //     title: "Ai check",
                //     path: "/"
                // },
                // {
                //     title: "Voice cutter",
                //     path: "/"
                // },
            ]
        },
        {
            title: "API",
            path: "/api",
            div: <h2 className={styles.soon}>soon</h2>
        },
        {
            title: "Price",
            path: "/price",
        },
        {
            title: "My Voice",
            path: "/myvoice",
        }
    ];
    const [open, setOpen] = useState(false);
    return (
        <div className={styles.navLinks}>
            {links.map((link, index) => (
                <li 
                key={index} 
                className={styles.navItem}
                // onMouseEnter={link.dropdown ? handleMouseEnter : null}
                // onMouseLeave={link.dropdown ? handleMouseLeave : null}
                // onClick={link.dropdown ? handleClick : null}
                >
                    
                <NavLink item={link} key={link.title} />
                    {link.dropdown && (
                        <ul className={styles.dropdownContent}>
                            {link.dropdown.map((sublink, subIndex) => (
                                <li key={subIndex} className={styles.dropdownItem}>
                                    <Link href={sublink.path} className={styles.navli}>
                                <div className={styles.list_1}>
                                    
                                {sublink.title}
                                </div>
                                <br />
                                <div className={styles.list_2}>
                                    
                                {sublink.preview}
                                </div>
                                        </Link>
                                </li>
                            )
                        )}
                        </ul>

                    )}
                </li>
            ))}
            <button onClick={()=>setOpen((prev)=>!prev)} className={styles.menu_btn}><Image width={60} height={60} alt="aiimage" src="icon/menu/solid/menu-line-horizontal.svg"/></button>
            {
                open && (
                <div className={styles.mobileLinks}>
                    {
                        links.map((link, index) =>(
                            <li 
                            key={index} 
                            className={styles.navport}
                            // onMouseEnter={link.dropdown ? handleMouseEnter : null}
                            // onMouseLeave={link.dropdown ? handleMouseLeave : null}
                            // onClick={link.dropdown ? handleClick : null}
                            >
                            <NavLink item={link} key={link.title}/>
                            {link.dropdown && (
                                <ul className={styles.dropdownContent}>
                                    {link.dropdown.map((sublink, subIndex) => (
                                        <li key={subIndex} className={styles.dropdownItem}>
                                            <Link href={sublink.path}>
                                        {sublink.title}
                                                
                                                </Link>
                                        </li>
                                    )
                                )}
                                </ul>
        
                            )}</li>
                        ))
                    }
                    <button className={styles.signup_bt}>Signup</button>
                    <button className={styles.login_bt}>Login</button>
                    </div>
            )}
        </div>
    );
};

export default Links 