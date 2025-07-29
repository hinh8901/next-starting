import { promises } from "fs"
import { NextResponse } from "next/server"
import path from "path"

export const GET = async () => {
  await new Promise((resolve) => setTimeout(() => resolve(""), 3000))

  const filePath = path.join(process.cwd(), "app", "api", "colors", "data.json")
  const data = await promises.readFile(filePath, "utf-8")
  const colors = JSON.parse(data)

  return NextResponse.json(colors)
}
