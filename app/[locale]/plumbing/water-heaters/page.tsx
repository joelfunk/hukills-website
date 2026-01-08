import RequestService from '@/components/RequestService';
import { routing } from '@/i18n/routing';
import { setRequestLocale } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function WaterHeaters({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <div className="page-title plumbing">
        <h1>Water Heaters</h1>
      </div>
     
      <div className="container services mt-5">
        <div className="row">
          <div className="col-md-8">
            <h1>Water Heaters</h1>
            <h3>Tank &amp; Tankless</h3>

            <p>Here at Hukill&apos;s Inc. we have a team of professionals ready to service, install and repair all kinds of water heaters. Are you wondering if your water heater needs to be repaired or replaced? Call our team of professionals to make an informed decision!</p>
            <h2>How a Tank Style Water Heater Works</h2>
            <h3>How does a tank style of water heater work?</h3>
            <p>The cold water supply line connects to the water heater, typically on top of the appliance. Instead of dumping the water on top of the hot water, a dip tube carries the cold water down to the bottom of the tank. The outbound hot water line takes the water off the top of the tank. That way, when hot water is drawn out, it is at full temperature.</p>
            <h2>How a Tankless Water Heater Works</h2>
            <h3>How does a tankless water heater work?</h3>
            <p>The idea behind a tankless system is that it heats the water as you need it instead of continually heating water stored in a tank. Tankless heaters have been the norm in much of Europe and Japan for quite some time. If you&apos;re a good candidate for a tankless system, you can save a substantial amount of money every year on your monthly bills while at the same time conserving natural gas.</p>
          </div>
          <div className="col-md-4">
            <img src="/images/plumbing/tankless.jpg" alt="Tankless Water Heater" className="img-fluid rounded mb-4"/>
            <img src="/images/plumbing/water-heater.webp" alt="Water Heater" className="img-fluid rounded mb-4"/>
          </div>
        </div>
      </div>

      <RequestService />
    </main>
  );
}
