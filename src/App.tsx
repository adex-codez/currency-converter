import { ConvertedCurrency } from "./components/ConvertedCurrency";
import { ConvertingCurrency } from "./components/ConvertingCurrency";
<ConvertedCurrency />;

function App() {
  return (
    <>
      <div class="flex justify-center items-center mt-[30%] md:mt-[16%]">
        <div class="w-[75%] flex flex-row">
          <ConvertingCurrency />
        </div>
      </div>
    </>
  );
}

export default App;
