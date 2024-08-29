import React from 'react';
import Header from './Header';
import LoginForm from './LoginForm';
import Footer from './Footer';
import styles from './LoginPage.module.css';

import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div className={styles.loginPage}>
      <Header />
      <main className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          <div className={styles.imageColumn}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7f99b99893dd9e06a74c7e501dccb2770bfbdb8de8253938cbd597b350b83a7?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5" alt="Main product showcase" className={styles.mainImage} />
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/fb0f4408458057004673e69632b769a14759e57120a7e7f5f72d67e709448500?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5" alt="Secondary product feature" className={styles.secondaryImage} />
          </div>
          <LoginForm />
        </div>
        <section className={styles.accountOptions}>
        <p className={styles.newCustomer}>
            New customer?{' '}
            <Link to="/signup" className={styles.createAccountLink}>
              Create your account
            </Link>
          </p>
          <p className={styles.passwordRecovery}>Lost password? Recovery password</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
export default LoginPage;


