import { Router } from "express";
import role from "../utils/role";
import auth from "../utils/auth";
import buildController from "../controller/building";
var router = Router();

router.post("/", auth.required, async (req, res, next) => {
  if (!role.isAdmin(req.payload.username)) {
    return createError(403, "No permission.");
  }
  buildController.createBuilding(req, res, next);
});

router.get("/", auth.required, async (req, res, next) => {
  if (!role.isAdmin(req.payload.username)) {
    return createError(403, "No permission.");
  }
  buildController.getBuildingList(req, res, next);
});

router.get("/:id", auth.required, async (req, res, next) => {
  if (!role.isAdmin(req.payload.username)) {
    return createError(403, "No permission.");
  }
  buildController.getBuilding(req, res, next);
});

router.delete("/", auth.required, async (req, res, next) => {
  if (!role.isAdmin(req.payload.username)) {
    return createError(403, "No permission.");
  }
  buildController.deleteBuilding(req, res, next);
});

export default router;
