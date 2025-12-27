import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/physical-ai-humanoid-robotics-book/markdown-page',
    component: ComponentCreator('/physical-ai-humanoid-robotics-book/markdown-page', '8ab'),
    exact: true
  },
  {
    path: '/physical-ai-humanoid-robotics-book/docs',
    component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs', 'e79'),
    routes: [
      {
        path: '/physical-ai-humanoid-robotics-book/docs',
        component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs', '25e'),
        routes: [
          {
            path: '/physical-ai-humanoid-robotics-book/docs',
            component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs', '5f9'),
            routes: [
              {
                path: '/physical-ai-humanoid-robotics-book/docs/',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/', '22d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/category/module-1-ros-2-fundamentals',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/category/module-1-ros-2-fundamentals', '2e2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/category/module-2-gazebo--unity',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/category/module-2-gazebo--unity', 'ad8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/category/module-3-nvidia-isaac',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/category/module-3-nvidia-isaac', 'c0f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/category/module-4-vision-language-action',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/category/module-4-vision-language-action', '143'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/hardware-requirements',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/hardware-requirements', '309'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/module1/week1-intro-physical-ai',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/module1/week1-intro-physical-ai', '4b9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/module1/week2-intro-physical-ai-2',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/module1/week2-intro-physical-ai-2', '74e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/module1/week3-ros-fundamentals',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/module1/week3-ros-fundamentals', 'ec0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/module1/week4-ros-fundamentals-2',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/module1/week4-ros-fundamentals-2', '5d6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/module1/week5-ros-fundamentals-3',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/module1/week5-ros-fundamentals-3', '07c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/module2/week6-gazebo',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/module2/week6-gazebo', 'd10'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/module2/week7-gazebo-unity',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/module2/week7-gazebo-unity', 'ff1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/module3/week10-isaac-3',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/module3/week10-isaac-3', '184'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/module3/week8-isaac',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/module3/week8-isaac', 'fc4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/module3/week9-isaac-2',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/module3/week9-isaac-2', '78b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/module4/week11-humanoid-dev',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/module4/week11-humanoid-dev', '66b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/module4/week12-humanoid-dev-2',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/module4/week12-humanoid-dev-2', '676'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/module4/week13-conversational-robotics',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/module4/week13-conversational-robotics', 'e5a'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/physical-ai-humanoid-robotics-book/',
    component: ComponentCreator('/physical-ai-humanoid-robotics-book/', 'dfb'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
