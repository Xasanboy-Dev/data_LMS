import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GetAllGroups() {
  try {
    return await prisma.group.findMany();
  } catch (error: any) {
    console.log(error.message);
  }
}

export async function GroupById(id: string) {
  try {
    return await prisma.group.findUnique({ where: { id } })
  } catch (error: any) {
    console.log(error.message);
  }
}

export async function EditGroup(id: string, name: string, direction: string) {
  try {
    return await prisma.group.update({
      where: { id },
      data: { name, direction },
    });
  } catch (error: any) {
    console.log(error.message);
  }
}

export async function removeGroup(id: string) {
  try {
    return await prisma.group.delete({ where: { id } });
  } catch (error: any) {
    console.log(error.message);
  }
}

export async function createGroup(name: string, direction: string) {
  try {
    return await prisma.group.create({ data: { direction, name } });
  } catch (error: any) {
    console.log(error);
  }
}
