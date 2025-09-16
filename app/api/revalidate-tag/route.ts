import { revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

export const POST = async (request: Request) => {
  const body = await request.json();
  const tag = body.tag;

  revalidateTag(tag);

  return NextResponse.json({ revalidated: true, tag });
};
