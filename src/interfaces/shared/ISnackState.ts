import { SnackbarOrigin } from "@mui/material";

export interface ISnackState extends SnackbarOrigin {
  open?: boolean,
  severity: 'success' | 'error' | 'warning',
  message: string,

}
