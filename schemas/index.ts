import * as z from "zod";

export const ResetSchema = z.object({
    email: z.string().email({
        message: "Email is required you should fix"
    })
    // password: z.string().min(6, {
    //     message: "Password is required you should fix"
    // }) // password 길이 세팅 가능 최소 길이 제한 XX
});

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email is required you should fix"
    }),
    password: z.string().min(6, {
        message: "Password is required you should fix"
    }) // password 길이 세팅 가능 최소 길이 제한 XX
});

export const NewLoginSchema = z.object({
    id: z.string({
        message: "this new type Id!!"
    }),
    email: z.string().email({
        message: "Email is required you should fix"
    }),
    password: z.string().min(6, {
        message: "Password is required you should fix"
    }) // password 길이 세팅 가능 최소 길이 제한 XX
})

export const ResisterSchema = z.object({
    email: z.string().email({
        message: "Email is required you should fix"
    }),
    password: z.string().min(6, {
        message: "Minimum 6 characters required"
    }), // password 길이 세팅 가능 최소 길이 제한 XX
    name: z.string().min(1, {
        message: "name is required"
    })
});