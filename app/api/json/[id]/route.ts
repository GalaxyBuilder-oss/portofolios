import axios from 'axios';
import {NextResponse, NextRequest} from 'next/server';

const BASE_URL = process.env.MOCKUP_API_URL as string;

export async function GET(
    _req: Request,
    context: { params: { id: string } }
) {
    try {
        const res = await axios.get(`${BASE_URL}/${context.params.id}`);
        return NextResponse.json(res.data);
    } catch (e) {
        return NextResponse.json({error: 'Failed to fetch data by ID', detail: e});
    }
}

export async function PUT(request: Request, context: { params: { id: string } }) {
    try {
        const body = await request.json();
        const res = await axios.put(`${BASE_URL}/${context.params.id}`, body);
        return NextResponse.json(res.data);
    } catch (e) {
        return NextResponse.json({error: 'Failed to update data', detail: e});
    }
}

export async function DELETE(_: Request, context: { params: { id: string } }) {
    try {
        const res = await axios.delete(`${BASE_URL}/${context.params.id}`);
        return NextResponse.json({success: true, deleted: res.data});
    } catch (e) {
        return NextResponse.json({error: 'Failed to delete data', detail: e});
    }
}
