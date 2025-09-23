import React from "react";
import { Mail01 } from "@untitledui/icons/Mail01";
import Input from "../common/input";
import PhoneNumber from "../common/phone-number";
import TextField from "../common/text-field";
import Label from "../common/label";
import TopRightIcon from "../common/top-right-icon";

const PanelSolicitorDetails = () => {
    return (
      <div>
        <h2 className="mb-2 text-xl font-semibold">Panel Solicitor Details</h2>
        <p className="text-xs text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod slere magna aliqua.</p>
        <div className="my-4 border-t border-secondary" />

        <form className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-3 lg:col-span-1">
              <Label htmlFor="companyName">Company Name</Label>
            </div>
            <div className="col-span-3 lg:col-span-2">
              <Input id="companyName" placeholder="stack360..." />
            </div>

            <div className="col-span-3 lg:col-span-1">
              <Label htmlFor="address">Address</Label>
            </div>
            <div className="col-span-3 lg:col-span-2">
              <TextField id="address" placeholder="Address here" />
            </div>

            <div className="col-span-3 lg:col-span-1">
              <Label htmlFor="postcode">Postcode</Label>
            </div>
            <div className="col-span-3 lg:col-span-2">
              <Input id="postcode" placeholder="KT34 3SR" />
            </div>

            <div className="col-span-3 lg:col-span-1">
              <Label htmlFor="telephone">Telephone Main</Label>
            </div>
            <div className="col-span-3 lg:col-span-2">
              <PhoneNumber id="telephone" />
            </div>

            <div className="col-span-3 lg:col-span-1">
              <Label htmlFor="email">Email</Label>
            </div>
            <div className="col-span-3 lg:col-span-2">
              <Input id="email" icon={Mail01} placeholder="olivia@example" />
            </div>

            <div className="col-span-3 lg:col-span-1">
              <Label htmlFor="reference">Reference</Label>
            </div>
            <div className="col-span-3 lg:col-span-2">
              <Input id="reference" placeholder="A000000" />
            </div>

            <div className="col-span-3 lg:col-span-1">
              <Label htmlFor="recommendationDate">Recommendation Sent On</Label>
            </div>
            <div className="col-span-3 lg:col-span-2">
              <Input id="recommendationDate" placeholder="12-03-2025" />
            </div>

            <div className="col-span-3 lg:col-span-1">
              <Label htmlFor="note">Note</Label>
            </div>
            <div className="col-span-3 lg:col-span-2">
              <TextField id="note" placeholder="Type here" />
            </div>

            <div className="col-span-3 lg:col-span-1" />
            <div className="col-span-3 justify-between lg:col-span-2 lg:flex">
              <div className="flex gap-1 text-xs text-purple-800 hover:cursor-pointer hover:underline">
                <p className="text-sm">Send signed documents to Solicitor</p>
                <TopRightIcon />
              </div>

              <div className="flex gap-1 text-xs text-purple-800 hover:cursor-pointer hover:underline">
                <p className="text-sm">Send signed documents to Solicitor</p>
                <TopRightIcon />
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-secondary pb-8" />
        </form>

      </div>
    );
};

export default PanelSolicitorDetails;
