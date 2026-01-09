import RequestService from '@/components/RequestService';
import { routing } from '@/i18n/routing';
import { setRequestLocale } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function CameraVideoInspection({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <div className="page-title leak-detection">
        <h1>Camera &amp; Video Inspection</h1>
      </div>
     
      <div className="container services mt-5">
        <div className="row">
          <div className="col-md-8">
            <h1>Camera &amp; Video Inspection</h1>
            <h3>Visual Pipe Inspection Services</h3>

            <p>Video Pipe Inspection is when visual confirmation is required of a buried pipe suspect of having obstructions or structural issues such as, disconnected fittings, cracks, or penetrating roots. Conversely, this method can be used to provide visual confirmation that a pipe is free of obstructions and/or structural damage.</p>
            
            <h2>The Inspection Process</h2>
            <h3>High-resolution camera technology</h3>
            <p>This process is done via camera snake. The camera snake has a fiberglass feed equipped with a high resolution color camera. The video is outputted to a monitor providing a clear visual of the pipe in question. A DVD or digital media file of the inspection can be produced upon request.</p>
            
            <h2>Comprehensive Inspection Services</h2>
            <h3>We inspect all types of underground structures</h3>
            <p>Video pipe inspection services on any accessible pipes, manholes, vaults, inlets, tanks, separators or other underground structures. This includes all sizes of sewer, storm water, monitoring wells or any other pipes where visual inspection is necessary.</p>
            
            <p>The length of the inspection can be as much as 300&apos; feet in either direction depending on diameter, elbows, sweep or other conditions. Video Pipe Inspections are commonly used to determine breaks, blockages, condition, laterals, and other critical data that cannot be obtained from the surface.</p>
          </div>
          <div className="col-md-4">
            <img src="/images/leak-detection/truck.jpg" alt="Hukill's Video Inspection Service Truck" className="img-fluid rounded mb-4"/>
          </div>
        </div>
      </div>

      <RequestService />
    </main>
  );
}
