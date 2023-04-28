import PropTypes from 'prop-types';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
// @mui
import { Collapse } from '@mui/material';
// hooks
import useActiveLink from 'src/hooks/useActiveLink';
// components
import { NavSectionVertical } from 'src/components/nav-section';
//
import NavItem from './NavItem';

// ----------------------------------------------------------------------

export default function NavList({ item }) {
  const { pathname } = useLocation();

  const { path, children } = item;

  const { isExternalLink } = useActiveLink(path);

  const [open, setOpen] = useState(false);

  return (
    <>
      <NavItem
        item={item}
        open={open}
        onClick={() => setOpen(!open)}
        active={pathname === path}
        isExternalLink={isExternalLink}
      />

      {!!children && (
        <Collapse in={open} unmountOnExit>
          <NavSectionVertical data={children} />
        </Collapse>
      )}
    </>
  );
}

NavList.propTypes = {
  item: PropTypes.object,
};
