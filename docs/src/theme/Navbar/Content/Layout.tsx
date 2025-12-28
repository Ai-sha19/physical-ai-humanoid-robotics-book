/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import {useThemeConfig, ThemeClassNames} from '@docusaurus/theme-common';
import styles from './styles.module.css';

export default function NavbarContentLayout({
  left,
  right,
}: {
  left: ReactNode;
  right: ReactNode;
}): ReactNode {
  const {navbar: {hideOnScroll}} = useThemeConfig();
  return (
    <div
      className={clsx(
        'navbar__inner',
        hideOnScroll && styles.navbarInner,
      )}>
      <div
        className={clsx(
          ThemeClassNames.layout.navbarContainerLeft,
          'navbar__items',
        )}>
        {left}
      </div>
      <div
        className={clsx(
          ThemeClassNames.layout.navbarContainerRight,
          'navbar__items navbar__items--right',
        )}>
        {right}
      </div>
    </div>
  );
}