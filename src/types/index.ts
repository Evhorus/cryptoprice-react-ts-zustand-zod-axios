import { z } from "zod";
import {
  Currency,
  CryptoCurrencyReponseSchema,
  PairSchema,
  CryptoPriceSchema,
} from "../schema/crypto-schema";

export type Currency = z.infer<typeof Currency>;
export type CryptoCurrency = z.infer<typeof CryptoCurrencyReponseSchema>;
export type Pair = z.infer<typeof PairSchema>;
export type CryptoPrice = z.infer<typeof CryptoPriceSchema>;
