import * as fs from "fs";
import * as path from "path";

const configContent: string = `// Configuration
export const config = {
  key: 'value',
  // Add more configuration options as needed
};`;

const configPath: string = path.join(process.cwd(), "app-config.ts");

fs.writeFile(
  configPath,
  configContent,
  { flag: "wx" },
  (err: NodeJS.ErrnoException | null) => {
    if (err) {
      if (err.code === "EEXIST") {
        console.error("app-config.ts already exists. No new file was created.");
      } else {
        console.error(err);
      }
    } else {
      console.log("app-config.ts has been created.");
    }
  }
);
