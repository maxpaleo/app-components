import * as fs from "fs";
import * as path from "path";
var configContent = "// Configuration\nexport const config = {\n  key: 'value',\n  // Add more configuration options as needed\n};";
var configPath = path.join(process.cwd(), "app-config.ts");
fs.writeFile(configPath, configContent, { flag: "wx" }, function (err) {
    if (err) {
        if (err.code === "EEXIST") {
            console.error("app-config.ts already exists. No new file was created.");
        }
        else {
            console.error(err);
        }
    }
    else {
        console.log("app-config.ts has been created.");
    }
});
