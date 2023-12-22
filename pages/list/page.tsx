"use client";
import { useState, useEffect } from "react";
import { GuestUser } from "@prisma/client";

const List = () => {
  const [collegeList, setCollegeList] = useState<GuestUser[]>([]);

  useEffect(() => {
    const fetchCutOffData = async () => {
      try {
        const response = await fetch("/api/userCutoffCoDet");
        const data = await response.json();
        setCollegeList(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCutOffData();
  }, []);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-caption">
          <caption>
            <div className="tooltip">
              <div
                className="alert alert-warning"
                role="alert"
                data-tip="#start"
              ></div>
              <div id="start" className="text-sm">
                Our platform offers engineering cutoff scores based on five-year
                data, but please note these are estimations subject to change.
                For the latest information, book an appointment with our experts
                dedicated to guiding your educational journey amid annual
                variations in cutoffs. Your success is our priority.
              </div>
            </div>
          </caption>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Mobile number</th>
              <th>Cutoff Mark</th>
            </tr>
          </thead>
          <tbody>
            {collegeList.map((data) => (
              <tr key={data.id}>
                <th>{data.id}</th>
                <th>{data.name}</th>
                <th>{data.mobileNumber}</th>
                <th>{data.cutoffMarks}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// export const getServerSideProps = async(context : GetServerSidePropsContext) => {
//   const data = await fetchCutOffData(context);
//   return{
//     props : data
//   }
// }

export default List;
