import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req, res) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const reqBody = await req.json();

    const prisma = new PrismaClient();

    // create a record in post_tag model
    let result = await prisma.post_tag.create({
      data: reqBody,
    });

    // read a record from post_tag model
    result = await prisma.post_tag.findUnique({
      where: {
        AND: [{ postId: 99 }, { tagId: 99 }],
      },
    });

    // update a record in post_tag model
    result = await prisma.post_tag.update({
      where: {
        AND: [{ postId: 99 }, { tagId: 99 }],
      },
      data: { tagId: 100 },
    });

    // delete a record from post_tag model
    result = await prisma.post_tag.delete({
      where: {
        AND: [{ postId: 99 }, { tagId: 99 }],
      },
    });

    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "failed", data: e });
  }
}
