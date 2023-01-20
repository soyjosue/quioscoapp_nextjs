import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) 
{
  if(req.method === 'POST') POST(req, res);
}

const POST = async (req, res) => 
{
  const { idOrden } = req.query;

  const ordenActualizada = await prisma.orden.update({
    where: {
      id: parseInt(idOrden)
    },
    data: {
      estado: true
    }
  })

  res.status(200).json(ordenActualizada);
}