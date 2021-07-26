import React from "react";
import styles from '../styles/Home.module.css';

import Link from 'next/link';

export default function Header() {
    return (
        <div className={styles.header}>
            <Link href="/"><a><strong>AQUA</strong>LINN</a></Link>
        </div>
    );
}