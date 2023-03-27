import axios from "axios";

function requestManager(url, options = {}, attempts = 3) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, options)
      .then(resolve)
      .catch((error) => {
        const isLastAttempt = attempts === 1;
        if (isLastAttempt) {
          return reject(error);
        }
        setTimeout(() => {
          requestManager(url, options, attempts - 1)
            .then(resolve)
            .catch(reject);
        }, 3000);
      });
  });
}

export default requestManager;