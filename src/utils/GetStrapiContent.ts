import config from "./strapiConfig";

const getWelcomeContent = async () => {
  const welocmeOptions = {
    headers: {
      Authorization: `Bearer bb8f4107028eee9f5dcab4026bc25de201f51c34ece96c7c2beaf8e9724528d04863e18f74ac46560e02006a209c08fb70569e849b7a91063d43a1fa4365ce816fb7d361b5157eddb5d1e531159c524bdf17c250d66689114586bcb9d26530bf911fd7d2c9cf774b58266d4b2fc5b25f39c8f943739515d7bc708be886fdf922`,
    },
  };
  const request = fetch(`${config.api}/api/welcom-sections?populate=*`, welocmeOptions);
  const response = (await request).json()
  return response;
};
const getCardsContent = async () => {
    const welocmeOptions = {
      headers: {
        Authorization: `Bearer bb8f4107028eee9f5dcab4026bc25de201f51c34ece96c7c2beaf8e9724528d04863e18f74ac46560e02006a209c08fb70569e849b7a91063d43a1fa4365ce816fb7d361b5157eddb5d1e531159c524bdf17c250d66689114586bcb9d26530bf911fd7d2c9cf774b58266d4b2fc5b25f39c8f943739515d7bc708be886fdf922`,
      },
    };
    const request = fetch(`${config.api}/api/cards?populate=*`, welocmeOptions);
    const response = (await request).json()
    return response;
  };

export {getCardsContent, getWelcomeContent}
