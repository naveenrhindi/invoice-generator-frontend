import "./Template2.css";

const Template2 = ({ data }) => {
  return (
    <div className="template2 shadow-lg rounded-4 p-4 mx-auto my-4 w-100 w-800">
      {/* Header */}
      <div className="row mb-4 align-items-center">
        <div className="col-md-6 mb-3 mb-md-0">
          <h1 className="template2-invoice-title mb-2">INVOICE</h1>
          <p className="text-muted small mb-1">#{data.invoiceNumber}</p>
          <p className="mb-1 fw-semibold">{data.companyName}</p>
          <p className="mb-1">{data.companyAddress}</p>
          <p className="mb-0">Phone: {data.companyPhone}</p>
        </div>
        {data.companyLogo && (
          <div className="col-md-6 text-md-end text-start">
            <img
              src={data.companyLogo}
              alt="Logo"
              className="template2-logo"
              width={98}
            />
          </div>
        )}
      </div>

      <hr className="mb-4 mt-0" />

      {/* Invoice Info */}
      <div className="row g-3 mb-4">
        <div className="col-md-6">
          <h5 className="text-primary fw-bold">Invoice Info</h5>
          <p className="mb-1">Invoice Date: {data.invoiceDate}</p>
          <p className="mb-0">Due Date: {data.paymentDate}</p>
        </div>
      </div>

      {/* Billing & Shipping */}
      <div className="row g-4 mb-4">
        <div className="col-md-6">
          <div className="template2-box p-3 rounded">
            <h6 className="text-secondary fw-bold mb-2">Billed To</h6>
            <p className="mb-1">{data.billingName}</p>
            <p className="mb-1">{data.billingAddress}</p>
            <p className="mb-0">Phone: {data.billingPhone}</p>
          </div>
        </div>
        {data.shippingName && data.shippingPhone && data.shippingAddress && (
          <div className="col-md-6">
            <div className="template2-box p-3 rounded">
              <h6 className="text-secondary fw-bold mb-2">Shipped To</h6>
              <p className="mb-1">{data.shippingName}</p>
              <p className="mb-1">{data.shippingAddress}</p>
              <p className="mb-0">Phone: {data.shippingPhone}</p>
            </div>
          </div>
        )}
      </div>

      {/* Table */}
      <div className="table-responsive mb-4">
        <table className="table template2-table">
          <thead>
            <tr>
              <th>Description</th>
              <th className="text-center">Qty</th>
              <th className="text-end">Rate</th>
              <th className="text-end">Amount</th>
            </tr>
          </thead>
          <tbody>
            {data.items.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td className="text-center">{Number(item.qty)}</td>
                <td className="text-end">₹{Number(item.amount)?.toFixed(2)}</td>
                <td className="text-end">
                  ₹{(Number(item.qty) * Number(item.amount)).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Totals */}
      <div className="mb-4 d-flex justify-content-end">
        <div className="template2-box p-3" style={{ maxWidth: "300px" }}>
          <div className="d-flex justify-content-between mb-2">
            <span>Sub Total:</span>
            <span>₹{data.subTotal.toFixed(2)}</span>
          </div>
          {data.tax > 0 && (
            <div className="d-flex justify-content-between mb-2">
              <span>Tax ({data.tax}%)</span>
              <span>₹{data.taxAmount.toFixed(2)}</span>
            </div>
          )}
          <div className="d-flex justify-content-between fw-bold">
            <span>Total:</span>
            <span>₹{data.total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Bank Details */}
      {(data.accountName || data.accountNumber || data.accountIfscCode) && (
        <div className="mb-4">
          <h5 className="text-primary fw-bold">Bank Details</h5>
          {data.accountName && <p>Account Holder: {data.accountName}</p>}
          {data.accountNumber && <p>Account Number: {data.accountNumber}</p>}
          {data.accountIfscCode && <p>IFSC Code: {data.accountIfscCode}</p>}
        </div>
      )}

      {/* Notes */}
      {data.notes && (
        <div className="mb-2">
          <h5 className="text-primary fw-bold">Notes</h5>
          <p>{data.notes}</p>
        </div>
      )}
    </div>
  );
};

export default Template2;
