import React from 'react';
import Header from '../../components/header';
import styles from './Resume.module.css'
import Footer from '../../components/footer';

const DownloadPdf = () => {
  return (
    <div className={styles.pageSection}>
      <Header/>
      <iframe className={styles.iframe} src="/pdf/Gaurab_Acharya_Resume.pdf"/>
      <Footer/>
    </div>
  );
};


export default DownloadPdf;