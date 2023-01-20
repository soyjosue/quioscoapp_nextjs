import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default function handler(req, res) 
{
  if(req.method === 'GET') GET(req, res);
  if(req.method === 'POST') POST(req, res);
}

// Obtener
const GET = async (req, res) =>
{
  var ordenes = await prisma.orden.findMany({
    where: {
      estado: false
    }
  });

  res.status(200).json(ordenes);
}

// Crear
const POST = async (req, res) => 
{
  const orden = await prisma.orden.create({
    data : {
      nombre : req.body.nombre,
      total : req.body.total,
      pedido : req.body.pedido,
      fecha : req.body.fecha
    }
  });

  res.status(200).json(orden);
}