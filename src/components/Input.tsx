import type React from "react";

type Props = React.ComponentProps<"input"> & {
  legend?: string;
};

export function Input({ legend, type = "text", ...rest }: Props) {
  return (
    <fieldset className="flex flex-1 max-h-20 text-gray-200 focus-within:text-green-100 group">
      {legend && (
        <legend className="block text-sm font-medium mb-1 group-focus-within:text-dark-purple">
          {legend}
        </legend>
      )}

      <input
        type={type}
        className="w-full border border-gray-300 rounded-md px-3 py-2"
        {...rest}
      />
    </fieldset>
  );
}
