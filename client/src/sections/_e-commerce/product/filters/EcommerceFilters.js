import PropTypes from 'prop-types';
import { useState } from 'react';
// @mui
import { Stack, Drawer, Button, Collapse, Typography } from '@mui/material';
// hooks
import useResponsive from 'src/hooks/useResponsive';
// config
import { NAV } from 'src/config-global';
// components
import Iconify from 'src/components/iconify';
//
import {
  EcommerceFilterTag,
  EcommerceFilterBrand,
  EcommerceFilterPrice,
  EcommerceFilterStock,
  EcommerceFilterRating,
  EcommerceFilterCategory,
  EcommerceFilterShipping,
} from './components';

// ----------------------------------------------------------------------

const BRAND_OPTIONS = ['Apple', 'Samsung', 'Xiaomi', 'Honor'];

const CATEGORY_OPTIONS = [
  'Apple iPhone',
  'Samsung Galaxy',
  'Nike Air Max',
  'Adidas Ultraboost',
  'Sony PlayStation',
];

const SHIPPING_OPTIONS = ['Fast', 'Saving', 'Free'];

const TAG_OPTIONS = ['Books and Media', 'Pet', 'Electronics', 'Food', 'Automotive and Industrial'];

// ----------------------------------------------------------------------

const defaultValues = {
  filterBrand: [BRAND_OPTIONS[1]],
  filterCategories: '',
  filterRating: null,
  filterStock: false,
  filterShipping: [],
  filterTag: [],
  filterPrice: {
    start: 0,
    end: 0,
  },
};

export default function EcommerceFilters({ mobileOpen, onMobileClose }) {
  const isMdUp = useResponsive('up', 'md');

  const [filters, setFilters] = useState(defaultValues);

  const getSelected = (selectedItems, item) =>
    selectedItems.includes(item)
      ? selectedItems.filter((value) => value !== item)
      : [...selectedItems, item];

  const handleChangeCategories = (name) => {
    setFilters({
      ...filters,
      filterCategories: name,
    });
  };

  const handleChangeBrand = (name) => {
    setFilters({
      ...filters,
      filterBrand: getSelected(filters.filterBrand, name),
    });
  };

  const handleChangeShipping = (name) => {
    setFilters({
      ...filters,
      filterShipping: getSelected(filters.filterShipping, name),
    });
  };

  const handleChangeTag = (name) => {
    setFilters({
      ...filters,
      filterTag: getSelected(filters.filterTag, name),
    });
  };

  const handleChangeRating = (event) => {
    setFilters({
      ...filters,
      filterRating: event.target.value,
    });
  };

  const handleChangeStartPrice = (event) => {
    setFilters({
      ...filters,
      filterPrice: {
        ...filters.filterPrice,
        start: Number(event.target.value),
      },
    });
  };

  const handleChangeEndPrice = (event) => {
    setFilters({
      ...filters,
      filterPrice: {
        ...filters.filterPrice,
        end: Number(event.target.value),
      },
    });
  };

  const handleChangeStock = (event) => {
    setFilters({
      ...filters,
      filterStock: event.target.checked,
    });
  };

  const handleClearAll = () => {
    setFilters(defaultValues);
  };

  const renderContent = (
    <Stack
      spacing={3}
      alignItems="flex-start"
      sx={{
        flexShrink: 0,
        width: { xs: 1, md: NAV.W_DRAWER },
      }}
    >
      <Block title="Category">
        <EcommerceFilterCategory
          filterCategories={filters.filterCategories}
          onChangeCategories={handleChangeCategories}
          options={CATEGORY_OPTIONS}
          sx={{ mt: 2 }}
        />
      </Block>

      <Block title="Brand">
        <EcommerceFilterBrand
          filterBrand={filters.filterBrand}
          onChangeBrand={handleChangeBrand}
          options={BRAND_OPTIONS}
          sx={{ mt: 1 }}
        />
      </Block>

      <Block title="Price">
        <EcommerceFilterPrice
          filterPrice={filters.filterPrice}
          onChangeStartPrice={handleChangeStartPrice}
          onChangeEndPrice={handleChangeEndPrice}
          sx={{ mt: 2 }}
        />
      </Block>

      <Block title="Shipping">
        <EcommerceFilterShipping
          filterShipping={filters.filterShipping}
          onChangeShipping={handleChangeShipping}
          options={SHIPPING_OPTIONS}
          sx={{ mt: 1 }}
        />
      </Block>

      <Block title="Ratings">
        <EcommerceFilterRating
          filterRating={filters.filterRating}
          onChangeRating={handleChangeRating}
          sx={{ mt: 2 }}
        />
      </Block>

      <EcommerceFilterStock filterStock={filters.filterStock} onChangeStock={handleChangeStock} />

      <Block title="Tags">
        <EcommerceFilterTag
          filterTag={filters.filterTag}
          onChangeTag={handleChangeTag}
          options={TAG_OPTIONS}
          sx={{ mt: 2 }}
        />
      </Block>

      <Button
        fullWidth
        color="inherit"
        size="large"
        variant="contained"
        startIcon={<Iconify icon="carbon:trash-can" />}
        onClick={handleClearAll}
      >
        Clear All
      </Button>
    </Stack>
  );

  return (
    <>
      {isMdUp ? (
        renderContent
      ) : (
        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={onMobileClose}
          ModalProps={{ keepMounted: true }}
          PaperProps={{
            sx: {
              pt: 3,
              px: 3,
              width: NAV.W_DRAWER,
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </>
  );
}

EcommerceFilters.propTypes = {
  mobileOpen: PropTypes.bool,
  onMobileClose: PropTypes.func,
};

// ----------------------------------------------------------------------

function Block({ title, children, ...other }) {
  const [checked, setChecked] = useState(true);

  const handleOpen = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Stack alignItems="flex-start" sx={{ width: 1 }} {...other}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        onClick={handleOpen}
        sx={{ width: 1, cursor: 'pointer' }}
      >
        <Typography variant="h6">{title}</Typography>

        <Iconify
          icon={checked ? 'carbon:subtract' : 'carbon:add'}
          sx={{ color: 'text.secondary' }}
        />
      </Stack>

      <Collapse unmountOnExit in={checked} sx={{ px: 0.5 }}>
        {children}
      </Collapse>
    </Stack>
  );
}

Block.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};
