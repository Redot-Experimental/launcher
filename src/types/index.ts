import * as React from "react";

interface NavItem {
  title: string;
  url: string;
  icon: any;
  isActive?: boolean;
  items?: {
    title: string;
    url: string;
  }[];
}

export interface NavMainProps {
  items: Readonly<NavItem[]>;
}

export interface Project {
  name: string;
  url: string;
  icon: string;
}

export interface NavProjectsProps {
  projects: Readonly<Project[]>;
}

export interface User {
  name: string;
  email: string;
  avatar: string;
}

export interface NavUserProps {
  user: Readonly<User>;
}

interface BreadcrumbType {
  href: string;
  label: string;
}

export interface SharedSidebarLayoutProps {
  breadcrumbs: ReadonlyArray<BreadcrumbType>;
  title: string;
  children: React.ReactNode;
}
