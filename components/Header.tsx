'use client';

import { Link, usePathname } from '@/i18n/navigation';
import { useTranslations, useLocale } from 'next-intl';

interface HeaderProps {
  site?: string;
}

export default function Header({ site }: HeaderProps) {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();

  const otherLocale = locale === 'en' ? 'es' : 'en';
  const phoneNumber = site === 'Fort Worth' ? '817-672-7555' : '541-854-0296';

  return (
    <header data-bs-theme="light">
      <nav className="navbar navbar-expand-md navbar-light fixed-top bg-white">
        <div className="container-fluid">
          <Link className="navbar-brand ms-5 my-2" href="/">
            <img src="/images/hukills-logo.png" alt="Hukills Logo" height="60" />
          </Link>
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
                <Link className="nav-link" href="/">{t('nav.home')}</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {t('nav.plumbing.title')}
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" href="/plumbing">{t('nav.plumbing.plumbing')}</Link></li>
                  <li><Link className="dropdown-item" href="/plumbing/water-heaters">{t('nav.plumbing.waterHeaters')}</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <span className="text-full-width">{t('nav.drainCleaning.title')}</span>
                  <span className="text-narrow-width">{t('nav.drainCleaning.titleShort')}</span>
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">{t('nav.drainCleaning.drainCleaning')}</a></li>
                  <li><a className="dropdown-item" href="#">{t('nav.drainCleaning.hydrojetting')}</a></li>
                  <li><a className="dropdown-item" href="#">{t('nav.drainCleaning.greaseTraps')}</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {t('nav.leakDetection.title')}
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">{t('nav.leakDetection.leakDetection')}</a></li>
                  <li><a className="dropdown-item" href="#">{t('nav.leakDetection.waterLineLeakDetection')}</a></li>
                  <li><a className="dropdown-item" href="#">{t('nav.leakDetection.utilityLineLocating')}</a></li>
                  <li><a className="dropdown-item" href="#">{t('nav.leakDetection.cameraVideoInspection')}</a></li>
                </ul>
              </li>
              {site === 'Oregon' && (
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {t('nav.foundations.title')}
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">{t('nav.foundations.foundationRepair')}</a></li>
                    <li><a className="dropdown-item" href="#">{t('nav.foundations.crawlSpace')}</a></li>
                    <li><a className="dropdown-item" href="#">{t('nav.foundations.basementRepair')}</a></li>
                  </ul>
                </li>
              )}
              <li className="nav-item hide-in-more"><a className="nav-link" href="#">{t('nav.septicPumping')}</a></li>
              <li className="nav-item hide-in-more"><a className="nav-link" href="#">{t('nav.excavation')}</a></li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <span className="text-full-width">{t('nav.restoration.title')}</span>
                  <span className="text-narrow-width">{t('nav.restoration.titleShort')}</span>
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">{t('nav.restoration.kitchenBathRemodel')}</a></li>
                  <li><a className="dropdown-item" href="#">{t('nav.restoration.cabinetDesignInstall')}</a></li>
                  <li><a className="dropdown-item" href="#">{t('nav.restoration.interiorExteriorPainting')}</a></li>
                  <li><a className="dropdown-item" href="#">{t('nav.restoration.flooringInstallation')}</a></li>
                  <li><a className="dropdown-item" href="#">{t('nav.restoration.graniteCountertops')}</a></li>
                  <li><a className="dropdown-item" href="#">{t('nav.restoration.photoGallery')}</a></li>
                </ul>
              </li>
              <li className="nav-item hide-in-more"><a className="nav-link" href="#">{t('nav.contact')}</a></li>
              <li className="nav-item dropdown show-in-more">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {t('nav.more')}
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">{t('nav.septicPumping')}</a></li>
                  <li><a className="dropdown-item" href="#">{t('nav.excavation')}</a></li>
                  <li><a className="dropdown-item" href="#">{t('nav.contact')}</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link 
                  className="btn btn-sm btn-outline-danger ms-2" 
                  href={pathname}
                  locale={otherLocale}
                >
                  {locale === 'en' ? 'Español' : 'English'}
                </Link>
              </li>
            </ul>
            <div className="d-flex align-items-center ms-5 me-5">
              <div className="text-start">
                <div className="text-muted fs-5">{t('nav.requestService')}</div>
                <a href={`tel:${phoneNumber}`} className="text-dark fw-bold text-decoration-none fs-3">{phoneNumber}</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
