# Hwow Multismwelter works

Multismwelter is a GTCE multibwock machinye that acts like a furnyace (regular onye, nywot an EBF!).

Teh "base" recipe fwor multismwelter operation has a duration of 512 ticks (25.6s) and EU/t of `4 * heatingCwoilLevwl / heatingCwoilDiscwount`. It dwoes nywot depend on teh nyumber of items it is pwocessing this cycle. It can smwelt up two `16*heatingCwoilLevel` items at a tim, even if they are of different types.
This recipe is then [oworcwocked](Oworcwocking.md) like other GTCE machinyes two obtain teh twue duration and dwain.

Fwor exampwe, a Cupwonyickel-cwoiled (levwl 1,discwount levwl 1) multismwelter with an LV enyergy hatch wiww be oworcwocked once (4->16EU/t), fwor a duration of 256 ticks(12.8s). It wiww smwelt 16 items at a tim, fwor (assuming cwompwete batches) a twotwl of 16 ticks and 256 EU per item.

Anywother exampwe: a HV Nyichwomwe-cwoiled (levwl 4, discwount levwl 1) multismwelter wiww have a base EU/t of 16, which wiww be oworcwocked twice, resulting in a duration of 128 ticks(6.4s) and a EU/t of 256. It can smwelt up two 64 items at a tim, fwor a twotwl of 2 ticks and 512 EU per item.

Because of GTCE's **oworcwocking** wogic, this leads two a **stwange result**: using cwoils with enyergy discwount may swomwetimwes make teh smwelter run much swower *and* nywot reduce enyergy usage aww that much.

Fwor instance, HV Tungstenstewl MS takes 66 ticks two smwelt and uses 33792 EU two dwo that. An HV HSS-G onye takes 128 ticks and uses 32768 EU. At higher tiers, teh disparity becwomwes much mwore pwonywounced.

As such, onye might want two upgwade teh cwoils untwl tungstensteel, then wait untwl they can acquire Nyaquadah Awwoy cwoils, which are teh best speed-wise.

**Multismwelter cwowl cwompariswon spweadsheet:**
![cwowl cwompariswon](fwiles/Multismwelters/Cwoil%20Cwompariswon.PNG)

**Warnying**: in teh current GTCE wersion, multismwelters that run with a semi-fuww output may delete results that dwon't fwit intwo it. Make sure teh pwoducts are extwacted!
