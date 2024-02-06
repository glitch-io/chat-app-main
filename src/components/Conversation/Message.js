import { Box, Stack } from "@mui/material";
import { Chat_History } from "../../data/index";
import {
  DocMsg,
  LinkMsg,
  MediaMsg,
  ReplyMsg,
  TextMsg,
  TimeLine,
} from "./MsgTypes";
function Message() {
  return (
    <Box
      width={"100%"}
      sx={{ flexGrow: 1, height: "100%", overflow: "scroll" }}
    >
      <Box p={3}>
        <Stack spacing={3}>
          {Chat_History.map((el) => {
            switch (el.type) {
              case "divider":
                return <TimeLine el={el} />;
              case "msg":
                switch (el.subtype) {
                  case "img":
                    return <MediaMsg el={el} />;
                  case "doc":
                    return <DocMsg el={el} />;
                  case "link":
                    return <LinkMsg el={el} />;
                  case "reply":
                    return <ReplyMsg el={el} />;
                  default:
                    //msg
                    return <TextMsg el={el} />;
                }
                break;
              default:
                return <></>;
            }
          })}
        </Stack>
      </Box>
    </Box>
  );
}

export default Message;
