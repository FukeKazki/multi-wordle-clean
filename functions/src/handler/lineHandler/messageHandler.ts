import { lineClient } from "@/external/line";
import { textUseCase } from "@/interactor/textUseCase";
import { RoomRepository } from "@/room/RoomRepository";
import { RoomService } from "@/room/RoomService";
import { MessageEvent } from "@line/bot-sdk";
import { app } from "@/external/firebase";
export const messagesHandler = async (event: MessageEvent): Promise<void> => {
  switch (event.message.type) {
    case "text":
      if (event.message.type !== "text") return;
      if (event.source.type === "group") {
        const { groupId, userId } = event.source;
        if (!userId) return;

        const text = event.message.text;
        const replyToken = event.replyToken;

        const roomRepository = new RoomRepository(app);
        const roomService = new RoomService(roomRepository);

        const replyText = await textUseCase(text, userId, groupId, roomService);
        if (!replyText) return;
        lineClient.replyMessage(replyToken, {
          type: "text",
          text: replyText
        });
      }

      if (event.source.type === "room") {
        const { roomId, userId } = event.source;
        if (!userId) return;

        const text = event.message.text;
        const replyToken = event.replyToken;

        const roomRepository = new RoomRepository(app);
        const roomService = new RoomService(roomRepository);

        const replyText = await textUseCase(text, userId, roomId, roomService);
        if (!replyText) return;
        lineClient.replyMessage(replyToken, {
          type: "text",
          text: replyText
        });
      }
    default:
      return;
  }
};
