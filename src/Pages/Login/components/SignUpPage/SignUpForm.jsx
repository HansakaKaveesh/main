import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SignUpForm.module.css';

function SignUpForm() {
  return (
    <section className={styles.signUpSection}>
      <h1 className={styles.formTitle}>Create your Account!</h1>
      <form className={styles.signUpForm}>
        <div className={styles.inputGroup}>
          <label htmlFor="firstName" className={styles.inputLabel}>First Name</label>
          <input type="text" id="firstName" className={styles.inputField} required />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="lastName" className={styles.inputLabel}>Last Name</label>
          <input type="text" id="lastName" className={styles.inputField} required />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.inputLabel}>Email</label>
          <input type="email" id="email" className={styles.inputField} required />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.inputLabel}>Password</label>
          <input type="password" id="password" className={styles.inputField} required />
        </div>
        <button type="submit" className={styles.submitButton}>Create my Account</button>
      </form>
      <p className={styles.loginLink}>Already have an account?  <Link to="/Login" className={styles.loginLink}>Login here</Link></p>
    </section>
  );
}

export default SignUpForm;