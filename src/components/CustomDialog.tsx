import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "../styles/CustomDialog.scss"; // Import custom styles
import GEEMap from '../assets/RioGrandeDoSulFlood.png'

interface CustomDialogProps {
  title: string;
  content: React.ReactNode;
  open: boolean;  
  onClose: () => void;
}


const CustomDialog: React.FC<CustomDialogProps> = ({ title, content, open, onClose }) => {
    return (
      <Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth>
        <DialogTitle className="dialog-title">
          {title}
          <IconButton className="close-btn" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
  
        <DialogContent className="dialog-content">
          {content}
        </DialogContent>
      </Dialog>
    );
  
};

export default CustomDialog;
