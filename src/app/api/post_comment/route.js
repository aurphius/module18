import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req, res) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const reqBody = await req.json();

    const prisma = new PrismaClient();

    // create a record in post_comment model
    let result = await prisma.post_comment.create({
      data: reqBody,
    });

    // read a record from post_comment model
    result = await prisma.post_comment.findUnique({
      where: {
        id: 99,
      },
    });

    // update a record in post_comment model
    result = await prisma.post_comment.update({
      where: {
        id: id,
      },
      data: { title: "A new title" },
    });

    // delete a record from post_comment model
    result = await prisma.post_comment.delete({
      where: {
        id: 99,
      },
    });

    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "failed", data: e });
  }
}
