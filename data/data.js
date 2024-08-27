import { readFile } from "fs/promises";

export const groupData = JSON.parse(
  await readFile(new URL("./groups.json", import.meta.url))
);

export const exhibitionsData = JSON.parse(
  await readFile(new URL("./exibitions.json", import.meta.url))
);
