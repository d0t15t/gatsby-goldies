/* eslint-disable camelcase */
import React, { FC, useContext, useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import cls from 'classnames';
import { useDimensions } from 'react-hook-dimensions';
import { Typography } from '@mui/material';
import { Context, useDispatch } from '~context';
import { useLocation } from '~hooks';
import { Breadcrumbs, Link, EmojiPointer, SocialBlock } from '~components';

//* @var PU */ Page Utilities */
import * as PU from './index';

//* @var S */ Styled components */
import * as S from './Page.styled';

const PageWrapper: FC<PageWrapper> = ({ data, location }) => {
  
  const path = location.pathname;

  const [context, dispatch] = useContext(Context);
  const [ref, box] = useDimensions({
    dependencies: [],
  });

  useEffect(() => useDispatch('pageDimensions', box, dispatch), [box, dispatch]);

  // const location = useLocation();

  // useEffect(() => useDispatch('currentPage', location, dispatch), [dispatch, location]);
  //useDispatch('breadcrumbs', )

  const node = PU.getNode(data);

  const { headerData, bodyData, footerData } = PU.getPageNodeData(node);
  const breadcrumbs = PU.getBreadcrumbs(node); 

  const getPageBodyTemplate = (data, type) => {
    const pageBodyTemplate = {
      node__page: () => {
        return <PU.Tiles {...data} />;
      },
      node__collection: () => {
        return <PU.Collection {...data} />;
      },
      node__product: () => {
        return <PU.Product {...data} />;
      },
    };
    return type in pageBodyTemplate ? pageBodyTemplate[type]() : null;
  };

  const hasShiftedHeadline = PU.hasShiftedHeadline(path);

  return node ? (
    <S.Page className="page-root">
      <PU.PageHeader {...headerData} hasShiftedHeadline={hasShiftedHeadline}/>

      <Breadcrumbs breadcrumbs={breadcrumbs} />

      <div id="main-content" ref={ref}>
        {getPageBodyTemplate(bodyData, node.internal.type)}
      </div>
      {path === '/' && (
        <S.PageBreak
          className={cls(
            'page-break'
            // pbHidden && 'hidden'
          )}
        >
          <EmojiPointer />
        </S.PageBreak>
      )}
      <SocialBlock />
    </S.Page>
  ) : null;
};

export default PageWrapper;

export const query = graphql`
  query ($id: String) {
    ...pageTilesFragment
    ...collectionPageFragment
    ...productPageFragment
    ...breadcrumbsFragment
  }
`;
