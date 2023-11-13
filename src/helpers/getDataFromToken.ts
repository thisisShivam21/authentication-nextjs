import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const getDataFromToken = (request: NextRequest) => {
    try {
        // Request cookie to get the token value.
        const token = request.cookies.get("token")?.value || ''
        
        // Verifying the token.
        const decodedToken:any = jwt.verify(token, process.env.TOKEN_SECRET!)

        return decodedToken.id
    } catch (error: any) {
        throw new Error(error.message)
    }
}