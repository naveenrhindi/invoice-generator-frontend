import "./Template3.css";

const Template3 = ({ data }) => {
  return (
    <div className="template3 border rounded mx-auto my-4 px-sm-4 py-3 w-100">
      {/* Header */}
      <div className="template3-header">
        <div className="template3-logo">
          {data.companyLogo && (
            <div className="mb-2">
              <img src={data.companyLogo} alt="Company Logo" />
            </div>
          )}
        </div>
        <div className="template3-invoice-title">
          <div>{data.companyName}</div>
          <div className="fs-6">{data.companyAddress}</div>
          <div className="fs-6">Phone: {data.companyPhone}</div>
          <h1 className="mt-3">INVOICE</h1>
        </div>
      </div>

      {/* Invoice Info */}
      <div className="row">
        <div className="col-md-6 template3-box">
          <h5>Invoice Details</h5>
          <p>Invoice #: {data.invoiceNumber}</p>
          <p>Invoice Date: {data.invoiceDate}</p>
          <p>Due Date: {data.paymentDate}</p>
        </div>
        <div className="col-md-6 template3-box">
          <h5>Billed To</h5>
          <p>{data.billingName}</p>
          <p>{data.billingAddress}</p>
          <p>Phone: {data.billingPhone}</p>
        </div>
      </div>

      {data.shippingName && (
        <div className="template3-box">
          <h5>Shipped To</h5>
          <p>{data.shippingName}</p>
          <p>{data.shippingAddress}</p>
          <p>Phone: {data.shippingPhone}</p>
        </div>
      )}

      {/* Items Table */}
      <div className="table-responsive">
        <table className="template3-table">
          <thead>
            <tr>
              <th>Item Description</th>
              <th className="text-center">Qty</th>
              <th className="text-end">Rate</th>
              <th className="text-end">Amount</th>
            </tr>
          </thead>
          <tbody>
            {data.items.map((item, idx) => (
              <tr key={idx}>
                <td>{item.name}</td>
                <td className="text-center">{item.qty}</td>
                <td className="text-end">₹{Number(item.amount).toFixed(2)}</td>
                <td className="text-end">
                  ₹{(Number(item.qty) * Number(item.amount)).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Totals */}
      <div className="template3-totals">
        <div>Sub Total: ₹{data.subTotal.toFixed(2)}</div>
        {data.tax > 0 && (
          <div>
            Tax ({data.tax}%): ₹{data.taxAmount.toFixed(2)}
          </div>
        )}
        <div>Total: ₹{data.total.toFixed(2)}</div>
      </div>

      {/* Bank Info */}
      {(data.accountName || data.accountNumber || data.accountIfscCode) && (
        <div className="template3-bank">
          <h5 className="text-primary">Bank Details</h5>
          {data.accountName && <p>Account Holder: {data.accountName}</p>}
          {data.accountNumber && <p>Account Number: {data.accountNumber}</p>}
          {data.accountIfscCode && (
            <p>IFSC/Branch Code: {data.accountIfscCode}</p>
          )}
        </div>
      )}

      {/* Notes */}
      {data.notes && (
        <div className="template3-note">
          <h5 className="text-primary">Remarks</h5>
          <p>{data.notes}</p>
        </div>
      )}
    </div>
  );
};

export default Template3;
