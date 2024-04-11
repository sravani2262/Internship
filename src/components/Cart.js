import React, { useState } from 'react';
import './Cart.css';

export default function Cart() {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [address, setAddress] = useState('');

  const handleCheckout = () => {
    setShowAddressModal(true);
  };

  const handleDelete = () => {
    setShowDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
  };

  const handleCloseAddressModal = () => {
    setShowAddressModal(false);
  };

  const handleConfirmDelete = () => {
    // Perform delete operation here
    setShowDeleteModal(false);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSaveAddress = () => {
    // Implement save address functionality
    setShowAddressModal(false);
  };

  const handleCancelCheckout = () => {
    setShowAddressModal(false);
  };

  return (
    <div className="main-container">
      <div className="cart-container">
        <div className="checkout-container">
          <p className="price">TOTAL: ₹2000</p>
          <button className="checkout-button" onClick={handleCheckout}>
            CHECKOUT
          </button>
        </div>
        <div className="question-container">
          <h1 className="price">QUESTION TITLE</h1>
          <p>
            <span className="price">MODULE:</span> CRASH COURSE
          </p>
          <p>
            <span className="price">DATE:</span> 02/02/24
          </p>
          <div className="button-container">
            <div className="buttons">
              <button className="checkout-button mb-3">1</button>
              <button className="checkout-button" onClick={handleDelete}>DELETE</button>
            </div>
          </div>
        </div>
      </div>
      {showAddressModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseAddressModal}>&times;</span>
            <p>Please provide your address:</p>
            <input
              type="text"
              value={address}
              onChange={handleAddressChange}
              className="address-input"
            />
            <div className="button-container">
              <button className="modal-button cancel" onClick={handleCancelCheckout}>Cancel</button>
              <button className="modal-button save" onClick={handleSaveAddress}>Save</button>
            </div>
          </div>
        </div>
      )}
      {showDeleteModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseDeleteModal}>&times;</span>
            <p>Are you sure you want to delete this item from the cart?</p>
            <div className="button-container">
              <button className="modal-button cancel" onClick={handleCloseDeleteModal}>Cancel</button>
              <button className="modal-button delete" onClick={handleConfirmDelete}>Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
