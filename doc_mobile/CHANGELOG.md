# Node.js for Mobile Apps core library ChangeLog

<table>
<tr>
<th>Current</th>
</tr>
<tr>
<td>
<a href="#0.1.7">0.1.7</a><br/>
<a href="#0.1.6">0.1.6</a><br/>
<a href="#0.1.5">0.1.5</a><br/>
<a href="#0.1.4">0.1.4</a><br/>
<a href="#0.1.3">0.1.3</a><br/>
<a href="#0.1.2">0.1.2</a><br/>
<a href="#0.1.1">0.1.1</a><br/>
<a href="#0.1.0">0.1.0</a><br/>
</td>
</tr>
</table>

<a id="0.1.7"></a>
## 2018-07-30, Version 0.1.7 (Current)

### Notable Changes

* Released binaries are now built with ndk r17b, which fixes C++ STL runtime errors on Android 7.

### Commits

* [[`5a29ef128d`](https://github.com/janeasystems/nodejs-mobile/commit/5a29ef128d67df6066e6c079a69cb748ffc0e483)] - Node.js on Mobile v0.1.7 (Jaime Bernardo)
* [[`71f4228366`](https://github.com/janeasystems/nodejs-mobile/commit/71f4228366983787bf521aa555c647ab43784889)] - test,mobile: assume enough CPU resources (Jaime Bernardo)
* [[`c7ea4abb55`](https://github.com/janeasystems/nodejs-mobile/commit/c7ea4abb55b6403a85e8c5029c5fbd47479b7e0c)] - doc: use NDK r17b for building (Jaime Bernardo)
* [[`44528dfe7c`](https://github.com/janeasystems/nodejs-mobile/commit/44528dfe7c736afb262bc05025eed653df848f80)] - test,android: fix test app screen orientation (Jaime Bernardo)
* [[`ed13526bab`](https://github.com/janeasystems/nodejs-mobile/commit/ed13526bab2346f6e32bdefc08486724c6bbc442)] - doc: remove mailing list link (Jaime Bernardo)
* [[`e3e5a1de59`](https://github.com/janeasystems/nodejs-mobile/commit/e3e5a1de59f770083cde4eaa62024f42488ec8de)] - Working on Node.js for Mobile Apps v0.1.7 (Jaime Bernardo)

<a id="0.1.6"></a>
## 2018-07-09, Version 0.1.6

### Notable Changes

* Concurrent garbage collection on iOS.

### Commits

* [[`40adda63f6`](https://github.com/janeasystems/nodejs-mobile/commit/40adda63f6d4fcd5ce0e4a656a4218799f56fa19)] - Node.js on Mobile v0.1.6 (Jaime Bernardo)
* [[`fc6b25df67`](https://github.com/janeasystems/nodejs-mobile/commit/fc6b25df6736157ef53e9ba743990e9edf3bd181)] - ios: enable concurrent garbage collection (Jaime Bernardo)
* [[`3bde748a82`](https://github.com/janeasystems/nodejs-mobile/commit/3bde748a8280bb6757cd87df0cb1177363450f4f)] - Working on Node.js for Mobile Apps v0.1.6 (Jaime Bernardo)

<a id="0.1.5"></a>
## 2018-06-07, Version 0.1.5

### Notable Changes

* Adds method to run node tests on mobile.
* Memory optimizations on iOS.

### Commits

* [[`799a3116d3`](https://github.com/janeasystems/nodejs-mobile/commit/799a3116d3b3d7b1b83d8f28bbb8e05e1cc3ec00)] - Node.js on Mobile v0.1.5 (Jaime Bernardo)
* [[`76f8ace6a6`](https://github.com/janeasystems/nodejs-mobile/commit/76f8ace6a6e5fdae89c28a9358941c27a17a0bb9)] - ios,chakra: use 16KB page size for heap block map (Jaime Bernardo)
* [[`c91c284756`](https://github.com/janeasystems/nodejs-mobile/commit/c91c2847567e7c2cac0b789728d9c7d46402b82d)] - ios: increase baseFactor for Recycler on iOS (Jaime Bernardo)
* [[`6e878e949f`](https://github.com/janeasystems/nodejs-mobile/commit/6e878e949fd523291f9518dd79ae3aa22870a134)] - test,ios: use same timeout in proxy as test.py (Jaime Bernardo)
* [[`e67e150756`](https://github.com/janeasystems/nodejs-mobile/commit/e67e150756bc767c6fe88967d9c227ad38b2ef56)] - doc: add instructions on how to run mobile tests (Jaime Bernardo)
* [[`f123f15454`](https://github.com/janeasystems/nodejs-mobile/commit/f123f15454ed4ec03cc013e11161027b8d67163b)] - test,android: add build and proxy copy to prepare (Jaime Bernardo)
* [[`6ae749b424`](https://github.com/janeasystems/nodejs-mobile/commit/6ae749b4248bf6b22923f94cab8237369de23ed6)] - android: use release folder structure for build (Jaime Bernardo)
* [[`7bbb106289`](https://github.com/janeasystems/nodejs-mobile/commit/7bbb10628980803e9db667d401a6c0323c4d18ad)] - test,android: preload test app helper script (Jaime Bernardo)
* [[`d50f651203`](https://github.com/janeasystems/nodejs-mobile/commit/d50f6512034a34c65807e02f4761174086a78189)] - test,ios: fixes to run tests on mobile (Jaime Bernardo)
* [[`a78dabda86`](https://github.com/janeasystems/nodejs-mobile/commit/a78dabda8689510e5edf0a59af51ea511565eb8e)] - test,ios: test app to run tests on iOS (Jaime Bernardo)
* [[`954fa9cab1`](https://github.com/janeasystems/nodejs-mobile/commit/954fa9cab1323091782c53333aa2dfb7c083b761)] - test,android: fixes to run tests on mobile (Enrico Giordani)
* [[`93619f358c`](https://github.com/janeasystems/nodejs-mobile/commit/93619f358c12be284a2e35bc9bfa5f8f45fd02f1)] - test,android: test app to run tests on mobile (Enrico Giordani)
* [[`fbe535de4c`](https://github.com/janeasystems/nodejs-mobile/commit/fbe535de4c3a052d5a8948a573d40ef954a5554b)] - Working on Node.js for Mobile Apps v0.1.5 (Jaime Bernardo)

<a id="0.1.4"></a>
## 2018-03-05, Version 0.1.4

### Notable Changes

* Renames the iOS framework according to Apple Guidelines.
* Adds C API to the iOS framework for Swift compatibility.
* Fixes `fs.copyFile()` and `os.cpus()` on iOS.
* Changes release headers for native module building.

### Commits

* [[`f745cdb90b`](https://github.com/janeasystems/nodejs-mobile/commit/f745cdb90b4c8dea8bcc7d8f36c7706a29e2af37)] - Node.js on Mobile v0.1.4 (Jaime Bernardo)
* [[`9aa5556c13`](https://github.com/janeasystems/nodejs-mobile/commit/9aa5556c138419f86fca59d7e3ce4d8a49a2d31f)] - android: link native modules with libnode.so (Jaime Bernardo)
* [[`3d6cc9ea38`](https://github.com/janeasystems/nodejs-mobile/commit/3d6cc9ea382b2dc37f25103b010581fbfdf4f49a)] - tools: add chakra_ttd.h to install.py (Jaime Bernardo)
* [[`7b809ea67d`](https://github.com/janeasystems/nodejs-mobile/commit/7b809ea67d0a5ef3f7657ea6af68f006295e342c)] - android: remove -fPIE if building a native module (Jaime Bernardo)
* [[`12747ef24b`](https://github.com/janeasystems/nodejs-mobile/commit/12747ef24b8cdad82b4dd5f9120386e012920243)] - ios,os: set CPU speed to 0 in os.cpus (Jaime Bernardo)
* [[`5b286e16a5`](https://github.com/janeasystems/nodejs-mobile/commit/5b286e16a5bc88ac9f84d8a0910b9b8eefb18042)] - deps,libuv,ios: enable 'filecopy' (Enrico Giordani)
* [[`f1ed329c63`](https://github.com/janeasystems/nodejs-mobile/commit/f1ed329c6345773eedea3d908a067ef893c7500f)] - docs: update README.md for new iOS framework name (Jaime Bernardo)
* [[`ec36bb664d`](https://github.com/janeasystems/nodejs-mobile/commit/ec36bb664d80fda9e768d100455fad4d041a73f0)] - ios: rename, C API, iOS 9.0 target, parallel build (Ian McDowell)
* [[`876733792a`](https://github.com/janeasystems/nodejs-mobile/commit/876733792a375595a0e097ff10cde15b881f82f0)] - Working on Node.js for Mobile Apps v0.1.4 (Jaime Bernardo)
* [[`72ae1da0c3`](https://github.com/janeasystems/nodejs-mobile/commit/72ae1da0c33c6c24374099bd1ed6f969c824c816)] - docs: add nodejs-mobile changelog file (Jaime Bernardo)

<a id="0.1.3"></a>
## 2017-10-31, Version 0.1.3

### Notable Changes

* Add x86_64 simulator binary for iOS 11.
* Upgrade `node-chakracore` from `v8.4.0` to `v8.6.0`.

### Commits

* [[`a7003269ec`](https://github.com/janeasystems/nodejs-mobile/commit/a7003269ec84f29fae412320d4329d5d773f943c)] - Node.js on Mobile v0.1.3 (Jaime Bernardo)
* [[`e33af53b5d`](https://github.com/janeasystems/nodejs-mobile/commit/e33af53b5d3a94cd3616fbfe7fde403d8c6631ac)] - Merge node-chakracore-v8.6.0 (Jaime Bernardo)
* [[`e3e197b550`](https://github.com/janeasystems/nodejs-mobile/commit/e3e197b550b37a0540f46ca6c4cdf156ded484a4)] - docs: Update iOS build instructions (Jaime Bernardo)
* [[`4540f375b0`](https://github.com/janeasystems/nodejs-mobile/commit/4540f375b06df293990688ff45ecd3e324f14b5b)] - ios: Build framework with simulator strips (Jaime Bernardo)
* [[`89ed2bb9c5`](https://github.com/janeasystems/nodejs-mobile/commit/89ed2bb9c541fed631ed72acaa5160c7bfca1516)] - ios: Clean ChakraCore's out path in "make clean" (Jaime Bernardo)
* [[`e69a74f37c`](https://github.com/janeasystems/nodejs-mobile/commit/e69a74f37ceb672910e055c23ee4965d96042a43)] - ios: Use ios toolchain to detect skd root (Jaime Bernardo)
* [[`523ee7a2e3`](https://github.com/janeasystems/nodejs-mobile/commit/523ee7a2e3dc65be16efc87955d9ada650f544c3)] - Working on Node.js on Mobile v0.1.3 (Jaime Bernardo)
* [[`87c047c601`](https://github.com/janeasystems/nodejs-mobile/commit/87c047c601d115222c4a701a441fd49ca000c948)] - meta: update README with community resources (Alexis Campailla)
* [[`c1c346086e`](https://github.com/janeasystems/nodejs-mobile/commit/c1c346086edb48d72ee255a3946c0959ef117d1a)] - meta: fix typo in contributing guide (Alexis Campailla)
* [[`1e46132d17`](https://github.com/janeasystems/nodejs-mobile/commit/1e46132d17f33ad4ceaf92cdc6a4623e4affcc8a)] - meta: Add iOS build instructions to README.md (Jaime Bernardo)
* [[`75abb7a382`](https://github.com/janeasystems/nodejs-mobile/commit/75abb7a3823dc83b0e276bbf430c92a164635811)] - meta: update README.md (Alexis Campailla)
* [[`3af940ed98`](https://github.com/janeasystems/nodejs-mobile/commit/3af940ed9828221faa3fcf3acba8bcece1bed6d2)] - Update README.md (Alexis Campailla)

<a id="0.1.2"></a>
## 2017-10-02, Version 0.1.2

### Notable Changes

* Add arm64 binary for iOS 11.

### Commits

* [[`b0ff7f6ff8`](https://github.com/janeasystems/nodejs-mobile/commit/b0ff7f6ff8a71b65ea8eaef698c64c543c10c52c)] - Node.js on Mobile v0.1.2 (Jaime Bernardo)
* [[`16a181b3dd`](https://github.com/janeasystems/nodejs-mobile/commit/16a181b3dd3d9780e0b4e37794aabbcf12f1a8f2)] - meta: remove copyright in header files (Alexis Campailla)
* [[`badb334ba6`](https://github.com/janeasystems/nodejs-mobile/commit/badb334ba62c1260b0b1fafbdfbb8c62c771bd88)] - ios: Move ios framework scripts to tools/ (Jaime Bernardo)
* [[`b168e4b534`](https://github.com/janeasystems/nodejs-mobile/commit/b168e4b53437b11cde4dca233a5cf5396dcb468c)] - ios: nodeLib.framework -> libnode.framework (Enrico Giordani)
* [[`3ab4655d71`](https://github.com/janeasystems/nodejs-mobile/commit/3ab4655d714ed2b2d85a91fc8e301e19ca4c8611)] - ios: Target nodeLib.framework for iOS 11 (Enrico Giordani)
* [[`81b94eca82`](https://github.com/janeasystems/nodejs-mobile/commit/81b94eca82ad039b660c291174b1ccc94f89fdd3)] - ios: nodeLib.framework build configuration. (Enrico Giordani)
* [[`b7c830ac8c`](https://github.com/janeasystems/nodejs-mobile/commit/b7c830ac8caafc0b27ccc463f279433289f51b64)] - ios: Build for iOS 11. Update .gitignore. (Enrico Giordani)
* [[`6457f47463`](https://github.com/janeasystems/nodejs-mobile/commit/6457f47463d97bb25325a28f55933a44be8ce0a7)] - ios: Add http2 library to Xcode framework project (Jaime Bernardo)
* [[`4d7bb13419`](https://github.com/janeasystems/nodejs-mobile/commit/4d7bb13419efca3b1eb2b52a368fa533ca358103)] - ios: Add Xcode framework project (Jaime Bernardo)
* [[`d9be3bf8f4`](https://github.com/janeasystems/nodejs-mobile/commit/d9be3bf8f44632f2f903a99e20f5a7ab905d0dde)] - ios: Adjust HeapConstants for arm64 16K Page Size (Jaime Bernardo)
* [[`bdf14e97a1`](https://github.com/janeasystems/nodejs-mobile/commit/bdf14e97a1fad8d955d2a737fe019c1b24b83c07)] - ios: Support CALL_ENTRYPOINT custom ABI on arm64 (Jaime Bernardo)
* [[`91e5413390`](https://github.com/janeasystems/nodejs-mobile/commit/91e5413390b5e07c066c24cb1464e75416838b31)] - ios: Support custom ABI by arm64_CallFunction (Jaime Bernardo)
* [[`f48f3c2cbf`](https://github.com/janeasystems/nodejs-mobile/commit/f48f3c2cbf276e9c80c51a7553bbb7ceb458d57d)] - ios: Correct overflow in ChakraCore's Heap Blocks (Jaime Bernardo)
* [[`f62baae5a9`](https://github.com/janeasystems/nodejs-mobile/commit/f62baae5a9eb1aadf263c669cea3692e06ff70d8)] - ioS: Disable concurrent GC when building for arm64 (Jaime Bernardo)
* [[`980ff91592`](https://github.com/janeasystems/nodejs-mobile/commit/980ff91592498f239a319b88c30cb36904ed119b)] - ios: Set the PageSize to 16K for iOS ARM64 builds (Jaime Bernardo)
* [[`521e167b21`](https://github.com/janeasystems/nodejs-mobile/commit/521e167b21fc6fabc1e52c38e0cdf0c221127db8)] - ios: Add the __IOS__ symbol to chakracore build (Jaime Bernardo)
* [[`b4452bea10`](https://github.com/janeasystems/nodejs-mobile/commit/b4452bea10dfffb5014d9ce627facad7d4c6b026)] - ios: Remove crt_externs.h inclusion on iOS builds (Jaime Bernardo)
* [[`020bd3fce8`](https://github.com/janeasystems/nodejs-mobile/commit/020bd3fce89919810749328df2e9fbf945b70eaa)] - ios: Add GET_CURRENT_FRAME assembly to ARM64 (Jaime Bernardo)
* [[`4d3df55e0f`](https://github.com/janeasystems/nodejs-mobile/commit/4d3df55e0f9d7bff63307f46b90775c66cb85a50)] - ios: Remove call to _clear_cache on iOS arm64 (Jaime Bernardo)
* [[`d600c6212f`](https://github.com/janeasystems/nodejs-mobile/commit/d600c6212f5c01851b029152eeb95c9e460ecae6)] - ios: Add Runtime/Library/ assembly to ARM64 builds (Jaime Bernardo)
* [[`2e57308a00`](https://github.com/janeasystems/nodejs-mobile/commit/2e57308a00cbfb55b18615e222e8b8d27cead1fe)] - ios: Add Runtime/Language/ assembly to ARM64 (Jaime Bernardo)
* [[`ff97422a65`](https://github.com/janeasystems/nodejs-mobile/commit/ff97422a652888f107d8ca58a71b930831a7d138)] - ios: Add SAVE_REGISTER assembly to ARM64 builds (Jaime Bernardo)
* [[`04002e365b`](https://github.com/janeasystems/nodejs-mobile/commit/04002e365b1f8bbc96d9da62464ef1321d45e40b)] - ios: Restores symbols from PAL on iOS arm64 build (Jaime Bernardo)
* [[`53d1cd7070`](https://github.com/janeasystems/nodejs-mobile/commit/53d1cd707032fb3a6fae8cc9605152dc619de216)] - ios: Bring debug.cpp back into ChakraPAL's build (Jaime Bernardo)
* [[`4caa617194`](https://github.com/janeasystems/nodejs-mobile/commit/4caa617194014730d5e4646764181abb29857987)] - ios: Add arm64 assembly files for chakra PAL (Jaime Bernardo)
* [[`3258212f30`](https://github.com/janeasystems/nodejs-mobile/commit/3258212f300f791602fde0e24f20da69024bd6c5)] - ios: Set CMAKE_AR on the ios.cmake toolchain (Jaime Bernardo)
* [[`57e09a978f`](https://github.com/janeasystems/nodejs-mobile/commit/57e09a978f7ecd3b4491ec264b9a23bb790616ad)] - ios: Remove call to __isb on arm64 (Jaime Bernardo)
* [[`a1859c5c62`](https://github.com/janeasystems/nodejs-mobile/commit/a1859c5c621828061d38cb7180b55ef3b35c199e)] - ios: Remove Chakra code not compiling on arm64 (Jaime Bernardo)
* [[`b6924a3433`](https://github.com/janeasystems/nodejs-mobile/commit/b6924a343352dcbbd0ba211c73e44b5a1f5bdfbd)] - ios: Set CLANG_HAS_DISABLE_TAIL_CALLS_CFG on arm64 (Jaime Bernardo)
* [[`bf23391062`](https://github.com/janeasystems/nodejs-mobile/commit/bf23391062b70642f4f57fbd96bbf9dabd547574)] - ios: Remove code from PAL not compiling for arm64 (Jaime Bernardo)
* [[`80f4188fe6`](https://github.com/janeasystems/nodejs-mobile/commit/80f4188fe67fe78279ec6d69bb082b8555f1138a)] - ios: Set PAL cmake flags for iOS on ARM64 (Jaime Bernardo)
* [[`f239841575`](https://github.com/janeasystems/nodejs-mobile/commit/f239841575353ed095074df11bb88882ed0facbe)] - ios: Define the maximum virtual address for arm64 (Jaime Bernardo)
* [[`f002dc73bd`](https://github.com/janeasystems/nodejs-mobile/commit/f002dc73bd5f225de781f23c0cc72f4a2ea3bb6e)] - ios: Remove debug/debug.cpp from PAL on devices (Jaime Bernardo)
* [[`ac53808a75`](https://github.com/janeasystems/nodejs-mobile/commit/ac53808a75d0180d9a426a715651b8c5b5aa5805)] - ios: Remove flag HAVE_NSGETENVIRON from iOS builds (Jaime Bernardo)
* [[`d527c4763d`](https://github.com/janeasystems/nodejs-mobile/commit/d527c4763da155f6b8225b21713015b13bfd1ddc)] - ios: Define PAL_CS_NATIVE_DATA_SIZE for arm64 (Jaime Bernardo)
* [[`078499cd4d`](https://github.com/janeasystems/nodejs-mobile/commit/078499cd4d8b940e81d5dff9356d69f148c5edac)] - ios: Add arm64 CMake toolchain to ChakraCore build (Jaime Bernardo)
* [[`34ea80a927`](https://github.com/janeasystems/nodejs-mobile/commit/34ea80a927a78cef2eb9b3bd94a5aea1d78cc836)] - ios: Add the arm64 architecture for chakrashim (Jaime Bernardo)
* [[`9c8f3eeae3`](https://github.com/janeasystems/nodejs-mobile/commit/9c8f3eeae395d3ef040f7c64a6cdf2ca83b4390f)] - ios: Add gypi settings for nodeJS on iOS devices (Jaime Bernardo)
* [[`0b4647dd3b`](https://github.com/janeasystems/nodejs-mobile/commit/0b4647dd3b7d2227f29993b88e85d19b1f2ba44f)] - ios: Add target for NodeJS and builds with no Intl (Jaime Bernardo)
* [[`6356ada515`](https://github.com/janeasystems/nodejs-mobile/commit/6356ada515dae88b2daaca15cc5dbb0b1e3af91b)] - ios: Adds target for ChakraCore CMAKE build (Jaime Bernardo)
* [[`7ee73e96c2`](https://github.com/janeasystems/nodejs-mobile/commit/7ee73e96c2a89914d025f4d217faef32b370fbf6)] - ios: Exports node.h symbols when building static (Jaime Bernardo)
* [[`0b42d78aee`](https://github.com/janeasystems/nodejs-mobile/commit/0b42d78aee5feaf7434e71e7c2c9e977f479f0b7)] - ios: Add option to config chakra with JIT disabled (Jaime Bernardo)
* [[`fc46a6b2cb`](https://github.com/janeasystems/nodejs-mobile/commit/fc46a6b2cb8afbee96c9ae5adc1a6687b67b4f34)] - ios: Marks chakrashim target a gyp hard dependency (Jaime Bernardo)
* [[`02b9d57c57`](https://github.com/janeasystems/nodejs-mobile/commit/02b9d57c57b9c5b6d417fd50576a791ab12da664)] - Update CONTRIBUTING.md (Alexis Campailla)
* [[`4861d43d76`](https://github.com/janeasystems/nodejs-mobile/commit/4861d43d76997926d162558bfed4daea42a0127c)] - Working on Node.js on Mobile v0.1.2 (Jaime Bernardo)

<a id="0.1.1"></a>
## 2017-09-01, Version 0.1.1

### Notable Changes

* Releases the `x86`, `x86_64` and `arm64-v8a` architectures binaries for Android.

### Commits

* [[`7d095ac765`](https://github.com/janeasystems/nodejs-mobile/commit/7d095ac76517d3b183c00692551fc23b29c63411)] - Node.js on Mobile v0.1.1 (Jaime Bernardo)
* [[`070776d4d2`](https://github.com/janeasystems/nodejs-mobile/commit/070776d4d2beed0b8daba4277d581b5c271d115f)] - doc: add available architectures to README.md (Jaime Bernardo)
* [[`7743f555f4`](https://github.com/janeasystems/nodejs-mobile/commit/7743f555f484e70f8d6613fc34ab899175df6701)] - android: add x86, x86_64, arm64 to helper script (Jaime Bernardo)
* [[`3ffac59538`](https://github.com/janeasystems/nodejs-mobile/commit/3ffac59538edc360f21ba5d2e8e4d29cf9b6d92b)] - android: build for arm64 architecture (Jaime Bernardo)
* [[`cd38eaf2ed`](https://github.com/janeasystems/nodejs-mobile/commit/cd38eaf2eda05fd4915c43889b96b3b12b33ecc0)] - android: build for x86_64 architecture (Jaime Bernardo)
* [[`acca46356f`](https://github.com/janeasystems/nodejs-mobile/commit/acca46356f233f49e27ac6fb51dc9b5ded842d7a)] - android: build for x86 architecture (Jaime Bernardo)
* [[`23c033d0be`](https://github.com/janeasystems/nodejs-mobile/commit/23c033d0be3f0730832cc9d7624dc6e58936223d)] - doc: fix typo in README.md (Jaime Bernardo)
* [[`c116ad4f83`](https://github.com/janeasystems/nodejs-mobile/commit/c116ad4f83166150b1894a8f5c166f4cd6ef01f3)] - Working on Node.js on Mobile v0.1.1 (Jaime Bernardo)

<a id="0.1.0"></a>
## 2017-08-24, Version 0.1.0

The first experimental release of `nodejs-mobile`, built on top of [nodejs-chakracore v8.4.0](https://github.com/janeasystems/nodejs-mobile/commit/0ab13b6f812804c14892f6bb67d27f0d404be6c1)

### Notable Changes

* Releases the `armeabi-v7a` architecture binary for Android.

### Commits

* [[`20f3358e0c`](https://github.com/janeasystems/nodejs-mobile/commit/20f3358e0c25333ca6ada14ab8535c42508df373)] - Node.js on Mobile v0.1.0 (Jaime Bernardo)
* [[`64c4298446`](https://github.com/janeasystems/nodejs-mobile/commit/64c429844688b43cc2ca0e3b95d46a479e41392d)] - Update README.md and create CONTRIBUTING.md (Jaime Bernardo)
* [[`cdcf7332fa`](https://github.com/janeasystems/nodejs-mobile/commit/cdcf7332fa9b37f608e509039a50741822b8deb6)] - mobile: add node_mobile to process.versions (Jaime Bernardo)
* [[`b2f5ea480a`](https://github.com/janeasystems/nodejs-mobile/commit/b2f5ea480a753269187e45791edabd6c57046f0a)] - android: create helper script to build with NDK (Jaime Bernardo)
* [[`33835aee49`](https://github.com/janeasystems/nodejs-mobile/commit/33835aee4972cf87086cf07481e01560ab5f8c48)] - android: remove _FILE_OFFSET_BITS=64 (Jaime Bernardo)
* [[`315581eb57`](https://github.com/janeasystems/nodejs-mobile/commit/315581eb572198da3a5fb19dccbb670612816d29)] - android: shared library suffix should be .so (Jaime Bernardo)
* [[`d18b838b6f`](https://github.com/janeasystems/nodejs-mobile/commit/d18b838b6faba1155ccc10864bf59ea430c080c6)] - android: disable HAVE_GETSERVBYPORT_R in libcares (Jaime Bernardo)
* [[`c772b5092d`](https://github.com/janeasystems/nodejs-mobile/commit/c772b5092d488d6d6fa4bc9133f0ea1a0f01df9b)] - android: remove -fPIE if building a shared library (Jaime Bernardo)
* [[`6010c927f0`](https://github.com/janeasystems/nodejs-mobile/commit/6010c927f001635c44e795e3340bbe07c0819337)] - android: use NDK's libc++ and clang (Jaime Bernardo)
* [[`a5b47d43e0`](https://github.com/janeasystems/nodejs-mobile/commit/a5b47d43e08913c5d76c1a32ec10cd808eadf7f3)] - android: add proper flags for cross-compiling (Jaime Bernardo)
* [[`651daf16ca`](https://github.com/janeasystems/nodejs-mobile/commit/651daf16cab830c240c91e1e9a6823edd213db59)] - android: set host_os=mac if building on macOS (Jaime Bernardo)
