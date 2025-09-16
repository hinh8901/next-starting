import { NextRequest, NextResponse } from 'next/server';

import { promises } from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'app', 'api', 'todos', 'data.json');

export const GET = async () => {
  await new Promise((resolve) => setTimeout(() => resolve(''), 1000));
  const data = await promises.readFile(filePath, 'utf-8');
  const todos = JSON.parse(data || '[]');

  return NextResponse.json(todos);
};

export const POST = async (req: NextRequest) => {
  try {
    await new Promise((res) => setTimeout(res, 2000));

    const body = await req.json();

    if ((body.todo as string)?.startsWith('Lorem'))
      return NextResponse.json({ message: 'Lỗi server' }, { status: 500 });

    let fileData;

    try {
      fileData = await promises.readFile(filePath, 'utf-8');
    } catch {
      fileData = '[]';
    }

    let jsonArray = [];
    try {
      jsonArray = JSON.parse(fileData || '[]');
    } catch {
      return NextResponse.json(
        { message: 'File JSON bị lỗi' },
        { status: 500 },
      );
    }

    jsonArray = [body, ...jsonArray];

    await promises.writeFile(
      filePath,
      JSON.stringify(jsonArray, null, 2),
      'utf-8',
    );

    return NextResponse.json(
      { message: 'Thêm thành công', data: body },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json({ message: 'Lỗi server', error }, { status: 500 });
  }
};

export const DELETE = async (req: NextRequest) => {
  try {
    await new Promise((res) => setTimeout(res, 2000));

    await promises.writeFile(filePath, JSON.stringify([], null, 2), 'utf-8');
    return NextResponse.json({ message: 'Xóa thành công' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Lỗi server', error }, { status: 500 });
  }
};
