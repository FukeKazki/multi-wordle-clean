import { lineConfig } from "@/config/line";
import { Client } from "@line/bot-sdk";

export const lineClient = new Client(lineConfig);
