import { ChangeEvent } from "react";

export interface SearchFieldProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  onReset: () => void;
}
