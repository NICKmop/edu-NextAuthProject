"use server";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";
import { getVerificationTokenByToken } from "@/data/verification-token";

export const newVerification = async ( token: string) => {
    const existngToken = await getVerificationTokenByToken(token);

    if(!existngToken){
        return { error: "Token does not exist!"}
    }

    const hasExpired = new Date(existngToken.expires) < new Date();

    if(hasExpired) { 
        return { error: "Token has expired"};
    }
    
    const existingUser = await getUserByEmail(existngToken.email);

    if(!existingUser){
        return { error: "Email does not exist!"}
    }

    await db.user.update({
        where: { id: existingUser.id },
        data: {
            emailVerified: new Date(),
            email: existngToken.email
        }
    })

    await db.verificationToken.delete({
        where: { id: existngToken.id }
    })

    return { success: "Email verified" }
}