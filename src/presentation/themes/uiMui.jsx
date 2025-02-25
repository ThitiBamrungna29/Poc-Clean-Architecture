import React from "react";
import { Table as MuiTable, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { Button as MuiButton, TextField, Dialog as MuiDialog, Select as MuiSelect, MenuItem } from "@mui/material";
import theme from "./theme";
export const Table = ({ columns = [], data = [] }) => (
  <MuiTable>
    <TableHead>
      <TableRow>
        {columns?.map((col) => (
          <TableCell key={col.key}>{col.title}</TableCell>
        ))}
      </TableRow>
    </TableHead>
    <TableBody>
      {data?.map((row, index) => (
        <TableRow key={index}>
          {columns?.map((col) => (
            <TableCell key={col.key}>{row[col.dataIndex]}</TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  </MuiTable>
);

export const Button = ({ children, type, onClick }) => (
  <MuiButton
    onClick={onClick}
    style={{
      backgroundColor: type === "danger" ? theme.button.dangerBg : theme.button.primaryBg,
      color: "#fff",
    }}
    variant="contained"
  >
    {children}
  </MuiButton>
);

export const Input = (props) => <TextField {...props} />;

export const Modal = ({ open, onClose, children }) => (
  <MuiDialog open={open} onClose={onClose}>
    {children}
  </MuiDialog>
);

export const Select = ({ options, value, onChange }) => (
  <MuiSelect value={value} onChange={onChange}>
    {options.map((option) => (
      <MenuItem key={option.value} value={option.value}>
        {option.label}
      </MenuItem>
    ))}
  </MuiSelect>
);
