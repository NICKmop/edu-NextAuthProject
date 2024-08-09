"use server";

import * as z from "zod";
import bcrypt from "bcryptjs";

import { db } from "@/lib/db";
import { ResisterSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";

export const register = async (values: z.infer<typeof ResisterSchema>) => {
    const validateFields = ResisterSchema.safeParse(values);

    if(!validateFields.success) {
        return { error : "invalid fields!"};
    }

    const { email, password, name } = validateFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await getUserByEmail(email);

    if(existingUser) {
        return { error: "Email already in use!>!>!>!"}
    }

    await db.user.create({
        data: {
            name,
            email,
            password: hashedPassword
        }
    })

    // TODO: send verification token Email

    return { success: "User created!!!"}
    // revalidatePath()
    // revalidateTag()
}