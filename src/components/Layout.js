import Header from './Header';
import Footer from './Footer';

function Layout({ children, site }) {
  return (
    <div className="layout">

      <Header site={site} />
      <main className="main-content">
        {children}
      </main>
      <Footer />

    </div>
  );
}

export default Layout;
