import React from "react";
import { InputBase } from "../base/input/input";
import { NativeSelect } from "../base/select/select-native";
import { InputGroup } from "../base/input/input-group";

interface LeadingTrailingInputProps {
  label?: string;
  hint?: string;
  tooltip?: string;
  prefix?: string;
  placeholder?: string;
  type?: string;
  isRequired?: boolean;
  trailingOptions?: { value: string; label: string }[];
  id?: string;
}

const LeadingTrailingInput: React.FC<LeadingTrailingInputProps> = ({
  label,
  hint,
  tooltip,
  prefix,
  placeholder,
  type = "text",
  isRequired = false,
  trailingOptions,
  id
}) => {
  return (
    <InputGroup
      id={id}
      isRequired={isRequired}
      prefix={prefix}
      label={label}
      hint={hint}
      trailingAddon={
        trailingOptions && trailingOptions.length > 0 ? (
          <NativeSelect
            aria-label={label}
            options={trailingOptions}
          />
        ) : undefined
      }
    >
      <InputBase type={type} placeholder={placeholder} tooltip={tooltip} />
    </InputGroup>
  );
};

export default LeadingTrailingInput;
