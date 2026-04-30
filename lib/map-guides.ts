import type { MapGuide } from '@/lib/types';

export const MAP_GUIDES: Record<string, MapGuide> = {
  'Abbey': {
    description: 'Tasakaalus kaart, kus center control aitab avada rotatsiooni mõlemale tiivale.',
    classes: {
      lightTank: {
        early: 'Võta center control’i ümbrusest varane info ja väldi all-in pushi ilma toeta.',
        mid: 'Kui keskala on sinu käes, hoia mõlema tiiva rotatsioonid nähtaval.',
        late: 'Lõpus kasuta centerit cleanupiks ja kiireks ümberlülituseks.',
        danger: 'Ära jää centerisse mitme tulejoone alla.',
      },
      mediumTank: {
        early: 'Mängi centerit või selle kõrvaltaskuid, et toetada mõlemat flank’i.',
        mid: 'Kui keskelt avaneb nurk, kasuta seda kohe ühe tiiva murdmiseks.',
        late: 'Lõpus roteeru võidetud keskpositsioonilt sinna, kus väärtus on suurim.',
        danger: 'Ära jää staatiliselt keskossa farmitavaks.',
      },
      heavyTank: {
        early: 'Mine kindlasse lähivõitluse sektorisse ja toeta centeri kontrolli kaudselt.',
        mid: 'Suru siis, kui center annab infot ja kõrvalnurga.',
        late: 'Lõpus kasuta HP-d ühe tiiva lõplikuks avamiseks.',
        danger: 'Ära jaga jõudu korraga kõigisse lane’idesse.',
      },
      tankDestroyer: {
        early: 'Kata center crossing’eid ja ühe või kahe peamise flank’i entry’t.',
        mid: 'Muuda nurka, kui center control muutub ja uued lasujooned avanevad.',
        late: 'Hoia reset line’e ja crossfire’i lõppmängus.',
        danger: 'Ära jää liiga kaugele, kui center liigub edasi.',
      },
      spg: {
        early: 'Kata centeri kogunemisi ja lane’e, mida sealt toetatakse.',
        mid: 'Muuda trajektoori vastavalt sellele, kummale poole center mängib.',
        late: 'Fokusseeri pushi peatavaid võtmetanke.',
        danger: 'Ära tunnelda ainult centerit, kui fight läheb mujale.',
      },
    },
  },
  'Airfield': {
    description: 'Kaart ridgeline’ide, avatud lõikude ja külgtiibadega, kus info ja crossfire on väga tähtsad.',
    classes: {
      lightTank: {
        early: 'Võta varane info ridge’ide, keskmiste ületuste ja avatud külgede kohta.',
        mid: 'Hoia vastase rotatsioonid nähtaval ja väldi tarbetut HP trade’i.',
        late: 'Kui vastase spotterid või TD threat on väljas, kasuta mobiilsust cleanupiks.',
        danger: 'Ära tee pikki avatud ületusi ilma toeta.',
      },
      mediumTank: {
        early: 'Mängi hulldown’i ridge’il või kesksetel kõrgustel, kust saad crossfire’i luua.',
        mid: 'Kui üks flank seiskub, ava sealt uus nurk teise ridge’i või keskuse kaudu.',
        late: 'Lõpus kontrolli kõrgemaid positsioone ja lõika retreat ära.',
        danger: 'Ära jää crestile ülepeek’ima TD tule ette.',
      },
      heavyTank: {
        early: 'Vali lane, kus armor reaalselt töötab ja sul on spot olemas.',
        mid: 'Suru alles siis, kui mediumid annavad infot või kõrvalnurga.',
        late: 'Lõpus kasuta HP-d decisive pushiks valitud koridori või ridge’i kaudu.',
        danger: 'Ära jää avatud alale arty ja crossfire’i ette.',
      },
      tankDestroyer: {
        early: 'Kata ridge peek’e, avatud crossing’eid ja peamisi kogunemisi tagant või bush’ist.',
        mid: 'Vaheta positsiooni, kui üks tiib avaneb ja sul tekib parem laskenurk.',
        late: 'Hoia reset ja crossfire lõppmängu pushi vastu.',
        danger: 'Ära lase end tasuta spotida samast bush’ist mitu korda.',
      },
      spg: {
        early: 'Kata ridgeline’e ja kohti, kus heavyd või tornitankid pikalt peatuvad.',
        mid: 'Muuda trajektoori vastavalt sellele, kummal tiival fight käib.',
        late: 'Fokusseeri tanke, mis peatavad su tiimi pushi või võtavad capi.',
        danger: 'Ära tunnelda ainult ühte sektorit.',
      },
    },
  },
  'Berlin': {
    description: 'Linnakaart, kus nurgamäng, armor ja lühikesed koridorid määravad tempo.',
    classes: {
      lightTank: {
        early: 'Võta varane info kesk- ja kõrvaltänavate ületuste kohta, kuid ära mängi lightiga heavy lane’i esimest liini.',
        mid: 'Kasuta mobiilsust, et märgata rotatsioone ja aidata nõrgemat tänavat reseti või flankiga.',
        late: 'Lõpus puhasta tagumised taskud, jahi arty või lõika capi juurde minek ära.',
        danger: 'Ära vaheta tasuta HP-d kitsas tänavas ilma väljapääsuta.',
      },
      mediumTank: {
        early: 'Mängi keskseid tänavaid või kiireid kõrvalnurki, kust saad kiiresti pooli vahetada.',
        mid: 'Kui üks blokk või tänav avaneb, loo kohe uus laskenurk järgmise ristmiku peale.',
        late: 'Kasuta lõpus kiirust ja DPM-i linnapuhastuseks.',
        danger: 'Ära jää üksinda pikale sirgele või ristmiku crossfire’i.',
      },
      heavyTank: {
        early: 'Mine põhibrawli lane’ile ja mängi nurki, side-scrape’i või torni vastavalt tankile.',
        mid: 'Suru sammhaaval koos toega, mitte üksikute peek’idega.',
        late: 'Lõpus kasuta HP-d ja armorit viimaste tänavanurkade puhastamiseks.',
        danger: 'Ära lase tiimil jaguneda väikesteks gruppideks mitme lane’i vahel.',
      },
      tankDestroyer: {
        early: 'Kata pikki tänavaid ja kohti, kus vastane peab nurga alt välja tulema.',
        mid: 'Liigu paar nurka ettepoole, kui frontline stabiliseerub ja sul tekib uus laskenurk.',
        late: 'Hoia reseti line’e ja viimane risttuli capi vastu.',
        danger: 'Ära jää täiesti taha ilma reaalse mõjuta.',
      },
      spg: {
        early: 'Fokusseeri peamisi linnabrawl’e ja kohti, kus heavyd kogunevad nurga taha.',
        mid: 'Muuda tulejoont, kui põhiline fight liigub teisele tänavale.',
        late: 'Reseti cap või aita kinni jäänud corridor lahti murda.',
        danger: 'Arty mõju on piiratud; sihtmärgid tuleb valida hoolikalt.',
      },
    },
  },
  'Cliff': {
    description: 'Kõrgusekontrolli kaart, kus keskne hill või kõrgem platoo annab tugeva info- ja tule-eelise.',
    classes: {
      lightTank: {
        early: 'Contest’i varast kõrgust ainult siis, kui sul on kiirus ja tugi; muidu võta turvaline info kõrguse jalamil.',
        mid: 'Kui hill on kontrolli all, hoia vastase liikumised mõlemas tiivas nähtaval.',
        late: 'Kasuta lõpus kõrguseeelise infot cleanupiks ja resetiks.',
        danger: 'Ära sure hill race’il ilma katteta.',
      },
      mediumTank: {
        early: 'Toeta hill pushi või mängi selle kõrvaltaskutest hulldown’i.',
        mid: 'Kui kõrgus on käes, ava sellest kohe külgtuli teisele flankile.',
        late: 'Lõpus rotatsiooni kiiresti võidetud kõrguselt sinna, kus on kõige rohkem väärtust.',
        danger: 'Ära jää crestile pikalt ülepeek’ima.',
      },
      heavyTank: {
        early: 'Mine hill foot või peamisse lähivõitluse corridor’i ja toeta kõrguse võtmist.',
        mid: 'Suru siis, kui kõrguse kontroll annab sulle info ja crossfire’i.',
        late: 'Lõpus murra läbi koos ülekaaluga.',
        danger: 'Ära roni aeglase heavyga üksinda kõrgusele.',
      },
      tankDestroyer: {
        early: 'Kata hill climb’i, kõrguse jalamit ja avatud liikumisi tagumisest turvalisest positsioonist.',
        mid: 'Muuda nurka, kui hill fight on otsustatud või üks tiib avaneb.',
        late: 'Hoia cap reset ja viimase pushi vastu risttuld.',
        danger: 'Ära jää alguse camp-positsiooni liiga kauaks.',
      },
      spg: {
        early: 'Kata kõrguse peale minekut ja hill foot clusterid.',
        mid: 'Vaheta tulejoont, et saada kätte teine aktiivne lane.',
        late: 'Reseti cap või karista aeglaseid tanke kõrguse all.',
        danger: 'Ära jää pärast esimest lasuseeriat samasse kohta.',
      },
    },
  },
  'El Halluf': {
    description: 'Kaart ridgeline’ide, avatud lõikude ja külgtiibadega, kus info ja crossfire on väga tähtsad.',
    classes: {
      lightTank: {
        early: 'Võta varane info ridge’ide, keskmiste ületuste ja avatud külgede kohta.',
        mid: 'Hoia vastase rotatsioonid nähtaval ja väldi tarbetut HP trade’i.',
        late: 'Kui vastase spotterid või TD threat on väljas, kasuta mobiilsust cleanupiks.',
        danger: 'Ära tee pikki avatud ületusi ilma toeta.',
      },
      mediumTank: {
        early: 'Mängi hulldown’i ridge’il või kesksetel kõrgustel, kust saad crossfire’i luua.',
        mid: 'Kui üks flank seiskub, ava sealt uus nurk teise ridge’i või keskuse kaudu.',
        late: 'Lõpus kontrolli kõrgemaid positsioone ja lõika retreat ära.',
        danger: 'Ära jää crestile ülepeek’ima TD tule ette.',
      },
      heavyTank: {
        early: 'Vali lane, kus armor reaalselt töötab ja sul on spot olemas.',
        mid: 'Suru alles siis, kui mediumid annavad infot või kõrvalnurga.',
        late: 'Lõpus kasuta HP-d decisive pushiks valitud koridori või ridge’i kaudu.',
        danger: 'Ära jää avatud alale arty ja crossfire’i ette.',
      },
      tankDestroyer: {
        early: 'Kata ridge peek’e, avatud crossing’eid ja peamisi kogunemisi tagant või bush’ist.',
        mid: 'Vaheta positsiooni, kui üks tiib avaneb ja sul tekib parem laskenurk.',
        late: 'Hoia reset ja crossfire lõppmängu pushi vastu.',
        danger: 'Ära lase end tasuta spotida samast bush’ist mitu korda.',
      },
      spg: {
        early: 'Kata ridgeline’e ja kohti, kus heavyd või tornitankid pikalt peatuvad.',
        mid: 'Muuda trajektoori vastavalt sellele, kummal tiival fight käib.',
        late: 'Fokusseeri tanke, mis peatavad su tiimi pushi või võtavad capi.',
        danger: 'Ära tunnelda ainult ühte sektorit.',
      },
    },
  },
  "Empire's Border": {
    description: 'Suletum kaart kitsaste läbikäikude ja choke-pointidega, kus koordineeritud push on võtmetähtsusega.',
    classes: {
      lightTank: {
        early: 'Võta info peamiste choke’ide ja kitsaste läbikäikude kohta ilma all-in pushita.',
        mid: 'Hoia vastase roteerumised ühelt lane’ilt teisele nähtaval.',
        late: 'Lõpus lõika üksikud vastased kitsastes koridorides välja.',
        danger: 'Ära jää lõksu taskusse ilma taganemisteeta.',
      },
      mediumTank: {
        early: 'Mängi kõrgemat või kõrvalist nurka, kust saad põhilane’i aidata külgtulega.',
        mid: 'Kui üks choke on kontrolli all, ava sellest uus nurk teisele lane’ile.',
        late: 'Suru koos heavydga, kui crossfire on loodud.',
        danger: 'Ära jää üksi kahe choke’i vahele.',
      },
      heavyTank: {
        early: 'Mine peamisele corridor’ile ja mängi armorit nurga taga.',
        mid: 'Suru sammhaaval ja ära kingi HP-d pimedasse nurka.',
        late: 'Lõpus kasuta massi ja HP-d ühe lane’i täielikuks läbimurdmiseks.',
        danger: 'Ära push’i kitsasse choke’i ilma toeta.',
      },
      tankDestroyer: {
        early: 'Kata kohti, kus vastane peab kitsast nurgast välja pöörama.',
        mid: 'Liigu lähemale, kui frontline nihkub edasi ja uus laskenurk avaneb.',
        late: 'Hoia reset ja risttuli viimaste läbikäikude vastu.',
        danger: 'Ära jää täiesti tagumisse sektorisse ilma mõjueta.',
      },
      spg: {
        early: 'Fokusseeri kitsastes lane’ides kokku jäänud sihtmärke.',
        mid: 'Vaheta tulejoont kohe, kui vastane roteerub teise choke’i.',
        late: 'Aita murda lane’i, mis on seisma jäänud.',
        danger: 'Ära tunnelda ühte koridori kogu mäng.',
      },
    },
  },
  'Ensk': {
    description: 'Väike linnakaart, kus kontakt tekib kiiresti ja tempo võidab palju.',
    classes: {
      lightTank: {
        early: 'Võta kiire info kesktee või raudtee/avaala ületuse kohta ja taandu kohe.',
        mid: 'Toeta seal, kus tekib esimene number-ülekaal.',
        late: 'Lõpus flanki läbi lühikese kõrvaltee ja korista madala HP-ga vastased.',
        danger: 'Ära anna tasuta HP-d esimese 30 sekundiga.',
      },
      mediumTank: {
        early: 'Mängi lühikest kõrvalflanki või keskteed, kus saad kiiresti reageerida.',
        mid: 'Kui üks mikrolane on võidetud, ava sellest kohe järgmine nurk.',
        late: 'Kasuta lõpus tempot, sest väikesel kaardil jõuad kiiresti kõikjale.',
        danger: 'Ära jää pikale sirgele ilma coverita.',
      },
      heavyTank: {
        early: 'Mine peamisele lühikesele brawlilane’ile ja hoia survet.',
        mid: 'Suru koos, sest väikesel kaardil võidab tempo.',
        late: 'Lõpus murra otse läbi ja võta ruum enda kätte.',
        danger: 'Ära passiivitse liiga kaua.',
      },
      tankDestroyer: {
        early: 'Kata kiireid entry’sid ja overpeek’e algusest peale.',
        mid: 'Liigu lähemale niipea, kui üks lane selgelt võidetakse.',
        late: 'Hoia reset või risttuli viimase tänava vastu.',
        danger: 'Ära jää mõjuta algpositsiooni.',
      },
      spg: {
        early: 'Kata kohti, kus tankid klumpuvad kitsastes lane’ides.',
        mid: 'Muuda sihtmärki kohe, kui fight liigub.',
        late: 'Fokusseeri pushi peatavaid raskeid tanke.',
        danger: 'Ära jää samasse kohta, kui sind loetakse välja.',
      },
    },
  },
  'Erlenberg': {
    description: 'Kaart sildade, avatud väljade ja kaitstavate taskutega, kus ületuste ajastus on kriitiline.',
    classes: {
      lightTank: {
        early: 'Spot’i sillad ja avatud väljad ning hoia ülejõe rotatsioonid nähtaval.',
        mid: 'Väldi pikki ületusi enne, kui TD threat on selge.',
        late: 'Lõpus kasuta avatud servu flankimiseks pärast seda, kui crossing on turvalisem.',
        danger: 'Ära tee pimedat sillaületust.',
      },
      mediumTank: {
        early: 'Mängi poolavatud positsioone, kust saad aidata nii fieldi kui ületusi.',
        mid: 'Kui vastane jääb ühel pool kinni, ava sealt külgtuli üle jõe või silla.',
        late: 'Lõpus kontrolli ületuskohti ja lõika retreat ära.',
        danger: 'Ära jää avatud väljal passiivseks sihtmärgiks.',
      },
      heavyTank: {
        early: 'Vali turvaline brawliala sildade või külakoridoride lähedal.',
        mid: 'Suru alles siis, kui crossing või vastase asetumine on teada.',
        late: 'Lõpus kasuta HP-d kriitilise ületuse tegemiseks.',
        danger: 'Ära sõida pimesi üle silla.',
      },
      tankDestroyer: {
        early: 'Kata sillad, avatud crossingud ja field pushid pikkadest nurkadest.',
        mid: 'Muuda pooli, kui üks crossing muutub aktiivseks.',
        late: 'Hoia crossfire või reset baasi vastu.',
        danger: 'Ära lase lightidel tasuta sinu bush’e kontrollida.',
      },
      spg: {
        early: 'Kata crossing’uid ja avatud väljal seisvaid klastreid.',
        mid: 'Muuda trajektoori vastavalt aktiivsele sillale või field pushile.',
        late: 'Fokusseeri crossingut tegevad tankid.',
        danger: 'Ära unusta counterbattery riski.',
      },
    },
  },
  "Fisherman's Bay": {
    description: 'Avatud põldude ja küla/hoonete segukaart, kus visioon ja positsioonivahetus määravad palju.',
    classes: {
      lightTank: {
        early: 'Võta info avatud fieldi ja küla sissejooksude kohta, mitte ära trade’i linnaliselt.',
        mid: 'Hoia vastase liikumised fieldi ja küla vahel spotted.',
        late: 'Lõpus kasuta avatud ruumi cleanupiks või flankimiseks.',
        danger: 'Ära jookse põllule ilma tuletoeta.',
      },
      mediumTank: {
        early: 'Mängi küla servi või field ridge’i, et luua crossfire’i.',
        mid: 'Kui üks pool seiskub, ava teine fieldilt või küla äärest.',
        late: 'Lõpus lõika vastase retreat fieldi kaudu ära.',
        danger: 'Ära jää avatud fieldile arty ja TD tule alla.',
      },
      heavyTank: {
        early: 'Mine küla või lähivõitluse tasku, kus armor töötab paremini.',
        mid: 'Suru siis, kui mediumid annavad infoga kõrvalnurga.',
        late: 'Lõpus murra läbi küla või baasi lähiala kaudu.',
        danger: 'Ära saada heavy’t avatud põllule ilma vajaduseta.',
      },
      tankDestroyer: {
        early: 'Kata field crossing’eid ja küla sissekäike bush’ist või tagaliinilt.',
        mid: 'Muuda positsiooni, kui üks tiib selgelt avaneb.',
        late: 'Hoia reset ja viimane risttuli capi vastu.',
        danger: 'Ära jää ühe puu või bush’i taha kogu mänguks.',
      },
      spg: {
        early: 'Kata küla klastreid ja fieldile kinni jäänud tanke.',
        mid: 'Vaheta tulejoont, kui fight liigub fieldi ja küla vahel.',
        late: 'Fokusseeri pushi peatavaid heavysid.',
        danger: 'Ära jäta cap resetti liiga hiljaks.',
      },
    },
  },
  'Fjords': {
    description: 'Kaart ridgeline’ide, avatud lõikude ja külgtiibadega, kus info ja crossfire on väga tähtsad.',
    classes: {
      lightTank: {
        early: 'Võta varane info ridge’ide, keskmiste ületuste ja avatud külgede kohta.',
        mid: 'Hoia vastase rotatsioonid nähtaval ja väldi tarbetut HP trade’i.',
        late: 'Kui vastase spotterid või TD threat on väljas, kasuta mobiilsust cleanupiks.',
        danger: 'Ära tee pikki avatud ületusi ilma toeta.',
      },
      mediumTank: {
        early: 'Mängi hulldown’i ridge’il või kesksetel kõrgustel, kust saad crossfire’i luua.',
        mid: 'Kui üks flank seiskub, ava sealt uus nurk teise ridge’i või keskuse kaudu.',
        late: 'Lõpus kontrolli kõrgemaid positsioone ja lõika retreat ära.',
        danger: 'Ära jää crestile ülepeek’ima TD tule ette.',
      },
      heavyTank: {
        early: 'Vali lane, kus armor reaalselt töötab ja sul on spot olemas.',
        mid: 'Suru alles siis, kui mediumid annavad infot või kõrvalnurga.',
        late: 'Lõpus kasuta HP-d decisive pushiks valitud koridori või ridge’i kaudu.',
        danger: 'Ära jää avatud alale arty ja crossfire’i ette.',
      },
      tankDestroyer: {
        early: 'Kata ridge peek’e, avatud crossing’eid ja peamisi kogunemisi tagant või bush’ist.',
        mid: 'Vaheta positsiooni, kui üks tiib avaneb ja sul tekib parem laskenurk.',
        late: 'Hoia reset ja crossfire lõppmängu pushi vastu.',
        danger: 'Ära lase end tasuta spotida samast bush’ist mitu korda.',
      },
      spg: {
        early: 'Kata ridgeline’e ja kohti, kus heavyd või tornitankid pikalt peatuvad.',
        mid: 'Muuda trajektoori vastavalt sellele, kummal tiival fight käib.',
        late: 'Fokusseeri tanke, mis peatavad su tiimi pushi või võtavad capi.',
        danger: 'Ära tunnelda ainult ühte sektorit.',
      },
    },
  },
  'Glacier': {
    description: 'Kaart ridgeline’ide, avatud lõikude ja külgtiibadega, kus info ja crossfire on väga tähtsad.',
    classes: {
      lightTank: {
        early: 'Võta varane info ridge’ide, keskmiste ületuste ja avatud külgede kohta.',
        mid: 'Hoia vastase rotatsioonid nähtaval ja väldi tarbetut HP trade’i.',
        late: 'Kui vastase spotterid või TD threat on väljas, kasuta mobiilsust cleanupiks.',
        danger: 'Ära tee pikki avatud ületusi ilma toeta.',
      },
      mediumTank: {
        early: 'Mängi hulldown’i ridge’il või kesksetel kõrgustel, kust saad crossfire’i luua.',
        mid: 'Kui üks flank seiskub, ava sealt uus nurk teise ridge’i või keskuse kaudu.',
        late: 'Lõpus kontrolli kõrgemaid positsioone ja lõika retreat ära.',
        danger: 'Ära jää crestile ülepeek’ima TD tule ette.',
      },
      heavyTank: {
        early: 'Vali lane, kus armor reaalselt töötab ja sul on spot olemas.',
        mid: 'Suru alles siis, kui mediumid annavad infot või kõrvalnurga.',
        late: 'Lõpus kasuta HP-d decisive pushiks valitud koridori või ridge’i kaudu.',
        danger: 'Ära jää avatud alale arty ja crossfire’i ette.',
      },
      tankDestroyer: {
        early: 'Kata ridge peek’e, avatud crossing’eid ja peamisi kogunemisi tagant või bush’ist.',
        mid: 'Vaheta positsiooni, kui üks tiib avaneb ja sul tekib parem laskenurk.',
        late: 'Hoia reset ja crossfire lõppmängu pushi vastu.',
        danger: 'Ära lase end tasuta spotida samast bush’ist mitu korda.',
      },
      spg: {
        early: 'Kata ridgeline’e ja kohti, kus heavyd või tornitankid pikalt peatuvad.',
        mid: 'Muuda trajektoori vastavalt sellele, kummal tiival fight käib.',
        late: 'Fokusseeri tanke, mis peatavad su tiimi pushi või võtavad capi.',
        danger: 'Ära tunnelda ainult ühte sektorit.',
      },
    },
  },
  'Ghost Town': {
    description: 'Tasakaalus kaart, kus center control aitab avada rotatsiooni mõlemale tiivale.',
    classes: {
      lightTank: {
        early: 'Võta center control’i ümbrusest varane info ja väldi all-in pushi ilma toeta.',
        mid: 'Kui keskala on sinu käes, hoia mõlema tiiva rotatsioonid nähtaval.',
        late: 'Lõpus kasuta centerit cleanupiks ja kiireks ümberlülituseks.',
        danger: 'Ära jää centerisse mitme tulejoone alla.',
      },
      mediumTank: {
        early: 'Mängi centerit või selle kõrvaltaskuid, et toetada mõlemat flank’i.',
        mid: 'Kui keskelt avaneb nurk, kasuta seda kohe ühe tiiva murdmiseks.',
        late: 'Lõpus roteeru võidetud keskpositsioonilt sinna, kus väärtus on suurim.',
        danger: 'Ära jää staatiliselt keskossa farmitavaks.',
      },
      heavyTank: {
        early: 'Mine kindlasse lähivõitluse sektorisse ja toeta centeri kontrolli kaudselt.',
        mid: 'Suru siis, kui center annab infot ja kõrvalnurga.',
        late: 'Lõpus kasuta HP-d ühe tiiva lõplikuks avamiseks.',
        danger: 'Ära jaga jõudu korraga kõigisse lane’idesse.',
      },
      tankDestroyer: {
        early: 'Kata center crossing’eid ja ühe või kahe peamise flank’i entry’t.',
        mid: 'Muuda nurka, kui center control muutub ja uued lasujooned avanevad.',
        late: 'Hoia reset line’e ja crossfire’i lõppmängus.',
        danger: 'Ära jää liiga kaugele, kui center liigub edasi.',
      },
      spg: {
        early: 'Kata centeri kogunemisi ja lane’e, mida sealt toetatakse.',
        mid: 'Muuda trajektoori vastavalt sellele, kummale poole center mängib.',
        late: 'Fokusseeri pushi peatavaid võtmetanke.',
        danger: 'Ära tunnelda ainult centerit, kui fight läheb mujale.',
      },
    },
  },
  'Highway': {
    description: 'Kaart, mis jaguneb linna- ja avatud field-flangi vahel; rotatsioonide lugemine otsustab tulemuse.',
    classes: {
      lightTank: {
        early: 'Spot’i avatud fieldi crossing’eid ja kontrolli, kas city lane’il on varajane push.',
        mid: 'Hoia vastase rotation city ja fieldi vahel nähtaval.',
        late: 'Lõpus kasuta fieldi avatud serva cleanupiks või arty huntimiseks.',
        danger: 'Ära jää fieldi keskele ilma põõsaste või supportita.',
      },
      mediumTank: {
        early: 'Mängi fieldi ridgeline’i või keskala nii, et saad city’t külgtulega aidata.',
        mid: 'Kui city brawl seiskub, ava sealt fieldilt või keskelt uus nurk.',
        late: 'Lõpus kasuta kiirust, et lõigata vastane kaheks.',
        danger: 'Ära jää maantee või open-field crossfire’i.',
      },
      heavyTank: {
        early: 'Mine city/lähivõitluse lane’ile ja kontrolli nurgad.',
        mid: 'Suru alles siis, kui kõrvalflank annab infot või tuld.',
        late: 'Lõpus murra läbi city ja võta cap kontrolli alla.',
        danger: 'Ära lähe üksinda avatud väljale rasketankiga.',
      },
      tankDestroyer: {
        early: 'Kata field crossing’eid ja city sissekäike pikal joonel.',
        mid: 'Muuda pooli, kui üks side kaotab või võidab kiiresti.',
        late: 'Hoia reset line’e ja risttuld lõppmängus.',
        danger: 'Ära seisa baasi ääres ilma laskenurgata.',
      },
      spg: {
        early: 'Kata city klastreid või fieldile kinni jäänud raskeid tanke.',
        mid: 'Vaheta trajektoori vastavalt sellele, kumb flank on aktiivne.',
        late: 'Reseti cap ja fokusseeri lane’i murdvaid tanke.',
        danger: 'Ära tunnelda ainult city’t.',
      },
    },
  },
  'Himmelsdorf': {
    description: 'Linnakaart, kus nurgamäng, armor ja lühikesed koridorid määravad tempo.',
    classes: {
      lightTank: {
        early: 'Võta varane info kesk- ja kõrvaltänavate ületuste kohta, kuid ära mängi lightiga heavy lane’i esimest liini.',
        mid: 'Kasuta mobiilsust, et märgata rotatsioone ja aidata nõrgemat tänavat reseti või flankiga.',
        late: 'Lõpus puhasta tagumised taskud, jahi arty või lõika capi juurde minek ära.',
        danger: 'Ära vaheta tasuta HP-d kitsas tänavas ilma väljapääsuta.',
      },
      mediumTank: {
        early: 'Mängi keskseid tänavaid või kiireid kõrvalnurki, kust saad kiiresti pooli vahetada.',
        mid: 'Kui üks blokk või tänav avaneb, loo kohe uus laskenurk järgmise ristmiku peale.',
        late: 'Kasuta lõpus kiirust ja DPM-i linnapuhastuseks.',
        danger: 'Ära jää üksinda pikale sirgele või ristmiku crossfire’i.',
      },
      heavyTank: {
        early: 'Mine põhibrawli lane’ile ja mängi nurki, side-scrape’i või torni vastavalt tankile.',
        mid: 'Suru sammhaaval koos toega, mitte üksikute peek’idega.',
        late: 'Lõpus kasuta HP-d ja armorit viimaste tänavanurkade puhastamiseks.',
        danger: 'Ära lase tiimil jaguneda väikesteks gruppideks mitme lane’i vahel.',
      },
      tankDestroyer: {
        early: 'Kata pikki tänavaid ja kohti, kus vastane peab nurga alt välja tulema.',
        mid: 'Liigu paar nurka ettepoole, kui frontline stabiliseerub ja sul tekib uus laskenurk.',
        late: 'Hoia reseti line’e ja viimane risttuli capi vastu.',
        danger: 'Ära jää täiesti taha ilma reaalse mõjuta.',
      },
      spg: {
        early: 'Fokusseeri peamisi linnabrawl’e ja kohti, kus heavyd kogunevad nurga taha.',
        mid: 'Muuda tulejoont, kui põhiline fight liigub teisele tänavale.',
        late: 'Reseti cap või aita kinni jäänud corridor lahti murda.',
        danger: 'Arty mõju on piiratud; sihtmärgid tuleb valida hoolikalt.',
      },
    },
  },
  'Karelia': {
    description: 'Kaart ridgeline’ide, avatud lõikude ja külgtiibadega, kus info ja crossfire on väga tähtsad.',
    classes: {
      lightTank: {
        early: 'Võta varane info ridge’ide, keskmiste ületuste ja avatud külgede kohta.',
        mid: 'Hoia vastase rotatsioonid nähtaval ja väldi tarbetut HP trade’i.',
        late: 'Kui vastase spotterid või TD threat on väljas, kasuta mobiilsust cleanupiks.',
        danger: 'Ära tee pikki avatud ületusi ilma toeta.',
      },
      mediumTank: {
        early: 'Mängi hulldown’i ridge’il või kesksetel kõrgustel, kust saad crossfire’i luua.',
        mid: 'Kui üks flank seiskub, ava sealt uus nurk teise ridge’i või keskuse kaudu.',
        late: 'Lõpus kontrolli kõrgemaid positsioone ja lõika retreat ära.',
        danger: 'Ära jää crestile ülepeek’ima TD tule ette.',
      },
      heavyTank: {
        early: 'Vali lane, kus armor reaalselt töötab ja sul on spot olemas.',
        mid: 'Suru alles siis, kui mediumid annavad infot või kõrvalnurga.',
        late: 'Lõpus kasuta HP-d decisive pushiks valitud koridori või ridge’i kaudu.',
        danger: 'Ära jää avatud alale arty ja crossfire’i ette.',
      },
      tankDestroyer: {
        early: 'Kata ridge peek’e, avatud crossing’eid ja peamisi kogunemisi tagant või bush’ist.',
        mid: 'Vaheta positsiooni, kui üks tiib avaneb ja sul tekib parem laskenurk.',
        late: 'Hoia reset ja crossfire lõppmängu pushi vastu.',
        danger: 'Ära lase end tasuta spotida samast bush’ist mitu korda.',
      },
      spg: {
        early: 'Kata ridgeline’e ja kohti, kus heavyd või tornitankid pikalt peatuvad.',
        mid: 'Muuda trajektoori vastavalt sellele, kummal tiival fight käib.',
        late: 'Fokusseeri tanke, mis peatavad su tiimi pushi või võtavad capi.',
        danger: 'Ära tunnelda ainult ühte sektorit.',
      },
    },
  },
  'Kharkov': {
    description: 'Linnakaart, kus nurgamäng, armor ja lühikesed koridorid määravad tempo.',
    classes: {
      lightTank: {
        early: 'Võta varane info kesk- ja kõrvaltänavate ületuste kohta, kuid ära mängi lightiga heavy lane’i esimest liini.',
        mid: 'Kasuta mobiilsust, et märgata rotatsioone ja aidata nõrgemat tänavat reseti või flankiga.',
        late: 'Lõpus puhasta tagumised taskud, jahi arty või lõika capi juurde minek ära.',
        danger: 'Ära vaheta tasuta HP-d kitsas tänavas ilma väljapääsuta.',
      },
      mediumTank: {
        early: 'Mängi keskseid tänavaid või kiireid kõrvalnurki, kust saad kiiresti pooli vahetada.',
        mid: 'Kui üks blokk või tänav avaneb, loo kohe uus laskenurk järgmise ristmiku peale.',
        late: 'Kasuta lõpus kiirust ja DPM-i linnapuhastuseks.',
        danger: 'Ära jää üksinda pikale sirgele või ristmiku crossfire’i.',
      },
      heavyTank: {
        early: 'Mine põhibrawli lane’ile ja mängi nurki, side-scrape’i või torni vastavalt tankile.',
        mid: 'Suru sammhaaval koos toega, mitte üksikute peek’idega.',
        late: 'Lõpus kasuta HP-d ja armorit viimaste tänavanurkade puhastamiseks.',
        danger: 'Ära lase tiimil jaguneda väikesteks gruppideks mitme lane’i vahel.',
      },
      tankDestroyer: {
        early: 'Kata pikki tänavaid ja kohti, kus vastane peab nurga alt välja tulema.',
        mid: 'Liigu paar nurka ettepoole, kui frontline stabiliseerub ja sul tekib uus laskenurk.',
        late: 'Hoia reseti line’e ja viimane risttuli capi vastu.',
        danger: 'Ära jää täiesti taha ilma reaalse mõjuta.',
      },
      spg: {
        early: 'Fokusseeri peamisi linnabrawl’e ja kohti, kus heavyd kogunevad nurga taha.',
        mid: 'Muuda tulejoont, kui põhiline fight liigub teisele tänavale.',
        late: 'Reseti cap või aita kinni jäänud corridor lahti murda.',
        danger: 'Arty mõju on piiratud; sihtmärgid tuleb valida hoolikalt.',
      },
    },
  },
  'Klondike': {
    description: 'Kaart ridgeline’ide, avatud lõikude ja külgtiibadega, kus info ja crossfire on väga tähtsad.',
    classes: {
      lightTank: {
        early: 'Võta varane info ridge’ide, keskmiste ületuste ja avatud külgede kohta.',
        mid: 'Hoia vastase rotatsioonid nähtaval ja väldi tarbetut HP trade’i.',
        late: 'Kui vastase spotterid või TD threat on väljas, kasuta mobiilsust cleanupiks.',
        danger: 'Ära tee pikki avatud ületusi ilma toeta.',
      },
      mediumTank: {
        early: 'Mängi hulldown’i ridge’il või kesksetel kõrgustel, kust saad crossfire’i luua.',
        mid: 'Kui üks flank seiskub, ava sealt uus nurk teise ridge’i või keskuse kaudu.',
        late: 'Lõpus kontrolli kõrgemaid positsioone ja lõika retreat ära.',
        danger: 'Ära jää crestile ülepeek’ima TD tule ette.',
      },
      heavyTank: {
        early: 'Vali lane, kus armor reaalselt töötab ja sul on spot olemas.',
        mid: 'Suru alles siis, kui mediumid annavad infot või kõrvalnurga.',
        late: 'Lõpus kasuta HP-d decisive pushiks valitud koridori või ridge’i kaudu.',
        danger: 'Ära jää avatud alale arty ja crossfire’i ette.',
      },
      tankDestroyer: {
        early: 'Kata ridge peek’e, avatud crossing’eid ja peamisi kogunemisi tagant või bush’ist.',
        mid: 'Vaheta positsiooni, kui üks tiib avaneb ja sul tekib parem laskenurk.',
        late: 'Hoia reset ja crossfire lõppmängu pushi vastu.',
        danger: 'Ära lase end tasuta spotida samast bush’ist mitu korda.',
      },
      spg: {
        early: 'Kata ridgeline’e ja kohti, kus heavyd või tornitankid pikalt peatuvad.',
        mid: 'Muuda trajektoori vastavalt sellele, kummal tiival fight käib.',
        late: 'Fokusseeri tanke, mis peatavad su tiimi pushi või võtavad capi.',
        danger: 'Ära tunnelda ainult ühte sektorit.',
      },
    },
  },
  'Lakeville': {
    description: 'Kolme põhilise lane’iga kaart, kus vale jaotus jätab ühe tiiva kiiresti ilma toeta.',
    classes: {
      lightTank: {
        early: 'Võta varane info keskraja kohta ja kontrolli, kas kõrvallane’id on päriselt mehitamata.',
        mid: 'Hoia vähemalt üks lane pidevalt nähtaval, et tiim saaks õigesti roteeruda.',
        late: 'Lõpus kasuta kiirust lane’ide vahetamiseks ja cleanupiks.',
        danger: 'Ära jää nõrgale lane’ile üksinda.',
      },
      mediumTank: {
        early: 'Mängi keskteed või seda lane’i, kust saad kiirelt kahte teist aidata.',
        mid: 'Kui üks lane võidetakse, ava sellest kohe surve järgmisele.',
        late: 'Lõpus kasutad rotatsiooni ülekaalu parima väärtusega kohas.',
        danger: 'Ära tunnelda ühte lane’i kogu mäng.',
      },
      heavyTank: {
        early: 'Mine lane’ile, kus lähivõitlus on kõige kindlam ja sul on toetus olemas.',
        mid: 'Suru alles siis, kui keskraja info lubab seda teha turvaliselt.',
        late: 'Lõpus murra läbi kõige nõrgemast punktist.',
        danger: 'Ära jäta peamist lane’i ilma piisava massita.',
      },
      tankDestroyer: {
        early: 'Kata keskraja ületusi ja kõige tõenäolisemat heavy pushi.',
        mid: 'Muuda positsiooni, kui lane’ide tasakaal muutub.',
        late: 'Hoia reset line’e ja lõplikku crossfire’i.',
        danger: 'Ära jää kaardi serva mõjueta.',
      },
      spg: {
        early: 'Kata kõige aktiivsemat lane’i ja kesktee kogunemisi.',
        mid: 'Muuda sihtmärki, kui lahing liigub teisele lane’ile.',
        late: 'Aita kinni jäänud push lahti teha.',
        danger: 'Ära kuluta kogu aega valedel sihtmärkidel.',
      },
    },
  },
  'Live Oaks': {
    description: 'Kaart, mis jaguneb linna- ja avatud field-flangi vahel; rotatsioonide lugemine otsustab tulemuse.',
    classes: {
      lightTank: {
        early: 'Spot’i avatud fieldi crossing’eid ja kontrolli, kas city lane’il on varajane push.',
        mid: 'Hoia vastase rotation city ja fieldi vahel nähtaval.',
        late: 'Lõpus kasuta fieldi avatud serva cleanupiks või arty huntimiseks.',
        danger: 'Ära jää fieldi keskele ilma põõsaste või supportita.',
      },
      mediumTank: {
        early: 'Mängi fieldi ridgeline’i või keskala nii, et saad city’t külgtulega aidata.',
        mid: 'Kui city brawl seiskub, ava sealt fieldilt või keskelt uus nurk.',
        late: 'Lõpus kasuta kiirust, et lõigata vastane kaheks.',
        danger: 'Ära jää maantee või open-field crossfire’i.',
      },
      heavyTank: {
        early: 'Mine city/lähivõitluse lane’ile ja kontrolli nurgad.',
        mid: 'Suru alles siis, kui kõrvalflank annab infot või tuld.',
        late: 'Lõpus murra läbi city ja võta cap kontrolli alla.',
        danger: 'Ära lähe üksinda avatud väljale rasketankiga.',
      },
      tankDestroyer: {
        early: 'Kata field crossing’eid ja city sissekäike pikal joonel.',
        mid: 'Muuda pooli, kui üks side kaotab või võidab kiiresti.',
        late: 'Hoia reset line’e ja risttuld lõppmängus.',
        danger: 'Ära seisa baasi ääres ilma laskenurgata.',
      },
      spg: {
        early: 'Kata city klastreid või fieldile kinni jäänud raskeid tanke.',
        mid: 'Vaheta trajektoori vastavalt sellele, kumb flank on aktiivne.',
        late: 'Reseti cap ja fokusseeri lane’i murdvaid tanke.',
        danger: 'Ära tunnelda ainult city’t.',
      },
    },
  },
  'Malinovka': {
    description: 'Avatud kaart, kus spotting, camo ja pikad tulejooned teevad lightid ja TD-d eriti mõjukaks.',
    classes: {
      lightTank: {
        early: 'Vali aktiivne või passiivne spotting vastavalt setupile, spawnile ja vastase lightidele.',
        mid: 'Hoia visiooni ning ära trade’i HP-d tarbetult enne, kui TD asukohad on enam-vähem teada.',
        late: 'Kui vastase spotterid on eemaldatud, saad terve kaardi lahti mängida.',
        danger: 'Ära korda sama aktiivset trajektoori liiga palju.',
      },
      mediumTank: {
        early: 'Toeta ridgeline’i või avatud lane’i ning karista kõiki spotted sihtmärke.',
        mid: 'Vaheta tiiba vastase setupi järgi ja loo crossfire’i seal, kus spot töötab.',
        late: 'Suru alles siis, kui info ja TD threat on kontrolli all.',
        danger: 'Ära sõida pimesi avatud lane’ile.',
      },
      heavyTank: {
        early: 'Mängi kannatlikult lane’i, kus sul on spot olemas ja cover töötab.',
        mid: 'Toeta seal, kus armor reaalselt loeb, mitte ära jää avatud väljale kinni.',
        late: 'Lõpus pushi siis, kui peamised pikad tulejooned on kadunud või seotud.',
        danger: 'Ära jää avatud väljale arty ja crossfire’i ette.',
      },
      tankDestroyer: {
        early: 'Kasuta bush’e ja pikki lasunurki, aga vaheta positsiooni pärast paari lasku.',
        mid: 'Kui üks tiib avaneb, liiguta oma tulejoon sinna, kus saad pushi peatada või toetada.',
        late: 'Hoia reset ja risttuli viimase läbimurde vastu.',
        danger: 'Ära lase end tasuta spotida või blindshot’iga eemaldada.',
      },
      spg: {
        early: 'Karista ridgeline’i, field pushi ja klastreid avatud kohtades.',
        mid: 'Muuda trajektoore vastavalt sellele, kus vastase põhiline surve koguneb.',
        late: 'Fokusseeri tanke, kes takistavad su tiimi pushi või võtavad capi.',
        danger: 'Ära tunnelda ainult ühte field lane’i.',
      },
    },
  },
  'Mannerheim Line': {
    description: 'Kaart ridgeline’ide, avatud lõikude ja külgtiibadega, kus info ja crossfire on väga tähtsad.',
    classes: {
      lightTank: {
        early: 'Võta varane info ridge’ide, keskmiste ületuste ja avatud külgede kohta.',
        mid: 'Hoia vastase rotatsioonid nähtaval ja väldi tarbetut HP trade’i.',
        late: 'Kui vastase spotterid või TD threat on väljas, kasuta mobiilsust cleanupiks.',
        danger: 'Ära tee pikki avatud ületusi ilma toeta.',
      },
      mediumTank: {
        early: 'Mängi hulldown’i ridge’il või kesksetel kõrgustel, kust saad crossfire’i luua.',
        mid: 'Kui üks flank seiskub, ava sealt uus nurk teise ridge’i või keskuse kaudu.',
        late: 'Lõpus kontrolli kõrgemaid positsioone ja lõika retreat ära.',
        danger: 'Ära jää crestile ülepeek’ima TD tule ette.',
      },
      heavyTank: {
        early: 'Vali lane, kus armor reaalselt töötab ja sul on spot olemas.',
        mid: 'Suru alles siis, kui mediumid annavad infot või kõrvalnurga.',
        late: 'Lõpus kasuta HP-d decisive pushiks valitud koridori või ridge’i kaudu.',
        danger: 'Ära jää avatud alale arty ja crossfire’i ette.',
      },
      tankDestroyer: {
        early: 'Kata ridge peek’e, avatud crossing’eid ja peamisi kogunemisi tagant või bush’ist.',
        mid: 'Vaheta positsiooni, kui üks tiib avaneb ja sul tekib parem laskenurk.',
        late: 'Hoia reset ja crossfire lõppmängu pushi vastu.',
        danger: 'Ära lase end tasuta spotida samast bush’ist mitu korda.',
      },
      spg: {
        early: 'Kata ridgeline’e ja kohti, kus heavyd või tornitankid pikalt peatuvad.',
        mid: 'Muuda trajektoori vastavalt sellele, kummal tiival fight käib.',
        late: 'Fokusseeri tanke, mis peatavad su tiimi pushi või võtavad capi.',
        danger: 'Ära tunnelda ainult ühte sektorit.',
      },
    },
  },
  'Mines': {
    description: 'Kõrgusekontrolli kaart, kus keskne hill või kõrgem platoo annab tugeva info- ja tule-eelise.',
    classes: {
      lightTank: {
        early: 'Contest’i varast kõrgust ainult siis, kui sul on kiirus ja tugi; muidu võta turvaline info kõrguse jalamil.',
        mid: 'Kui hill on kontrolli all, hoia vastase liikumised mõlemas tiivas nähtaval.',
        late: 'Kasuta lõpus kõrguseeelise infot cleanupiks ja resetiks.',
        danger: 'Ära sure hill race’il ilma katteta.',
      },
      mediumTank: {
        early: 'Toeta hill pushi või mängi selle kõrvaltaskutest hulldown’i.',
        mid: 'Kui kõrgus on käes, ava sellest kohe külgtuli teisele flankile.',
        late: 'Lõpus rotatsiooni kiiresti võidetud kõrguselt sinna, kus on kõige rohkem väärtust.',
        danger: 'Ära jää crestile pikalt ülepeek’ima.',
      },
      heavyTank: {
        early: 'Mine hill foot või peamisse lähivõitluse corridor’i ja toeta kõrguse võtmist.',
        mid: 'Suru siis, kui kõrguse kontroll annab sulle info ja crossfire’i.',
        late: 'Lõpus murra läbi koos ülekaaluga.',
        danger: 'Ära roni aeglase heavyga üksinda kõrgusele.',
      },
      tankDestroyer: {
        early: 'Kata hill climb’i, kõrguse jalamit ja avatud liikumisi tagumisest turvalisest positsioonist.',
        mid: 'Muuda nurka, kui hill fight on otsustatud või üks tiib avaneb.',
        late: 'Hoia cap reset ja viimase pushi vastu risttuld.',
        danger: 'Ära jää alguse camp-positsiooni liiga kauaks.',
      },
      spg: {
        early: 'Kata kõrguse peale minekut ja hill foot clusterid.',
        mid: 'Vaheta tulejoont, et saada kätte teine aktiivne lane.',
        late: 'Reseti cap või karista aeglaseid tanke kõrguse all.',
        danger: 'Ära jää pärast esimest lasuseeriat samasse kohta.',
      },
    },
  },
  'Mountain Pass': {
    description: 'Suletum kaart kitsaste läbikäikude ja choke-pointidega, kus koordineeritud push on võtmetähtsusega.',
    classes: {
      lightTank: {
        early: 'Võta info peamiste choke’ide ja kitsaste läbikäikude kohta ilma all-in pushita.',
        mid: 'Hoia vastase roteerumised ühelt lane’ilt teisele nähtaval.',
        late: 'Lõpus lõika üksikud vastased kitsastes koridorides välja.',
        danger: 'Ära jää lõksu taskusse ilma taganemisteeta.',
      },
      mediumTank: {
        early: 'Mängi kõrgemat või kõrvalist nurka, kust saad põhilane’i aidata külgtulega.',
        mid: 'Kui üks choke on kontrolli all, ava sellest uus nurk teisele lane’ile.',
        late: 'Suru koos heavydga, kui crossfire on loodud.',
        danger: 'Ära jää üksi kahe choke’i vahele.',
      },
      heavyTank: {
        early: 'Mine peamisele corridor’ile ja mängi armorit nurga taga.',
        mid: 'Suru sammhaaval ja ära kingi HP-d pimedasse nurka.',
        late: 'Lõpus kasuta massi ja HP-d ühe lane’i täielikuks läbimurdmiseks.',
        danger: 'Ära push’i kitsasse choke’i ilma toeta.',
      },
      tankDestroyer: {
        early: 'Kata kohti, kus vastane peab kitsast nurgast välja pöörama.',
        mid: 'Liigu lähemale, kui frontline nihkub edasi ja uus laskenurk avaneb.',
        late: 'Hoia reset ja risttuli viimaste läbikäikude vastu.',
        danger: 'Ära jää täiesti tagumisse sektorisse ilma mõjueta.',
      },
      spg: {
        early: 'Fokusseeri kitsastes lane’ides kokku jäänud sihtmärke.',
        mid: 'Vaheta tulejoont kohe, kui vastane roteerub teise choke’i.',
        late: 'Aita murda lane’i, mis on seisma jäänud.',
        danger: 'Ära tunnelda ühte koridori kogu mäng.',
      },
    },
  },
  'Murovanka': {
    description: 'Avatud kaart, kus spotting, camo ja pikad tulejooned teevad lightid ja TD-d eriti mõjukaks.',
    classes: {
      lightTank: {
        early: 'Vali aktiivne või passiivne spotting vastavalt setupile, spawnile ja vastase lightidele.',
        mid: 'Hoia visiooni ning ära trade’i HP-d tarbetult enne, kui TD asukohad on enam-vähem teada.',
        late: 'Kui vastase spotterid on eemaldatud, saad terve kaardi lahti mängida.',
        danger: 'Ära korda sama aktiivset trajektoori liiga palju.',
      },
      mediumTank: {
        early: 'Toeta ridgeline’i või avatud lane’i ning karista kõiki spotted sihtmärke.',
        mid: 'Vaheta tiiba vastase setupi järgi ja loo crossfire’i seal, kus spot töötab.',
        late: 'Suru alles siis, kui info ja TD threat on kontrolli all.',
        danger: 'Ära sõida pimesi avatud lane’ile.',
      },
      heavyTank: {
        early: 'Mängi kannatlikult lane’i, kus sul on spot olemas ja cover töötab.',
        mid: 'Toeta seal, kus armor reaalselt loeb, mitte ära jää avatud väljale kinni.',
        late: 'Lõpus pushi siis, kui peamised pikad tulejooned on kadunud või seotud.',
        danger: 'Ära jää avatud väljale arty ja crossfire’i ette.',
      },
      tankDestroyer: {
        early: 'Kasuta bush’e ja pikki lasunurki, aga vaheta positsiooni pärast paari lasku.',
        mid: 'Kui üks tiib avaneb, liiguta oma tulejoon sinna, kus saad pushi peatada või toetada.',
        late: 'Hoia reset ja risttuli viimase läbimurde vastu.',
        danger: 'Ära lase end tasuta spotida või blindshot’iga eemaldada.',
      },
      spg: {
        early: 'Karista ridgeline’i, field pushi ja klastreid avatud kohtades.',
        mid: 'Muuda trajektoore vastavalt sellele, kus vastase põhiline surve koguneb.',
        late: 'Fokusseeri tanke, kes takistavad su tiimi pushi või võtavad capi.',
        danger: 'Ära tunnelda ainult ühte field lane’i.',
      },
    },
  },
  'Nebelburg': {
    description: 'Suurem Grand Battle kaart, kus rotatsioon, info ja õige sektori valik on tavalisest olulisemad.',
    classes: {
      lightTank: {
        early: 'Võta Grand Battle mõõdus kaardil varane sektoripõhine info, mitte ära ürita kõike üksi spotida.',
        mid: 'Hoia terve sektori liikumine nähtaval ja kutsu vajadusel rotatsiooni.',
        late: 'Lõpus kasuta kiirust lahtiste sihtmärkide cleanupiks suurel kaardil.',
        danger: 'Ära sure alguses kaugel flank’il ilma tiimi toeta.',
      },
      mediumTank: {
        early: 'Vali sektor, kus saad ridgeline’i või center supporti kaudu palju mõju anda.',
        mid: 'Kui üks sektor võidetakse, roteeru kiiresti järgmisele enne kui vastane taastub.',
        late: 'Lõpus lõika suured retreat teed ja side streets ära.',
        danger: 'Ära jää liiga pikalt state’i, kus mõju kaob kaardi suuruse tõttu.',
      },
      heavyTank: {
        early: 'Mine sektorisse, kus on kõige kindlam lähivõitlus ja piisav tugi.',
        mid: 'Suru ainult siis, kui naabersektorid ei jäta sind crossfire’i alla.',
        late: 'Lõpus kasuta HP-d ja massi ruumi võtmiseks suuremal frontil.',
        danger: 'Ära push’i üksi liiga kaugel põhijõust.',
      },
      tankDestroyer: {
        early: 'Kata suuri ületusi ja sektori peamisi sisenemisi pikkadest nurkadest.',
        mid: 'Muuda sektorit, kui põhiline fight liigub mujale.',
        late: 'Hoia reset või kaugcrossfire suure pushi vastu.',
        danger: 'Ära jää tühja sektorit kaitsma, kui lahing on mujal.',
      },
      spg: {
        early: 'Kata laiu kogunemisi ja peamisi pushisektoreid.',
        mid: 'Muuda tuld kiirelt, sest Grand Battle’is nihkub fight kaugemale.',
        late: 'Fokusseeri läbimurret tegevaid raskeid gruppe.',
        danger: 'Ära kuluta kogu tähelepanu ühele äärele.',
      },
    },
  },
  'Outpost': {
    description: 'Kaart ridgeline’ide, avatud lõikude ja külgtiibadega, kus info ja crossfire on väga tähtsad.',
    classes: {
      lightTank: {
        early: 'Võta varane info ridge’ide, keskmiste ületuste ja avatud külgede kohta.',
        mid: 'Hoia vastase rotatsioonid nähtaval ja väldi tarbetut HP trade’i.',
        late: 'Kui vastase spotterid või TD threat on väljas, kasuta mobiilsust cleanupiks.',
        danger: 'Ära tee pikki avatud ületusi ilma toeta.',
      },
      mediumTank: {
        early: 'Mängi hulldown’i ridge’il või kesksetel kõrgustel, kust saad crossfire’i luua.',
        mid: 'Kui üks flank seiskub, ava sealt uus nurk teise ridge’i või keskuse kaudu.',
        late: 'Lõpus kontrolli kõrgemaid positsioone ja lõika retreat ära.',
        danger: 'Ära jää crestile ülepeek’ima TD tule ette.',
      },
      heavyTank: {
        early: 'Vali lane, kus armor reaalselt töötab ja sul on spot olemas.',
        mid: 'Suru alles siis, kui mediumid annavad infot või kõrvalnurga.',
        late: 'Lõpus kasuta HP-d decisive pushiks valitud koridori või ridge’i kaudu.',
        danger: 'Ära jää avatud alale arty ja crossfire’i ette.',
      },
      tankDestroyer: {
        early: 'Kata ridge peek’e, avatud crossing’eid ja peamisi kogunemisi tagant või bush’ist.',
        mid: 'Vaheta positsiooni, kui üks tiib avaneb ja sul tekib parem laskenurk.',
        late: 'Hoia reset ja crossfire lõppmängu pushi vastu.',
        danger: 'Ära lase end tasuta spotida samast bush’ist mitu korda.',
      },
      spg: {
        early: 'Kata ridgeline’e ja kohti, kus heavyd või tornitankid pikalt peatuvad.',
        mid: 'Muuda trajektoori vastavalt sellele, kummal tiival fight käib.',
        late: 'Fokusseeri tanke, mis peatavad su tiimi pushi või võtavad capi.',
        danger: 'Ära tunnelda ainult ühte sektorit.',
      },
    },
  },
  'Oyster Bay': {
    description: 'Kaart ridgeline’ide, avatud lõikude ja külgtiibadega, kus info ja crossfire on väga tähtsad.',
    classes: {
      lightTank: {
        early: 'Võta varane info ridge’ide, keskmiste ületuste ja avatud külgede kohta.',
        mid: 'Hoia vastase rotatsioonid nähtaval ja väldi tarbetut HP trade’i.',
        late: 'Kui vastase spotterid või TD threat on väljas, kasuta mobiilsust cleanupiks.',
        danger: 'Ära tee pikki avatud ületusi ilma toeta.',
      },
      mediumTank: {
        early: 'Mängi hulldown’i ridge’il või kesksetel kõrgustel, kust saad crossfire’i luua.',
        mid: 'Kui üks flank seiskub, ava sealt uus nurk teise ridge’i või keskuse kaudu.',
        late: 'Lõpus kontrolli kõrgemaid positsioone ja lõika retreat ära.',
        danger: 'Ära jää crestile ülepeek’ima TD tule ette.',
      },
      heavyTank: {
        early: 'Vali lane, kus armor reaalselt töötab ja sul on spot olemas.',
        mid: 'Suru alles siis, kui mediumid annavad infot või kõrvalnurga.',
        late: 'Lõpus kasuta HP-d decisive pushiks valitud koridori või ridge’i kaudu.',
        danger: 'Ära jää avatud alale arty ja crossfire’i ette.',
      },
      tankDestroyer: {
        early: 'Kata ridge peek’e, avatud crossing’eid ja peamisi kogunemisi tagant või bush’ist.',
        mid: 'Vaheta positsiooni, kui üks tiib avaneb ja sul tekib parem laskenurk.',
        late: 'Hoia reset ja crossfire lõppmängu pushi vastu.',
        danger: 'Ära lase end tasuta spotida samast bush’ist mitu korda.',
      },
      spg: {
        early: 'Kata ridgeline’e ja kohti, kus heavyd või tornitankid pikalt peatuvad.',
        mid: 'Muuda trajektoori vastavalt sellele, kummal tiival fight käib.',
        late: 'Fokusseeri tanke, mis peatavad su tiimi pushi või võtavad capi.',
        danger: 'Ära tunnelda ainult ühte sektorit.',
      },
    },
  },
  'Overlord': {
    description: 'Kaart ridgeline’ide, avatud lõikude ja külgtiibadega, kus info ja crossfire on väga tähtsad.',
    classes: {
      lightTank: {
        early: 'Võta varane info ridge’ide, keskmiste ületuste ja avatud külgede kohta.',
        mid: 'Hoia vastase rotatsioonid nähtaval ja väldi tarbetut HP trade’i.',
        late: 'Kui vastase spotterid või TD threat on väljas, kasuta mobiilsust cleanupiks.',
        danger: 'Ära tee pikki avatud ületusi ilma toeta.',
      },
      mediumTank: {
        early: 'Mängi hulldown’i ridge’il või kesksetel kõrgustel, kust saad crossfire’i luua.',
        mid: 'Kui üks flank seiskub, ava sealt uus nurk teise ridge’i või keskuse kaudu.',
        late: 'Lõpus kontrolli kõrgemaid positsioone ja lõika retreat ära.',
        danger: 'Ära jää crestile ülepeek’ima TD tule ette.',
      },
      heavyTank: {
        early: 'Vali lane, kus armor reaalselt töötab ja sul on spot olemas.',
        mid: 'Suru alles siis, kui mediumid annavad infot või kõrvalnurga.',
        late: 'Lõpus kasuta HP-d decisive pushiks valitud koridori või ridge’i kaudu.',
        danger: 'Ära jää avatud alale arty ja crossfire’i ette.',
      },
      tankDestroyer: {
        early: 'Kata ridge peek’e, avatud crossing’eid ja peamisi kogunemisi tagant või bush’ist.',
        mid: 'Vaheta positsiooni, kui üks tiib avaneb ja sul tekib parem laskenurk.',
        late: 'Hoia reset ja crossfire lõppmängu pushi vastu.',
        danger: 'Ära lase end tasuta spotida samast bush’ist mitu korda.',
      },
      spg: {
        early: 'Kata ridgeline’e ja kohti, kus heavyd või tornitankid pikalt peatuvad.',
        mid: 'Muuda trajektoori vastavalt sellele, kummal tiival fight käib.',
        late: 'Fokusseeri tanke, mis peatavad su tiimi pushi või võtavad capi.',
        danger: 'Ära tunnelda ainult ühte sektorit.',
      },
    },
  },
  'Paris': {
    description: 'Linnakaart, kus nurgamäng, armor ja lühikesed koridorid määravad tempo.',
    classes: {
      lightTank: {
        early: 'Võta varane info kesk- ja kõrvaltänavate ületuste kohta, kuid ära mängi lightiga heavy lane’i esimest liini.',
        mid: 'Kasuta mobiilsust, et märgata rotatsioone ja aidata nõrgemat tänavat reseti või flankiga.',
        late: 'Lõpus puhasta tagumised taskud, jahi arty või lõika capi juurde minek ära.',
        danger: 'Ära vaheta tasuta HP-d kitsas tänavas ilma väljapääsuta.',
      },
      mediumTank: {
        early: 'Mängi keskseid tänavaid või kiireid kõrvalnurki, kust saad kiiresti pooli vahetada.',
        mid: 'Kui üks blokk või tänav avaneb, loo kohe uus laskenurk järgmise ristmiku peale.',
        late: 'Kasuta lõpus kiirust ja DPM-i linnapuhastuseks.',
        danger: 'Ära jää üksinda pikale sirgele või ristmiku crossfire’i.',
      },
      heavyTank: {
        early: 'Mine põhibrawli lane’ile ja mängi nurki, side-scrape’i või torni vastavalt tankile.',
        mid: 'Suru sammhaaval koos toega, mitte üksikute peek’idega.',
        late: 'Lõpus kasuta HP-d ja armorit viimaste tänavanurkade puhastamiseks.',
        danger: 'Ära lase tiimil jaguneda väikesteks gruppideks mitme lane’i vahel.',
      },
      tankDestroyer: {
        early: 'Kata pikki tänavaid ja kohti, kus vastane peab nurga alt välja tulema.',
        mid: 'Liigu paar nurka ettepoole, kui frontline stabiliseerub ja sul tekib uus laskenurk.',
        late: 'Hoia reseti line’e ja viimane risttuli capi vastu.',
        danger: 'Ära jää täiesti taha ilma reaalse mõjuta.',
      },
      spg: {
        early: 'Fokusseeri peamisi linnabrawl’e ja kohti, kus heavyd kogunevad nurga taha.',
        mid: 'Muuda tulejoont, kui põhiline fight liigub teisele tänavale.',
        late: 'Reseti cap või aita kinni jäänud corridor lahti murda.',
        danger: 'Arty mõju on piiratud; sihtmärgid tuleb valida hoolikalt.',
      },
    },
  },
  'Pearl River': {
    description: 'Suletum kaart kitsaste läbikäikude ja choke-pointidega, kus koordineeritud push on võtmetähtsusega.',
    classes: {
      lightTank: {
        early: 'Võta info peamiste choke’ide ja kitsaste läbikäikude kohta ilma all-in pushita.',
        mid: 'Hoia vastase roteerumised ühelt lane’ilt teisele nähtaval.',
        late: 'Lõpus lõika üksikud vastased kitsastes koridorides välja.',
        danger: 'Ära jää lõksu taskusse ilma taganemisteeta.',
      },
      mediumTank: {
        early: 'Mängi kõrgemat või kõrvalist nurka, kust saad põhilane’i aidata külgtulega.',
        mid: 'Kui üks choke on kontrolli all, ava sellest uus nurk teisele lane’ile.',
        late: 'Suru koos heavydga, kui crossfire on loodud.',
        danger: 'Ära jää üksi kahe choke’i vahele.',
      },
      heavyTank: {
        early: 'Mine peamisele corridor’ile ja mängi armorit nurga taga.',
        mid: 'Suru sammhaaval ja ära kingi HP-d pimedasse nurka.',
        late: 'Lõpus kasuta massi ja HP-d ühe lane’i täielikuks läbimurdmiseks.',
        danger: 'Ära push’i kitsasse choke’i ilma toeta.',
      },
      tankDestroyer: {
        early: 'Kata kohti, kus vastane peab kitsast nurgast välja pöörama.',
        mid: 'Liigu lähemale, kui frontline nihkub edasi ja uus laskenurk avaneb.',
        late: 'Hoia reset ja risttuli viimaste läbikäikude vastu.',
        danger: 'Ära jää täiesti tagumisse sektorisse ilma mõjueta.',
      },
      spg: {
        early: 'Fokusseeri kitsastes lane’ides kokku jäänud sihtmärke.',
        mid: 'Vaheta tulejoont kohe, kui vastane roteerub teise choke’i.',
        late: 'Aita murda lane’i, mis on seisma jäänud.',
        danger: 'Ära tunnelda ühte koridori kogu mäng.',
      },
    },
  },
  'Pilsen': {
    description: 'Tööstuslik kaart poolsuletud lane’ide, nurkade ja lühikeste crossfire võimalustega.',
    classes: {
      lightTank: {
        early: 'Võta ettevaatlik info keskse laoala või kõrvalkoridori kohta.',
        mid: 'Toeta seda poolt, kus saad oma view range’i kasutada ilma tasuta damage’ita.',
        late: 'Lõpus kasuta lühikesi lõike cleanupiks ja flankimiseks.',
        danger: 'Ära hakka industrial lane’is frontaalset heavy fighti mängima.',
      },
      mediumTank: {
        early: 'Mängi poolsuletud lane’e, kus saad kiiresti nurka vahetada ja DPM-i kasutada.',
        mid: 'Kui üks corridor avaneb, ava sealt uus laskenurk järgmisele lane’ile.',
        late: 'Lõpus liigu kiiresti läbi tööstusblokkide ja puhasta taskud.',
        danger: 'Ära jää pikale sirgele TD tule ette.',
      },
      heavyTank: {
        early: 'Mine peamisele lähikontakti lane’ile, kus armor loeb.',
        mid: 'Suru sammhaaval koos toega üle järgmise coveri.',
        late: 'Lõpus murra läbi kõige nõrgemast corridor’ist.',
        danger: 'Ära push’i pimedasse lane’i ilma infota.',
      },
      tankDestroyer: {
        early: 'Kata pikki vahekäike ja entry’sid, kus vastane peab välja tulema.',
        mid: 'Muuda positsiooni, kui üks pool kompleksist avaneb.',
        late: 'Hoia reset ja viimast crossfire’i baasi vastu.',
        danger: 'Ära jää liiga taha täiesti madala mõjuga nurka.',
      },
      spg: {
        early: 'Fokusseeri kohti, kus tankid kogunevad lao- või corridor sissepääsudes.',
        mid: 'Muuda sihtmärki, kui lahing nihkub teise blokki.',
        late: 'Aita murda lane’i, mis on seisma jäänud.',
        danger: 'Arty mõju on piiratud; vali klastreid.',
      },
    },
  },
  'Prokhorovka': {
    description: 'Avatud kaart, kus spotting, camo ja pikad tulejooned teevad lightid ja TD-d eriti mõjukaks.',
    classes: {
      lightTank: {
        early: 'Vali aktiivne või passiivne spotting vastavalt setupile, spawnile ja vastase lightidele.',
        mid: 'Hoia visiooni ning ära trade’i HP-d tarbetult enne, kui TD asukohad on enam-vähem teada.',
        late: 'Kui vastase spotterid on eemaldatud, saad terve kaardi lahti mängida.',
        danger: 'Ära korda sama aktiivset trajektoori liiga palju.',
      },
      mediumTank: {
        early: 'Toeta ridgeline’i või avatud lane’i ning karista kõiki spotted sihtmärke.',
        mid: 'Vaheta tiiba vastase setupi järgi ja loo crossfire’i seal, kus spot töötab.',
        late: 'Suru alles siis, kui info ja TD threat on kontrolli all.',
        danger: 'Ära sõida pimesi avatud lane’ile.',
      },
      heavyTank: {
        early: 'Mängi kannatlikult lane’i, kus sul on spot olemas ja cover töötab.',
        mid: 'Toeta seal, kus armor reaalselt loeb, mitte ära jää avatud väljale kinni.',
        late: 'Lõpus pushi siis, kui peamised pikad tulejooned on kadunud või seotud.',
        danger: 'Ära jää avatud väljale arty ja crossfire’i ette.',
      },
      tankDestroyer: {
        early: 'Kasuta bush’e ja pikki lasunurki, aga vaheta positsiooni pärast paari lasku.',
        mid: 'Kui üks tiib avaneb, liiguta oma tulejoon sinna, kus saad pushi peatada või toetada.',
        late: 'Hoia reset ja risttuli viimase läbimurde vastu.',
        danger: 'Ära lase end tasuta spotida või blindshot’iga eemaldada.',
      },
      spg: {
        early: 'Karista ridgeline’i, field pushi ja klastreid avatud kohtades.',
        mid: 'Muuda trajektoore vastavalt sellele, kus vastase põhiline surve koguneb.',
        late: 'Fokusseeri tanke, kes takistavad su tiimi pushi või võtavad capi.',
        danger: 'Ära tunnelda ainult ühte field lane’i.',
      },
    },
  },
  'Province': {
    description: 'Avatud kaart, kus spotting, camo ja pikad tulejooned teevad lightid ja TD-d eriti mõjukaks.',
    classes: {
      lightTank: {
        early: 'Vali aktiivne või passiivne spotting vastavalt setupile, spawnile ja vastase lightidele.',
        mid: 'Hoia visiooni ning ära trade’i HP-d tarbetult enne, kui TD asukohad on enam-vähem teada.',
        late: 'Kui vastase spotterid on eemaldatud, saad terve kaardi lahti mängida.',
        danger: 'Ära korda sama aktiivset trajektoori liiga palju.',
      },
      mediumTank: {
        early: 'Toeta ridgeline’i või avatud lane’i ning karista kõiki spotted sihtmärke.',
        mid: 'Vaheta tiiba vastase setupi järgi ja loo crossfire’i seal, kus spot töötab.',
        late: 'Suru alles siis, kui info ja TD threat on kontrolli all.',
        danger: 'Ära sõida pimesi avatud lane’ile.',
      },
      heavyTank: {
        early: 'Mängi kannatlikult lane’i, kus sul on spot olemas ja cover töötab.',
        mid: 'Toeta seal, kus armor reaalselt loeb, mitte ära jää avatud väljale kinni.',
        late: 'Lõpus pushi siis, kui peamised pikad tulejooned on kadunud või seotud.',
        danger: 'Ära jää avatud väljale arty ja crossfire’i ette.',
      },
      tankDestroyer: {
        early: 'Kasuta bush’e ja pikki lasunurki, aga vaheta positsiooni pärast paari lasku.',
        mid: 'Kui üks tiib avaneb, liiguta oma tulejoon sinna, kus saad pushi peatada või toetada.',
        late: 'Hoia reset ja risttuli viimase läbimurde vastu.',
        danger: 'Ära lase end tasuta spotida või blindshot’iga eemaldada.',
      },
      spg: {
        early: 'Karista ridgeline’i, field pushi ja klastreid avatud kohtades.',
        mid: 'Muuda trajektoore vastavalt sellele, kus vastase põhiline surve koguneb.',
        late: 'Fokusseeri tanke, kes takistavad su tiimi pushi või võtavad capi.',
        danger: 'Ära tunnelda ainult ühte field lane’i.',
      },
    },
  },
  'Redshire': {
    description: 'Kaart ridgeline’ide, avatud lõikude ja külgtiibadega, kus info ja crossfire on väga tähtsad.',
    classes: {
      lightTank: {
        early: 'Võta varane info ridge’ide, keskmiste ületuste ja avatud külgede kohta.',
        mid: 'Hoia vastase rotatsioonid nähtaval ja väldi tarbetut HP trade’i.',
        late: 'Kui vastase spotterid või TD threat on väljas, kasuta mobiilsust cleanupiks.',
        danger: 'Ära tee pikki avatud ületusi ilma toeta.',
      },
      mediumTank: {
        early: 'Mängi hulldown’i ridge’il või kesksetel kõrgustel, kust saad crossfire’i luua.',
        mid: 'Kui üks flank seiskub, ava sealt uus nurk teise ridge’i või keskuse kaudu.',
        late: 'Lõpus kontrolli kõrgemaid positsioone ja lõika retreat ära.',
        danger: 'Ära jää crestile ülepeek’ima TD tule ette.',
      },
      heavyTank: {
        early: 'Vali lane, kus armor reaalselt töötab ja sul on spot olemas.',
        mid: 'Suru alles siis, kui mediumid annavad infot või kõrvalnurga.',
        late: 'Lõpus kasuta HP-d decisive pushiks valitud koridori või ridge’i kaudu.',
        danger: 'Ära jää avatud alale arty ja crossfire’i ette.',
      },
      tankDestroyer: {
        early: 'Kata ridge peek’e, avatud crossing’eid ja peamisi kogunemisi tagant või bush’ist.',
        mid: 'Vaheta positsiooni, kui üks tiib avaneb ja sul tekib parem laskenurk.',
        late: 'Hoia reset ja crossfire lõppmängu pushi vastu.',
        danger: 'Ära lase end tasuta spotida samast bush’ist mitu korda.',
      },
      spg: {
        early: 'Kata ridgeline’e ja kohti, kus heavyd või tornitankid pikalt peatuvad.',
        mid: 'Muuda trajektoori vastavalt sellele, kummal tiival fight käib.',
        late: 'Fokusseeri tanke, mis peatavad su tiimi pushi või võtavad capi.',
        danger: 'Ära tunnelda ainult ühte sektorit.',
      },
    },
  },
  'Ruinberg': {
    description: 'Kaart, mis jaguneb linna- ja avatud field-flangi vahel; rotatsioonide lugemine otsustab tulemuse.',
    classes: {
      lightTank: {
        early: 'Spot’i avatud fieldi crossing’eid ja kontrolli, kas city lane’il on varajane push.',
        mid: 'Hoia vastase rotation city ja fieldi vahel nähtaval.',
        late: 'Lõpus kasuta fieldi avatud serva cleanupiks või arty huntimiseks.',
        danger: 'Ära jää fieldi keskele ilma põõsaste või supportita.',
      },
      mediumTank: {
        early: 'Mängi fieldi ridgeline’i või keskala nii, et saad city’t külgtulega aidata.',
        mid: 'Kui city brawl seiskub, ava sealt fieldilt või keskelt uus nurk.',
        late: 'Lõpus kasuta kiirust, et lõigata vastane kaheks.',
        danger: 'Ära jää maantee või open-field crossfire’i.',
      },
      heavyTank: {
        early: 'Mine city/lähivõitluse lane’ile ja kontrolli nurgad.',
        mid: 'Suru alles siis, kui kõrvalflank annab infot või tuld.',
        late: 'Lõpus murra läbi city ja võta cap kontrolli alla.',
        danger: 'Ära lähe üksinda avatud väljale rasketankiga.',
      },
      tankDestroyer: {
        early: 'Kata field crossing’eid ja city sissekäike pikal joonel.',
        mid: 'Muuda pooli, kui üks side kaotab või võidab kiiresti.',
        late: 'Hoia reset line’e ja risttuld lõppmängus.',
        danger: 'Ära seisa baasi ääres ilma laskenurgata.',
      },
      spg: {
        early: 'Kata city klastreid või fieldile kinni jäänud raskeid tanke.',
        mid: 'Vaheta trajektoori vastavalt sellele, kumb flank on aktiivne.',
        late: 'Reseti cap ja fokusseeri lane’i murdvaid tanke.',
        danger: 'Ära tunnelda ainult city’t.',
      },
    },
  },
  'Safe Haven': {
    description: 'Tasakaalus kaart, kus center control aitab avada rotatsiooni mõlemale tiivale.',
    classes: {
      lightTank: {
        early: 'Võta center control’i ümbrusest varane info ja väldi all-in pushi ilma toeta.',
        mid: 'Kui keskala on sinu käes, hoia mõlema tiiva rotatsioonid nähtaval.',
        late: 'Lõpus kasuta centerit cleanupiks ja kiireks ümberlülituseks.',
        danger: 'Ära jää centerisse mitme tulejoone alla.',
      },
      mediumTank: {
        early: 'Mängi centerit või selle kõrvaltaskuid, et toetada mõlemat flank’i.',
        mid: 'Kui keskelt avaneb nurk, kasuta seda kohe ühe tiiva murdmiseks.',
        late: 'Lõpus roteeru võidetud keskpositsioonilt sinna, kus väärtus on suurim.',
        danger: 'Ära jää staatiliselt keskossa farmitavaks.',
      },
      heavyTank: {
        early: 'Mine kindlasse lähivõitluse sektorisse ja toeta centeri kontrolli kaudselt.',
        mid: 'Suru siis, kui center annab infot ja kõrvalnurga.',
        late: 'Lõpus kasuta HP-d ühe tiiva lõplikuks avamiseks.',
        danger: 'Ära jaga jõudu korraga kõigisse lane’idesse.',
      },
      tankDestroyer: {
        early: 'Kata center crossing’eid ja ühe või kahe peamise flank’i entry’t.',
        mid: 'Muuda nurka, kui center control muutub ja uued lasujooned avanevad.',
        late: 'Hoia reset line’e ja crossfire’i lõppmängus.',
        danger: 'Ära jää liiga kaugele, kui center liigub edasi.',
      },
      spg: {
        early: 'Kata centeri kogunemisi ja lane’e, mida sealt toetatakse.',
        mid: 'Muuda trajektoori vastavalt sellele, kummale poole center mängib.',
        late: 'Fokusseeri pushi peatavaid võtmetanke.',
        danger: 'Ära tunnelda ainult centerit, kui fight läheb mujale.',
      },
    },
  },
  'Sand River': {
    description: 'Avatud kaart, kus spotting, camo ja pikad tulejooned teevad lightid ja TD-d eriti mõjukaks.',
    classes: {
      lightTank: {
        early: 'Vali aktiivne või passiivne spotting vastavalt setupile, spawnile ja vastase lightidele.',
        mid: 'Hoia visiooni ning ära trade’i HP-d tarbetult enne, kui TD asukohad on enam-vähem teada.',
        late: 'Kui vastase spotterid on eemaldatud, saad terve kaardi lahti mängida.',
        danger: 'Ära korda sama aktiivset trajektoori liiga palju.',
      },
      mediumTank: {
        early: 'Toeta ridgeline’i või avatud lane’i ning karista kõiki spotted sihtmärke.',
        mid: 'Vaheta tiiba vastase setupi järgi ja loo crossfire’i seal, kus spot töötab.',
        late: 'Suru alles siis, kui info ja TD threat on kontrolli all.',
        danger: 'Ära sõida pimesi avatud lane’ile.',
      },
      heavyTank: {
        early: 'Mängi kannatlikult lane’i, kus sul on spot olemas ja cover töötab.',
        mid: 'Toeta seal, kus armor reaalselt loeb, mitte ära jää avatud väljale kinni.',
        late: 'Lõpus pushi siis, kui peamised pikad tulejooned on kadunud või seotud.',
        danger: 'Ära jää avatud väljale arty ja crossfire’i ette.',
      },
      tankDestroyer: {
        early: 'Kasuta bush’e ja pikki lasunurki, aga vaheta positsiooni pärast paari lasku.',
        mid: 'Kui üks tiib avaneb, liiguta oma tulejoon sinna, kus saad pushi peatada või toetada.',
        late: 'Hoia reset ja risttuli viimase läbimurde vastu.',
        danger: 'Ära lase end tasuta spotida või blindshot’iga eemaldada.',
      },
      spg: {
        early: 'Karista ridgeline’i, field pushi ja klastreid avatud kohtades.',
        mid: 'Muuda trajektoore vastavalt sellele, kus vastase põhiline surve koguneb.',
        late: 'Fokusseeri tanke, kes takistavad su tiimi pushi või võtavad capi.',
        danger: 'Ära tunnelda ainult ühte field lane’i.',
      },
    },
  },
  'Serene Coast': {
    description: 'Kaart ridgeline’ide, avatud lõikude ja külgtiibadega, kus info ja crossfire on väga tähtsad.',
    classes: {
      lightTank: {
        early: 'Võta varane info ridge’ide, keskmiste ületuste ja avatud külgede kohta.',
        mid: 'Hoia vastase rotatsioonid nähtaval ja väldi tarbetut HP trade’i.',
        late: 'Kui vastase spotterid või TD threat on väljas, kasuta mobiilsust cleanupiks.',
        danger: 'Ära tee pikki avatud ületusi ilma toeta.',
      },
      mediumTank: {
        early: 'Mängi hulldown’i ridge’il või kesksetel kõrgustel, kust saad crossfire’i luua.',
        mid: 'Kui üks flank seiskub, ava sealt uus nurk teise ridge’i või keskuse kaudu.',
        late: 'Lõpus kontrolli kõrgemaid positsioone ja lõika retreat ära.',
        danger: 'Ära jää crestile ülepeek’ima TD tule ette.',
      },
      heavyTank: {
        early: 'Vali lane, kus armor reaalselt töötab ja sul on spot olemas.',
        mid: 'Suru alles siis, kui mediumid annavad infot või kõrvalnurga.',
        late: 'Lõpus kasuta HP-d decisive pushiks valitud koridori või ridge’i kaudu.',
        danger: 'Ära jää avatud alale arty ja crossfire’i ette.',
      },
      tankDestroyer: {
        early: 'Kata ridge peek’e, avatud crossing’eid ja peamisi kogunemisi tagant või bush’ist.',
        mid: 'Vaheta positsiooni, kui üks tiib avaneb ja sul tekib parem laskenurk.',
        late: 'Hoia reset ja crossfire lõppmängu pushi vastu.',
        danger: 'Ära lase end tasuta spotida samast bush’ist mitu korda.',
      },
      spg: {
        early: 'Kata ridgeline’e ja kohti, kus heavyd või tornitankid pikalt peatuvad.',
        mid: 'Muuda trajektoori vastavalt sellele, kummal tiival fight käib.',
        late: 'Fokusseeri tanke, mis peatavad su tiimi pushi või võtavad capi.',
        danger: 'Ära tunnelda ainult ühte sektorit.',
      },
    },
  },
  'Siegfried Line': {
    description: 'Kaart, mis jaguneb linna- ja avatud field-flangi vahel; rotatsioonide lugemine otsustab tulemuse.',
    classes: {
      lightTank: {
        early: 'Spot’i avatud fieldi crossing’eid ja kontrolli, kas city lane’il on varajane push.',
        mid: 'Hoia vastase rotation city ja fieldi vahel nähtaval.',
        late: 'Lõpus kasuta fieldi avatud serva cleanupiks või arty huntimiseks.',
        danger: 'Ära jää fieldi keskele ilma põõsaste või supportita.',
      },
      mediumTank: {
        early: 'Mängi fieldi ridgeline’i või keskala nii, et saad city’t külgtulega aidata.',
        mid: 'Kui city brawl seiskub, ava sealt fieldilt või keskelt uus nurk.',
        late: 'Lõpus kasuta kiirust, et lõigata vastane kaheks.',
        danger: 'Ära jää maantee või open-field crossfire’i.',
      },
      heavyTank: {
        early: 'Mine city/lähivõitluse lane’ile ja kontrolli nurgad.',
        mid: 'Suru alles siis, kui kõrvalflank annab infot või tuld.',
        late: 'Lõpus murra läbi city ja võta cap kontrolli alla.',
        danger: 'Ära lähe üksinda avatud väljale rasketankiga.',
      },
      tankDestroyer: {
        early: 'Kata field crossing’eid ja city sissekäike pikal joonel.',
        mid: 'Muuda pooli, kui üks side kaotab või võidab kiiresti.',
        late: 'Hoia reset line’e ja risttuld lõppmängus.',
        danger: 'Ära seisa baasi ääres ilma laskenurgata.',
      },
      spg: {
        early: 'Kata city klastreid või fieldile kinni jäänud raskeid tanke.',
        mid: 'Vaheta trajektoori vastavalt sellele, kumb flank on aktiivne.',
        late: 'Reseti cap ja fokusseeri lane’i murdvaid tanke.',
        danger: 'Ära tunnelda ainult city’t.',
      },
    },
  },
  'Steppes': {
    description: 'Avatud kaart, kus spotting, camo ja pikad tulejooned teevad lightid ja TD-d eriti mõjukaks.',
    classes: {
      lightTank: {
        early: 'Vali aktiivne või passiivne spotting vastavalt setupile, spawnile ja vastase lightidele.',
        mid: 'Hoia visiooni ning ära trade’i HP-d tarbetult enne, kui TD asukohad on enam-vähem teada.',
        late: 'Kui vastase spotterid on eemaldatud, saad terve kaardi lahti mängida.',
        danger: 'Ära korda sama aktiivset trajektoori liiga palju.',
      },
      mediumTank: {
        early: 'Toeta ridgeline’i või avatud lane’i ning karista kõiki spotted sihtmärke.',
        mid: 'Vaheta tiiba vastase setupi järgi ja loo crossfire’i seal, kus spot töötab.',
        late: 'Suru alles siis, kui info ja TD threat on kontrolli all.',
        danger: 'Ära sõida pimesi avatud lane’ile.',
      },
      heavyTank: {
        early: 'Mängi kannatlikult lane’i, kus sul on spot olemas ja cover töötab.',
        mid: 'Toeta seal, kus armor reaalselt loeb, mitte ära jää avatud väljale kinni.',
        late: 'Lõpus pushi siis, kui peamised pikad tulejooned on kadunud või seotud.',
        danger: 'Ära jää avatud väljale arty ja crossfire’i ette.',
      },
      tankDestroyer: {
        early: 'Kasuta bush’e ja pikki lasunurki, aga vaheta positsiooni pärast paari lasku.',
        mid: 'Kui üks tiib avaneb, liiguta oma tulejoon sinna, kus saad pushi peatada või toetada.',
        late: 'Hoia reset ja risttuli viimase läbimurde vastu.',
        danger: 'Ära lase end tasuta spotida või blindshot’iga eemaldada.',
      },
      spg: {
        early: 'Karista ridgeline’i, field pushi ja klastreid avatud kohtades.',
        mid: 'Muuda trajektoore vastavalt sellele, kus vastase põhiline surve koguneb.',
        late: 'Fokusseeri tanke, kes takistavad su tiimi pushi või võtavad capi.',
        danger: 'Ära tunnelda ainult ühte field lane’i.',
      },
    },
  },
  'Studzianki': {
    description: 'Avatud põldude ja küla/hoonete segukaart, kus visioon ja positsioonivahetus määravad palju.',
    classes: {
      lightTank: {
        early: 'Võta info avatud fieldi ja küla sissejooksude kohta, mitte ära trade’i linnaliselt.',
        mid: 'Hoia vastase liikumised fieldi ja küla vahel spotted.',
        late: 'Lõpus kasuta avatud ruumi cleanupiks või flankimiseks.',
        danger: 'Ära jookse põllule ilma tuletoeta.',
      },
      mediumTank: {
        early: 'Mängi küla servi või field ridge’i, et luua crossfire’i.',
        mid: 'Kui üks pool seiskub, ava teine fieldilt või küla äärest.',
        late: 'Lõpus lõika vastase retreat fieldi kaudu ära.',
        danger: 'Ära jää avatud fieldile arty ja TD tule alla.',
      },
      heavyTank: {
        early: 'Mine küla või lähivõitluse tasku, kus armor töötab paremini.',
        mid: 'Suru siis, kui mediumid annavad infoga kõrvalnurga.',
        late: 'Lõpus murra läbi küla või baasi lähiala kaudu.',
        danger: 'Ära saada heavy’t avatud põllule ilma vajaduseta.',
      },
      tankDestroyer: {
        early: 'Kata field crossing’eid ja küla sissekäike bush’ist või tagaliinilt.',
        mid: 'Muuda positsiooni, kui üks tiib selgelt avaneb.',
        late: 'Hoia reset ja viimane risttuli capi vastu.',
        danger: 'Ära jää ühe puu või bush’i taha kogu mänguks.',
      },
      spg: {
        early: 'Kata küla klastreid ja fieldile kinni jäänud tanke.',
        mid: 'Vaheta tulejoont, kui fight liigub fieldi ja küla vahel.',
        late: 'Fokusseeri pushi peatavaid heavysid.',
        danger: 'Ära jäta cap resetti liiga hiljaks.',
      },
    },
  },
  'Tundra': {
    description: 'Kõrgusekontrolli kaart, kus keskne hill või kõrgem platoo annab tugeva info- ja tule-eelise.',
    classes: {
      lightTank: {
        early: 'Contest’i varast kõrgust ainult siis, kui sul on kiirus ja tugi; muidu võta turvaline info kõrguse jalamil.',
        mid: 'Kui hill on kontrolli all, hoia vastase liikumised mõlemas tiivas nähtaval.',
        late: 'Kasuta lõpus kõrguseeelise infot cleanupiks ja resetiks.',
        danger: 'Ära sure hill race’il ilma katteta.',
      },
      mediumTank: {
        early: 'Toeta hill pushi või mängi selle kõrvaltaskutest hulldown’i.',
        mid: 'Kui kõrgus on käes, ava sellest kohe külgtuli teisele flankile.',
        late: 'Lõpus rotatsiooni kiiresti võidetud kõrguselt sinna, kus on kõige rohkem väärtust.',
        danger: 'Ära jää crestile pikalt ülepeek’ima.',
      },
      heavyTank: {
        early: 'Mine hill foot või peamisse lähivõitluse corridor’i ja toeta kõrguse võtmist.',
        mid: 'Suru siis, kui kõrguse kontroll annab sulle info ja crossfire’i.',
        late: 'Lõpus murra läbi koos ülekaaluga.',
        danger: 'Ära roni aeglase heavyga üksinda kõrgusele.',
      },
      tankDestroyer: {
        early: 'Kata hill climb’i, kõrguse jalamit ja avatud liikumisi tagumisest turvalisest positsioonist.',
        mid: 'Muuda nurka, kui hill fight on otsustatud või üks tiib avaneb.',
        late: 'Hoia cap reset ja viimase pushi vastu risttuld.',
        danger: 'Ära jää alguse camp-positsiooni liiga kauaks.',
      },
      spg: {
        early: 'Kata kõrguse peale minekut ja hill foot clusterid.',
        mid: 'Vaheta tulejoont, et saada kätte teine aktiivne lane.',
        late: 'Reseti cap või karista aeglaseid tanke kõrguse all.',
        danger: 'Ära jää pärast esimest lasuseeriat samasse kohta.',
      },
    },
  },
  'Westfield': {
    description: 'Kaart ridgeline’ide, avatud lõikude ja külgtiibadega, kus info ja crossfire on väga tähtsad.',
    classes: {
      lightTank: {
        early: 'Võta varane info ridge’ide, keskmiste ületuste ja avatud külgede kohta.',
        mid: 'Hoia vastase rotatsioonid nähtaval ja väldi tarbetut HP trade’i.',
        late: 'Kui vastase spotterid või TD threat on väljas, kasuta mobiilsust cleanupiks.',
        danger: 'Ära tee pikki avatud ületusi ilma toeta.',
      },
      mediumTank: {
        early: 'Mängi hulldown’i ridge’il või kesksetel kõrgustel, kust saad crossfire’i luua.',
        mid: 'Kui üks flank seiskub, ava sealt uus nurk teise ridge’i või keskuse kaudu.',
        late: 'Lõpus kontrolli kõrgemaid positsioone ja lõika retreat ära.',
        danger: 'Ära jää crestile ülepeek’ima TD tule ette.',
      },
      heavyTank: {
        early: 'Vali lane, kus armor reaalselt töötab ja sul on spot olemas.',
        mid: 'Suru alles siis, kui mediumid annavad infot või kõrvalnurga.',
        late: 'Lõpus kasuta HP-d decisive pushiks valitud koridori või ridge’i kaudu.',
        danger: 'Ära jää avatud alale arty ja crossfire’i ette.',
      },
      tankDestroyer: {
        early: 'Kata ridge peek’e, avatud crossing’eid ja peamisi kogunemisi tagant või bush’ist.',
        mid: 'Vaheta positsiooni, kui üks tiib avaneb ja sul tekib parem laskenurk.',
        late: 'Hoia reset ja crossfire lõppmängu pushi vastu.',
        danger: 'Ära lase end tasuta spotida samast bush’ist mitu korda.',
      },
      spg: {
        early: 'Kata ridgeline’e ja kohti, kus heavyd või tornitankid pikalt peatuvad.',
        mid: 'Muuda trajektoori vastavalt sellele, kummal tiival fight käib.',
        late: 'Fokusseeri tanke, mis peatavad su tiimi pushi või võtavad capi.',
        danger: 'Ära tunnelda ainult ühte sektorit.',
      },
    },
  },
  'Widepark': {
    description: 'Väike linnakaart, kus kontakt tekib kiiresti ja tempo võidab palju.',
    classes: {
      lightTank: {
        early: 'Võta kiire info kesktee või raudtee/avaala ületuse kohta ja taandu kohe.',
        mid: 'Toeta seal, kus tekib esimene number-ülekaal.',
        late: 'Lõpus flanki läbi lühikese kõrvaltee ja korista madala HP-ga vastased.',
        danger: 'Ära anna tasuta HP-d esimese 30 sekundiga.',
      },
      mediumTank: {
        early: 'Mängi lühikest kõrvalflanki või keskteed, kus saad kiiresti reageerida.',
        mid: 'Kui üks mikrolane on võidetud, ava sellest kohe järgmine nurk.',
        late: 'Kasuta lõpus tempot, sest väikesel kaardil jõuad kiiresti kõikjale.',
        danger: 'Ära jää pikale sirgele ilma coverita.',
      },
      heavyTank: {
        early: 'Mine peamisele lühikesele brawlilane’ile ja hoia survet.',
        mid: 'Suru koos, sest väikesel kaardil võidab tempo.',
        late: 'Lõpus murra otse läbi ja võta ruum enda kätte.',
        danger: 'Ära passiivitse liiga kaua.',
      },
      tankDestroyer: {
        early: 'Kata kiireid entry’sid ja overpeek’e algusest peale.',
        mid: 'Liigu lähemale niipea, kui üks lane selgelt võidetakse.',
        late: 'Hoia reset või risttuli viimase tänava vastu.',
        danger: 'Ära jää mõjuta algpositsiooni.',
      },
      spg: {
        early: 'Kata kohti, kus tankid klumpuvad kitsastes lane’ides.',
        mid: 'Muuda sihtmärki kohe, kui fight liigub.',
        late: 'Fokusseeri pushi peatavaid raskeid tanke.',
        danger: 'Ära jää samasse kohta, kui sind loetakse välja.',
      },
    },
  },
  'Hinterland': {
    description: 'Suurem Grand Battle kaart, kus rotatsioon, info ja õige sektori valik on tavalisest olulisemad.',
    classes: {
      lightTank: {
        early: 'Võta Grand Battle mõõdus kaardil varane sektoripõhine info, mitte ära ürita kõike üksi spotida.',
        mid: 'Hoia terve sektori liikumine nähtaval ja kutsu vajadusel rotatsiooni.',
        late: 'Lõpus kasuta kiirust lahtiste sihtmärkide cleanupiks suurel kaardil.',
        danger: 'Ära sure alguses kaugel flank’il ilma tiimi toeta.',
      },
      mediumTank: {
        early: 'Vali sektor, kus saad ridgeline’i või center supporti kaudu palju mõju anda.',
        mid: 'Kui üks sektor võidetakse, roteeru kiiresti järgmisele enne kui vastane taastub.',
        late: 'Lõpus lõika suured retreat teed ja side streets ära.',
        danger: 'Ära jää liiga pikalt state’i, kus mõju kaob kaardi suuruse tõttu.',
      },
      heavyTank: {
        early: 'Mine sektorisse, kus on kõige kindlam lähivõitlus ja piisav tugi.',
        mid: 'Suru ainult siis, kui naabersektorid ei jäta sind crossfire’i alla.',
        late: 'Lõpus kasuta HP-d ja massi ruumi võtmiseks suuremal frontil.',
        danger: 'Ära push’i üksi liiga kaugel põhijõust.',
      },
      tankDestroyer: {
        early: 'Kata suuri ületusi ja sektori peamisi sisenemisi pikkadest nurkadest.',
        mid: 'Muuda sektorit, kui põhiline fight liigub mujale.',
        late: 'Hoia reset või kaugcrossfire suure pushi vastu.',
        danger: 'Ära jää tühja sektorit kaitsma, kui lahing on mujal.',
      },
      spg: {
        early: 'Kata laiu kogunemisi ja peamisi pushisektoreid.',
        mid: 'Muuda tuld kiirelt, sest Grand Battle’is nihkub fight kaugemale.',
        late: 'Fokusseeri läbimurret tegevaid raskeid gruppe.',
        danger: 'Ära kuluta kogu tähelepanu ühele äärele.',
      },
    },
  },
};
