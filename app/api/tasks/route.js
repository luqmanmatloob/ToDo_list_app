import connectMongoDB from "@/libs/mongodb";
import Task from "@/models/task";
import { NextResponse } from "next/server";

export async function POST(request) {
  const {title, description, description2, userid} = await request.json();
  await connectMongoDB();
  await Task.create({ title, description, userid});
  console.log(`this is the id came from client cookies in api tasks routepage post method, ${userid}, ${title}, ${description}`)
  return NextResponse.json({ message: "Task Created" }, { status: 201 });

 }

export async function GET() {
  await connectMongoDB();
  const tasks = await Task.find();
  return NextResponse.json({ tasks });
}
