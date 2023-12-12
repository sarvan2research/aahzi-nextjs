import NextAuth, { AuthOptions} from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';

import prisma from '@/app/libs/prismadb';

export const authOptions : AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [],
    debug : process.env.NODE_ENV === 'development',
    session: {
        strategy : 'jwt'
    },
    secret : process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST};