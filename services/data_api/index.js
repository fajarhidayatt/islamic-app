export async function getAllSurah() {
  const response = await fetch('https://quran-endpoint.vercel.app/quran');
  const data = response.json();
  return data;
}

export async function getSurah(numberSurah, imamId = 7) {
  const response = await fetch(
    `https://quran-endpoint.vercel.app/quran/${numberSurah}?imamId=${imamId}`
  );
  const data = response.json();
  return data;
}

export async function getTafsir(numberSurah, verseNumber) {
  const response = await fetch(
    `https://quran-endpoint.vercel.app/quran/${numberSurah}/${verseNumber}`
  );
  const data = response.json();
  return data;
}
