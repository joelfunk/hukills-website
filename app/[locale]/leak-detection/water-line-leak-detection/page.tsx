import RequestService from '@/components/RequestService';
import { routing } from '@/i18n/routing';
import { setRequestLocale } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function WaterLineLeakDetection({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <div className="page-title leak-detection">
        <h1>Water Line Leak Detection</h1>
      </div>
     
      <div className="container services mt-5">
        <div className="row">
          <div className="col-md-8">
            <h1>Water Line Leak Detection</h1>
            <h3>Fast &amp; Efficient Leak Location Services</h3>

            <p>Unfortunately, leaks happen without notice. Since water damage can occur, immediate leak detection is a necessity to prevent major damage. At Hukill&apos;s Leak Detection we provide fast and efficient service. There are many types of plumbing leaks. From leaky pipes under and in homes to leaks in slabs, driveways and roads. Because plumbing leaks don&apos;t wait to happen Monday – Friday 8 to 5, we offer emergency leak detection services.</p>
            
            <h2>Acoustics</h2>
            <h3>Sound-based leak detection</h3>
            <p>Most pipes leaking underground vibrate the earth around it. This vibration is picked up by the sensor of the ground microphone and converted into a sound signal. With many years of acoustic sounding experience, this very effective approach locates hard to find leaks.</p>
            
            <h2>Tracer Gas</h2>
            <h3>When acoustics aren&apos;t enough</h3>
            <p>Sometimes it is not possible to use acoustics due to:</p>
            <ul>
              <li>Noisy environment</li>
              <li>Depth of pipe</li>
              <li>Size of leak</li>
            </ul>
            <p>In these circumstances we will replace the water in the pipe with an inert gas. The gas will escape from the break in the pipe and rise to the surface where it is detected using the trace gas &quot;sniffer&quot; unit.</p>
          </div>
          <div className="col-md-4">
            <img src="/images/leak-detection/truck.jpg" alt="Hukill's Leak Detection Service Truck" className="img-fluid rounded mb-4"/>
          </div>
        </div>
      </div>

      <RequestService />
    </main>
  );
}
