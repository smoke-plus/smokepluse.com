import fs from 'fs';
import path from 'path';
import Papa from 'papaparse';
import { NextResponse } from 'next/server';

const filePath = path.join(process.cwd(), 'public/assets/data/catalog_products.csv');

// Function to read data
const readData = () => {
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(jsonData);
};

const readCSV = () => {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return Papa.parse(fileContent, { header: true }).data;
};

// Function to write data
const writeData = (data: any) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

// Handle GET requests (Fetch data)
export async function GET() {
  const result = NextResponse.json(readCSV());
  return result;
}

// Handle POST requests (Update data)
export async function POST(req: any) {
  const body = await req.json();
  const data = readData();
  const newData = { ...data, name: body.name || data.name };

  writeData(newData);

  return NextResponse.json({ message: 'Data updated successfully!', newData });
}
