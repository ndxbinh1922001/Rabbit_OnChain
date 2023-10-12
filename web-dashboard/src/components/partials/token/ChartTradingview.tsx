// TradingViewWidget.jsx

import React, { useEffect, useRef } from 'react';

let tvScriptLoadingPromise;

export default function TradingViewWidget() {
  const onLoadScriptRef = useRef();

  useEffect(
    () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      onLoadScriptRef.current = createWidget;

      if (!tvScriptLoadingPromise) {
        tvScriptLoadingPromise = new Promise((resolve) => {
          const script = document.createElement('script');
          script.id = 'tradingview-widget-loading-script';
          script.src = 'https://s3.tradingview.com/tv.js';
          script.type = 'text/javascript';
          script.onload = resolve;

          document.head.appendChild(script);
        });
      }

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

      return () => onLoadScriptRef.current = null;

      function createWidget() {
        if (document.getElementById('tradingview_1204b') && 'TradingView' in window) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          new window.TradingView.widget({
            autosize: true,
            symbol: "GATEIO:REFUSDT",
            interval: "D",
            timezone: "Etc/UTC",
            theme: "light",
            style: "1",
            locale: "en",
            toolbar_bg: "#f1f3f6",
            enable_publishing: false,
            allow_symbol_change: true,
            container_id: "tradingview_1204b"
          });
        }
      }
    },
    []
  );

  return (
    <div className='tradingview-widget-container'>
      <div id='tradingview_1204b' />
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/symbols/REFUSDT/?exchange=GATEIO"><span className="blue-text">REFUSDT chart</span></a> by TradingView
      </div>
    </div>
  );
}
