import React from "react";
import { useHistory } from "react-router-dom";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import { IMAGE_URL } from "../../constants/global";
import defaultAvt from "../../assets/images/defaultAvatar.jpeg";
import logoutIcon from "../../assets/images/logout.png";
import "./style.scss";
import { useSelector } from "react-redux";

const Panels = () => {
  const user = useSelector((state) => state.user.user);
  const [open, setOpen] = React.useState(false);
  let history = useHistory();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogOut = () => {
    localStorage.clear();
    history.push("/log-in");
  };

  return (
    <section className="panels">
      <div className="panels__img">
        <img
          src={user.avatar ? `${IMAGE_URL + user.avatar}` : defaultAvt}
          alt="your-avatar"
          className="avatar sidebar-avt"
        />
      </div>
      <div className="panels-username">
        <p>{user.fullName}</p>
        <p className="blur-color__text">{`#${user.userName}`}</p>
      </div>
      <div className="logout" onClick={handleClickOpen}>
        <img src={logoutIcon} id="logout__icon" alt="logout" />
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          style: {
            backgroundColor: "#292b2f",
            color: "white",
          },
        }}
      >
        <DialogTitle
          id="alert-dialog-title"
          style={{ fontFamily: "Lucida Grande" }}
        >
          Đăng xuất
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            color="white"
            style={{ fontFamily: "Lucida Grande" }}
          >
            Bạn có thực sự muốn đăng xuất không?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            color="inherit"
            style={{ fontFamily: "Lucida Grande" }}
          >
            Hủy
          </Button>
          <Button
            onClick={handleLogOut}
            color="secondary"
            autoFocus
            style={{ fontFamily: "Lucida Grande" }}
          >
            Đồng ý
          </Button>
        </DialogActions>
      </Dialog>
    </section>
  );
};

export default Panels;
