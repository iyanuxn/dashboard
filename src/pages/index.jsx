import { useState, useEffect } from "react";
import { HiOutlineArchiveBox } from "react-icons/hi2";
import { LuUsers2 } from "react-icons/lu";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";
import { TbArrowBack } from "react-icons/tb";

const index = () => {
  const [totalSales, setTotalSales] = useState(825491.73);
  const [visitors, setVisitors] = useState(780192);
  const [orders, setOrders] = useState(265921);
  const [refunded, setRefunded] = useState(11821);

  const [salesIncrement, setsalesIncrement] = useState(1950);
  const [visitorsIncrement, setVisitorsIncrement] = useState(2000);
  const [ordersIncrement, setOrdersIncrement] = useState(1500);
  const [refundedIncrement, setRefundedIncrement] = useState(500);

  const [prevWeekSales, setPrevWeekSales] = useState(1500);
  const [prevWeekVisitors, setPrevWeekVisitors] = useState(1800);
  const [prevWeekOrders, setPrevWeekOrders] = useState(100);
  const [prevWeekRefunded, setPrevWeekRefunded] = useState(700);

  const [salespercentage, setsalesPercentage] = useState(
    ((salesIncrement - prevWeekSales) / salesIncrement) * 100
  );
  const [visitorsPercentage, setVisitorsPercentage] = useState(
    ((visitorsIncrement - prevWeekVisitors) / visitorsIncrement) * 100
  );
  const [ordersPercentage, setOrdersPercentage] = useState(
    ((ordersIncrement - prevWeekOrders) / ordersIncrement) * 100
  );
  const [refundedPercentage, setRefundedPercentage] = useState(
    ((refundedIncrement - prevWeekRefunded) / refundedIncrement) * 100
  );

  const [formattedsalesPercentage, setFormattedsalesPercentage] = useState();
  const [formattedVisitorsPercentage, setFormattedVisitorsPercentage] =
    useState();
  const [formattedOrdersPercentage, setFormattedOrdersPercentage] = useState();
  const [formattedRefundedPercentage, setFormattedRefundedPercentage] =
    useState();

  useEffect(() => {
    const moneyFormat = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    const visitorsFormat = new Intl.NumberFormat("en-US", {
      style: "decimal",
      minimumFractionDigits: 0,
    });

    const ordersFormat = new Intl.NumberFormat("en-US", {
      style: "decimal",
      minimumFractionDigits: 0,
    });

    const refundedFormat = new Intl.NumberFormat("en-US", {
      style: "decimal",
      minimumFractionDigits: 0,
    });

    //format salespercentage to take care of nan and turn number into positive
    const salespercentageFormat = new Intl.NumberFormat("en-US", {
      style: "percent",
      signDisplay: "never",
      minimumFractionDigits: 1,
    });

    //format visitorsPercentage to take care of nan and turn number into positive
    const visitorsPercentageFormat = new Intl.NumberFormat("en-US", {
      style: "percent",
      signDisplay: "never",
      minimumFractionDigits: 1,
    });

    //format ordersPercentage to take care of nan and turn number into positive
    const ordersPercentageFormat = new Intl.NumberFormat("en-US", {
      style: "percent",
      signDisplay: "never",
      minimumFractionDigits: 1,
    });

    //format refundedPercentage to take care of nan and turn number into positive
    const refundedPercentageFormat = new Intl.NumberFormat("en-US", {
      style: "percent",
      signDisplay: "never",
      minimumFractionDigits: 1,
    });

    setFormattedsalesPercentage(
      salespercentageFormat.format(salespercentage / 100)
    );

    setFormattedVisitorsPercentage(
      visitorsPercentageFormat.format(visitorsPercentage / 100)
    );

    setFormattedOrdersPercentage(
      ordersPercentageFormat.format(ordersPercentage / 100)
    );

    setFormattedRefundedPercentage(
      refundedPercentageFormat.format(refundedPercentage / 100)
    );

    setTotalSales(moneyFormat.format(totalSales));
    setVisitors(visitorsFormat.format(visitors));
    setOrders(ordersFormat.format(orders));
    setRefunded(refundedFormat.format(refunded));
  }, []);

  return (
    <div className="w-full bg-neutral-800 bg-opacity-40 h-44 rounded-lg overflow-hidden grid grid-cols-4">
      <div
        className={`
  group/totalSales h-full flex flex-col justify-between p-5 border-r border-neutral-700 
  ${
    salespercentage > 0
      ? "hover:increase  hover:bg-lime-300"
      : "hover:decrease  hover:bg-red-500"
  } 
  cursor-pointer hover:text-neutral-950 transition-all duration-300 ease-in-out
`}
      >
        <div className="flex items-center gap-3">
          <div
            className={`w-7 h-7 bg-neutral-700 group-hover/totalSales:bg-neutral-950  rounded-full flex items-center justify-center transition-all duration-300 ease-in-out 
          ${
            salespercentage > 0
              ? "group-hover/totalSales:text-lime-300"
              : "group-hover/totalSales:text-red-500"
          }`}
          >
            <HiOutlineArchiveBox className="object-cover" />
          </div>
          <span className="text-sm">Total sales</span>
        </div>

        <div className="flex flex-col gap-5">
          <span className="text-3xl font-medium">{totalSales}</span>
          <div className="flex items-center gap-3 text-sm">
            {" "}
            {salespercentage > 0 ? (
              <span className="text-lime-400 flex items-center group-hover/totalSales:text-neutral-950 transition-all duration-300 ease-in-out font-medium">
                <IoIosArrowRoundForward className="text-lime-400 group-hover/totalSales:text-neutral-950 transition-all duration-300 ease-in-out -rotate-45 text-xl" />
                {formattedsalesPercentage}
              </span>
            ) : (
              <span className="text-red-500 flex items-center group-hover/totalSales:text-neutral-950 transition-all duration-300 ease-in-out font-medium">
                <IoIosArrowRoundForward className="text-red-500 group-hover/totalSales:text-neutral-950 transition-all duration-300 ease-in-out rotate-45 text-xl" />
                {formattedsalesPercentage}
              </span>
            )}
            {salespercentage > 0 ? (
              <span className="text-neutral-400 font-medium group-hover/totalSales:text-neutral-950 transition-all duration-300 ease-in-out">
                {salesIncrement >= 1000
                  ? `+${(salesIncrement / 1000).toFixed(1)}k from last week`
                  : `+ $${salesIncrement.toFixed(1)} from last week`}
              </span>
            ) : (
              <span className="text-neutral-400 font-medium group-hover/totalSales:text-neutral-950 transition-all duration-300 ease-in-out">
                {salesIncrement >= 1000
                  ? `${(salesIncrement / 1000).toFixed(1)}k from last week`
                  : `$${salesIncrement.toFixed(1)} from last week`}
              </span>
            )}
          </div>
        </div>
      </div>
      <div
        className={`
  group/visitors h-full flex flex-col justify-between p-5 border-r border-neutral-700 
  ${
    visitorsPercentage > 0
      ? "hover:increase  hover:bg-lime-300"
      : "hover:decrease  hover:bg-red-500"
  } 
  cursor-pointer hover:text-neutral-950 transition-all duration-300 ease-in-out
`}
      >
        <div className="flex items-center gap-3">
          <div
            className={`w-7 h-7 bg-neutral-700 group-hover/visitors:bg-neutral-950  rounded-full flex items-center justify-center transition-all duration-300 ease-in-out 
          ${
            visitorsPercentage > 0
              ? "group-hover/visitors:text-lime-300"
              : "group-hover/visitors:text-red-500"
          }`}
          >
            <LuUsers2 className="object-cover" />
          </div>
          <span className="text-sm">Visitors</span>
        </div>

        <div className="flex flex-col gap-5">
          <span className="text-3xl font-medium">{visitors}</span>
          <div className="flex items-center gap-3 text-sm">
            {" "}
            {visitorsPercentage > 0 ? (
              <span className="text-lime-400 flex items-center group-hover/visitors:text-neutral-950 transition-all duration-300 ease-in-out font-medium">
                <IoIosArrowRoundForward className="text-lime-400 group-hover/visitors:text-neutral-950 transition-all duration-300 ease-in-out -rotate-45 text-xl" />
                {formattedVisitorsPercentage}
              </span>
            ) : (
              <span className="text-red-500 flex items-center group-hover/visitors:text-neutral-950 transition-all duration-300 ease-in-out font-medium">
                <IoIosArrowRoundForward className="text-red-500 group-hover/visitors:text-neutral-950 transition-all duration-300 ease-in-out rotate-45 text-xl" />
                {formattedVisitorsPercentage}
              </span>
            )}
            {visitorsPercentage > 0 ? (
              <span className="text-neutral-400 font-medium group-hover/visitors:text-neutral-950 transition-all duration-300 ease-in-out">
                {visitorsIncrement >= 1000
                  ? `+${(visitorsIncrement / 1000).toFixed(1)}k from last week`
                  : `+ $${visitorsIncrement.toFixed(1)} from last week`}
              </span>
            ) : (
              <span className="text-neutral-400 font-medium group-hover/visitors:text-neutral-950 transition-all duration-300 ease-in-out">
                {visitorsIncrement >= 1000
                  ? `${(visitorsIncrement / 1000).toFixed(1)}k from last week`
                  : `$${visitorsIncrement.toFixed(1)} from last week`}
              </span>
            )}
          </div>
        </div>
      </div>
      <div
        className={`
  group/orders h-full flex flex-col justify-between p-5 border-r border-neutral-700 
  ${
    ordersPercentage > 0
      ? "hover:increase  hover:bg-lime-300"
      : "hover:decrease  hover:bg-red-500"
  } 
  cursor-pointer hover:text-neutral-950 transition-all duration-300 ease-in-out
`}
      >
        <div className="flex items-center gap-3">
          <div
            className={`w-7 h-7 bg-neutral-700 group-hover/orders:bg-neutral-950  rounded-full flex items-center justify-center transition-all duration-300 ease-in-out 
          ${
            ordersPercentage > 0
              ? "group-hover/orders:text-lime-300"
              : "group-hover/orders:text-red-500"
          }`}
          >
            <FaRegStar className="object-cover" />
          </div>
          <span className="text-sm">Total orders</span>
        </div>

        <div className="flex flex-col gap-5">
          <span className="text-3xl font-medium">{orders}</span>
          <div className="flex items-center gap-3 text-sm">
            {" "}
            {ordersPercentage > 0 ? (
              <span className="text-lime-400 flex items-center group-hover/orders:text-neutral-950 transition-all duration-300 ease-in-out font-medium">
                <IoIosArrowRoundForward className="text-lime-400 group-hover/orders:text-neutral-950 transition-all duration-300 ease-in-out -rotate-45 text-xl" />
                {formattedOrdersPercentage}
              </span>
            ) : (
              <span className="text-red-500 flex items-center group-hover/orders:text-neutral-950 transition-all duration-300 ease-in-out font-medium">
                <IoIosArrowRoundForward className="text-red-500 group-hover/orders:text-neutral-950 transition-all duration-300 ease-in-out rotate-45 text-xl" />
                {formattedOrdersPercentage}
              </span>
            )}
            {ordersPercentage > 0 ? (
              <span className="text-neutral-400 font-medium group-hover/orders:text-neutral-950 transition-all duration-300 ease-in-out">
                {ordersIncrement >= 1000
                  ? `+${(ordersIncrement / 1000).toFixed(1)}k from last week`
                  : `+ $${ordersIncrement.toFixed(1)} from last week`}
              </span>
            ) : (
              <span className="text-neutral-400 font-medium group-hover/orders:text-neutral-950 transition-all duration-300 ease-in-out">
                {ordersIncrement >= 1000
                  ? `${(ordersIncrement / 1000).toFixed(1)}k from last week`
                  : `$${ordersIncrement.toFixed(1)} from last week`}
              </span>
            )}
          </div>
        </div>
      </div>
      <div
        className={`
  group/refunded h-full flex flex-col justify-between p-5 
  ${
    refundedPercentage > 0
      ? "hover:increase  hover:bg-lime-300"
      : "hover:decrease  hover:bg-red-500"
  } 
  cursor-pointer hover:text-neutral-950 transition-all duration-300 ease-in-out
`}
      >
        <div className="flex items-center gap-3">
          <div
            className={`w-7 h-7 bg-neutral-700 group-hover/refunded:bg-neutral-950  rounded-full flex items-center justify-center transition-all duration-300 ease-in-out 
          ${
            refundedPercentage > 0
              ? "group-hover/refunded:text-lime-300"
              : "group-hover/refunded:text-red-500"
          }`}
          >
            <TbArrowBack className="object-cover" />
          </div>
          <span className="text-sm">Refunded</span>
        </div>

        <div className="flex flex-col gap-5">
          <span className="text-3xl font-medium">{refunded}</span>
          <div className="flex items-center gap-3 text-sm">
            {" "}
            {refundedPercentage > 0 ? (
              <span className="text-lime-400 flex items-center group-hover/refunded:text-neutral-950 transition-all duration-300 ease-in-out font-medium">
                <IoIosArrowRoundForward className="text-lime-400 group-hover/refunded:text-neutral-950 transition-all duration-300 ease-in-out -rotate-45 text-xl" />
                {formattedRefundedPercentage}
              </span>
            ) : (
              <span className="text-red-500 flex items-center group-hover/refunded:text-neutral-950 transition-all duration-300 ease-in-out font-medium">
                <IoIosArrowRoundForward className="text-red-500 group-hover/refunded:text-neutral-950 transition-all duration-300 ease-in-out rotate-45 text-xl" />
                {formattedRefundedPercentage}
              </span>
            )}
            {refundedPercentage > 0 ? (
              <span className="text-neutral-400 font-medium group-hover/refunded:text-neutral-950 transition-all duration-300 ease-in-out">
                {refundedIncrement >= 1000
                  ? `+${(refundedIncrement / 1000).toFixed(1)}k from last week`
                  : `+ $${refundedIncrement.toFixed(1)} from last week`}
              </span>
            ) : (
              <span className="text-neutral-400 font-medium group-hover/refunded:text-neutral-950 transition-all duration-300 ease-in-out">
                {refundedIncrement >= 1000
                  ? `${(refundedIncrement / 1000).toFixed(1)}k from last week`
                  : `$${refundedIncrement.toFixed(1)} from last week`}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
