import React from 'react';

// Inclusion de Font Awesome
const fontAwesomeLink = (
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
    integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
    crossOrigin="anonymous"
    referrerPolicy="no-referrer"
  />
);

// Styles en ligne améliorés
const styles = {
  footer: {
    backgroundColor: '#111',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
  },
  footerContainer: {
    width: '100%',
    padding: '20px 5px',
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '15px',
    margin: '20px 0',
  },
  socialLink: {
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50px',
    height: '50px',
    backgroundColor: '#fff',
    borderRadius: '50%',
    transition: 'transform 0.3s, background-color 0.3s',
    boxShadow: '0px 4px 10px rgba(255, 255, 255, 0.1)',
  },
  socialLinkHover: {
    transform: 'scale(1.2)',
    backgroundColor: '#00aced',
  },
  socialIcon: {
    fontSize: '1.5em',
    color: '#111',
    transition: 'color 0.3s',
  },
  socialIconHover: {
    color: '#fff',
  },
  footerNav: {
    margin: '30px 0',
  },
  footerNavList: {
    display: 'flex',
    justifyContent: 'center',
    listStyleType: 'none',
    padding: 0,
    gap: '20px',
  },
  footerNavLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.2em',
    opacity: '0.8',
    transition: 'opacity 0.3s, color 0.3s',
  },
  footerNavLinkHover: {
    opacity: '1',
    color: '#00aced',
  },
  footerBottom: {
    backgroundColor: '#000',
    padding: '15px',
    textAlign: 'center',
    fontSize: '0.9em',
  },
  designer: {
    opacity: '0.9',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontWeight: '500',
    color: '#00aced',
  },
};

// Composant Footer
function Footer() {
  return (
    <>
      {fontAwesomeLink}
      <footer style={styles.footer}>
        <div style={styles.footerContainer}>
          {/* Icônes des réseaux sociaux */}
          <div style={styles.socialIcons}>
            {['facebook', 'instagram', 'youtube', 'whatsapp'].map((network) => (
              <a
                href={`https://www.${network}.com`}
                style={styles.socialLink}
                key={network}
                target="_blank"
                rel="noopener noreferrer"
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#00aced';
                  e.currentTarget.firstChild.style.color = '#fff';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = '#fff';
                  e.currentTarget.firstChild.style.color = '#111';
                }}
              >
                <i className={`fa-brands fa-${network}`} style={styles.socialIcon}></i>
              </a>
            ))}
          </div>

          {/* Liens de navigation */}
          <div style={styles.footerNav}>
            <ul style={styles.footerNavList}>
              {['Home', 'News', 'About', 'Contact Us', 'Our Team'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    style={styles.footerNavLink}
                    onMouseOver={(e) => {
                      e.currentTarget.style.opacity = '1';
                      e.currentTarget.style.color = '#00aced';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.opacity = '0.8';
                      e.currentTarget.style.color = 'white';
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bas de page */}
        <div style={styles.footerBottom}>
          <p>
            Copyright &copy; 2024; Designed by{' '}
            <span style={styles.designer}>Sousou Style</span>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;


