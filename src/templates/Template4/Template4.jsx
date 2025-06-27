import "./Template4.css";

const Template4 = ({ data }) => {
  return (
    <div className="template4 my-5">
      {/* Header */}
      <div className="template4-header d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 className="template4-title">Invoice</h1>
          <p className="mb-1"><strong>Invoice #:</strong> {data.invoiceNumber}</p>
          <p className="mb-1"><strong>Date:</strong> {data.invoiceDate}</p>
          <p className="mb-0"><strong>Due Date:</strong> {data.paymentDate}</p>
        </div>
        <div className="text-end">
          {data.companyLogo && (
            <img src={data.companyLogo} alt="Company Logo" className="template4-logo mb-2"/>
          )}
          <h4 className="mb-1 company-name">{data.companyName}</h4>
          <p className="mb-1">{data.companyAddress}</p>
          <p className="mb-0">Phone: {data.companyPhone}</p>
        </div>
      </div>

      {/* Billing & Shipping */}
      <div className="row mb-4">
        <div className="col-md-6">
          <h5 className="text-muted">Bill To:</h5>
          <div className="template4-box">
            <p className="mb-1 fw-bold">{data.billingName}</p>
            <p className="mb-1">{data.billingAddress}</p>
            <p className="mb-0">Phone: {data.billingPhone}</p>
          </div>
        </div>
        {data.shippingName && (
          <div className="col-md-6">
            <h5 className="text-muted">Ship To:</h5>
            <div className="template4-box">
              <p className="mb-1 fw-bold">{data.shippingName}</p>
              <p className="mb-1">{data.shippingAddress}</p>
              <p className="mb-0">Phone: {data.shippingPhone}</p>
            </div>
          </div>
        )}
      </div>

      {/* Items Table */}
      <div className="table-responsive mb-4">
        <table className="table template4-table">
          <thead>
            <tr>
              <th>Description</th>
              <th className="text-center">Qty</th>
              <th className="text-end">Rate</th>
              <th className="text-end">Amount</th>
            </tr>
          </thead>
          <tbody>
            {data.items.map((item, i) => (
              <tr key={i}>
                <td>{item.name}</td>
                <td className="text-center">{item.qty}</td>
                <td className="text-end">₹{Number(item.amount).toFixed(2)}</td>
                <td className="text-end">₹{(Number(item.qty) * Number(item.amount)).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Totals */}
      <div className="template4-totals text-end mb-4">
        <p><strong>Subtotal:</strong> ₹{data.subTotal.toFixed(2)}</p>
        {data.tax > 0 && (
          <p><strong>Tax ({data.tax}%):</strong> ₹{data.taxAmount.toFixed(2)}</p>
        )}
        <p className="fs-5 fw-bold text-highlight">Total: ₹{data.total.toFixed(2)}</p>
      </div>

      {/* Bank Details */}
      {(data.accountName || data.accountNumber || data.accountIfscCode) && (
        <div className="template4-bank mb-4">
          <h5 className="text-muted">Bank Details</h5>
          {data.accountName && <p>Account Holder: {data.accountName}</p>}
          {data.accountNumber && <p>Account Number: {data.accountNumber}</p>}
          {data.accountIfscCode && <p>IFSC Code: {data.accountIfscCode}</p>}
        </div>
      )}

      {/* Notes */}
      {data.notes && (
        <div className="template4-notes">
          <h5 className="text-muted">Remarks</h5>
          <p>{data.notes}</p>
        </div>
      )}
    </div>
  );
};

export default Template4;