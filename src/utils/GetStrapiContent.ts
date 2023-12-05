import config from "./strapiConfig";

const getWelcomeContent = async () => {
  const welocmeOptions = {
    headers: {
      Authorization: `Bearer d9176c0a6ecfc0c8e95a6ac31a24e0a9122df0d8008bd8ee712be3fb0f4b419089d960b886b2088ff8eb7cc71f2cd7bf302052c908fdac0b95a075165f0f7d28e25533749e498b654b9f0f2a446b8c7277ecabd064c949ec9a4335f260b2f842ffef4b8b25eef0392773bec52b83c62e141dc598b6937346352ccd2beb8d817f`,
    },
  };
  const request = fetch(`${config.api}/api/welcom-sections?populate=*`, welocmeOptions);
  const response = (await request).json()
  return response;
};
const getCardsContent = async () => {
    const welocmeOptions = {
      headers: {
        Authorization: `Bearer d9176c0a6ecfc0c8e95a6ac31a24e0a9122df0d8008bd8ee712be3fb0f4b419089d960b886b2088ff8eb7cc71f2cd7bf302052c908fdac0b95a075165f0f7d28e25533749e498b654b9f0f2a446b8c7277ecabd064c949ec9a4335f260b2f842ffef4b8b25eef0392773bec52b83c62e141dc598b6937346352ccd2beb8d817f`,
      },
    };
    const request = fetch(`${config.api}/api/cards?populate=*`, welocmeOptions);
    const response = (await request).json()
    return response;
  };

export {getCardsContent, getWelcomeContent}
