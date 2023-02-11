import { Router } from "express";
import {
  deleteGroup,
  GetGroupById,
  GetGroups,
  postGroup,
  updateGroup,
} from "./../controllers/groups.controllers";

const router = Router();

router.get("/", GetGroups);
router.post("/", postGroup);
router.put("/:id", updateGroup);
router.delete("/:id", deleteGroup);
router.get("/:id", GetGroupById);

export default router;
