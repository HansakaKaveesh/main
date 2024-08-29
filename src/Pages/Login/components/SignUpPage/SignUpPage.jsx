import React from 'react';
import Header from './Header';
import SignUpForm from './SignUpForm';
import Footer from './Footer';
import styles from './SignUpPage.module.css';


function SignUpPage() {
  return (
    <div className={styles.pageContainer}>
      <Header />
      <main className={styles.mainContent}>
        <section className={styles.heroSection}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/8699bc3c8bb189ea22bbf842dbefca7e2875747757542b70ee3a48c2bffb69ef?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5" alt="Hero image" className={styles.heroImage} />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/fb0f4408458057004673e69632b769a14759e57120a7e7f5f72d67e709448500?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5" alt="Secondary image" className={styles.secondaryImage} />
        </section>
        <SignUpForm />
      </main>
      <Footer />
    </div>
  );
}

export default SignUpPage;