import { Link, useParams, useSearchParams } from "react-router-dom";

function ProductDetail() {
  let { id } = useParams();
  let [searchParams, setSearchParams] = useSearchParams();
  return (
    // <>
    //   <h1>Product Detail</h1>
    //   <button onClick={() => {

    //     setSearchParams({q : "phi"});
    //   }}>Search</button>
    //   {id}
    //   {searchParams}
    // </>
    <div className="font-sans my-10">
      <div className="p-4 lg:max-w-5xl max-w-lg mx-auto">
        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-6 max-lg:gap-12">
          <div className="w-full top-0 sm:flex gap-2">
            <div className="sm:space-y-3 w-16 max-sm:w-12 max-sm:flex max-sm:mb-4 max-sm:gap-4">
              <img
                src="https://media-fmplus.cdn.vccloud.vn/uploads/products/2312PTAS8881201/68ae2d9f-700b-4812-94d1-4d10a443338b.jpg"
                alt="Product1"
                className="w-full cursor-pointer rounded-md outline"
              />
              <img
                src="https://media-fmplus.cdn.vccloud.vn/uploads/products/2312PTAS8881201/6a1e9c06-32d9-4acf-8c59-944f0a7b1651.jpg"
                alt="Product2"
                className="w-full cursor-pointer rounded-md"
              />
              <img
                src="https://media-fmplus.cdn.vccloud.vn/uploads/products/2312PTAS8881201/b136745b-abc7-4c1a-90b9-9392f63d48bf.jpg"
                alt="Product3"
                className="w-full cursor-pointer rounded-md"
              />
              <img
                src="https://media-fmplus.cdn.vccloud.vn/uploads/products/2312PTAS8881201/ff91e645-57a1-43ee-ab9c-9cd1d2d0f495.jpg"
                alt="Product4"
                className="w-full cursor-pointer rounded-md"
              />
            </div>
            <img
              src="https://media-fmplus.cdn.vccloud.vn/uploads/products/2312PTAS8881201/a57d88bc-8afd-4e47-8166-968c4d261ef8.jpg"
              alt="Product"
              className="w-4/5 rounded-md object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Adjective Attire | T-shirt
            </h2>
            <div className="flex flex-wrap gap-4 mt-4">
              <p className="text-gray-800 text-xl font-bold">$12</p>
              <p className="text-gray-400 text-xl">
                <strike>$16</strike>{" "}
                <span className="text-sm ml-1.5">Tax included</span>
              </p>
            </div>
            <div className="flex space-x-2 mt-4">
              <svg
                className="w-5 fill-blue-600"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                className="w-5 fill-blue-600"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                className="w-5 fill-blue-600"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                className="w-5 fill-blue-600"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                className="w-5 fill-[#CED5D8]"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-800">Sizes</h3>
              <div className="flex flex-wrap gap-4 mt-4">
                <button
                  type="button"
                  className="w-10 h-10 border-2 hover:border-blue-600 font-semibold text-sm rounded-full flex items-center justify-center shrink-0"
                >
                  SM
                </button>
                <button
                  type="button"
                  className="w-10 h-10 border-2 hover:border-blue-600 border-blue-600 font-semibold text-sm rounded-full flex items-center justify-center shrink-0"
                >
                  MD
                </button>
                <button
                  type="button"
                  className="w-10 h-10 border-2 hover:border-blue-600 font-semibold text-sm rounded-full flex items-center justify-center shrink-0"
                >
                  LG
                </button>
                <button
                  type="button"
                  className="w-10 h-10 border-2 hover:border-blue-600 font-semibold text-sm rounded-full flex items-center justify-center shrink-0"
                >
                  XL
                </button>
              </div>
            </div>
            <Link to="/cart">
              <button
                type="button"
                className="w-full mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-md"
              >
                Thêm vào giỏ hàng
              </button>
            </Link>
            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-800">
                Mô tả
              </h3>
              <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-800">
                <li>
                  A gray t-shirt is a wardrobe essential because it is so
                  versatile.
                </li>
                <li>
                  Available in a wide range of sizes, from extra small to extra
                  large, and even in tall and petite sizes.
                </li>
                <li>
                  This is easy to care for. They can usually be machine-washed
                  and dried on low heat.
                </li>
                <li>
                  You can add your own designs, paintings, or embroidery to make
                  it your own.
                </li>
              </ul>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-800">Reviews(10)</h3>
              <div className="space-y-3 mt-4">
                <div className="flex items-center">
                  <p className="text-sm text-gray-800 font-bold">5.0</p>
                  <svg
                    className="w-5 fill-blue-600 ml-1.5"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <div className="bg-gray-300 rounded-md w-full h-2 ml-3">
                    <div className="w-2/3 h-full rounded-md bg-blue-600" />
                  </div>
                  <p className="text-sm text-gray-800 font-bold ml-3">66%</p>
                </div>
                <div className="flex items-center">
                  <p className="text-sm text-gray-800 font-bold">4.0</p>
                  <svg
                    className="w-5 fill-blue-600 ml-1.5"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <div className="bg-gray-300 rounded-md w-full h-2 ml-3">
                    <div className="w-1/3 h-full rounded-md bg-blue-600" />
                  </div>
                  <p className="text-sm text-gray-800 font-bold ml-3">33%</p>
                </div>
                <div className="flex items-center">
                  <p className="text-sm text-gray-800 font-bold">3.0</p>
                  <svg
                    className="w-5 fill-blue-600 ml-1.5"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <div className="bg-gray-300 rounded-md w-full h-2 ml-3">
                    <div className="w-1/6 h-full rounded-md bg-blue-600" />
                  </div>
                  <p className="text-sm text-gray-800 font-bold ml-3">16%</p>
                </div>
                <div className="flex items-center">
                  <p className="text-sm text-gray-800 font-bold">2.0</p>
                  <svg
                    className="w-5 fill-blue-600 ml-1.5"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <div className="bg-gray-300 rounded-md w-full h-2 ml-3">
                    <div className="w-1/12 h-full rounded-md bg-blue-600" />
                  </div>
                  <p className="text-sm text-gray-800 font-bold ml-3">8%</p>
                </div>
                <div className="flex items-center">
                  <p className="text-sm text-gray-800 font-bold">1.0</p>
                  <svg
                    className="w-5 fill-blue-600 ml-1.5"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <div className="bg-gray-300 rounded-md w-full h-2 ml-3">
                    <div className="w-[6%] h-full rounded-md bg-blue-600" />
                  </div>
                  <p className="text-sm text-gray-800 font-bold ml-3">6%</p>
                </div>
              </div>
              <button
                type="button"
                className="w-full mt-8 px-6 py-2.5 border border-blue-600 bg-transparent text-gray-800 text-sm font-semibold rounded-md"
              >
                Read all reviews
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
