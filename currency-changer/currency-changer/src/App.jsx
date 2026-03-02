import { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/UsecurrencyInfo'


function App() {
    const [amount, setAmount] = useState(0);
    const [to, setTo] = useState("INR"); // default to INR
    const [from, setFrom] = useState("USD"); // default to USD
    const [convertedAmount, setConvertedAmount] = useState(0);


// Get currency info for the selected 'from' currency
const currencyData = useCurrencyInfo(from);
// List of standard fiat currency codes (ISO 4217)
const fiatCurrencies = [
    "USD", "INR", "EUR", "GBP", "JPY", "AUD", "CAD", "CHF", "CNY", "SEK", "NZD", "MXN", "SGD", "HKD", "NOK", "KRW", "TRY", "RUB", "BRL", "ZAR", "DKK", "PLN", "TWD", "THB", "MYR", "IDR", "CZK", "HUF", "ILS", "CLP", "PHP", "AED", "COP", "SAR", "RON", "BGN", "HRK", "ISK", "LTL", "LVL", "MTL", "ROL", "SKK", "TRL", "EEK", "KZT", "UAH", "VND", "PKR", "EGP", "NGN", "BDT", "QAR", "KWD", "BHD", "OMR", "JOD", "MAD", "DZD", "TND", "LBP", "SDG", "SYP", "YER", "MZN", "AOA", "GHS", "KES", "TZS", "UGX", "ZMW", "BWP", "NAD", "SZL", "LSL", "MUR", "SCR", "MVR", "LKR", "NPR", "BTN", "MMK", "LAK", "KHR", "KIP", "MNT", "CUP", "DOP", "HTG", "JMD", "TTD", "XCD", "BBD", "BSD", "BZD", "KYD", "GIP", "FKP", "SHP", "BMD", "ANG", "AWG", "HTG", "SRD", "GYD", "BZD", "XOF", "XAF", "XPF", "CDF", "DJF", "GNF", "KMF", "MGA", "RWF", "STD", "TND", "XOF", "ZAR"
];
// Option is the list of available fiat currencies present in the API response
const Option = currencyData ? fiatCurrencies.filter(code => code.toLowerCase() in currencyData) : [];


const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
};

const convert = () => {
    if (currencyData && currencyData[to]) {
        setConvertedAmount(Number((amount * currencyData[to]).toFixed(2)));
    }
};

   return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('${`https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg`}')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                          convert()
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={Option}
                                onCurrencyChange={(currency) => {
                                    setFrom(currency);
                                }}
                                selectCurrency={from}
                                onAmountChange={setAmount}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={Option}
                                onCurrencyChange={(currency)=>{
                                 setTo(currency)
                                }}
                                selectCurrency={to}
                                amountDisable
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                          Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App
