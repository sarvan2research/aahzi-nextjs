import { useRouter } from "next/router";
import { NextResponse } from "next/server";
import { GuestUser, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const router = useRouter();
  if (req.method !== "POST") {
    return new NextResponse("Method not allowed", { status: 405 });
  }
  
  const body = await req.json();
  const { name, mobileNumber, course, city, cutoffMarks } = body;
  
  const user = await prisma.guestUser.create({
    data: {
      name,
      mobileNumber,
      course,
      city,
      cutoffMarks,
    },
  });

  router.push('/api/index');

  return NextResponse.json(user);
}

// export async function getServerSideProps() {
//   const collegeList: GuestUser[] = await prisma.guestUser.findMany();
//   return {
//     props: {
//       CollegeListProps: collegeList,
//     },
//   };
// }
