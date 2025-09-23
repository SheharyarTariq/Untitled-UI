import React from 'react'
import Label from '../common/label'
import Input from '../common/input'
import TextField from '../common/text-field'
import PhoneNumber from '../common/phone-number'
import { Mail01 } from '@untitledui/icons/Mail01'
import { Button } from '../base/buttons/button'
import { SelectField } from '../common/select'
import LeadingTrailingInput from '../common/leading-trailing-input'
import CheckBox from '../common/check-box'
import { teamMembers } from './constants'

const ClientInsurerBroker = () => {
  return (
      <div>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col">
            <h2 className="mb-2 lg:text-xl text-lg font-semibold">Client Insurance Details</h2>
            <p className="text-xs text-gray-600">Lorem ipsum dolor sit amet.</p>
          </div>
          <Button color="secondary" size="sm">Vehicle Owner</Button>
        </div>
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
              <Label htmlFor="policyNumber">Policy Number</Label>
            </div>
            <div className="col-span-3 lg:col-span-2">
              <Input id="policyNumber" placeholder="Type here..." />
            </div>

          <div className="mt-2 border-t col-span-3 border-secondary pb-2" />
            <div className="col-span-3">
              <h2 className="mb-2 text-xl font-semibold">Cover Details</h2>
                <p className="text-xs text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod slere magna aliqua.</p>
              <div className="mt-8 border-t border-secondary" />
            </div>

            <div className="col-span-3 lg:col-span-1">
              <Label htmlFor="policyHolder">Policy Holder</Label>
            </div>
            <div className="col-span-3 lg:col-span-2">
              <Input id="policyHolder" placeholder="Type here..." />
            </div>

            <div className="col-span-3 lg:col-span-1">
              <Label htmlFor="policyType">Type of Policy</Label>
            </div>
            <div className=" relative col-span-3 lg:col-span-2">
              <SelectField
                id="policyType"
                placeholder="Select team member"
                items={teamMembers}
                isRequired
              />
            </div>

            <div className="col-span-3 lg:col-span-1">
              <Label htmlFor="additionalDrivers">Additional Drivers</Label>
            </div>
            <div className="col-span-3 lg:col-span-2">
              <Input id="additionalDrivers" placeholder="Text here...." />
            </div>

            <div className="col-span-3 lg:col-span-1">
              <Label htmlFor="policyVehicles">Vehicle on Policy</Label>
            </div>
            <div className="col-span-3 lg:col-span-2">
              <Input id="policyVehicles" placeholder="Text here...." />
            </div>

            <div className="col-span-3 lg:col-span-1">
              <Label htmlFor="vehicleUse">Vehicles in Use</Label>
            </div>
            <div className="col-span-3 lg:col-span-2">
              <Input id="vehicleUse" placeholder="Text here...." />
            </div>

            <div className="col-span-3 lg:col-span-1">
              <Label htmlFor="policyCoverLevel">Policy Cover Level</Label>
            </div>
            <div className=" relative col-span-3 lg:col-span-2">
              <SelectField
                id="policyCoverLevel"
                placeholder="Select team member"
                items={teamMembers}
                isRequired
              />
            </div>

            <div className="col-span-3 lg:col-span-1">
              <Label htmlFor="policyCover">Policy Cover Excess</Label>
            </div>
            <div className="col-span-3 lg:col-span-2">
              <LeadingTrailingInput
                id="policyCover"
                prefix="£"
                placeholder="0.00"
                type="number"
                isRequired
                trailingOptions={[
                  { value: "GBP", label: "GBP" },
                ]}
              />

            </div>



            <div className="col-span-3 lg:col-span-1 hidden lg:block" />
            <div className="col-span-3 gap-2 lg:col-span-2 lg:flex">
              <div>
                <CheckBox
                  label="SDP"
                  size="sm"
                />
              </div>
              <div>
                <CheckBox
                  label="Private Hire"
                  size="sm"
                />
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-secondary pb-8" />
        </form>

      </div>
  )
}

export default ClientInsurerBroker