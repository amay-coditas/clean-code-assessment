const BASE_URL = "https://cryptographyApi/api/";

async function getCryptocurrencyData(cryptoIds) {
  try {
    const response = await fetch(`${BASE_URL}/${cryptoIds}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Feiled to fetch cryptocurrency data.");
  }
}

async function displayCryptocurrencyInfo(cryptoIds) {
  try {
    const data = await getCryptocurrencyData(cryptoIds);
    const marketPrice = data.price;
    const marketCapitals = data.marketCapitals;
    const marketVolume = data.marketVolume;

    console.log(`Cryptocurrency:`);
    console.log(`Price: $${marketPrice}`);
    console.log(`Market Cap: $${marketCapitals}`);
    console.log(`24hr Volume: $${marketVolume}`);
  } catch (error) {
    console.error(error.message);
  }
}

const cryptoIdsToTrack = ["bitcoin"];
displayCryptocurrencyInfo(cryptoIdsToTrack);
