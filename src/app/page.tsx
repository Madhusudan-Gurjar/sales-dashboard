import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white p-8 sm:p-16">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h1 className="text-4xl font-bold">📊 Welcome to the Sales Dashboard</h1>

        <p className="text-lg text-gray-600 dark:text-gray-300">
          This interactive dashboard helps you visualize and analyze sales trends
          across different years. You can switch chart types, filter data,
          and soon — fetch real data via API!
        </p>

        <div className="bg-white dark:bg-gray-800 shadow rounded p-6 text-left">
          <h2 className="text-2xl font-semibold mb-4">🚀 Features:</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>View sales data for 2022, 2023, 2024</li>
            <li>Switch between Bar, Line, and Pie charts</li>
            <li>Filter months by sales threshold</li>
            <li>Dark/Light mode toggle (coming)</li>
            <li>Export chart as PNG/PDF (coming)</li>
            <li>Multiple dashboards via tabs (coming)</li>
          </ul>
        </div>

        <Link
          href="/dashboard"
          className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}
