import React from "react";
import styles from '../styles/Home.module.css';
import Image from 'next/image';

import Link from 'next/link';

export default function Footer() {
    return (
        <footer className={styles.footer} style={{marginTop:400}}>
            <div className={styles.box1}>
              <a className={styles.titleFooter}><strong>AQUA</strong>LINN</a>
              <ul className={styles.ToolboxFooter}>
                <li><Link href="/Cadastro"><a className={styles.DescriptionCard}>Cadastre-se</a></Link></li>
                <li><Link href="/Servicos"><a className={styles.DescriptionCard}>Serviços</a></Link></li>
                <li><Link href="/Blog"><a className={styles.DescriptionCard}>Blog</a></Link></li>
                <li><Link href="/Patrocine"><a className={styles.DescriptionCard}>Patrocine um projeto</a></Link></li>
              </ul>
              <ul className={styles.SocialsNetwork}>
                <li><Image src={'/FecebookIcon.svg'} height={25} width={25}/></li>
                <li><Image src={'/InstagramIcon.svg'} height={25} width={25}/></li>
                <li><Image src={'/LinkedinIcon.svg'} height={25} width={25}/></li>
              </ul>
            </div>

            <div className={styles.EmailCard}> 
              <a className={styles.Title}>Fale conosco</a>
              <textarea name="" placeholder="Email" className={styles.DescriptionCard}></textarea>
              <textarea name="" placeholder="" rows="5" className={styles.Email}></textarea>
              <button className={styles.buttonContactEmail}>Enviar</button>
            </div>
        </footer>
    );
}

