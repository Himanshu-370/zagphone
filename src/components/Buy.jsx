import React, { useState } from "react";
import lock from "../assets/lock.svg";
import code from "../assets/code.svg";
import Modal from "./Modal";

function Buy() {
  // State variables
  const [cardNumber, setCardNumber] = useState("");
  const [cardType, setCardType] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [showModal, setShowModal] = useState(false);

  // function to handle card number input
  const handleCardNumberChange = (e) => {
    const { value } = e.target;
    // Replace all non-digit characters with empty string
    const formattedValue = value.replace(/\D/g, "").replace(/(.{4})/g, "$1 ");

    // Update the state with new value
    setCardNumber(formattedValue.trim());

    // Set card type based on card number
    const visaPattern = /^4/;
    const mastercardPattern = /^5[1-5]/;
    const amexPattern = /^3[47]/;
    const rupayPattern = /^6/;

    // Check card type
    if (visaPattern.test(value)) {
      setCardType("Visa");
    } else if (mastercardPattern.test(value)) {
      setCardType("Mastercard");
    } else if (amexPattern.test(value)) {
      setCardType("American Express");
    } else if (rupayPattern.test(value)) {
      setCardType("Rupay");
    } else {
      setCardType("");
    }
  };

  // function to handle security code input
  const handleSecurityCodeChange = (e) => {
    const { value } = e.target;
    const formattedValue = value.replace(/\D/g, "").slice(0, 3);

    setSecurityCode(formattedValue);
  };

  // function to handle expiration date input
  const handleExpirationDateChange = (e) => {
    const { value } = e.target;

    // Remove all non-digit characters
    const formattedValue = value.replace(/[^0-9]/g, "").slice(0, 4);

    // If length is less than or equal to 2, we assume that user is entering month value only
    if (formattedValue.length <= 2) {
      setExpirationDate(formattedValue);
    } else {
      // If length is greater than 2, we assume that user is entering full date (month + year)
      const day = formattedValue.slice(0, 2);
      const month = formattedValue.slice(2, 4);

      // Update the state
      setExpirationDate(`${day}/${month}`);
    }
  };

  // function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    setShowModal(true);
  };

  return (
    <React.Fragment>
      <div className="border absolute bg-pinkbg rounded-2xl mt-8 p-6 text-left">
        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="flex-col items-center justify-between">
            <h3 className="text-md font-medium">Card Number</h3>
            <input
              type="text"
              id="card_number"
              className="bg-white border p-3 mt-2 text-white-900 text-sm rounded-lg focus:ring-blue-500 border-black-500 block w-full bg-slate-100 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 mr-5"
              placeholder="XXXX XXXX XXXX XXXX"
              value={cardNumber}
              onChange={handleCardNumberChange}
              required
              maxLength={19}
            />
            {cardType && <p>Card Type: {cardType}</p>}

            <h3 className="text-md font-medium mt-5">Name on Card</h3>
            <input
              type="text"
              id="card_name"
              className="bg-white border p-3 mt-2 text-white-900 text-sm rounded-lg focus:ring-blue-500 border-black-500 block w-full bg-slate-100 dark:text-black dark:focus:ring-blue-500 dark:border-black-500 mr-5"
              placeholder="Name on Card"
              required
            />

            <div className="flex items-center justify-between gap-3 mt-5">
              <div className="flex-col items-center justify-center">
                <h3 className="text-md font-medium">Expiration Date</h3>
                <input
                  type="text"
                  id="exp_date"
                  className="bg-white border p-3 mt-2 text-white-900 text-sm rounded-lg focus:ring-blue-500 border-black-500 block w-full bg-slate-100 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 mr-5"
                  placeholder="MM/DD"
                  value={expirationDate}
                  onChange={handleExpirationDateChange}
                  required
                  maxLength={5}
                />
              </div>

              <div className="flex-col items-center justify-center">
                <h3 className="text-md font-medium flex items-center gap-2">
                  Security Code <img src={code} width={18} height="auto" alt="Code" />
                </h3>
                <input
                  type="tel"
                  id="card_code"
                  className="bg-white border p-3 mt-2 text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full bg-slate-100 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 mr-5"
                  placeholder="123"
                  value={securityCode}
                  onChange={handleSecurityCodeChange}
                  required
                  maxLength={3}
                />
              </div>
            </div>

            <button
              type="submit"
              className="rounded-lg bg-pink p-3 w-full text-white font-bold mt-5 flex items-center justify-center gap-2"
            >
              <img src={lock} width={18} height="auto" alt="Lock" />
              Pay Now
            </button>
          </div>
        </form>
      </div>
      {showModal && <Modal />} {/* Render the modal based on the state */}
    </React.Fragment>
  );
}

export default Buy;
