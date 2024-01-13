import { NextRequest, NextResponse } from "next/server"
import repo from '@/app/api/utils/prisma'

export const GET = async () => {
    const users = await repo.systemUsers.findMany()
    return NextResponse.json(users)
}

export const POST = async (req: NextRequest) => {
    const user = await repo.systemUsers.create({ data: await req.json() })
    return NextResponse.json(user)
}