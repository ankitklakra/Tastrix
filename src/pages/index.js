import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';

import Banner from 'sections/banner';
import Services from 'sections/services';
import Testimonials from 'sections/testimonials';
import CustomerSupport from 'sections/customer-support';
import Feature from 'sections/feature';
import VideoOne from 'sections/video-one';
import CallToAction from 'sections/call-to-action';
import BoostAgencies from 'sections/boost-agencies';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Tastrix" />
          <Banner />
          <Services />
          <BoostAgencies />
          <Feature />
          <CallToAction />
          {/* <VideoOne /> */}
          <Testimonials />
          <CustomerSupport />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
