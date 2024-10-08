import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [data, setData] = useState({});

  const fetchAdvice = async () => {
    try {
      const res = await fetch(`https://api.adviceslip.com/advice`);
      const data = await res.json();
      setData(data.slip);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="max-w-[1440px] mobile:max-w-[375px] w-full h-[810px] mobile:h-[667px] bg-[#202733] flex">
      <div className="w-[540px] mobile:w-[343px] h-[332px] mobile:h-[315px] mx-auto mt-[223px] mobile:mt-[120px] bg-[#313A48] rounded-[15px] relative">
        <h3 className="text-[#53FFAA] font-manrope text-[13px] mobile:text-[11px] font-extrabold tracking-[4.09px] mobile:tracking-[3.46px] mt-[48px] mobile:mt-[40px] text-center">
          ADVICE #{data.id}
        </h3>
        <h2 className="w-[444px] mobile:w-[295px] min-h-[114px] mobile:min-h-[132px] mx-auto mt-[24px] font-manrope text-[28px] mobile:text-[24px] font-extrabold text-[#CEE3E9] text-center content-center">
          &quot;{data.advice}&quot;
        </h2>
        <img
          className="mx-auto mt-[40px] mobile:hidden"
          src="pattern-divider-desktop.svg"
          alt=""
        />
        <img
          className="hidden mx-auto mt-[24px] mobile:block"
          src="pattern-divider-mobile.svg"
          alt=""
        />
        <div
          className="w-[64px] h-[64px] bg-[#53FFAA] rounded-full flex justify-center items-center absolute top-[300px] mobile:top-[283px] left-[238px] mobile:left-[139px] cursor-pointer hover:shadow-[0px_0px_20px_3px_#53FFAA]"
          onClick={fetchAdvice}
        >
          <img className="w-[24px] h-[24px]" src="icon-dice.svg" alt="Dice" />
        </div>
      </div>
    </div>
  );
}

export default App;
