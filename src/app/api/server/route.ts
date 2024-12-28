import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../prisma/client";
import conditionData from "@/app/api/server/helpers/conditionsData/conditionData";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const conditions = conditionData({ searchParams });

  const data = await prisma.products.findMany({
    where: conditions,
  });

  return NextResponse.json(
    { conditions, dataLemgth: data.length, data },
    { status: 200 }
  );
}
