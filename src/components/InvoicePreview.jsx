import React, { forwardRef } from 'react'
import { formatInvoiceData } from '../util/FormatInvoiceData';
import Template1 from '../templates/Template1/Template1';
import { templateComponents } from '../util/InvoiceTemplates';

const InvoicePreview = forwardRef(({invoiceData,template}, ref) => {

    const formattedData = formatInvoiceData(invoiceData);

    // const renderTemplate = () => {
    //     switch(template) {
    //         case "template1" : return <Template1 data={formattedData} />;
    //         case "template2" : return <Template2 data={formattedData} />;
    //         default : return <Template1 data={formattedData} />;
    //     }
    // };

    const SelectedTemplate = templateComponents[template] || templateComponents["template1"];

    return (
        <div ref={ref} className='invoice-preview container px-2 py-2 overflow-x-auto'>
            {/* {renderTemplate()} */}
            <SelectedTemplate data={formattedData} />
        </div>
    )
});

export default InvoicePreview;