import React from 'react';
import stylesFromIndex from '../styles/Home.module.css';
import styles from '../styles/Cadastro.module.css';

import Footer from '../components/Footer';
import Header from '../components/Header';

function MyApp({ Component, pageProps }) {
    return (
      <div className={styles.container}>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap" rel="stylesheet"/>
          
          <Header />

          <div className={styles.image}></div> 
          <div className={styles.SingUpCard}>

            <div className={styles.title}>Cadastro</div>
            <div className={styles.TextInputSingUp}>
              <div className={styles.Box1}>
                <textarea name="" placeholder="Nome" cols='60' className={styles.TextInputBox}></textarea>
                <textarea name="" placeholder="Sobrenome" cols='60' className={styles.TextInputBox}></textarea>
              </div>
              <div className={styles.Box2}>
                <textarea name="" placeholder="CEP" cols='40' className={styles.TextInputBox}></textarea>
                <textarea name="" placeholder="Endereço" cols='60' className={styles.TextInputBox}></textarea>
                <textarea name="" placeholder="Complemento" cols='30' className={styles.TextInputBox}></textarea>
              </div>
              <div className={styles.Box3}>
                <textarea name="" placeholder="Email" cols='60' className={styles.TextInputBox}></textarea>
                <textarea name="" placeholder="Telefone" cols='60' className={styles.TextInputBox}></textarea>
              </div>
            </div>

            <div className={styles.title} style={{marginTop:100}}>Atividade</div>
            <div className={styles.ListInput}>
              <div>
                <div className={styles.Box1}>
                  <select name="" className={styles.ListInputBox}>
                    <option value="">Agricultura</option>
                    <option value="">Agropecuaria</option>
                    <option value="">Empresarial</option>
                  </select>
                </div>
                <div className={styles.Box2}>
                  <select name="" className={styles.ListInputBox}>
                      <option value="" defaultChecked>Como a água chega até você?</option>
                      <option value="">Opção2</option>
                    </select>
                </div>
              </div>
              <div className={styles.ActiviesBox}>
                <div>
                  <a className={styles.title}>Você tem acesso a água?</a>
                </div>
                <div>
                  <form action="">
                    <input type="radio" id="html" className={styles.RadioButton} name="fav_language" value="trueButton"/>
                    <label htmlFor="trueButton">Sim</label>
                    <input type="radio" id="css" className={styles.RadioButton} name="fav_language" value="falseButton"/>
                    <label htmlFor="falseButton">Não</label>
                  </form>
                </div>
              </div>
              
            </div>
            <div className={styles.UseTerms}>
                <a className={styles.title}>Termos de Uso</a>
                <label className={styles.description}>
                  &nbsp; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit mattis fermentum tempus quis varius eu, turpis. Ut aliquet cursus commodo, cras gravida purus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit mattis fermentum tempus quis varius eu, turpis. Ut aliquet cursus commodo, cras gravida purus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit mattis fermentum tempus quis varius eu, turpis. Ut aliquet cursus commodo, cras gravida purus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit mattis fermentum tempus quis varius eu, turpis. Ut aliquet cursus commodo, cras gravida purus.
                </label>
              </div>
          </div>
          
          <Footer />
      </div>
    )
  }
  
  export default MyApp