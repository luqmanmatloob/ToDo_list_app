import connectMongoDB from "@/libs/mongodb";
import Task from "@/models/task";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await request.json();
  await connectMongoDB();
  await Task.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "Task updated" }, { status: 200 });
}



// export async function GET(request, { params } ) {
  // export async function GET(request) {

  // await connectMongoDB();
  // // const { userid } = params;

  // const { query } = request;
  // const userid = query.userId;

  
  // console.log(`"user id ${userid}"`);
  
  // // Find tasks with the sspecified userid
  // const tasks = await Task.find({ userid: userid });
 
 
  // console.log(`"tasks ${tasks}"`);
  // return NextResponse.json({ tasks }, { status: 200 });
  
  // }

// export async function GET(request, { params }) {
//   const { id } = params;
//   await connectMongoDB();
//   const task = await Task.findOne({ _id: id });
//   return NextResponse.json({ task }, { status: 200 });
// }



// export async function GET(request, { params } ) {
//   await connectMongoDB();
//   const { userid } = params;

//   console.log(userid)

//   // Find tasks with the specified userid
//   const tasks = await Task.find({ userid });
//   console.log(tasks)
//   return NextResponse.json({ tasks }, { status: 200 });
// }









export async function GET(request, { params }) {

  await connectMongoDB();
  const { id } = params;

  
  console.log(`"user id ${id}"`);
  
  // Find tasks with the sspecified userid
  const tasks = await Task.find({ userid: id });
 
  console.log(`"tasks ${tasks}"`);
  return NextResponse.json({ tasks }, { status: 200 });
  
  }


export async function DELETE(request, { params }) {
 const { id } = params;
  ;
  await connectMongoDB();
  await Task.findByIdAndDelete(id);
  return NextResponse.json({ message: "Task deleted" }, { status: 200 });
}



