import { WebhookEvent } from "@line/bot-sdk";
import { messagesHandler } from "./messageHandler";

export const handler = async (event: WebhookEvent): Promise<void> => {
  try {
    switch (event.type) {
      case "message":
        return await messagesHandler(event);
      default:
    }
  } catch (err) {
    throw new Error("handlers");
  }
};
