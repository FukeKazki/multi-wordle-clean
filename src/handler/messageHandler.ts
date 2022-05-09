import { MessageEvent } from "@line/bot-sdk";

export const messagesHandler = async (event: MessageEvent): Promise<void> => {
  switch (event.message.type) {
    case "text":
      if (event.message.type !== "text") return;
      if (event.source.type !== "group") return;

      const { groupId, userId } = event.source;
      if (!userId) return;

      const text = event.message.text;
      const replyToken = event.replyToken;
    default:
      return;
  }
};
