import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default () => {
  const ref = useRef(null);
  const history = useHistory(); // A copy of the Browser History OBJECT

  // When a user clicks link governed by Marketing (Memory History)
  // 1. Communicate change up to Container
  // 2. Container's Browser History should update its current path

  /**
   * onNavigate gets called every time some navigation occurs in marketing app
   * Determines where marketing app navigated to and pass that to container
   */
  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;

        // Prevent infinite loop by ensuring new URL is not same as current URL
        if (pathname !== nextPathname) {
          // Tell Browser History to navigate to this new URL
          history.push(nextPathname); 
        }
      },
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};