import React from 'react';
import RequestService from '../../components/RequestService';

function WaterHeaters() {
  return (
    <main>
      <div className="page-title plumbing">
        <h1>Water Heaters</h1>
      </div>
     
      <div className="container services mt-5">
          <div className="row">
            <div className="col-md-8">
                <h1>Water Heaters</h1>
                <h3>Tank & Tankless</h3>

                <p>Here at Hukill's Inc. we have a team of professionals ready to service, install and repair all kinds of water heaters. Are you wondering if your water heater needs to be repaired or replaced? Call our team of professionals to make an informed decision!</p>
                <h2>How a Tank Style Water Heater Works</h2>
                <h3>How does a tank style of water heater work?</h3>
                <p>The cold water supply line connects to the water heater, typically on top of the appliance. Instead of dumping the water on top of the hot water, a dip tube carries the cold water down to the bottom of the tank. The outbound hot water line takes the water off the top of the tank. That way, when hot water is drawn out, it is at full temperature. Only after most of the hot water has been used do you start to get the hot and cold water mix.</p>
                <p>When you open a hot water tap, the water pressure from the cold water supply line pushes the water out of the water heater and refills the tank with cold water. As cold water enters the tank, the thermostat(s) senses the lower temperature and triggers the heating mechanism.</p>
                <p>If you have a tank style water heater and would like to get at lease 50% more hot water out of the existing unit we can install a mixing valve on your unit. This will cause less hot water to be pulled out of the unit which in turn we are putting less cold water into the unit. We actually mix the cold water with the hot water after the hot water leaves the unit. For more information please give our office a call and see how you can get the most out of your water heater.</p>
                <h2>How a Tankless Water Heater Works</h2>
                <h3>How does a tankless water heater work?</h3>
                <p>The idea behind a tankless system is that it heats the water as you need it instead of continually heating water stored in a tank. Tankless heaters have been the norm in much of Europe and Japan for quite some time, but they haven't gained popularity until recently in the United States -- largely due to the green movement. If you're a good candidate for a tankless system, you can save a substantial amount of money every year on your monthly bills while at the same time conserving natural gas. Tankless heaters also last about five to 10 years longer than a tank heater, take up much less space and provide you with an unlimited amount of hot water.</p>
            </div>
            <div className="col-md-4">
                <img src="/images/plumbing/tankless.jpg" alt="Tankless Water Heater" className="img-fluid rounded mb-4"/>
            </div>
          </div>
      </div>
      {/* /.container */}

      {/* REQUEST SERVICE SECTION - Full Width */}
      <RequestService />
    </main>
  );
}

export default WaterHeaters;
