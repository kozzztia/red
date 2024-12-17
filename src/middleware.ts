import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    console.log("middleware");

    return NextResponse.next();
}

export const config = {
    matcher: ['/items/:item', '/products'], // Указываем маршруты для перехвата
};
