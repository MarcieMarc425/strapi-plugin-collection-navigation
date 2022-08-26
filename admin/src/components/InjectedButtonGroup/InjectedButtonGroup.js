import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useCMEditViewDataManager } from '@strapi/helper-plugin';
import { useIntl } from 'react-intl';

import getTrad from '../../utils/getTrad';

export const InjectedButtonGroup = () => {
  const { pathname, search } = useLocation();
  const { formatMessage } = useIntl();
  const { initialData } = useCMEditViewDataManager();

  const injectButtons = (isSticky = false) => {
    // Get button injection zone
    const injectZone = isSticky
      ? document.querySelector('[data-strapi-header-sticky]').children[0].children[1]
      : document.querySelector('[data-strapi-header]').children[1].children[1];

    // Is collection type
    const isCollectionType = pathname.split('/')?.[2] === 'collectionType';

    if (injectZone && isCollectionType) {
      let div = document.createElement('div');
      div.id = 'injected-prev-next-buttons';
      div.style = `
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 16px;
        margin-right: 16px;
      `;

      // Button style
      const ButtonStyle = `
        display: inline-flex;
        background: rgb(73, 69, 255);
        align-items: center;
        padding: 8px 16px;
        justify-content: center;
        border: 1px solid rgb(73, 69, 255);
        border-radius: 4px;
        cursor: pointer;
        color: white;
        font-size: 12px;
        font-weight: 600;
      `;

      // Create back to collection button
      let backToCollectionButton = document.createElement('button');
      backToCollectionButton.style = ButtonStyle;
      backToCollectionButton.innerHTML = formatMessage({
        id: getTrad('plugin.cta.back'),
      });
      const newBackPath = window.location.pathname.split('/');
      newBackPath.pop();
      backToCollectionButton.onclick = () => {
        window.location.href = newBackPath.join('/');
      };

      // Create previous button
      let previousButton = document.createElement('button');
      previousButton.style = ButtonStyle;
      previousButton.innerHTML = formatMessage({ id: getTrad('plugin.cta.prev') });
      const newPrevPath = window.location.pathname.split('/');
      newPrevPath[newPrevPath.length - 1] = initialData.id - 1;
      previousButton.addEventListener('click', () => {
        window.location.href = newPrevPath.join('/') + search;
      });

      // Create next button
      let nextButton = document.createElement('div');
      nextButton.style = ButtonStyle;
      nextButton.innerHTML = formatMessage({ id: getTrad('plugin.cta.next') });
      const newNextPath = window.location.pathname.split('/');
      newNextPath[newNextPath.length - 1] = initialData.id + 1;
      nextButton.addEventListener('click', () => {
        window.location.href = newNextPath.join('/') + search;
      });

      // Append buttons to div
      div.appendChild(backToCollectionButton);
      div.appendChild(previousButton);
      div.appendChild(nextButton);

      // Prepend div to injectZone
      injectZone.prepend(div);
    }
  };

  useEffect(() => {
    // Observe dom changes for sticky header
    const target = document.getElementById('main-content');
    const config = { attributes: true, childList: true, subtree: true };

    const callback = function (mutationsList, observer) {
      for (let mutation of mutationsList) {
        for (let addedNodes of mutation.addedNodes) {
          if (addedNodes.attributes && addedNodes.attributes['data-strapi-header']) {
            injectButtons();
          } else if (addedNodes.attributes && addedNodes.attributes['data-strapi-header-sticky']) {
            injectButtons(true);
          }
        }
      }
    };

    const observer = new MutationObserver(callback);
    observer.observe(target, config);

    // If injectZone exists, remove it and re-inject to update button onClicks
    const injectZone = document.querySelector('#injected-prev-next-buttons');
    if (injectZone) {
      injectZone.remove();
      injectButtons();
    } else {
      injectButtons();
    }

    return () => {
      observer.disconnect();
    }
  }, [pathname, search, initialData]);

  return (
    <></>
  );
};