import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
import Logo from "../../components/Logo";
import "./LandingPage.css";
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { useContext } from "react";
import { AppContext, initialInvoiceData } from "../../context/AppContext";

const LandingPage = () => {
  const navigate = useNavigate();
  const { setInvoiceData, setSelectedTemplate, setInvoiceTitle } =
    useContext(AppContext);

  const handleCreateNew = () => {
    // reset to initial state from context
    setInvoiceData(initialInvoiceData);
    setSelectedTemplate("template1");
    setInvoiceTitle("New Invoice");

    navigate("/generate");
  };

  return (
    <>
      {/* Hero Section: Full-width, centered text with background image */}
      <header id="hero" className="hero-section text-white text-center">
        <div
          className="container py-5 d-flex flex-column justify-content-center"
          style={{ height: "100%", paddingTop: "2rem", paddingBottom: "2rem" }}
        >
          <div className="row py-lg-5">
            <div className="col-lg-9 col-md-10 mx-auto">
              <h1 className="display-3 fw-bold mb-4">
                Effortless Invoicing. Professional Results
              </h1>
              <p className="lead mb-5" style={{ fontSize: "1.3rem" }}>
                Stop wrestling with spreadsheets. QuickInvoice helps you create
                and send beautiful invoices in minutes, so you get paid faster.
              </p>
              <p>
                {/* Primary call to action */}
                <button
                  className="btn btn-lg btn-warning fw-bold rounded-pill my-2 mx-1 px-5 py-3"
                  onClick={handleCreateNew}
                >
                  Generate Your First Invoice
                </button>
                {/* Secondary call to action */}
                <a
                  href="#how-it-works"
                  className="btn btn-lg btn-outline-light rounded-pill my-2 mx-1 px-5 py-2"
                >
                  Learn more
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>

      <section id="how-it-works" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5 display-5 fw-bold">
            Get Started in 4 Simple Steps
          </h2>
          <div className="row g-4 justify-content-center">
            {/* step 1 card */}
            <div className="col-md-6 col-lg-3 d-flex">
              <div className="card h-100 shadow-sm border-0 text-center flex-fill">
                <div className="card-img-top-container d-flex align-items-center justify-content-center p-4 bg-info-soft">
                  <img
                    // src="https://placehold.co/150x150/0D6EFD/FFFFFF?text=1&font=montserrat"
                    src="https://placehold.co/150x150/0DCAF0/FFFFFF?text=1&font=montserrat"
                    className="rounded-circle"
                    alt="Enter Invoice Details"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://placehold.co/150x150/0D6EFD/FFFFFF?text=1&font=montserrat";
                    }}
                  />
                </div>
                <div className="card-body p-4">
                  <h5 className="card-title fw-bold mb-2 fs-5">
                    Enter Details
                  </h5>
                  <p className="card-text text-muted small">
                    Quickly fill in your clients information, item descriptions,
                    quantities and prices. Our intuitive form makes it a breeze
                  </p>
                </div>
              </div>
            </div>
            {/* step 2 card */}
            <div className="col-md-6 col-lg-3 d-flex">
              <div className="card h-100 shadow-sm border-0 text-center flex-fill">
                <div className="card-img-top-container d-flex align-items-center justify-content-center p-4 bg-info-soft">
                  <img
                    // src="https://placehold.co/150x150/198754/FFFFFF?text=2&font=montserrat"
                    src="https://placehold.co/150x150/6F42C1/FFFFFF?text=2&font=montserrat"
                    className="rounded-circle"
                    alt="Choose Template"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://placehold.co/150x150/198754/FFFFFF?text=2&font=montserrat";
                    }}
                  />
                </div>
                <div className="card-body p-4">
                  <h5 className="card-title fw-bold mb-2 fs-5">
                    Choose Template
                  </h5>
                  <p className="card-text text-muted small">
                    Browse our gallery of professionally designed templates.
                    Pick one that matches your brand and style
                  </p>
                </div>
              </div>
            </div>
            {/* step 3 card */}
            <div className="col-md-6 col-lg-3 d-flex">
              <div className="card h-100 shadow-sm border-0 text-center flex-fill">
                <div className="card-img-top-container d-flex align-items-center justify-content-center p-4 bg-info-soft">
                  <img
                    // src="https://placehold.co/150x150/FFC107/000000?text=3&font=montserrat"
                    // src="https://placehold.co/150x150/FD7E14/FFFFFF?text=3&font=montserrat"
                    src="https://placehold.co/150x150/FD7E14/FFFFFF?text=3&font=montserrat"
                    className="rounded-circle"
                    alt="Preview Invoice"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://placehold.co/150x150/0DCAF0/FFFFFF?text=4&font=montserrat";
                    }}
                  />
                </div>
                <div className="card-body p-4">
                  <h5 className="card-title fw-bold mb-2 fs-5">
                    Preview Invoice
                  </h5>
                  <p className="card-text text-muted small">
                    See exactly how your invoice will look before sending it.
                    Make any last-minute adjustments with ease
                  </p>
                </div>
              </div>
            </div>
            {/* step4 card */}
            <div className="col-md-6 col-lg-3 d-flex">
              <div className="card h-100 shadow-sm border-0 text-center flex-fill">
                <div className="card-img-top-container d-flex align-items-center justify-content-center p-4 bg-info-soft">
                  <img
                    // src="https://placehold.co/150x150/DC3545/FFFFFF?text=4&font=montserrat"
                    src="https://placehold.co/150x150/20C997/FFFFFF?text=4&font=montserrat"
                    className="rounded-circle"
                    alt="Download and Save"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://placehold.co/150x150/20C997/FFFFFF?text=4&font=montserrat";
                    }}
                  />
                </div>
                <div className="card-body p-4">
                  <h5 className="card-title fw-bold mb-2 fs-5">
                    Download and Save
                  </h5>
                  <p className="card-text text-muted small">
                    Download your invoice as a PDF, send it directly via email
                    or save it for your records and future reference
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}

      <section id="features" className="py-5">
        <div className="container">
          <h2 className="text-center mb-5 display-5 fw-bold">
            Why choose QuickInvoice?
          </h2>
          {/* Feature 1 */}
          <div className="row align-items-center gy-4">
            <div className="col-md-6">
              <img
                src={assets.landing1}
                className="img-fluid rounded shadow-lg"
                alt="Invoice Customization"
                onError={(e) => (e.target.onerror = null)}
              />
            </div>
            <div className="col-md-6">
              <h3 className="fw-bold mx-2">Easy to fill invoice details</h3>
              <p className="text-muted lead fs-6 mx-2 fw-bold">
                Add client, item, and tax details effortlessly with our
                intuitive form layout. <br /> <br />
                Curated list of templates from gallery <br />
                Add your logo and invoice details <br />
                Tailor fields to your needs
              </p>
              <ul className="list-unstyled text-muted">
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                </li>
              </ul>
            </div>
          </div>
          {/* Feature 2 */}
          <div className="row align-items-center gy-4">
            <div className="col-md-6">
              <img
                src={assets.landing2}
                className="img-fluid rounded shadow-lg"
                alt="Invoice Customization"
                onError={(e) => (e.target.onerror = null)}
              />
            </div>
            <div className="col-md-6">
              <h3 className="fw-bold mx-2">Beautiful Dashboard</h3>
              <p className="text-muted lead fs-6 mx-2 fw-bold">
                Track your invoices, payments, and client history — all in one
                clean interface. <br /> <br />
                View the previous invoices <br /> Your saved invoices with
                thumbnail <br /> Reuse one or more invoices <br /> Track the
                invoices
              </p>
              <ul className="list-unstyled text-muted">
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                </li>
              </ul>
            </div>
          </div>
          {/* Feature 3 */}
          <div className="row align-items-center gy-4">
            <div className="col-md-6">
              <img
                src={assets.landing3}
                className="img-fluid rounded shadow-lg"
                alt="Invoice Customization"
                onError={(e) => (e.target.onerror = null)}
              />
            </div>
            <div className="col-md-6">
              <h3 className="fw-bold mx-2">
                Invoice Preview with Action Buttons
              </h3>
              <p className="text-muted lead fs-6 mx-2 fw-bold">
                Preview before you send and take quick actions like edit,
                duplicate, or download. <br /> <br />
                Live preview <br />
                Switch between multiple invoices <br /> One click to Save,
                Download and Delete invoices <br />
              </p>
              <ul className="list-unstyled text-muted">
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                </li>
              </ul>
            </div>
          </div>
          {/* Feature 4 */}
          <div className="row align-items-center gy-4">
            <div className="col-md-6">
              <img
                src={assets.landing4}
                className="img-fluid rounded shadow-lg"
                alt="Invoice Customization"
                onError={(e) => (e.target.onerror = null)}
              />
            </div>
            <div className="col-md-6">
              <h3 className="fw-bold mx-2">Send Invoices Instantly</h3>
              <p className="text-muted lead fs-6 mx-2 fw-bold">
                Deliver invoices via email in one click — no downloads or
                attachments needed. <br /> <br />
                Send invoices Instantly without leaving the application <br />{" "}
                One click to send invoices <br />
                Send unlimited invoices
              </p>
              <ul className="list-unstyled text-muted">
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action Section */}

      <section
        id="generate-invoice"
        className="cta py-5 text-center bg-primary text-white"
      >
        <div className="container">
          <h2 className="display-5 fw-bold mb-3">
            Ready to Streamline Your Invoicing
          </h2>
          <p className="lead mb-4 mx-auto" style={{ maxWidth: "600px" }}>
            Join thousands of freelancers and small businesses who trust
            QuickInvoice. Start creating professional invoices today - it's
            fast, easy, and effective!
          </p>
          <button
            className="btn btn-lg btn-warning fw-bold rounded-pill my-2 mx-1 px-5 py-3"
            onClick={handleCreateNew}
          >
            Start Generating Invoices Now
          </button>
          <p className="mt-3 small">
            (This will lead to the invoice generation interface)
          </p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-2 bg-dark text-white-50">
        <div className="container text-center mt-2">
          <Logo />
          <p className="text-white fw-bold mt-2">QuickInvoice</p>
          <p className="mb-0">
            &copy; {new Date().getFullYear()} QuickInvoice. All Rights Reserved.
          </p>
          <p className="mb-0 small">
            Crafted with <i className="bi bi-heart-fill text-danger"></i> for
            freelancers and small businesses
          </p>
          <p className="mt-2">
            {/* placeholder social media links */}
            <a href="#" className="text-white-50 me-2">
              <FaTwitter />
            </a>
            <a href="#" className="text-white-50 me-2">
              <FaFacebookF />
            </a>
            <a
              href="https://www.linkedin.com/in/naveenrhindi"
              className="text-white-50 me-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default LandingPage;
