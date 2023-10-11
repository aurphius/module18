import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req, res) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const reqBody = await req.json();

    const prisma = new PrismaClient();

    // create a record in post model
    let result = await prisma.post.create({
      data: reqBody,
    });

    // read a record from post model
    result = await prisma.post.findUnique({
      where: {
        id: 99,
      },
    });

    // update a record in post model
    result = await prisma.post.update({
      where: {
        id: id,
      },
      data: { content: "Updated content" },
    });

    // delete a record from post model
    result = await prisma.post.delete({
      where: {
        id: 99,
      },
    });

    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "failed", data: e });
  }
}
