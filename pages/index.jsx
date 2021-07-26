import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'


export default function Menu() {
  return (
    <div className={styles.container}>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap" rel="stylesheet"/>
      
      <Header />

      <div>
        <div className={styles.image_top}>
          <div className={styles.bodyText}>
            <a className={styles.box1}>Água para todos, um projeto que possibilita</a><a className={styles.box2}>que recursos hidricos cheguem até você</a>
            <button>CHAMADA</button>
          </div>
        </div>

        <div className={styles.apoiadores}>
          <div className={styles.title}>Apoiadores</div>
          <ul className={styles.photoList}>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>

        <div className={styles.nossos_servicos}>
          <div className={styles.title}>Nossos Serviços</div>
            <div className={styles.GridCard}>
              <li className={styles.Card}>
                <div className={styles.ImageCard}></div>
                <a className={styles.TitleCard}>
                  Serviço1
                  <div className={styles.DescriptionCard}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                </a>
                <div></div>
                <a className={styles.buttonCard}>{'Saiba Mais >'}</a>
              </li>
              <li className={styles.Card}>
                <div className={styles.ImageCard}></div>
                <a className={styles.TitleCard}>
                  Serviço1
                  <div className={styles.DescriptionCard}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                </a>
                <div></div>
                <a className={styles.buttonCard}>{'Saiba Mais >'}</a>
              </li>
              <li className={styles.Card}>
                <div className={styles.ImageCard}></div>
                <a className={styles.TitleCard}>
                  Serviço1
                  <div className={styles.DescriptionCard}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                </a>
                <div></div>
                <a className={styles.buttonCard}>{'Saiba Mais >'}</a>
              </li>
              <li className={styles.Card}>
                <div className={styles.ImageCard}></div>
                <a className={styles.TitleCard}>
                  Serviço1
                  <div className={styles.DescriptionCard}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                </a>
                <div></div>
                <a className={styles.buttonCard}>{'Saiba Mais >'}</a>
              </li>
          </div>
        </div>
        <div className={styles.image_bottom}>
          <button className={styles.buttonContact}>Chamada para empresas</button>
        </div>
        <div className={styles.BlogSection}>
          <div className={styles.title}>Blogs</div>
          <ul className={styles.BlogList}>
            <li className={styles.BlogCard}>
              <div className={styles.ImageCard}></div>
              <a className={styles.TitleCard}>
                Artigo1
                <div className={styles.DescriptionCard}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec, ultricies ante vel, tristique aliquet elit et, quisque dignissim. Pharetra risus ipsum vitae senectus maecenas aliquam.</div>  
              </a>
              
              <a className={styles.buttonCard}>{'Saiba Mais >'}</a>
            </li>
            <li className={styles.BlogCard}>
              <div className={styles.ImageCard}></div>
              <a className={styles.TitleCard}>
                Artigo1
                <div className={styles.DescriptionCard}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec, ultricies ante vel, tristique aliquet elit et, quisque dignissim. Pharetra risus ipsum vitae senectus maecenas aliquam.</div>  
              </a>
              
              <a className={styles.buttonCard}>{'Saiba Mais >'}</a>
            </li>
            <li className={styles.BlogCard}>
              <div className={styles.ImageCard}></div>
              <a className={styles.TitleCard}>
                Artigo1
                <div className={styles.DescriptionCard}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec, ultricies ante vel, tristique aliquet elit et, quisque dignissim. Pharetra risus ipsum vitae senectus maecenas aliquam.</div>  
              </a>
              
              <a className={styles.buttonCard}>{'Saiba Mais >'}</a>
            </li>
          </ul>
        </div>
      </div>
      
      <Footer />

    </div>
  )
}
