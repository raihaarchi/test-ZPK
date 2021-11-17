import styled, { CreateStyled } from '@emotion/styled';
import theme from 'styled/theme';

type Theme = {
  colors: typeof theme.colors;
  screens: typeof theme.screens;
  typography: typeof theme.typography;
};

export default styled as CreateStyled<Theme>;
