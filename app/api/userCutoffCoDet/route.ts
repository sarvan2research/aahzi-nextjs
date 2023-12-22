import { GuestUser, PrismaClient } from "@prisma/client";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: Request) {
  if (req.method !== "GET") {
    return new NextResponse("Method not allowed", { status: 405 });
  }
  try {
    const userdata: GuestUser[] = await prisma.guestUser.findMany();
    return NextResponse.json(userdata);
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
// export async function GET(req: NextApiRequest) {
//   if (req.method == "GET") {
//     try {
//       const collegeCode = parseInt(req.query.collegeCode as string, 10);

//       if(isNaN(collegeCode)){
//         return NextResponse.json('Invalid collegeCode',{status : 400});
//       }
//       // const details = await prisma.cutOff.findMany();
//       const newDetails = await prisma.cutOff.findMany({
//         where: { collegeCode },
//         include : {cutoffDetailsList : true}
//       });

//       return NextResponse.json(newDetails);
//     } catch (error) {
//       console.log(error);
//       return new NextResponse("Internal Server Error", {status : 500})
//     }
//     finally{
//       await prisma.$disconnect();
//     }
//   } else {
//     return new NextResponse("Method Not Allowed", {status : 405})
//   }
// }
