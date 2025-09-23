import React from "react";
import { Select } from "@/components/base/select/select";

interface SelectFieldProps {
  label?: string;
  placeholder?: string;
  items: {
    id: string;
    label: string;
    supportingText?: string;
    isDisabled?: boolean;
    icon?: React.ReactNode;
    avatarUrl?: string;
  }[];
  tooltip?: string;
  hint?: string;
  isRequired?: boolean;
  id?: string;
}

export const SelectField: React.FC<SelectFieldProps> = ({
  label,
  placeholder,
  items,
  id,
  tooltip,
  hint,
  isRequired,
}) => {
  return (
    <Select
      id={id}
      isRequired={isRequired}
      label={label}
      tooltip={tooltip}
      hint={hint}
      placeholder={placeholder}
      items={items}
    >
      {(item) => (
        <Select.Item
          key={item.id}
          id={item.id}
          supportingText={item.supportingText}
          isDisabled={item.isDisabled}
          icon={item.icon}
          avatarUrl={item.avatarUrl}
        >
          {item.label}
        </Select.Item>
      )}
    </Select>
  );
};
