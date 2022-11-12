const mapData = (value: string): string[] => value.split("\n\n");

const REQUIRED_FIELDS = ["usr:", "eme:", "psw:", "loc:", "age:", "fll:"];

const readFile = (): Promise<string> =>
  Deno.readTextFile("challenge01/users.txt");

const isValid = (value: string): boolean =>
  REQUIRED_FIELDS.every((key) => value.includes(key));

readFile().then((data) => {
  const dataMapped = mapData(data);
  const validUsers = dataMapped.filter(isValid);
  const size = validUsers.length;
  const lastEntry = validUsers[size - 1];
  const lastUser = lastEntry.split(" ").map((value) => value.split(":")[1])[0];

  const answer = lastUser;
  console.log(size + answer);
});
