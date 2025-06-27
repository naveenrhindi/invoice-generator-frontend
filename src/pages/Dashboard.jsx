import React, { useContext, useEffect, useState } from "react";
import { AppContext, initialInvoiceData } from "../context/AppContext";
import toast from "react-hot-toast";
import { getAllInvoices } from "../services/InvoiceService";
import {
  BatteryPlus,
  Plus,
  PlusCircle,
  PlusCircleIcon,
  PlusIcon,
  PlusSquare,
  PlusSquareIcon,
} from "lucide-react";
import {
  BiBellPlus,
  BiPlus,
  BiPlusCircle,
  BiPlusMedical,
} from "react-icons/bi";
import {
  BsPlus,
  BsPlusCircle,
  BsPlusCircleDotted,
  BsPlusCircleFill,
  BsPlusSlashMinus,
  BsPlusSquare,
  BsPlusSquareFill,
} from "react-icons/bs";
import { GoPlusCircle } from "react-icons/go";
import { formatDate } from "../util/FormatInvoiceData";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";

const Dashboard = () => {
  const [invoices, setInvoices] = useState([]);
  const { baseURL, setInvoiceData, setSelectedTemplate, setInvoiceTitle } =
    useContext(AppContext);
  const navigate = useNavigate();
  const {getToken} = useAuth();

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const token = await getToken();
        const response = await getAllInvoices(baseURL, token);
        setInvoices(response.data);
      } catch (error) {
        toast.error("Failed to load invoices", error.message);
      }
    };
    fetchInvoices();
  }, [baseURL]);

  const handleViewClick = (invoice) => {
    setInvoiceData(invoice);
    setInvoiceTitle(invoice.title || "New Invoice");
    setSelectedTemplate(invoice.template || "template1");
    navigate("/preview");
  };

  const handleCreateNew = () => {
    // reset to initial state from context
    const newInvoice = JSON.parse(JSON.stringify(initialInvoiceData)); // Deep copy
    setInvoiceData(newInvoice);
    setSelectedTemplate("template1");
    setInvoiceTitle("New Invoice");

    navigate("/generate");
  }

  return (
    <div className="container py-5">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4">
        {/* Create New Invoice Card */}
        <div className="col">
          <div
            className="card h-100 d-flex justify-content-center align-items-center border border-2 border-light shadow"
            style={{ minHeight: "270px" }}
            
          >
            <BsPlusSquare size={48} onClick={handleCreateNew} className="cursor-pointer" />
            <p className="mt-3 fw-medium">Create New Invoice</p>
          </div>
        </div>

        {/* Render the existing invoices */}
        {invoices.map((invoice, idx) => (
          <div className="col" key={idx}>
            <div
              className="card h-100 shadow cursor-pointer"
              style={{ minHeight: "270px" }}
              onClick={()=>handleViewClick(invoice)}
            >
              {invoice.thumbnailUrl && (
                <img
                  src={invoice.thumbnailUrl}
                  alt="Invoice Thumbnail"
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
              )}
              <div className="card-body">
                <h6 className="card-title mb-1">{invoice.title}</h6>
                <small className="text-muted">
                  Last Updated: {formatDate(invoice.createdAt)}
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
