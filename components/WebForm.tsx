export default function WebForm() {
  return (
    <>
      <h2 className="service-title">Request Your Service</h2>
      <p className="lead mb-4">Fill out this form or call us at <a href="tel:817-672-7555" className="text-dark fw-bold text-decoration-none">817-672-7555</a> to get started today.</p>
      
      <form>
        <div className="row mb-3">
          <div className="col-md-6">
            <input type="text" className="form-control form-control-lg" placeholder="First Name" required />
          </div>
          <div className="col-md-6">
            <input type="text" className="form-control form-control-lg" placeholder="Last Name" required />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <input type="tel" className="form-control form-control-lg" placeholder="Phone" required />
          </div>
          <div className="col-md-6">
            <input type="email" className="form-control form-control-lg" placeholder="Email" required />
          </div>
        </div>
        <div className="mb-3">
          <input type="text" className="form-control form-control-lg" placeholder="Address" />
        </div>
        <div className="mb-3">
          <select className="form-select form-select-lg" defaultValue="">
            <option value="" disabled>Are you a new customer?</option>
            <option value="yes">Yes, I&apos;m a new customer</option>
            <option value="no">No, I&apos;m an existing customer</option>
          </select>
        </div>
        <div className="mb-3">
          <textarea className="form-control form-control-lg" rows={4} placeholder="How can we help you?"></textarea>
        </div>
        <p className="text-muted small mb-3">By submitting, you agree to receive text messages from Hukill&apos;s at the number provided, including those related to your inquiry, follow-ups, and review requests, via automated technology. Consent is not a condition of purchase. Msg &amp; data rates may apply. Msg frequency may vary. Reply STOP to cancel or HELP for assistance.</p>
        <button type="submit" className="btn service-btn btn-lg">Send Message</button>
      </form>
    </>
  );
}
