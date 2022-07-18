import db from "../models/index.cjs";
import { Services } from "./Services.js";

export class EnrollServices extends Services {
    constructor() {
        super("Enrolls")
    };
};