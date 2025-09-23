import React from 'react'
import { Button } from '../base/buttons/button'
import BackIcon from '../common/back-icon'
import Divider from '../common/divider'

const NewClaim = () => {
  return (
      <div className="md:px-28 px-4">
        <div className="flex text-gray-500 items-center text-xs mt-3">
          <BackIcon />
          Back to queue
        </div>

        <div className="mt-4 flex items-center justify-between">
          <h2 className="md:text-2xl sm:text-xl text-lg font-bold">Add New Claim</h2>
          <div className="flex md:gap-2 gap-1">
            <Button color="secondary" size="sm">Discard</Button>
            <Button color="primary" size="sm">Save Changes</Button>
          </div>
        </div>
        <Divider />
      </div>
  )
}

export default NewClaim