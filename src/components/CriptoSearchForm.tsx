import { ChangeEvent, FormEvent, useState } from "react";
import { useCryptoStore } from "../store/store";
import { currencies } from "./../data";
import ErrorMessage from "./ErrorMessage";
import { Pair } from "../types";
export default function CriptoSearchForm() {
  const cryptoCurrencies = useCryptoStore((state) => state.cryptoCurrencies);
  const fetchData = useCryptoStore((state) => state.fetchData);
  const [pair, setPair] = useState<Pair>({
    currency: "",
    criptocurrency: "",
  });
  const [error, setError] = useState("");
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPair({
      ...pair,
      [name]: value,
    });
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.values(pair).includes("")) {
      setError("LLENA TODOS LOS DATOS");
      return;
    }
    setError("");

    fetchData(pair);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <div className="field">
        <label htmlFor="currency">Moneda: </label>
        <select
          name="currency"
          id="currency"
          onChange={handleChange}
          value={pair.currency}
        >
          <option value="">-- Selecione --</option>
          {currencies.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.name}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="criptocurrency">Criptomoneda: </label>
        <select
          name="criptocurrency"
          id="criptocurrency"
          onChange={handleChange}
          value={pair.criptocurrency}
        >
          <option value="">-- Selecione --</option>
          {cryptoCurrencies.map((crypto) => (
            <option key={crypto.CoinInfo.FullName} value={crypto.CoinInfo.Name}>
              {crypto.CoinInfo.FullName}
            </option>
          ))}
        </select>
      </div>
      <input type="submit" value="Cotizar" />
    </form>
  );
}
