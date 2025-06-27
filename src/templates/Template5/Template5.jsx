// Template5.jsx
import "./Template5.css";

const Template5 = ({ data }) => {
  return (
    <div className="template5 border mx-auto my-4 px-sm-4 py-3 w-100">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          {data.companyLogo && (
            <img
              src={data.companyLogo}
              alt="Company Logo"
              height={72}
              className="mb-2"
            />
          )}
          <h2 className="company-name mb-1 fw-bold text-black">{data.companyName}</h2>
          <p className="mb-1">{data.companyAddress}</p>
          <p className="mb-0">Phone: {data.companyPhone}</p>
        </div>
        <div className="text-end">
          <h1 className="invoice-label">INVOICE</h1>
          <p className="mb-1">Invoice #: {data.invoiceNumber}</p>
          <p className="mb-1">Date: {data.invoiceDate}</p>
          <p className="mb-0">Due: {data.paymentDate}</p>
        </div>
      </div>

      <hr className="border-dark" />

      {/* Billing Info */}
      <div className="row g-3 mb-4">
        <div className="col-md-6">
          <div className="p-3 rounded h-100">
            <h5 className="section-title">Billed To</h5>
            <p className="mb-1">{data.billingName}</p>
            <p className="mb-1">{data.billingAddress}</p>
            <p>Phone: {data.billingPhone}</p>
          </div>
        </div>
        {data.shippingName && (
          <div className="col-md-6">
            <div className="p-3 rounded h-100">
              <h5 className="section-title">Shipped To</h5>
              <p className="mb-1">{data.shippingName}</p>
              <p className="mb-1">{data.shippingAddress}</p>
              <p>Phone: {data.shippingPhone}</p>
            </div>
          </div>
        )}
      </div>

      {/* Item Table */}
      <div className="mb-4">
        <div className="table-responsive">
          <table className="table table-bordered text-dark">
            <thead className="table-light border-dark">
              <tr>
                <th>Description</th>
                <th className="text-center">Qty</th>
                <th className="text-end">Rate</th>
                <th className="text-end">Amount</th>
              </tr>
            </thead>
            <tbody>
              {data.items.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.name}</td>
                  <td className="text-center">{Number(item.qty)}</td>
                  <td className="text-end">{Number(item.amount).toFixed(2)}</td>
                  <td className="text-end">
                    ₹{(Number(item.qty) * Number(item.amount)).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Totals */}
      <div className="mb-4">
        <div className="d-flex justify-content-end">
          <div className="p-3 w-100" style={{ maxWidth: "300px" }}>
            <div className="d-flex justify-content-between mb-2">
              <span>Subtotal:</span>
              <span>₹{data.subTotal.toFixed(2)}</span>
            </div>
            {data.tax > 0 && (
              <div className="d-flex justify-content-between mb-2">
                <span>Tax ({data.tax}%):</span>
                <span>₹{data.taxAmount.toFixed(2)}</span>
              </div>
            )}
            <div className="d-flex justify-content-between fw-bold border-top pt-2">
              <span>Total:</span>
              <span>₹{data.total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bank Info */}
      {(data.accountName || data.accountNumber || data.accountIfscCode) && (
        <div className="mt-4">
          <h5 className="section-title">Bank Details</h5>
          {data.accountName && <p>Account Name: {data.accountName}</p>}
          {data.accountNumber && <p>Account Number: {data.accountNumber}</p>}
          {data.accountIfscCode && <p>IFSC Code: {data.accountIfscCode}</p>}
        </div>
      )}

      {/* Notes */}
      {data.notes && (
        <div className="mt-4">
          <h5 className="section-title">Notes</h5>
          <p>{data.notes}</p>
        </div>
      )}
    </div>
  );
};

export default Template5;