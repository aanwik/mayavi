import React, { Suspense } from 'react';
import { useDocumentTitle } from 'xooks';
import ToolCard from './ToolCard/ToolCard';
import settings from '../../settings';
import classes from './Index.styles.less';

const PageBase = React.lazy(() => import('../../components/PageBase/PageBase'));

export default function Index() {
  useDocumentTitle('Mayavi');

  const tools = settings.tools.map((tool) => (
    <ToolCard className={classes.tool} key={tool.name} {...tool} />
  ));

  return (
    <Suspense fallback={
      <div class="loader"></div>
    }>
      <PageBase>
        <div className={classes.tools}>{tools}</div>
      </PageBase>
    </Suspense>
  );
}
