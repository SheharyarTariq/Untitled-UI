import ClientInsurerBroker from "@/components/claim/client-insurer-broker";
import PanelSolicitorDetails from "@/components/claim/panel-solicitor-details";
import { useState } from "react";

const GeneralDetails = () => <div>General Details Form</div>;
const ReferrerDetails = () => <div>Referrer Details Form</div>;
const ClientDetails = () => <div>Client Details Form</div>;

export const HomeScreen = () => {
  const [activeForm, setActiveForm] = useState("General Details");

  const menuItems = [
    "General Details",
    "Referrer Details",
    "Client Details",
    "Accident Details",
    "Vehicle Details",
    "Vehicle Owner",
    "Engineer Details",
    "Client Insurer & Broker",
    "Panel Solicitor Details",
    "Storage & Recovery",
    "Vehicle Damage Details",
    "Third Party & Insurer",
  ];

  const renderForm = () => {
    switch (activeForm) {
      case "General Details":
        return <GeneralDetails />;
      case "Referrer Details":
        return <ReferrerDetails />;
      case "Client Details":
        return <ClientDetails />;
      case "Client Insurer & Broker":
        return <ClientInsurerBroker />;
      case "Panel Solicitor Details":
        return <PanelSolicitorDetails />;
      default:
        return <div>{activeForm} Form Coming Soon...</div>;
    }
  };

  return (
    <div className="flex h-screen md:px-28">
      {/* Sidebar */}
      <div className="w-64 p-4 hidden md:block">
        {menuItems.map((item) => (
          <button
            key={item}
            onClick={() => setActiveForm(item)}
            className={`w-full text-left font-sm px-3 py-1 hover:cursor-pointer rounded 
              ${activeForm === item ? "border-l-4 border-l-brand-solid text-purple-800 font-semibold" : "text-gray-500 "}`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Main content */}
      <div className="flex-1 p-6 bg-white">
        {renderForm()}
      </div>
    </div>
  );
};
