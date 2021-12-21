import React from "react";
import { io } from "socket.io-client";
import { CONNECTION_PORT } from "../constants/global";

export const socket = io(CONNECTION_PORT);
export const SocketContext = React.createContext();
