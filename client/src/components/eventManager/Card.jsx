import React, { useState } from "react";
import styles from "./EventManager.module.css";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

export default function Card(props) {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    }
    const handleChange = () => {
        setOpen(false);
        props.handleDelete(props.id)
    }
    return (
      <React.Fragment>
        <div className={styles.parentDiv}>
          <div className={styles.cardDiv}>
            <div className={styles.cardDiv2}>
              <img
                srcSet={props.link}
                src={props.link}
                className={styles.cardimg}
              />
              <div className={styles.cardtitle}>{props.title}</div>
            </div>
            <div>
              <div className={styles.artist}>- {props.artist}</div>
            </div>
          </div>
          <button className={styles.editBtn}>Edit</button>
          <button className={styles.removeBtn}
            onClick={handleClickOpen}
          >Remove</button>
        </div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent sx={{ background: "var(--bg-color)", pb: 0 }}>
            <DialogContentText
              sx={{ color: "var(--text-color)" }}
              id="alert-dialog-description"
            >
              Do you want to delete this event?
            </DialogContentText>
          </DialogContent>
          <DialogActions
            sx={{ background: "var(--bg-color)", color: "var(--text-color)" }}
          >
            <Button sx={{ color: "var(--text-color)" }} onClick={handleClose}>
              No
            </Button>
            <Button sx={{ color: "var(--text-color)" }} onClick={handleChange}>
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
}