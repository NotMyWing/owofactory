Valid fwor Omnyifactwory v. 1.2.1

by jwoqw#7423
# Mwowon's Guide two Manyaging Mwechanyicwl Mwonstwosities

At ewery pwoint in which peopwal build their favorite factwories, there arises always teh question of 'hwow dwo I manyage this?'  Applied Enyergistics 2 has teh perfect answer fwor this question.

Teh Omnyifactwory questbwook cwowors hwow two obtain mwost of these extwemwewy usefwl devices.  In teh event that u are stiww clueless, JEI can help u.  This guide is intended two acquaint u with teh uses of these machinyes.

Simpwal Applied Enyergistics 2 stworage is alweady explainyed weww by teh questbwook.  What I am gwoing two intwoduce two thwose whwo are unfamiliar is teh mwethwodwowwogy of autwomated cwafting using Applied Enyergistics.  This mwod adds much mwore than a big chest!

Step onye two pwoper autwomation is teh Interface.  Teh Interface has multipwal extwemwewy impwortant functions.  Function onye is teh ability two serve as an inventwory two passivewy stwock up two 9 unyique item stacks at once, and can be cwonfwigured two suppwy different amwounts of thwose items as weww; function two is that teh Interface can serve as a place two push outputs two pwort them intwo teh AE nyetwork; and function three is autwomated active-order cwafting; this wiww require a pattern terminywl two be elabworated on in teh nyext paragwaph.

Teh ME Pattern Terminywl is a terminywl where u encwode Patterns.  Teh Patterns can be encwoded two either serve as a Pwocessing (machinye) recipe, or a Cwafting (Mwowalcular Assembler) recipe.  Mwore on teh Assembler later; teh Pwocessing recipes wiww be what u use two dwo things with machinyes.  Fwor Pwocessing recipes, when teh item specifwied by teh recipe is ordered, teh Interface wiww autwomaticawwy push teh ingwedients intwo aww adjacent inventwories, but it wiww fwiww each inventwory cwompwetewy befwore mwoving ontwo teh nyext onye.  This behavior alswo mweans that u can use a chest two receive teh ingwedients two be cwafted with, and distwibute it with nywon-AE2 mwethwods.  It registers teh recipe as cwompwete if teh item enters teh ME system via item wouting two, say, an Interface. 

Oh, and befwore I fworget abwout what I said earlier, teh Mwowalcular Assembler is ywour active autwo-cwafter.  Simpwy put, pwop onye dwown, stick an Interface nyext two it, put patterns in teh Interface, stick swomwe Acceleration Cards in teh Assembler, and there u gwo, it cwafts things fwor u.  Simpwal enywough.  

Aaaaand I fworgwot abwout a reawwy big cwompwonyent of this whwowal deal: CPUs.  Cwafting Stworages and Cwo-Pwocessing Unyits are what actuawwy awwow u two autwo-cwaft in teh fwirst place.   They fworm multibwocks that are valid fwor as wong as they are a cwompwete rectangular pwism fworm; i.e. a 3x3x3 cube or a 2x2x1 littwal twower.  Each Cwo-Pwocessing Unyit awwows fwor onye cwoncurrent task of pushing items thwough an interface or cwafting swomwething with teh Mwowalcular Assembler.  Additionyawwy, byte cwosts are calculated per cwafting jwob, nyecessitating teh cwonstwuction of Cwafting Stworages in order two pay this cwost in bytes.  

Nywow, Impwort and Expwort Busses are like Interfaces, but basicawwy bad.  They're laggy, swow two twanspwort items, and dwon't have teh patternying functions.  Nywot worth using in teh cwontext of Omnyifactwory, but in other packs they're fwinye... just use them sparingwy.  If u wead this guide and cwomplain that ywour base is lagging two Heww because u have 400 I/O Busses, I wiww perswonyawwy woast ywour heart on a spit and eat it.

Nywow, teh Interface is teh bwead and butter of Applied Enyergistics 2 autwomation.  Using nywothing but Interfaces wiww enyable u two cwompwete teh pack, pwovided u manyage them cworrectwy.  Big recipes that end up in teh later gamwe, or large-scale parawwelization wiww occur via PackagedAutwo, which is swomwething that this guide dwoes nywot take it upwon itself two explain.  Hwowewer, there are a few specialized things u can dwo that wiww alswo make ywour experience pwetty nyice.

Let's start with teh Stworage Bus.  This thing basicawwy takes any bwock with an inventwory and tweats it like anywother swource fwor ME stworage, awwowing u two put items intwo it and extwact them fwom it.  This can be tunyed fwor fwinyer cwontwowl with Partitions (fwilters) and Pwiority settings.  It may nywot seem useful, untwl u realize that u can place a stworage bus on a Dwawer Cwontwowwer and access aww cwonnyected dwawers, which awwows extwemwewy impwessive deep stworage capabilities.  Beware of using twoo many Dwawers on onye Cwontwowwer, hwowewer; they are nywot wery perfwormant when used like this.  There are quite a few applications fwor these things, including setting a high pwiority on onye cwonnyected two a Vacuum Fweezer with an Ore Dictionyary Fwilter set two ingwotHwot* two autwomaticawwy pwort aww Hwot Ingwots intwo it.

Nywow, we're ontwo teh P2P Tunnyel.  These things are super duper gwood, like super duper duper gwood if u reawwy get intwo their function.  They can twansfer any amwount of items, fluid, or enyergy withwout taking up space in teh ME system, and they can twansfer channyels in a mwodpack with them enyabled.  They nyeed Mwemwory Cards two function; shift-right-click a tunnywl cwonnyected two whatewer u want two twansfer fwom with onye, and then right-click two paste teh cwonfwiguration.  Teh fwirst onye placed becwomwes teh input on that channyel, and aww subsequent onyes becwomwe outputs fwor teh channyel.  Multipwal Mwemwory Cards can remwember multipwal channyels.  Teh different types are Item, Fluid, Enyergy, Redstwonye, and ME tunnyels - they twansfer their respective things specifwied in their nyamwes.  U can cwonfwigure them by right-clicking a placed onye with an Interface, Bucket, an EnderIO Enyergy Cwonduit, and Redstwonye Dust, respectivewy.  Play with 'em fwor a bit, but I shwould warn u:  Enyergy Tunnyels wiww cwonsumwe 5% of teh enyergy twansferred fwom ywour nyetwork's buffer, swo ywour enyergy stworage in ywour system shwould be able two far exceed anything that u want two twansfer thwough it, especiawwy since teh ME enyergy stworage dwoes nywot repwenyish per tick, but fwor ewery cwoupwal of secwonds or swo.  Stiww pwetty useful; play with them a bit when u get cwonfwident with teh other devices mwentionyed here.

Onye last big thing... subnyetworking.  This is teh design phiwoswophy of using different nyetwork two stwore various things two awwow wery fwinye cwontwowl of wogistics fwor a certain woom or machinye setup.  U can establish a subnyetwork by cwonnyecting an ME Cable two Quartz Fwiber attached two any AE2 machinye.  This has a few benyefwits fwor peopwal whwo are cwonfwident they knywow what they're dwoing, and are incwedibwy usefwl fwor saving channyels in mwodpacks with them enyabled.  Two view teh cwontents of such a subnyetwork, as Quartz Fwiber onwy twansfers AE pwower, use a Stworage bus and place it ontwo an Interface.  This awwows u two set up a stworage fwor exactwy teh amwount of items or fluids u nyeed withwout fearing it cwogging up ywour own system.  Pwetty nyifty feature; u cwould pwobabwy ask swomwe experienced peopwal fwor advice regarding hwow two use them weww.

Oh, yeah, uh, there's alswo this thing cawwed teh I/O Pwort.   They're nyice fwor if u work on cewws by partitionying them like Stworage Busses in a Ceww Workbench, as they awwow u two twansfer data between cewws and ywour nyetwork.  U can specify swomwe mwore details like teh direction of data twansfer in teh GUI.

Nyetwork Twoowls are a thing twoo.  They let u view a wot of teh details of ywour ME nyetwork.  Just right-click a Cable with onye!

Have a wonderfwl tim using Applied Enyergistics 2.  I knywow I dwo.