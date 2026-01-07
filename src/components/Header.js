import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t, i18n } = useTranslation(); // Hook to access translations

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <header data-bs-theme="light">
      <nav className="navbar navbar-expand-md navbar-light fixed-top bg-white">
        <div className="container-fluid">
          <a className="navbar-brand ms-5 my-2" href="#">
            <img src="images/hukills-logo.png" alt="Huckels Logo" height="60" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ms-auto mb-2 mb-md-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">{t('nav.home')}</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Plumbing
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Plumbing</a></li>
                  <li><a className="dropdown-item" href="#">Water Heaters</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Drain Cleaning
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Drain Cleaning</a></li>
                  <li><a className="dropdown-item" href="#">Hydrojetting</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Leak Detection
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Leak detection</a></li>
                  <li><a className="dropdown-item" href="#">Water line leak detection</a></li>
                  <li><a className="dropdown-item" href="#">Utility & line locating</a></li>
                  <li><a className="dropdown-item" href="#">Camera & video inspection</a></li>
                </ul>
              </li>
              <li className="nav-item"><a className="nav-link" href="#">Septic Pumping</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Excavation</a></li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Restoration/Remodel
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Kitchen & Bath Remodel</a></li>
                  <li><a className="dropdown-item" href="#">Cabinet Design & Install</a></li>
                  <li><a className="dropdown-item" href="#">Interior & Exterior Painting</a></li>
                  <li><a className="dropdown-item" href="#">Flooring Installation</a></li>
                  <li><a className="dropdown-item" href="#">Photo Gallery</a></li>
                </ul>
              </li>
              <li className="nav-item"><a className="nav-link" href="#">Contact Us</a></li>
              <li className="nav-item">
                <button 
                  className="btn btn-sm btn-outline-danger ms-2" 
                  onClick={toggleLanguage}
                >
                  {i18n.language === 'en' ? 'Español' : 'English'}
                </button>
              </li>
            </ul>
            <div className="d-flex align-items-center ms-5 me-5">
              <div className="text-start">
                <div className="text-muted fs-5">Request a Service</div>
                <a href="tel:817-672-7555" className="text-dark fw-bold text-decoration-none fs-3">817-672-7555</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
