import { NextResponse } from "next/server";
import axios from "axios";

const BASE_URL = process.env.MOCKUP_API_URL as string;

export async function GET() {
    try {
    const res = await axios.get(BASE_URL);
    // console.log(res.data)
    return NextResponse.json(res.data);
    } catch (e) {
        return NextResponse.json(e)
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const res = await axios.post(BASE_URL, body);
        return NextResponse.json(res.data);
    } catch (e) {
        return NextResponse.json({ error: 'Failed to post data', detail: e });
    }
}