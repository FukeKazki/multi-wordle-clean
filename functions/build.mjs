import { build } from "esbuild";

build({
  entryPoints: ["./src/index.ts"],
  outdir: "./dist",
  bundle: true,
  minify: true,
  platform: "node"
  // watch: {
  //   onRebuild(err, result) {
  //     if (err?.errors) {
  //       console.log(JSON.stringify(err?.errors));
  //     }
  //     if (result?.errors) {
  //       console.log(JSON.stringify(result?.warnings));
  //     }
  //   },
  // }
})