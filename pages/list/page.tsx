"use client";
import { PrismaClient, GuestUser } from "@prisma/client";
import { GetServerSideProps } from "next";
import { useState, useEffect} from "react";

const prisma = new PrismaClient();

interface CollegeListProps {
  CollegeListProps: GuestUser[];
}

const List = ({ CollegeListProps }: any) => {
  const [collegelist, setCollegeList] = useState<GuestUser[]>(CollegeListProps);

  useEffect(() => {
    setCollegeList(collegelist);
  }, [collegelist]);

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
            {collegelist.map((data) => (
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

export const getServerSideProps: GetServerSideProps<
  CollegeListProps
> = async () => {
  try {
    const collegeList: GuestUser[] = await prisma.guestUser.findMany();
    console.log(collegeList);

    return {
      props: {
        CollegeListProps: collegeList,
      },
    };
  } catch (error) {
    console.log("error", error);
    return {
      props: {
        CollegeListProps: [],
      },
    };
  }
};

export default List;
