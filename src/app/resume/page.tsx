import React from 'react';
import Header from '../../components/header';
import styles from './Resume.module.css'


const DownloadPdf = () => {
  return (
    <div className={styles.pageSection}>
      <Header/>
      <iframe className={styles.iframe} src="/pdf/Gaurab_Acharya_Resume.pdf"/>
    </div>
  );
};


export default DownloadPdf;