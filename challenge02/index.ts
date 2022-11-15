const mapData = (value: string) => value.split(" ");

const readFile = (): Promise<string> =>
  fetch("https://codember.dev/encrypted.txt").then(
    (response) => response && response.text()
  ) ?? Deno.readTextFile("challenge02/encrypted.txt");

let phrase = "";

export const answer = readFile().then((data) => {
  const dataMapped = mapData(data);
  dataMapped.map((e) => {
    const characters = e.split("");
    for (let i = 0; i < characters.length; i++) {
      if (characters[i] === "1") {
        const charCode = characters[i] + characters[i + 1] + characters[i + 2];
        const char = String.fromCharCode(parseInt(charCode));
        phrase += char;
        i += 2;
      } else {
        const charCode = characters[i] + characters[i + 1];
        const char = String.fromCharCode(parseInt(charCode));
        phrase += char;
        i++;
      }
      if (i === characters.length - 1) phrase += " ";
    }
  });
  return phrase;
});
