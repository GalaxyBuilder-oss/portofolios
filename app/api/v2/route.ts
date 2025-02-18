import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        message: "Galaxy Builder API v2",
        info: {
            version: "2.0.0",
            description: "This is the API for Galaxy Builder",
            build: "2025-01-18",
            status: "stable",
            endpoints: [
                {
                    method: "GET",
                    path: "/api/v2",
                    description: "Returns API information",
                    authentication: false
                },
                {
                    essentials: [
                        {
                            method: "POST",
                            path: "/api/v2/auth/login",
                            authentication: false,
                        }
                    ],
                    users: [
                        {
                            method: "GET",
                            path: "/api/v2/users",
                            description: "Returns logged in users",
                            authentication: true
                        },
                        {
                            method: "PUT",
                            path: "/api/v2/users/:id",
                            description: "Updates user information",
                            authentication: true
                        },
                        {
                            method: "DELETE",
                            path: "/api/v2/users/:id",
                            description: "Deletes a user",
                            authentication: true
                        }
                    ],
                    portfolios: [
                        {
                            method: "GET",
                            path: "/api/v2/portfolios",
                            description: "Returns all portfolios",
                            authentication: false
                        },
                        {
                            method: "GET",
                            path: "/api/v2/portfolios/:id",
                            description: "Returns a single portfolio",
                            authentication: false
                        },
                        {
                            method: "POST",
                            path: "/api/v2/portfolios",
                            description: "Creates a new portfolio",
                            authentication: true
                        },
                        {
                            method: "PUT",
                            path: "/api/v2/portfolios/:id",
                            description: "Updates a portfolio",
                            authentication: true
                        },
                        {
                            method: "DELETE",
                            path: "/api/v2/portfolios/:id",
                            description: "Deletes a portfolio",
                            authentication: true
                        }
                    ]
                }
            ]
        }
    });
}
