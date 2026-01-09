import RequestService from '@/components/RequestService';
import { routing } from '@/i18n/routing';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LeakDetection({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <div className="page-title leak-detection">
        <h1>Leak Detection Services</h1>
      </div>
     
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-5">
            <div className="list-group" id="list-tab" role="tablist">
              <a className="list-group-item list-group-item-action active" id="list-leak-detection-list" data-bs-toggle="list" href="#list-leak-detection" role="tab" aria-controls="list-leak-detection">Leak Detection</a>
              <a className="list-group-item list-group-item-action" id="list-water-line-list" data-bs-toggle="list" href="#list-water-line" role="tab" aria-controls="list-water-line">Water Line Leak Detection</a>
              <a className="list-group-item list-group-item-action" id="list-utility-locating-list" data-bs-toggle="list" href="#list-utility-locating" role="tab" aria-controls="list-utility-locating">Utility &amp; Line Locating</a>
              <a className="list-group-item list-group-item-action" id="list-camera-video-list" data-bs-toggle="list" href="#list-camera-video" role="tab" aria-controls="list-camera-video">Camera &amp; Video Inspection</a>
            </div>
          </div>

          <div className="col-md-6 offset-md-1 services">
            <div className="tab-content" id="nav-tabContent">
              <div className="tab-pane fade show active" id="list-leak-detection" role="tabpanel" aria-labelledby="list-leak-detection-list">
                <h1>Leak Detection Services</h1>
                <h2>Fast &amp; Accurate Leak Location</h2>
                <p>At Hukill&apos;s Leak Detection, we specialize in finding hidden leaks quickly and accurately. Using advanced technology including acoustic detection, tracer gas, and video inspection, we can locate leaks in water lines, slabs, driveways, and underground utilities without unnecessary excavation.</p>
                <p>Water damage can occur rapidly when leaks go undetected. Our experienced technicians provide fast and efficient service to help prevent major damage to your property. Because plumbing leaks don&apos;t wait to happen Monday through Friday 8 to 5, we offer emergency leak detection services.</p>
              </div>
              <div className="tab-pane fade" id="list-water-line" role="tabpanel" aria-labelledby="list-water-line-list">
                <h1>Water Line Leak Detection</h1>
                <h2>Advanced Detection Methods</h2>
                <p>Using acoustic sounding and tracer gas technology, we can pinpoint water line leaks quickly and accurately, minimizing damage and repair costs.</p>
                <Link href="/leak-detection/water-line-leak-detection" className="btn service-btn">More About Water Line Leak Detection</Link>
              </div>
              <div className="tab-pane fade" id="list-utility-locating" role="tabpanel" aria-labelledby="list-utility-locating-list">
                <h1>Utility &amp; Line Locating</h1>
                <h2>State-of-the-Art Equipment</h2>
                <p>We locate buried electric lines, communication lines, water lines, steel pipes and steel conduits using electromagnetic line locating equipment.</p>
                <Link href="/leak-detection/utility-line-locating" className="btn service-btn">More About Utility Locating</Link>
              </div>
              <div className="tab-pane fade" id="list-camera-video" role="tabpanel" aria-labelledby="list-camera-video-list">
                <h1>Camera &amp; Video Inspection</h1>
                <h2>Visual Pipe Confirmation</h2>
                <p>Video pipe inspection provides visual confirmation of buried pipes suspected of having obstructions or structural issues such as disconnected fittings, cracks, or penetrating roots.</p>
                <Link href="/leak-detection/camera-video-inspection" className="btn service-btn">More About Video Inspection</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <RequestService />
    </main>
  );
}
