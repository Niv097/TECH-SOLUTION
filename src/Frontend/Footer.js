import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.linksContainer}>
        <h4>Quick Links</h4>
        <nav style={styles.nav}>
          <a href="/about" style={styles.link}>About</a>
          <a href="/services" style={styles.link}>Services</a>
          <a href="/contact" style={styles.link}>Contact</a>
          <a href="/support" style={styles.link}>Support</a>
        </nav>
      </div>
      <div style={styles.copyRight}>
        © {new Date().getFullYear()} Tech Solutions. All rights reserved.
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    padding: '20px',
    backgroundColor: '#f5f5f5',
    textAlign: 'center',
  },
  linksContainer: {
    marginBottom: '10px',
  },
  nav: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    alignItems: 'center',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
    fontSize: '16px',
  },
  copyRight: {
    marginTop: '10px',
    color: '#777',
  },
};

export default Footer;
