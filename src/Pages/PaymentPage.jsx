import React from "react";

const PaymentPage = () => {
  const handleSendReceipt = () => {
  
    const phoneNumber = "2349037544253"; 

    const message = "Hello! I've made my payment for the voting.";

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl max-w-md w-full p-8 text-center border border-gray-200">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Payment Information
        </h1>
        <p className="text-gray-600 mb-6">
          Please send your voting payment to the account below 👇
        </p>

        <div className="bg-blue-50 p-4 rounded-xl border border-blue-200 text-left mb-6">
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Account Name:</span>{" "}
            Doreen Samuel Kunle (Opay)
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Account Number:</span>{" "}
            <span className="text-lg font-mono">9037544253</span>
          </p>
        </div>

        <p className="text-sm text-gray-500 mb-4">
          After making payment, please send your receipt or screenshot to us on
          WhatsApp using the button below.
        </p>

        <button
          onClick={handleSendReceipt}
          className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition duration-200"
        >
          Send Receipt on WhatsApp
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
