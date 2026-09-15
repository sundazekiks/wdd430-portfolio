import { NextResponse } from "next/server";
import { getProjectById } from "@/lib/project-db";
import { AppError } from "@/lib/errors/AppError";
import { ErrorNormalizer } from "@/lib/errors/ErrorNormalizer";

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
    try {

        const { id } = await params;
        const numericId = Number(id);

        console.log(Number.isNaN(numericId))
        if (Number.isNaN(numericId)) throw new AppError("Invalid ID", 400) // a check if an id is valid
        const project = await getProjectById(numericId);

        // using a custom error class to throw an error if the project is not found
        if (!project) throw new AppError(`Project with the specified ID not found`, 404);

        return NextResponse.json(project);
    } catch (err) {
        // normalize the error using the ErrorNormalizer function to provide a consistent error response
        const normalize = ErrorNormalizer(err as Error);
        // return a JSON response with the normalized error message and code
        return NextResponse.json({
            error: normalize.message
        }, { status: normalize.code });
    }
}

