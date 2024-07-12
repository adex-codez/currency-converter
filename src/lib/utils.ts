type CurrencyCodeResponse = {
  result: string;
  documentation: string;
  terms_of_use: string;
  supported_codes: [string, string][];
};
export default async function getCurrencyCodes() {
  const response = await fetch(
    `https://v6.exchangerate-api.com/v6/${import.meta.env.VITE_API_KEY}/codes`,
  );
  return response.json() as Promise<CurrencyCodeResponse>;
}
