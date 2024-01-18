import { useState, useEffect } from "react";
import { HiOutlineArchiveBox } from "react-icons/hi2";

const index = () => {
  const [totalSales, setTotalSales] = useState(825491.73);
  const [increment, setIncrement] = useState(100);
  const [prevWeekSales, setPrevWeekSales] = useState(1500);
  const [percentage, setPercentage] = useState(
    ((increment - prevWeekSales) / increment) * 100
  );
  const [formatedPercentage, setFormatedPercentage] = useState();

  useEffect(() => {
    const moneyFormat = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    //format percentage to take care of nan and turn number into positive
    const percentageFormat = new Intl.NumberFormat("en-US", {
      style: "percent",
      signDisplay: "never",
      minimumFractionDigits: 2,
    });

    setFormatedPercentage(percentageFormat.format(percentage / 100));

    setTotalSales(moneyFormat.format(totalSales));
  }, []);

  return (
    <div className="w-full bg-neutral-800 bg-opacity-40 h-44 rounded-lg overflow-hidden grid grid-cols-4">
      <div className="h-full flex flex-col justify-between p-5 border-r border-neutral-700">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 bg-neutral-700 rounded-full flex items-center justify-center">
            <HiOutlineArchiveBox className="object-cover w-[65%] h-[65%]" />
          </div>
          <span className="text-sm">Total sales</span>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-3xl font-medium">{totalSales}</span>
          {percentage > 0 ? (
            <span className="text-green-500">
              ↗{formatedPercentage} from last week
            </span>
          ) : (
            <span className="text-red-500">
              ↘{formatedPercentage} from last week
            </span>
          )}
          <span>
            {percentage > 0 ? (
              <span className="text-green-500">
                +{increment} from last week
              </span>
            ) : (
              <span className="text-red-500">{increment} from last week</span>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default index;
