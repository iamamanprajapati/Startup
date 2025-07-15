import React, { useEffect, useState } from "react";
import deteFormater from "../config/dateFormater";
import axios from "axios";
import { toast } from "react-toastify";
import { MdDelete } from "react-icons/md";

const QueryCard = ({ data, onDelete }) => {
  const [status, setStatus] = useState(data.queryStatus);

  const updateQueryStatus = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/queryStatus/${data._id}`
      );

      if (!response.data.success) {
        toast.error(response.data.message || "Failed to update");
        return;
      }
      setStatus(!status);
      toast.success("Status updated");
    } catch (error) {
      toast.success(error.message);
    }
  };

  const handleDeleteQuery = async () => {
    try {
      const password = prompt("Enter you password ");
      if (password !== "Coder1234") {
        return;
      }

      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/deleteQuery/${data._id}`
      );
      if (!response.data.success) {
        toast.error(response.data.message || "Failed to update");
        return;
      }
      toast.success(response.data.message);
      onDelete(data._id);
    } catch (error) {
      toast.success(error.message);
    }
  };

  return (
    <div
      className={` overflow-hidden overflow-y-auto  relative bg-secondary/50 hover:scale-102 transition-all  duration-200 cursor-pointer hover:bg-secondary/70 w-full  p-6 rounded-3xl shadow-3xl flex flex-col gap-1  h-[300px] text-gray-300`}
    >
      <div
        onClick={handleDeleteQuery}
        className="absolute top-4 right-4 w-8 h-8 bg-primary  flex justify-center items-center rounded-full"
      >
        <MdDelete className="text-red-400" />
      </div>
      <p className="text-xl">Name : {data.name}</p>
      <p>Email : {data.email}</p>
      <p>Phone No : {data.phoneNumber}</p>
      <p>Service : {data.service}</p>
      <p>Country : {data.country}</p>
      <p>Message : {data.projectDetail}</p>
      <span className="text-sm text-gray-600">
        Date : {deteFormater(data.createdAt)}
      </span>

      <span
        onClick={updateQueryStatus}
        className={` ${
          status ? "bg-green-400 text-black" : "bg-red-400"
        } cursor-pointer font-semibold text-sm w-fit px-4 py-1 mt-2 rounded hover:scale-110 transition`}
      >
        Status: {status ? " Completed" : " Pending"}
      </span>
    </div>
  );
};

export default QueryCard;
