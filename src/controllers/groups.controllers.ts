import { Request, Response } from "express";
import {
  createGroup,
  EditGroup,
  GetAllGroups,
  GroupById,
  removeGroup,
} from "../services/group.service";

interface GroupDto {
  name: string;
  direction: string;
}

export async function GetGroups(req: Request, res: Response) {
  try {
    res
      .status(200)
      .json({ message: "All groups", groups: await GetAllGroups() });
  } catch (error: any) {
    console.log(error);
    res.status(500).json("Error in Getting groups");
  }
}

export async function GetGroupById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    res
      .status(200)
      .json({ message: "A one group", group: await GroupById(id) });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ message: "Internal error " });
  }
}

export async function postGroup(req: Request, res: Response) {
  try {
    const { name, direction } = req.body;
    res.status(201).json({
      message: "Created Group",
      group: await createGroup(name, direction),
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ message: "Inernal error" });
  }
}

export async function updateGroup(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { name, direction } = req.body;
    if (!(await GroupById(id))) {
      return res.status(400).json({ message: "Your group not found!" });
    }
    res.status(200).json({
      message: "Updated succesfuly",
      group: await EditGroup(id, name, direction),
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ message: "Internal error" });
  }
}

export async function deleteGroup(req: Request, res: Response) {
  try {
    const { id } = req.params;
    res
      .status(200)
      .json({ message: "Deleted succesfully", group: await removeGroup(id) });
  } catch (error: any) {
    console.log(error.message);
    res.status(500).json({ message: "Internal error" });
  }
}
