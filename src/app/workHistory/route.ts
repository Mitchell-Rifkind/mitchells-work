import { NextResponse, NextRequest } from "next/server"

// To handle a GET request to /api
export async function GET(_: NextRequest) {
  return NextResponse.json(
    [
        { company: 'Fitch Solutions', title: 'Software Engineer', dateRange: { start: '07-2019', end: '03-2023' } },
        { company: 'Fitch Ratings', title: 'Senior Software Engineer', dateRange: { start: '03-2023', end: 'current' } },
        { company: 'Task Sheriff (Acquired)', title: 'Software Engineer Intern', dateRange: { start: '07-2018', end: '08-2018' } }
    ], { status: 200 })
}
