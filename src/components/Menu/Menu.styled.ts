import styled from 'styled-components';
import { Box, Divider, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';

export const Menu = styled(List)`
  display: ${(props) => {
    const { vertical: v } = props;
    return v === 1 ? 'inherit' : 'flex';
  }};
`;
