import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notification = (msg: string, type: "success" | "error" | "info") => {
  if (toast[type]) {
    toast[type](msg); // Dynamically invoke the appropriate toast method
  } else {
    console.error("Invalid notification type");
  }
};

export default notification;
