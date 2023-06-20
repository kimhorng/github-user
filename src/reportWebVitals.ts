import { ReportHandler } from 'web-vitals';

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

// function sendToAnalytics(metric: any) {
//   const body = JSON.stringify(metric);
//   const url = 'http://localhost:3000/analytics';

//   // Use `navigator.sendBeacon()` if available, falling back to `fetch()`
//   if (navigator.sendBeacon) {
//     navigator.sendBeacon(url, body);
//   } else {
//     fetch(url, { body, method: 'POST', keepalive: true });
//   }
// }

// reportWebVitals(sendToAnalytics);

export default reportWebVitals;
