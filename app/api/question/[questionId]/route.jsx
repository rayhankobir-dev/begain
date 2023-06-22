Prisma
import { Prisma } from '@prisma/client';
const prisma = new PrismaClient()

import { NextRequest, NextResponse } from "next/server";

export const GET = async (request, { params }) => {
    try {
        const { questionId } = params;
        const question = await prisma.question.findUnique({
            where: { id: String(questionId) },
        });
        return NextResponse.json(question)
    }catch(error) {
        return new NextResponse('Something went wrong!', { status: 500 });
    }
}

export const DELETE = async (request, { params }) => {
    const { id } = params;
    try {
      return new NextResponse("Post has been deleted", { status: 200 });
    } catch (err) {
      return new NextResponse("Database Error", { status: 500 });
    }
};