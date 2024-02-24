import { json } from "@sveltejs/kit";
import * as db from "$lib/server/database.js";

export async function GET({ params }) { 
    const orders = await db.readOrders(params.userId);
    return json(orders);
}

export async function POST({ request, cookies, params }) {
    const values = await request.formData();
    const id = "new item id";
    return json({ id }, { status: 201 });
}