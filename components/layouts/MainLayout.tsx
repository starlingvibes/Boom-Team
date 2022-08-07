import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { NextComponentType } from 'next';
import Navbar from './partials/Navbar';
import Footer from './partials/Footer';
import Login from './partials/login.component';
// import './partials/styles/App.css';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'Boom Team!' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <Navbar />
    {children}
    <Login />
    <Footer />
  </div>
);

export default Layout;
