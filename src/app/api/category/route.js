import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req, res) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const reqBody = await req.json();

    const prisma = new PrismaClient();

    // create a record in category model
    let result = await prisma.category.create({
      data: reqBody,
    });

    // read a record from category model
    result = await prisma.category.findUnique({
      where: {
        id: 99,
      },
    });

    // update a record in category model
    result = await prisma.category.update({
      where: {
        id: id,
      },
      data: { title: "Technology" },
    });

    // delete a record from category model
    result = await prisma.category.delete({
      where: {
        id: 99,
      },
    });

    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "failed", data: e });
  }
}
