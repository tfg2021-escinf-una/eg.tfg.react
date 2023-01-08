import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { forwardRef } from 'react';

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (props, ref) => (
    <MuiAlert elevation={6}
              ref={ref}
              variant="filled" 
              {...props} />
  ));
  