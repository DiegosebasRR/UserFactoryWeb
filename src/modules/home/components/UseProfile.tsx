import { useEffect, useState } from "react";
import CardUser from "./CardUser";
import { User } from "@/types/User";

const UseProfile = () => {
  const [user, setUser] = useState<User>({
    userId: 0,
    gender: "",
    nationality: "",
    email: "",
    password: "",
    image: "",
    phone: "",
    cell: "",
    birth: "",
    name: { id: 0, first: "", last: "" },
    location: {
      id: 0,
      streetNumber: 0,
      streetName: "",
      city: "",
      state: "",
      country: "",
      postcode: 0,
    },
  });
  useEffect(() => {
    fetch("https://www.fakesoteapi.somee.com/api/Users?results=1")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setUser(data[0]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="max-w-screen-md relative m-auto">
      <div className=" rounded-3xl overflow-hidden shadow-2xl shadow-red-300">
        <div className="relative w-full h-48">
          <div className="absolute inset-0 bg-red-500 opacity-50"></div>
          <img
            className="w-full h-full object-cover"
            src={user.image}
            alt="Background"
          />
        </div>
        <div className="h-64 flex flex-col items-end "></div>
      </div>
      <CardUser user={user} />
    </div>
  );
};

export default UseProfile;
