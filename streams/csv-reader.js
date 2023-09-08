import { parse } from "csv-parse";
import fs from "node:fs";

const csvPath = new URL("./data.csv", import.meta.url);

const processFile = async () => {
  const records = [];
  const parser = fs.createReadStream(csvPath).pipe(
    parse({
      from_line: 2,
    })
  );

  for await (const record of parser) {
    await fetch("http://localhost:3333/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: record[0],
        description: record[1],
      }),
    });
    records.push(record);
  }

  return records;
};

(async () => {
  const records = await processFile();
  console.log(records);
})();
