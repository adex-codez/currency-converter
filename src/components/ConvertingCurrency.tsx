import { Show, Suspense, createResource } from "solid-js";
import getCurrencyCodes from "../lib/utils";

export const ConvertingCurrency = () => {
  const [currencyCodes] = createResource(getCurrencyCodes);
  return (
    <>
      <div class="w-full flex justify-center items-center mb-[10%]">
        <div class="w-[80%] mx-2">
          <input class="border-b-2 border-b-gray-200 px-2 py-2 outline-none bg-gray-50 w-full" />
        </div>
        <div class="w-[20%]">
          <Suspense fallback={<div>loading..</div>}>
            <select class="bg-gray-50 px-2 py-2 border-b-2 border-b-gray-200">
              <Show when={currencyCodes()}>
                {currencyCodes()?.supported_codes.map((val) =>
                  val.map((v, index) => (
                    <Show when={index === 0}>
                      <option>{v}</option>
                    </Show>
                  )),
                )}
              </Show>
            </select>
          </Suspense>
        </div>
      </div>
    </>
  );
};
