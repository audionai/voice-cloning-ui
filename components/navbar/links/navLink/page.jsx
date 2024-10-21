"use client";

import Link from "next/link";
import styles from './navLink.module.css';
import { usePathname } from "next/navigation"

const NavLink = ({ item }) => {

    const pathName = usePathname();

    return (
        <Link href={item.path} className={styles.mobile_links}>
            {item.title}
            {item.img}
            {item.div}
        </Link>
    )
}

export default NavLink
