import { NextResponse } from "next/server";

export async function GET() {
    try {
        // Creating response.
        const response = NextResponse.json(
            {
                message: "Logout Successful.",
                success: true,
            }
        )
        // Our response is interacting with cookies.
        response.cookies.set("token", "", {
            httpOnly: true, expires: new Date(0)
        })
        // returning the response.
        return response
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}