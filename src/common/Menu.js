import React from 'react';
import { Appbar } from 'react-native-paper';

const Header = (props) => (
  <Appbar.Header>
     <Appbar.Content title={props.title} subtitle={props.subtitle} />
  </Appbar.Header>
);

export default Header;