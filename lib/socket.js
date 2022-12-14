import { io } from "socket.io-client";

export const socket = io("https://pixsells.herokuapp.com/");

export const pixelPainted = ({ x, y, color }) => {
  socket.emit(
    "pixelPainted",
    JSON.stringify({
      x,
      y,
      color: color.currentColor,
    })
  );
};

export const handleNewMessage = (thing) => {
  console.log(thing);
};