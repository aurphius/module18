import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req, res) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const reqBody = await req.json();

    const prisma = new PrismaClient();

    // create a record in user model
    let result = await prisma.user.create({
      data: reqBody,
    });

    // read a record from user model
    result = await prisma.user.findUnique({
      where: {
        id: 99,
      },
    });

    // update a record in user model
    result = await prisma.user.update({
      where: {
        id: id,
      },
      data: { email: "abc@xyz.com" },
    });

    // delete a record from user model
    result = await prisma.user.delete({
      where: {
        id: 99,
      },
    });

    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "failed", data: e });
  }
}
