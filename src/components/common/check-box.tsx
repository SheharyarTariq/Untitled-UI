import React from "react";
import { Checkbox } from "@/components/base/checkbox/checkbox";

interface CheckBoxProps {
  label: string;
  size?: "sm" | "md";
}

const CheckBox: React.FC<CheckBoxProps> = ({
  label,
  size = "sm",
}) => {
  return (
    <Checkbox
      label={label}
      size={size}
    />
  );
};

export default CheckBox;
