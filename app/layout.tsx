import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@/styles/custom.css';
import Script from 'next/script';

export const metadata = {
  title: "Hukill's Inc. - Plumbing & Restoration Services",
  description: 'Professional plumbing, restoration, and remodeling services in Fort Worth, Weatherford, and surrounding areas.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
