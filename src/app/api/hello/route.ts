import { NextResponse } from "next/server";
import DB from "../../lib/db";

export async function GET() {
  let ps_products = [];
  try {
    ps_products = await DB.getInstance().query(
      "SELECT * FROM ps_product LIMIT 10"
    );
  } catch (error) {
    console.log(error);
  }
  return NextResponse.json({ foo: ps_products });
}

export const revalidate = 10;
