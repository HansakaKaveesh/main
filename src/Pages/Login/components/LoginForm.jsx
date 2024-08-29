import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LoginForm.module.css';

function LoginForm() {
  return (
    <section className={styles.loginSection}>
      <h1 className={styles.loginTitle}>LOGIN</h1>
      <div className={styles.userTypeSwitch}>
        <button className={styles.activeUserType}>USER</button>
        <Link to="/admin" className={styles.inactiveUserType}> ADMIN</Link>
      </div>
      <form className={styles.loginForm}>
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.inputLabel}>Email</label>
          <input type="email" id="email" className={styles.inputField} required />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.inputLabel}>Password</label>
          <input type="password" id="password" className={styles.inputField} required />
        </div>
        <div className={styles.rememberMe}>
          <input type="checkbox" id="rememberMe" className={styles.checkbox} />
          <label htmlFor="rememberMe" className={styles.checkboxLabel}>REMEMBER ME</label>
        </div>
        <button type="submit" className={styles.signInButton}>SIGN IN</button>
      </form>
      <div className={styles.divider}>OR</div>
      <div className={styles.socialLogin}>
        <button className={styles.googleButton}>
          Sign in with Google
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/73e9caf524fb70235de893e5583682fc0fdc6de9dccc19b3f61fa0615a24418a?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5" alt="Google logo" className={styles.googleLogo} />
        </button>
        <button className={styles.facebookButton}>
          Sign in with Facebook
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/674f5d35b3043af178e606faa8b615daa973094ff3140f6756934f6682d8e5c9?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5" alt="Facebook logo" className={styles.facebookLogo} />
        </button>
      </div>
    </section>
  );
}

export default LoginForm;