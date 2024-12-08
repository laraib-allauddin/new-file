import Image from "next/image";

export default function Cart() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div
        className="relative bg-cover bg-center h-48 flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('/Header-bg.png')",
        }}
      >
        <h1 className="text-white text-3xl font-bold">Shopping Cart</h1>
        <p className="text-white mt-2">
          <a href="/" className="text-gray-300 hover:underline">
            Home
          </a>{" "}
          <span className="text-orange-500">›</span>{" "}
          <span className="text-orange-500">Shopping cart</span>
        </p>
      </div>
      <div className="container mx-auto px-4 lg:px-8 py-8">
        {/* Cart Table */}
        <div className="overflow-x-auto bg-white shadow-md rounded-lg mb-8">
          <table className="min-w-full text-left">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-6 py-3">Product</th>
                <th className="px-6 py-3">Price</th>
                <th className="px-6 py-3">Quantity</th>
                <th className="px-6 py-3">Total</th>
                <th className="px-6 py-3">Remove</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Burger", price: 55, quantity: 1, image: "/Burger.png", total: 55 },
                { name: "French Fries", price: 25, quantity: 1, image: "/Freash Lime.png", total: 25 },
                { name: "Pizza", price: 15, quantity: 1, image: "/Pizza.png", total: 15 },
                { name: "Chocolate Muffin", price: 65, quantity: 1, image: "/chocolate-muffin.png", total: 65 },
                { name: "Cheese Platter", price: 66, quantity: 1, image: "/cheese-burger.png", total: 66 },
              ].map((item, index) => (
                <tr key={index} className="border-t">
                  <td className="px-6 py-4 flex items-center space-x-3">
                    <Image src={item.image} alt={item.name} width={50} height={50} className="rounded" />
                    <span>{item.name}</span>
                  </td>
                  <td className="px-6 py-4">${item.price.toFixed(2)}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <button className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded">-</button>
                      <span className="mx-2">{item.quantity}</span>
                      <button className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded">+</button>
                    </div>
                  </td>
                  <td className="px-6 py-4">${item.total.toFixed(2)}</td>
                  <td className="px-6 py-4 text-red-500 hover:text-red-700 cursor-pointer">X</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Coupon Code Section */}
          <div className="lg:w-1/2 bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-bold mb-4">Coupon Code</h2>
            <p className="text-gray-600 mb-4">
              Enter a coupon code to get a discount on your order.
            </p>
            <div className="flex">
              <input
                type="text"
                placeholder="Enter coupon code"
                className="w-full px-4 py-2 border border-gray-300 rounded-l focus:outline-none"
              />
              <button className="bg-orange-500 text-white px-4 py-2 rounded-r hover:bg-orange-600">
                Apply
              </button>
            </div>
          </div>

          {/* Total Bill Section */}
          <div className="lg:w-1/2 bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-bold mb-4">Total Bill</h2>
            <div className="flex justify-between mb-4">
              <span className="text-gray-600">Cart Subtotal</span>
              <span className="font-bold">$226.00</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-gray-600">Shipping Charges</span>
              <span className="font-bold">$5.00</span>
            </div>
            <div className="flex justify-between border-t pt-4">
              <span className="font-bold">Total Amount</span>
              <span className="font-bold text-orange-500">$231.00</span>
            </div>
            <button className="w-full bg-orange-500 text-white py-2 mt-4 rounded hover:bg-orange-600">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
