import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req, res) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const reqBody = await req.json();

    const prisma = new PrismaClient();

    // create a record in post_meta model
    let result = await prisma.post_meta.create({
      data: reqBody,
    });

    // read a record from post_meta model
    result = await prisma.post_meta.findUnique({
      where: {
        id: 99,
      },
    });

    // update a record in post_meta model
    result = await prisma.post_meta.update({
      where: {
        id: id,
      },
      data: { key: "content_creator" },
    });

    // delete a record from post_meta model
    result = await prisma.post_meta.delete({
      where: {
        id: 99,
      },
    });

    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "failed", data: e });
  }
}
