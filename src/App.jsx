import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import ThemeProvider from './ThemeProvider';
//import AppContainer from './components/AppContainer/AppContainer';

const AppContainer = React.lazy(() => import('./components/AppContainer/AppContainer'));

const Index = React.lazy(() => import('./pages/index/Index'));
const About = React.lazy(() => import('./pages/about/About'));
const NotFound = React.lazy(() => import('./pages/not-found/NotFound'));

const TriangleGenerator = React.lazy(() => import('./apps/triangle-generator/TriangleGenerator'));
const LoremIpsum = React.lazy(() => import('./apps/lorem-ipsum/LoremIpsum'));
const SvgCompressor = React.lazy(() => import('./apps/svg-compressor/SvgCompressor'));
const SvgToJsx = React.lazy(() => import('./apps/svg-to-jsx/SvgToJsx'));
const HtmlSymbols = React.lazy(() => import('./apps/html-symbols/HtmlSymbols'));
const Base64Encoding = React.lazy(() => import('./apps/b64-encoding/B64Encoding'));
const ColorShadesGenerator = React.lazy(() => import('./apps/color-shades-generator/ColorShadesGenerator'));
const PageDividers = React.lazy(() => import('./apps/page-dividers/PageDividers'));
const FakeDataGenerator = React.lazy(() => import('./apps/fake-data-generator/FakeDataGenerator'));
const CssCursors = React.lazy(() => import('./apps/css-cursors/CssCursors'));
const EventsKeycode = React.lazy(() => import('./apps/events-keycode/EventsKeycode'));
const GradientGenerator = React.lazy(() => import('./apps/gradient-generator/GradientGenerator'));

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Suspense fallback={
          <div class="loader"></div>
        }>
          <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/about" exact component={About} />
            <Route>
              <AppContainer>
                <Switch>
                  <Route path="/triangle-generator" exact component={TriangleGenerator} />
                  <Route path="/lorem-ipsum" exact component={LoremIpsum} />
                  <Route path="/svg-compressor" exact component={SvgCompressor} />
                  <Route path="/svg-to-jsx" exact component={SvgToJsx} />
                  <Route path="/html-symbols" exact component={HtmlSymbols} />
                  <Route path="/b64-encoding" exact component={Base64Encoding} />
                  <Route path="/color-shades-generator" exact component={ColorShadesGenerator} />
                  <Route path="/page-dividers" exact component={PageDividers} />
                  <Route path="/fake-data-generator" exact component={FakeDataGenerator} />
                  <Route path="/css-cursors" exact component={CssCursors} />
                  <Route path="/events-keycode" exact component={EventsKeycode} />
                  <Route path="/gradient-generator" exact component={GradientGenerator} />
                  <Route component={NotFound} />
                </Switch>
              </AppContainer>
            </Route>
          </Switch>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default hot(module)(App);
