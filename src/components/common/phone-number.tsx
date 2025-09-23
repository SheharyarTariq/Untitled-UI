import React from "react";
import { InputBase } from "@/components/base/input/input";
import { InputGroup } from "@/components/base/input/input-group";
import { NativeSelect } from "@/components/base/select/select-native";

interface PhoneNumberProps {
  id?: string
  className?: string;
}

const PhoneNumber:React.FC<PhoneNumberProps> = ({id}) => {
    return (
        <InputGroup
            id={id}
            isRequired
            leadingAddon={
                <NativeSelect
                    aria-label="Country"
                    options={[
                        { value: "US", label: "US" },
                        { value: "CA", label: "CA" },
                        { value: "EU", label: "EU" },
                    ]}
                />
            }
        >
            <InputBase type="tel" placeholder="+1 (555) 000-0000" />
        </InputGroup>
    );
};

export default PhoneNumber;
