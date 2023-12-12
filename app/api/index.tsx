import { PrismaClient, GuestUser } from "@prisma/client";
import { useState } from "react";

const prisma = new PrismaClient();

export async function getServerSideProps() {
  const collegeList: GuestUser[] = await prisma.guestUser.findMany();
  return {
    props: {
      CollegeListProps: collegeList,
    },
  };
}

const CollegList = ({ CollegeListProps }: any) => {
  const [collegelist, setCollegeList] = useState<GuestUser[]>(CollegeListProps);

  return (
    <div>
      {collegelist.map((collegelists) => (
        <div key={collegelists.id}>
          <div className="overflow-x-auto">
            <table className="table table-caption">
              {/* head */}
              <caption>
                <div className="tooltip">
                <div className="alert alert-warning" role="alert" data-tip="#start"></div>
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
                  <th></th>
                  <th>Name</th>
                  <th>Job</th>
                  <th>Favorite Color</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>1</th>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                  <td>Blue</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <th>2</th>
                  <td>Hart Hagerty</td>
                  <td>Desktop Support Technician</td>
                  <td>Purple</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <th>3</th>
                  <td>Brice Swyre</td>
                  <td>Tax Accountant</td>
                  <td>Red</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CollegList;
