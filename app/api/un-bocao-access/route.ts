import { NextResponse } from 'next/server';

/**
 * Public API endpoint that always returns access: false
 * Handles all HTTP methods (GET, POST, PUT, DELETE, etc.)
 */

// Handle GET requests
export async function GET() {
  return NextResponse.json({ access: false }, { status: 200 });
}

// Handle POST requests
export async function POST() {
  return NextResponse.json({ access: false }, { status: 200 });
}

// Handle PUT requests
export async function PUT() {
  return NextResponse.json({ access: false }, { status: 200 });
}

// Handle DELETE requests
export async function DELETE() {
  return NextResponse.json({ access: false }, { status: 200 });
}

// Handle PATCH requests
export async function PATCH() {
  return NextResponse.json({ access: false }, { status: 200 });
}

// Handle HEAD requests
export async function HEAD() {
  return new NextResponse(null, { status: 200 });
}

// Handle OPTIONS requests
export async function OPTIONS() {
  return NextResponse.json({ access: false }, { status: 200 });
}
