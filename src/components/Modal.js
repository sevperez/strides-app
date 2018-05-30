import React from "react";
import PropTypes from "prop-types";

const Modal = ({ handleClose, titleElements, children }) => {
  return (
    <div className="modalCtnr">
      <div className="modal modalMain" tabIndex="-1" role="dialog">
        <div className="modalOverlay" onClick={handleClose}></div>
        <div
          className="modal-dialog modal-lg modalDialog"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-title">
                { titleElements }
              </div>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={handleClose}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              { children }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  titleElements: PropTypes.node,
  children: PropTypes.node,
};
