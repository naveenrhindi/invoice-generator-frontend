import React from "react";

const DeleteConfirmationModal = ({ show, onClose, onConfirm }) => {
  return (
    <div
      className={`modal fade ${show ? "show d-block custom-modal" : ""}`}
      tabIndex="-1"
      style={{
        backdropFilter: "blur(4px)",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
      }}
      role="dialog"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content border-0 shadow-lg animate__animated animate__fadeInDown">
          <div className="modal-header border-0 bg-danger text-white">
            <div className="d-flex align-items-center">
              <span className="me-2 fs-3">⚠️</span>
              <h5 className="modal-title mb-0">Delete Confirmation</h5>
            </div>
            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body text-center">
            <p className="fs-5 mb-3">
              Are you absolutely sure you want to{" "}
              <strong>delete this invoice</strong>?
            </p>
            <p className="text-muted mb-0">
              This action <u>cannot</u> be undone.
            </p>
          </div>
          <div className="modal-footer border-0 justify-content-center">
            <button
              type="button"
              className="btn btn-secondary px-4"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-danger px-4"
              onClick={onConfirm}
            >
              Yes, Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
