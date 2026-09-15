import { NextResponse } from "next/server";
import { getProjects } from "@/lib/project-db";
import { ErrorNormalizer } from "@/lib/errors/ErrorNormalizer";


export async function GET(request: Request) {
    try {
        // Get query parameters from the request URL
        const url = new URL(request.url);
        const type = url.searchParams.get("type");
        const projects = await getProjects(type);
        return NextResponse.json(projects);

    } catch (err) {
        // normalize the error using the ErrorNormalizer function to provide a consistent error response
        const normalize = ErrorNormalizer(err as Error);
        // return a JSON response with the normalized error message and code
        return NextResponse.json({
            error: normalize.message
        }, { status: normalize.code });
    }
}