import { Injectable } from "@nestjs/common";
import { Time } from "./models/time.model";

@Injectable()
export class TimeService {
    private readonly time: Date;
    constructor() {
        this.time = new Date()
    }
    async getDate(): Promise<Time>{
        return { value: this.time }
    }
}
