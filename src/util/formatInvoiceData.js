export const formatInvoiceData = (invoiceData) => {
    const {
        title,
        company = {},
        invoice = {},
        account = {},
        billing = {},
        shipping = {},
        tax = 0,
        notes = "",
        items = [],
        logo = ""
    } = invoiceData || {};

    const currencySymbol = "₹";
    const subTotal = items.reduce((acc,item) => acc + (item.qty * item.amount), 0);
    const taxAmount = subTotal * (tax/100);
    const total = subTotal + taxAmount;

    return {
        title,
        companyName : company.name,
        companyAddress : company.address,
        companyPhone : company.number,
        companyLogo : logo,

        invoiceNumber : invoice.number,
        invoiceDate : invoice.date,
        paymentDate : invoice.dueDate,

        accountName : account.name,
        accountNumber : account.phone,
        accountIfscCode : account.ifscCode,

        billingName : billing.name,
        billingPhone : billing.phone,
        billingAddress : billing.address,

        shippingName : shipping.name,
        shippingPhone : shipping.phone,
        shippingAddress : shipping.address,

        currencySymbol,
        tax,
        items,
        notes,
        subTotal,
        taxAmount,
        total
    };
};

export const formatDate = (dateStr) => {
    if(!dateStr) return "N/A";
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-GB", {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    })
};  

