import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xbf094644f5d83704ad2bd26a6f01347f205cc104",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Albus Dumbledore Card",
        description: "This NFT will give you the power of Gryffindor!",
        image: readFileSync("scripts/assets/albus_dumbledore_card.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()