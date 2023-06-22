
import prisma from '../../libs/prismadb'
import { NextResponse } from 'next/server'

export async function GET(request) {
    try {
        const questions = await prisma.question.findMany({
            include: {
                user: {
                    select: {
                        name: true,
                        image: true,
                    },
                },
                answers: true,
            },
        });
        return NextResponse.json(questions);
    }catch(error) {
        return new NextResponse('Something went wrong!', { status: 500 });
    }
}

export async function POST(request){
    try {
        const { userId, title, content, tags } = await request.json();

        const question = await prisma.question.create({
            data: {
                title,
                content,
                tags,
                authorId: userId,
            }
        });

        return NextResponse.json(question)
    }catch(error) {
        return new NextResponse('Failed to post your question!', { status: 500 });
    }
}

