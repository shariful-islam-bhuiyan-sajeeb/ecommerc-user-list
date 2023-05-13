import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import DetailsPage from "./DetailsPage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [userList, setUserList] = useState();
  const [details, setDetails] = useState();
  useEffect(() => {
    fetch("https://602e7c2c4410730017c50b9d.mockapi.io/users")
      .then((res) => res.json())
      .then((data) => setUserList(data));
  }, []);
  // console.log(details);
  // console.log(userList);
  return (
    <main className="max-w-7xl mx-auto  my-20">
      <div className=" flex sm:flex-row flex-col lg:px-4 px-2 lg:justify-between justify-center lg:gap-0 gap-6 w-full mx-auto">
        {/*============== user list  */}
        <div className="flex flex-col items-center">
          <div className=" flex flex-col items-center space-y-2">
            <h1 className="lg:text-4xl md:text-2xl text-xl  font-semibold font-serif animate-bounce uppercase">
              User List
            </h1>
            <div className="flex items-center">
              <div className="lg:w-[50px] md:w-[40px] sm:w-[30px] w-[25px] h-[2px] bg-gray-500"></div>
              <div className="lg:w-[50px] md:w-[40px] sm:w-[30px] w-[25px] h-[2px] bg-yellow-400"></div>
              <div className="lg:w-[50px] md:w-[40px] sm:w-[30px] w-[25px] h-[2px] bg-gray-500"></div>
            </div>
          </div>
          <div className="">
            {userList?.slice(50, 55)?.map((data) => {
              return (
                <div
                  key={data?.id}
                  onClick={() => setDetails(data)}
                  className="lg:mt-4 mt-2 shadow-lg  bg-slate-200 hover:bg-blue-300 rounded-md "
                >
                  <div className="flex items-center  px-10 py-2 w-full  gap-x-2">
                    <div>
                      {data?.avatar ? (
                        <img
                          className="w-16 rounded-md"
                          src={data?.avatar}
                          alt=""
                        />
                      ) : (
                        <FaUserCircle />
                      )}
                    </div>
                    <h2 className="font-serif lg:text-2xl text-xl">
                      Name: {data?.profile?.firstName}
                    </h2>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/*============== user details  */}
        <div className="flex flex-col items-center  shadow-sm px-2 py-2  ">
          <div className=" flex flex-col items-center space-y-2">
            <h1 className="lg:text-4xl md:text-2xl text-xl  font-semibold font-serif animate-bounce uppercase">
              User Details
            </h1>
            <div className="flex items-center">
              <div className="lg:w-[60px] md:w-[50px] sm:w-[40px] w-[30px] h-[2px] bg-gray-500"></div>
              <div className="lg:w-[60px] md:w-[50px] sm:w-[40px] w-[30px] h-[2px] bg-yellow-400"></div>
              <div className="lg:w-[60px] md:w-[50px] sm:w-[40px] w-[30px] h-[2px] bg-gray-500"></div>
            </div>
          </div>
          <div className="mt-10 bg-slate-200 xl:px-8 lg:px-6 md:px-5 sm:px-4 px-2 rounded">
            {details ? <DetailsPage details={details} /> : "No data to show"}
          </div>
        </div>
      </div>
    </main>
  );
}
