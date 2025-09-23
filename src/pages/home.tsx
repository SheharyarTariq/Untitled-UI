import ClientInsurerBroker from "@/components/claim/client-insurer-broker";
import PanelSolicitorDetails from "@/components/claim/panel-solicitor-details";
import { useState } from "react";
import { menuItems } from "./constants";
import NewClaim from "@/components/claim/new-claim";

const GeneralDetails = () => <div>General Details Form</div>;
const ReferrerDetails = () => <div>Referrer Details Form</div>;
const ClientDetails = () => <div>Client Details Form</div>;

export const HomeScreen = () => {
  const [activeForm, setActiveForm] = useState("General Details");

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
    <>
      <NewClaim />
      <div className="w-full flex md:hidden overflow-auto px-4">
        {menuItems.map((item) => (
          <button
            key={item}
            onClick={() => setActiveForm(item)}
            className={`font-sm px-3 py-1 rounded whitespace-nowrap
              ${activeForm === item ? "border border-brand-solid text-purple-800 font-semibold" : "text-gray-500 "}`}
          >
            {item}
          </button>
        ))}
      </div>
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
    </>
  );
};
