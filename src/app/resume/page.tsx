import React from 'react';
import Header from '../../components/header';
import styles from './resume.module.css'


const DownloadPdf = () => {
  return (
    <div className={styles.pageSection}>
      <Header/>
      <iframe className={styles.iframe} src="/pdf/Gaurab_Acharya_Resume.pdf"/>
      {/* <h1>Download PDF</h1>
      <p>Click the link below to download the PDF file:</p>
      <a href="/pdf/Gaurab_Acharya_Resume.pdf" download className={styles.downloadLink}>
        Download PDF
      </a> */}
    </div>
  );
};


export default DownloadPdf;