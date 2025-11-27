import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Input from "./assets/components/Input";
import useCurrencyInfo from "./assets/hooks/useCurrencyInfo";

function App() {
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("bdt");
  const [amount, setAmount] = useState();
  console.log(amount);

  const [convertedAmount, setConvertedAmount] = useState(0);

  const CurrencyInfo = useCurrencyInfo(from);
  const options = Object.keys(useCurrencyInfo(from));
  const handleSwap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount)
    
  };

  const handleConvert = () => {
    const rate = Number(CurrencyInfo[to]);
    setConvertedAmount(Number(amount * rate));
  };

  return (
    <>
      <div>
        <h2 className="text-center    items-center text-red-700 font-semibold text-3xl">
          Currency Convertor
        </h2>
        <div className="text-center">
          <div className="rounded border w-[80%] sm:w-[60%] shadow p-3 my-3 mx-auto">
            <div className=" ">
              <Input
                label={"From"}
                className={"mb-2"}
                options={options}
                selectCurrency={from}
                onCurrencyChange={(value) => setFrom(value)}
                onAmountChange={(val) => setAmount(val)}
                amount={amount}
              />
              <button
                className="bg-blue-500 rounded-xl text-white p-2 absolute left-1/2 cursor-pointer -translate-x-1/2 -translate-y-1/2 "
                onClick={handleSwap}
              >
                Swap
              </button>
              <Input
                label={"To"}
                className={"mt-2"}
                options={options}
                selectCurrency={to}
                onCurrencyChange={(vlaue) => setTo(vlaue)}
                inputDisable={true}
                amount={convertedAmount}
              />
            </div>
            <div className=" text-center p-1 mt-3 ">
              <button
                className="p-2 text-white bg-green-500 rounded cursor-pointer"
                onClick={handleConvert}
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
