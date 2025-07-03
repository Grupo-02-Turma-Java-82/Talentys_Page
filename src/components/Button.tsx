import { SpinnerIcon } from "@phosphor-icons/react";
import clsx from "clsx";
import type { ComponentProps } from "react";

type Props = ComponentProps<"button"> & { isLoading?: boolean };

export function Button({
  children,
  isLoading,
  className,
  type = "button",
  ...rest
}: Props) {
  return (
    <button
      disabled={isLoading}
      type={type}
      className={clsx(
        "flex items-center justify-center bg-bittersweet rounded-lg text-gray-50 cursor-pointer hover:bg-red-600 transition-colors ease-in disabled:opacity-50 h-15 w-[13.375rem] text-base font-bold",
        { "cursor-progress": isLoading },
        className
      )}
      {...rest}
    >
      {isLoading ? (
        <SpinnerIcon size={30} className="animate-spin" />
      ) : (
        children
      )}
    </button>
  );
}
