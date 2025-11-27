import React from "react";
import { useId } from "react";

function Input({
  label,
  className,
  inputDisable,
  selectCurrency,
  onCurrencyChange,
  onAmountChange,
  options = ["usd"],
  amount
}) {
  const inputId = useId();
  const selectId = useId();

  return (
    <div
      className={`border  rounded-2xl p-4 shadow justify-between flex ${className} `}
    >
      <div className="flex flex-col justify-center items-start gap-3">
        <label htmlFor={inputId} className="">
          {label}
        </label>
        <input
          type="number"
          name=""
          id={inputId}
          placeholder="0"
          className=" btn  focus:outline-none"
          disabled={inputDisable}
          value={amount}
          onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
          step="any"
        />
      </div>
      <div className="flex flex-col  gap-3">
        <label htmlFor={selectId}>Currency Type</label>
        <select
          name=""
          value={selectCurrency}
          id={selectId}
          className="text-center py-1 shadow rounded"
          onChange={(e)=> onCurrencyChange&& onCurrencyChange(e.target.value)}
        >
          {options.map((curr, index) => (
            <option key={index} value={curr}>
              {curr.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Input;
