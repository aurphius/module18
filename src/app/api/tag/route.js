import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req, res) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const reqBody = await req.json();

    const prisma = new PrismaClient();

    // create a record in tag model
    let result = await prisma.tag.create({
      data: reqBody,
    });

    // read a record from tag model
    result = await prisma.tag.findUnique({
      where: {
        id: 99,
      },
    });

    // update a record in tag model
    result = await prisma.tag.update({
      where: {
        id: id,
      },
      data: { title: "Lifestyle" },
    });

    // delete a record from tag model
    result = await prisma.tag.delete({
      where: {
        id: 99,
      },
    });

    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "failed", data: e });
  }
}
