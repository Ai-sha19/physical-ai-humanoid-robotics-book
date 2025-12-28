// src\theme/Navbar/index.tsx
import React from 'react';
import clsx from 'clsx';
import {
  useThemeConfig,
  useMobileSecondaryMenuHeight,
} from '@docusaurus/theme-common';
import {
  splitNavbarItems,
} from '@docusaurus/theme-common/internal';
import { useNavbarMobileSidebar } from '@docusaurus/theme-common/internal';
import NavbarLayout from '@theme/Navbar/Layout';
import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle';
import NavbarLogo from '@theme/Navbar/Logo';
import NavbarContentLayout from '@theme/Navbar/Content/Layout';
import NavbarItem from '@theme/NavbarItem';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import SearchBar from '@theme/SearchBar';
import NavbarSearch from '@theme/Navbar/Search';
import UserProfileButton from './UserProfileButton';

// Define a custom hook to get navbar items from theme config
function useNavbarItems() {
  const { navbar: { items } } = useThemeConfig();
  return items || [];
}

function NavbarContent() {
  const mobileSidebar = useNavbarMobileSidebar();
  const {items: _items} = useThemeConfig();

  const items = useNavbarItems();
  const mobileOpts = _items?.filter(item => item.type === 'search') || [];
  const [leftItems, rightItems] = splitNavbarItems(items);

  const hasSearchItem = mobileOpts.length > 0;

  return (
    <NavbarContentLayout
      left={
        <>
          {!mobileSidebar.disabled && <NavbarMobileSidebarToggle />}
          <NavbarLogo />
          {leftItems.map((item, i) => (
            <NavbarItem {...item} key={i} />
          ))}
        </>
      }
      right={
        <>
          {rightItems.map((item, i) => (
            <NavbarItem {...item} key={i} />
          ))}
          <NavbarColorModeToggle />
          {!hasSearchItem && (
            <NavbarSearch>
              <SearchBar />
            </NavbarSearch>
          )}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            height: '100%',
            paddingLeft: '0.5rem',
          }}>
            <UserProfileButton />
          </div>
        </>
      }
    />
  );
}

export default function Navbar(): JSX.Element {
  return (
    <NavbarLayout>
      <NavbarContent />
    </NavbarLayout>
  );
}
