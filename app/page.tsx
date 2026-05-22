import { dummyAssets } from "../lib/dummyData";

export default function Home() {
  // 1. Using Mock Data instead of Supabase (No backend headaches!)
  const safeAssets = dummyAssets;

  // 2. Data Manipulation (Calculating Totals like a pro)
  const totalNetWorth = safeAssets.reduce(
    (sum, asset) => sum + (asset.current_value || 0),
    0,
  );

  const totalEquity = safeAssets
    .filter((asset) => asset.asset_type === "equity")
    .reduce((sum, asset) => sum + (asset.current_value || 0), 0);

  const totalDigital = safeAssets
    .filter((asset) => asset.asset_type === "digital")
    .reduce((sum, asset) => sum + (asset.current_value || 0), 0);

  const totalPhysical = safeAssets
    .filter((asset) => asset.asset_type === "physical")
    .reduce((sum, asset) => sum + (asset.current_value || 0), 0);

  // 3. Helper Function for Indian Rupee Formatting
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Portfolio Summary</h2>
        <p className="text-gray-500">
          Welcome back! Here is your current financial overview.
        </p>
      </div>

      {/* Top Stats Grid with Dynamic Data */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Net Worth */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between">
          <h3 className="text-sm font-medium text-gray-500">Total Net Worth</h3>
          <p className="text-3xl font-bold text-gray-900 mt-2">
            {formatCurrency(totalNetWorth)}
          </p>
        </div>

        {/* Equities */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between">
          <h3 className="text-sm font-medium text-gray-500">Equities</h3>
          <p className="text-2xl font-semibold text-gray-800 mt-2">
            {formatCurrency(totalEquity)}
          </p>
        </div>

        {/* Digital Assets */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between">
          <h3 className="text-sm font-medium text-gray-500">Digital Assets</h3>
          <p className="text-2xl font-semibold text-gray-800 mt-2">
            {formatCurrency(totalDigital)}
          </p>
        </div>

        {/* Physical Assets */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between">
          <h3 className="text-sm font-medium text-gray-500">Physical Assets</h3>
          <p className="text-2xl font-semibold text-gray-800 mt-2">
            {formatCurrency(totalPhysical)}
          </p>
        </div>
      </div>

      {/* Analytics & Recent Activity Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        <div className="col-span-2 bg-white p-6 rounded-xl border border-gray-200 shadow-sm h-80 flex flex-col">
          <h3 className="text-lg font-medium text-gray-900 border-b pb-4 mb-4">
            Asset Allocation
          </h3>
          <div className="flex-1 flex items-center justify-center">
            <p className="text-gray-400">Interactive Chart will render here</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm h-80 flex flex-col">
          <h3 className="text-lg font-medium text-gray-900 border-b pb-4 mb-4">
            Your Assets
          </h3>
          <div className="flex-1 overflow-y-auto">
            {/* Yahan hum mapped list dikha rahe hain */}
            {safeAssets.length > 0 ? (
              <ul className="space-y-3">
                {safeAssets.map((item) => (
                  <li
                    key={item.id}
                    className="flex justify-between items-center text-sm"
                  >
                    <span className="font-medium text-gray-700">
                      {item.asset_name}
                    </span>
                    <span className="text-gray-900 font-semibold">
                      {formatCurrency(item.current_value)}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-400 text-sm text-center mt-10">
                No assets found in database.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
