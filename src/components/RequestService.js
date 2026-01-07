import React from 'react';
import WebForm from './WebForm';
import Guarantee from './Guarantee';

function RequestService() {
  return (
    <div className="bg-body-secondary py-5 mt-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <WebForm />
          </div>
          <Guarantee />
        </div>
      </div>
    </div>
  );
}

export default RequestService;
