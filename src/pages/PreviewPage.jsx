import React, { useContext, useEffect, useRef, useState } from "react";
import { templates } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import InvoicePreview from "../components/InvoicePreview";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {
  LuDiamondPercent,
  LuLoaderCircle,
  LuLoaderPinwheel,
} from "react-icons/lu";
import {
  deleteInvoice,
  saveInvoice,
  sendInvoice,
} from "../services/InvoiceService";
import html2canvas from "html2canvas";
import { uploadInvoiceThumbnail } from "../services/CloudinaryService";
import DeleteConfirmationModal from "../components/modals/DeleteConfirmationModal";
import { generatePdfFromElement } from "../util/pdfUtils";
import { Loader2Icon, LoaderPinwheel, Users } from "lucide-react";
import { BiLoaderCircle } from "react-icons/bi";
import { useAuth, useUser } from "@clerk/clerk-react";

const PreviewPage = () => {
  const previewRef = useRef();
  const { selectedTemplate, invoiceData, setSelectedTemplate, baseURL } =
    useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [customerEmail, setCustomerEmail] = useState("");
  const [emailing, setEmailing] = useState(false);
  const {getToken} = useAuth();
  const {user} = useUser();

  const handleSaveAndExit = async () => {
    try {
      setLoading(true);
      // TODO : create thumbnail url -> DONE
      const canvas = await html2canvas(previewRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#fff",
        scrollY: -window.scrollY,
      });
      const imageData = canvas.toDataURL("image/png");
      const thumbnailUrl = await uploadInvoiceThumbnail(imageData);

      const payload = {
        ...invoiceData,
        clerkId: user.id,
        thumbnailUrl,
        template: selectedTemplate,
      };
      const token = await getToken();
      const response = await saveInvoice(baseURL, payload, token);
      if (response.status === 200) {
        toast.success("Invoice saved successfully");
        navigate("/dashboard");
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to save the Invoice", error.message);
    } finally {
      setLoading(false);
    }
  };

  // const handleDelete = async () => {
  //   try {
  //     const response = await deleteInvoice(baseURL, invoiceData.id);
  //     if (response.status === 204) {
  //       toast.success("Invoice deleted successfully");
  //       navigate("/dashboard");
  //     } else {
  //       toast.error("Unable to delete invoice");
  //     }
  //   } catch (error) {
  //     toast.error("Failed to delete invoice", error.message);
  //   }
  // };

  const confirmDelete = async () => {
    try {
      const token = await getToken();
      const response = await deleteInvoice(baseURL, invoiceData.id, token);
      if (response.status === 204) {
        toast.success("Invoice deleted successfully");
        navigate("/dashboard");
      } else {
        toast.error("Unable to delete invoice");
      }
    } catch (error) {
      toast.error("Failed to delete invoice", error.message);
    } finally {
      setShowDeleteModal(false);
    }
  };

  const handleDownloadPdf = async () => {
    if (!previewRef.current) return;

    try {
      setDownloading(true);
      // Format current date as YYYY-MM-DD
      const now = new Date();
      const formattedDate = now.toISOString().split("T")[0];
      await generatePdfFromElement(
        previewRef.current,
        `invoice_${formattedDate}.pdf`
      );
    } catch (error) {
      toast.error("Failed to generate invoice", error.message);
    } finally {
      setDownloading(false);
    }
  };

  const handleSendEmail = async () => {
    if (!previewRef.current || !customerEmail) {
      return toast.error("Please enter a valid email and try again!");
    }
    try {
      setEmailing(true);
      const date = new Date();
      const formattedDate = date.toISOString().split("T")[0];
      const pdfBlob = await generatePdfFromElement(
        previewRef.current,
        `invoice_${formattedDate}.pdf`,
        true
      );
      const formData = new FormData();
      formData.append("file", pdfBlob, `invoice_${formattedDate}.pdf`);
      formData.append("email", customerEmail);

      const token = await getToken();
      const response = await sendInvoice(baseURL, formData, token);
      if (response.status === 200) {
        toast.success("Email sent successfully");
        setShowModal(false);
        setCustomerEmail("");
      } else {
        toast.error("Failed to send email");
      }
    } catch (error) {
      toast.error("Failed to send email", error.message);
    } finally {
      setEmailing(false);
    }
  };

  useEffect(() => {
    if(!invoiceData || !invoiceData.items?.length) {
      toast.error("Invoice data is missing");
      navigate("/dashboard");
    }
  },[invoiceData, navigate]);

  return (
    <>
      <div className="previewPage container-fluid d-flex flex-column p-3 min-vh-100">
        {/* Action buttons */}
        <div className="d-flex flex-column align-items-center mb-4 gap-3">
          {/* List of template buttons */}
          <div className="d-flex img-fluid gap-3 flex-wrap justify-content-center">
            {templates.map(({ id, label }) => (
              <button
                key={id}
                style={{ minWidth: "100px", height: "38px" }}
                onClick={() => setSelectedTemplate(id)}
                className={`btn btn-sm border-2 shadow-sm p-2 ${
                  selectedTemplate === id
                    ? "btn-warning"
                    : "btn-outline-secondary"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          {/* List of action buttons */}
          <div className="d-flex flex-wrap justify-content-center gap-2">
            <button
              className="btn btn-primary d-flex align-items-center justify-content-center"
              onClick={handleSaveAndExit}
              disabled={loading}
            >
              {loading && (
                <LuLoaderCircle className="me-2 spin-animation" size={18} />
              )}
              {loading ? "Saving..." : "Save and Exit"}
            </button>
            {invoiceData.id && (
              <button
                className="btn btn-danger d-flex align-items-center justify-content-center"
                // onClick={handleDelete}
                onClick={() => setShowDeleteModal(true)}
              >
                Delete Invoice
              </button>
            )}
            <button
              className="btn btn-secondary d-flex align-items-center justify-content-center"
              onClick={() => navigate("/dashboard")}
            >
              Back to Dashboard
            </button>
            <button
              className="btn btn-info d-flex align-items-center justify-content-center"
              onClick={() => setShowModal(true)}
            >
              Send Email
            </button>
            <button
              className="btn btn-success d-flex align-items-center justify-content-center"
              disabled={loading}
              onClick={handleDownloadPdf}
            >
              {downloading && (
                <BiLoaderCircle className="me-2 spin-animation" size={18} />
              )}
              {downloading ? "Downloading..." : "Download PDF"}
            </button>
          </div>
        </div>

        {/* Display the invoice preview */}
        <div className="flex-grow-1 overflow-auto d-flex justify-content-center align-items-start bg-light py-3">
          <div ref={previewRef} className="invoice-preview">
            <InvoicePreview
              invoiceData={invoiceData}
              template={selectedTemplate}
            />
          </div>
        </div>

        {showModal && (
          <div
            className="modal d-block"
            tabIndex={-1}
            role="dialog"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Send Invoice</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setShowModal(false)}
                  ></button>
                </div>
                <div className="modal-body">
                  <input
                    type="email"
                    placeholder="Customer email"
                    className="form-control"
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    value={customerEmail}
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleSendEmail}
                    disabled={emailing}
                  >
                    {emailing ? "Sending..." : "Send"}
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <DeleteConfirmationModal
        show={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={confirmDelete}
      />
    </>
  );
};

export default PreviewPage;
