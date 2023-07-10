import Stripe from "stripe";
import { NextResponse, NextRequest } from "next/server";
//@ts-ignore
export async function POST (request) {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY||"",{
        apiVersion: '2022-11-15',
    });
    let data = await request.json();
    let priceId = data.priceId
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price: priceId,
                quantity: 1
            }
        ],
        payment_method_types: ['card'],
        mode: 'payment',
        success_url: 'http://localhost:3000',
        cancel_url: 'http://localhost:3000'
    })

    return NextResponse.json(session.url)
}