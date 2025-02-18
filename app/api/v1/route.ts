import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        message: "Galaxy Builder API v1",
        info: {
            version: "2.0.0",
            description: "This is the API for Galaxy Builder",
            build: "2024-11-21",
            status: "not stable",
            endpoints: [
                {
                    method: "GET",
                    path: "/api/v1",
                    description: "Returns API information",
                    authentication: false
                },

            ]
        }
    });
}
