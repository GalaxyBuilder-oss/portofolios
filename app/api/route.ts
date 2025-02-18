import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        message: "Galaxy Builder API",
        info: {
            version: "2.0.0",
            description: "This is the API for Galaxy Builder",
            build: "2024-11-12",
            status: "stable",
            endpoints: [
                {
                    path: "/api/v1",
                    description: "Returns API v1 information",
                },
                {
                    path: "/api/v2",
                    description: "Returns API v2 information",
                }
            ]
        }
    });
}
