import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req, res) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const reqBody = await req.json();

    const prisma = new PrismaClient();

    // create a record in post_category model
    let result = await prisma.post_category.create({
      data: reqBody,
    });

    // read a record from post_category model
    result = await prisma.post_category.findUnique({
      where: {
        AND: [{ postId: 99 }, { categoryId: 99 }],
      },
    });

    // update a record in post_category model
    result = await prisma.post_category.update({
      where: {
        AND: [{ postId: 99 }, { categoryId: 99 }],
      },
      data: { tagId: 100 },
    });

    // delete a record from post_category model
    result = await prisma.post_category.delete({
      where: {
        AND: [{ postId: 99 }, { categoryId: 99 }],
      },
    });

    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "failed", data: e });
  }
}
