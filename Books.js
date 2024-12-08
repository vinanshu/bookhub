import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, Modal } from "react-native";
import { useNavigation } from '@react-navigation/native';  // Import useNavigation hook

const Books = () => {
  const navigation = useNavigation();  // Hook to get navigation prop

  const books = [
    { 
        id: 1, 
        title: "Baka Sakali 1", 
        image: require("./images/baka_sakali_1.webp"),
        story: `
          Title: Baka sakali 1

          
          Naranasan mo na bang mainlove sa isang playboy?
          Yung minahal mo talaga at akala mo magseseryoso na siya sayo pero di naman pala. Isa ka lang pala dun sa maraming nainlove sa kanya at pinaglaruan niya?
      
          Dumudungaw ako sa libro ko habang nagbabasa sa canteen ng school, binabalewala ang mga taong tumitingin sakin at nag-uusap tungkol sa mga nangyari.
      
          “Iniwan siya ni Callix, diba? Kawawa naman! Kita mo yung eyebags? Sa kakaiyak siguro yun.”
      
          Napatingin ako sa mga babaeng narinig ko na agad namang tumingin sa malayo at nagkunwaring di nag-uusap tungkol sakin. Kakaiyak niyong mukha niyo!? HINDI AKO UMIYAK SA LUNGKOT! Umiyak ako sa inis sa sarili ko!!!
      
          Niyaya akong makipagsex ni Callix at tinanggihan ko siya kaya iniwan niya ako!!! Yun ang totoong nangyari!
      
          I have no friends, literally. Lalo na nung dumiskarte na si Callix sakin dahil halos lahat ng babae sa school ay may gusto sa kanya! Syempre, sinong hindi magkakagusto? Gwapo, mayaman, basketball star player at charming pa! Kahit ako ay nadale talaga! Hindi ko naman alam na ganun yun! Manyak naman pala!
      
          Mahal ko siya pero natakot ako sa alok niya. Sabi ko sa sarili ko, kung kaya niyang maghintay, ibig sabihin mahal niya talaga ako. Pero kita niyo anong nangyari? Nasanay pa naman ako sa paghahatid sundo niya gamit ang sasakyan niya sakin! Nasanay ako sa mga bouquet of roses na binibigay niya sakin halos araw-araw at sa pagpupunta namin ng mall para kumain sa mamahaling restaurant at mag shopping na sagot niya ang lahat!
      
          Mas lalong lumakas ang bulung-bulungan sa paligid.
          “Kita niyo, sabi na eh, di nga sineryoso, nag fefeeling pa kasi ang Aranjuez na yan!”
          “Ayan na si Callix!”
      
          Napatingin ako sa paparating. Ang gwapo, matipuno, matangkad na Callix ko. Nakasoot ng basketball jersey at ball cap kasama ang mga kaibigang varsity din.
      
          OMG! Nataranta ako kaya agad akong tumayo at niligpit ang gamit ko…
      
          “Wag ka ngang humarang sa dinadaanan ko.” Aniya nang nagkalapit na kami.
      
          WHAT? Anong dinadaanan eh nakatayo lang ako dito malapit sa table ko at di ako humaharang sa daanan! Talagang sinadya niyang lumapit sakin para sabihin yun at pahiyain ako sa harap ng mga estudyanteng dumadaan at tumitingin.
      
          “O… Ikaw pala yan, Rosie!” Aniya at tumatawa na parang demonyo. “Ganda mo talaga no? kaya lang wala kang silbi.” Malamig ang boses niya nang sinabi ang huling pangungusap, nanlilisik pa ang mga mata.
      
          PAK!
      
          Sinampal ko na agad sa inis ko! Hindi siya gumalaw sa lakas ng sampal ko at tumakbo na ako palayo!
      
          “Manggagamit! Gold digger! Ginamit mo lang ako para yumaman ka at sumikat!!” Sigaw niya habang tumatakbo ako.
      
          YUMAMAN AKO? Hindi ko alam yun ah? Kung mayaman ako bakit hanggang ngayon mukhang wala namang laman yung wallet ko?! KAINIS! At sumikat? Kung sisikat ako ng ganito mas mabuti ng maging invisible!
      
          Umuwi na ako ng bahay kahit pagkatapos ng paniguradong binagsak kong exam. March na ngayon at buti na lang ay di ko na makikita ang mukha ni Callix! Sana nga di na ako makabalik dun sa school! May isang taon pa ako para tapusin ang highschool pero sana di na ako dun mag-aral. Sana sa ibang school na lang. Sana yung 6th year ko sa highschool ay sa ibang school ko na lang gawin. Pero alam kong imposible yun.
      
          Be careful what you wish for… cuz you might get it!
      
          “Rosie… Maggie!” Tumakbo kami ng kapatid ko kay mama at papa na may dalang maleta at niyakap sila.
      
          Nakauwi si mama at papa!!! Ilang taon na din sila sa Canada! Umuuwi naman sila kada-dalawang taon pero di ko inaasahan ang pag uwi nila ngayon.
      
          Umiiyak si mama habang niyayakap kami.
      
          “Ma… Sabi ko naman diba, di niyo na kailangang umuwi.” Sabi ni Maggie.
      
          Si Maggie ang ate kong college na. At bakit nga pala alam niyang uuwi sina mama tapos ako hindi?
      
          “Kaya ko namang magtrabaho para matapos si Rosie ng highschool eh. Di niyo na kailangang umuwi.” Aniya.
      
          Pinunasan ni mama ang kanyang luha.
      
          “Maggie, anong pinagsasabi mo?” Sabi ko agad at kinakabahan. “Pa, bakit?”
      
          Si papa ay nakatingin lang sa kawalan.
      
          “Ma, please? Wag tayong umalis dito.” Sabi ni Maggie habang umiiyak narin.
      
          “R-recession sa Canada, Rosie. Tinanggal kami ng papa mo sa trabaho… Bumabagsak na kasi ang ekonomiya nila. Ayaw naming sabihin sa inyo ang nangyari. Mababayaran lang natin tong bahay ng isang taon, pero di parin sapat iyon. Kailangan nating umalis at umuwi sa bukid ng papa niyo-“
      
          What? Sigaw ko. “No! Ma! No!”
      
          Oo. Gusto kong umalis doon sa paaralan namin pero hindi ko naman sinabing gusto kong mamuhay kasama ang mga kalabaw at kambing sa bukid nina papa! OH MY GOD! No!
        `
      }
      ,
      {
        id: 2,
        title: "baka sakali 2",
        image: require("./images/baka_sakali_2.webp"),
        story: `Panimula
      
      Isang taon na ang nakalipas simula ng na-engage kami ni Jacob. Hindi ako pumayag na magpakasal na agad kami. Syempre, mauuna ang pag-aaral. Mabuti na lang at pinayuhan din kami ng daddy niya at ni Auntie Precy na wa’g muna… unahin muna ang pag-aaral.
      
      “Rosie… Tatanggapin mo ba yung alok ni Karl?” Tanong ni Maggie bago ako umalis ng bahay papuntang school.
      
      Natigilan ako sa tanong niya, “Gusto ko sana, kaso, mahirap, tsaka, nahihiya ako.” Nagkibit balikat ako.
      
      Tumango naman siya.
      
      Lumingon ako sa sasakyang nakapark sa labas. Nakasandal si Jacob doon habang inaaway ang isang pusang gala. Umiling na lang ako at nagsimulang mag lakad patungo sa kanya.
      
      Nagkabati din ang magpinsang si Jacob at Callix. Syempre, naging okay na rin kami ni Callix. At dahil naging okay na kami ni Callix, sport na naman si Belle sakin. Magkaibigan na ulit kami nina Ava at Belle. Syempre, kahit na nasaktan ako sa nangyari, naintindihan ko din naman ang sides nila. Hindi nila alam na may relasyon na kami ni Jacob noon. May kasalanan din ako kasi inilihim ko yun sa kanila.
      
      Well, wala naman talagang perpektong tao. Kaya pinatawad ko sila. Ika nga ni Jacob, kung ang Diyos nga ay nagpapatawad, ang mga tao pa kaya.
      
      Binuksan niya ang pintuan para sakin at hinalikan ako. Tinulak ko siya at tumingin sa paligid. Sobrang PDA talaga nito, inirapan ko na.
      
      Sinimangutan niya ako.
      
      “Rosie naman. Parang isang halik lang.”
      
      Tumakbo siya papuntang driver’s seat at agad nag seatbelt. Walang ka kupas-kupas yung kagwapuhan niya. Hindi na ako magtataka kung may magyaya sa kanyang mag artista. Mas lalo siyang tumangkad sa konting panahon. Kumikinang ang balat niya. Hindi ko alam kung paano niya yun nagagawa basta sparkling ito… Nakakainggit dahil masyadong pale ang balat ko. Slightly messy hair, perfect nose and eyes, tapos ultra kissable lips. Parang nakakaakit siya palagi. Lalo na pag nakita mo na kung anong meron sa ilalim ng T-shirt niya. Uh-Oh!
      
      “Tulala ka naman sakin. Ano? Tigil muna tayo?” Humalakhak siya at sumulyap sakin.
      
      Sinapak ko na… Mahalay talaga ang pag iisip nitong si Jacob. Minsan nagsisisi ako kung bakit ako bumigay sa kanya noon. Sana hindi ko na lang siya tinuruang humalik… Sana pinatagal ko muna…
      
      Sa sobrang frustrated niya saming dalawa, nakipagsanib puwersya siya kay mama sa pag kumbinsi sakin na magpakasal na kami. Kahapon, tinawagan niya si mama para sabihing magpakasal na talaga dapat kami nang magkaapo at magkaroon na ng bagong tagapagmana ang mga lupain nila.
      
      “Wa’g mo nang ulitin yun, ah!?” Sabi ko sa kanya.
      
      “Ang alin?” Tanong niya.
      
      “Yung pagtawag mo kay mama!”
      
      Umiling siya at ginulo ang buhok. Parang bata.
      
      “Jacob, kailangan mong maintindihan. Mahirap lang kami. Kailangan kong matapos ang pag aaral ko bago ako mag settle down.”
      
      “Rosie, antagal pa ng tatlong taon. Mayaman ka rin naman ah? Kasi tayong dalawa na. Ano pang pinoproblema mo? Tsss.”
      
      “Hindi mo talaga maintindihan no? Palibhasa pinanganak kang mayaman. Ayokong husgahan na naman ako ng mga tao. Saka… pangarap ko rin na makatapos-“
      
      “Pwede ka namang makatapos pag kasal na tayo, diba?”
      
      “Ang sabihin mo, natatakot ka lang na may makakahadlang ulit satin.”
      
      Napabuntong-hininga siya.
      
      “Alam mo, Jacob. Kung mahal mo ako, hindi mo naman kailangang matakot kasi mahal din naman kita. Nagmamahalan tayong dalawa kaya walang makakahadlang satin, kahit sino o kahit ano… Kung tayo talaga, tayo naman talaga-“
      
      “Tsss! Ayoko talaga sa kasabihang yan! If we’re meant to be, we will be? Kung tayo, tayo na ngayon! Simula na dapat ngayon! Hindi yang pinapaubaya natin sa tadhana ang lahat.”
      
      Tumawa na lang ako, “Eto na naman tayo. Basta, Jacob… Maiintindihan mo rin yan.”
      
      Humilig ako sa kanya. Inabot ko yung pisngi niya at hinalikan ko na. Ang cute-cute niya talaga pag nakikipagtalo. Gusto niya lang pikutin ako eh.
      
      Nakita kong pumula ang pisngi niya. Natawa na lang ako at napailing. Sarap talagang tignan na sobra-sobra parin ang reaksyon niya sa kahit anong gawin ko. Talagang makikita mo iyon sa mukha at reaksyon niya.
      
      “Sa bahay ka na tumira-“
      
      “Jacob, hindi nga pwede…” Sabi ko.
      
      “Kainis naman! Lahat di pwede! Gusto kong nakabantay ako sayo palagi, Rosie… Kainis ka!”
      
      “Maghintay na lang tayo kung kailan pwede na.” Sabi ko.
      
      Badtrip siyang pumasok sa unang araw ng school. Natatawa naman ako nang pumasok ako.
      
      As usual, wala na naman ako masyadong nakakasalamuha sa mga kaklase ko dito. May mga ngi-ngiti-ngiting mga lalaki pa. Ilan sa kanila alam na si Jacob ang boyfriend ko kaya hanggang ngiti na lang ang nagagawa nila. Alam nilang basagulero yun at isip bata kung nagagalit.
      
      Mas mabuti na rin yang walang nanggugulo. Nandito naman ako sa school para makapag-aral.
      
      “Rosie!!!” Sigaw ni Karl pagkatapos ng klase ko.
      
      “Karl…”
      
      “Ano? I-me-meet natin yung tinutukoy kong floor manager ng BSM collections…”
      
      “Hindi ako sigurado, Karl, eh!” Sabi ko.
      
      Pero sa kalooblooban ko, gusto ko na talaga. Gusto ko ang ideya na ito dahil mas madali ang pera. Kailangan ko din kasi ng pera para di palaging si Jacob yung gumagastos para saming dalawa. Siya palagi ang may gift. Gusto ko rin siyang bigyan minsan pero mamahalin ang mga gusto kong ibigay. Hindi naman siya nanghihingi pero gusto ko lang talaga siyang bigyan.
      
      Isa pa, through this, hindi ko na kailangang humingi kina mama at papa ng allowance. Mabuti pa si Maggie, nagawa niyang mag trabaho noon para sa allowance niya. Ngayon, ito naman ang naiisip kong sagot sa mga problema ko.
      
      “Kumusta, Karl?” Tumaas ang kilay ng nakameet naming floor manager ng BSM collections.
      
      Sa isang coffee shop kami nag meet. Sa labas ng school.
      
      “Okay lang! Eto nga pala si Rosie Aranjuez. Rosie, eto si Kira.”
      
      Naglahad ng kamay itong si Kira. Si Kira ay isang lalaking may blonde na buhok. Ngayong naglahad na siya ng kamay, nagdalawang isip ako kung lalaki ba siya o hindi. Mukhang, tulad ni Karl, binabae din.
      
      Nagkamayan kami at nagsiupuan na para pag usapan ang offer nila.
      
      “Tama ka, Karl. Bagay nga siya kahit sa ramp.” Nihead-to-foot ako ni Kira.
      
      “Sabi sayo eh. Hindi lang mukha. Pati katawan.” Kumindat si Karl sakin.
      
      Ang bading na ito talaga!
      
      “Oh sige, eto na… Kailangan ni Ms Bubbles Manuel ng mga modelo para sa launching ng bagong collections niya.”
      
      Bago siya nakapagpatuloy ay pinutol ko na siya, “Ano bang susuotin diyan? Hindi ba yan bra at panty lang?” Tanong ko.
      
      “Hindi. Ano ka ba! Kaloka! Gowns at mga damit ang linya niya. Syempre. May agency naman na contact yung BSM, kaso gusto ni Ms Bubbles ng bagong mukha. Hmmm. Mga panglima ka siguro sa kanila. To wear the finale gowns. Marami kasi yung pang finale niya.”
      
      Napalunok ako.
      
      “Magkano yung T.F sis?” Tanong ni Karl.
      
      “Nako! Walang problema sa talent fee. 10 thousand kada show… Pag kasali ka naman sa brochure niya, baka maging 25 thousand pa yan. Pag finale, 15k. Ano? Payag na!?” Nakangisi siya. Halos mabilang ko na ang mga ngipin niya sa laki ng ngisi.
      
      “Strikto yung boyfriend ko, eh. Ayaw niya ng ganito.” Sabi ko.
      
      “Naku!!! Yung boyfriend mo ba ang may hawak ng buhay mo? Hindi naman diba? Tsaka? Anong klaseng boyfriend yan? Hindi ba lahat ng lalaki nangangarap ng modelong girlfriend? Girl! Kung mapapasali ka sa kahit isang show lang ni BSM, talagang magsisilapitan ang designers sayo… Lalo na kasi sa finale kita isasali. Makinis ka saka mestiza. Bagay na bagay ka sa mundong ito. You’re gonna be big!”
      
      Napainom ako ng kape.
      
      “Puwede ba! Wag mong gawing kating-kati sa katawan ko! Gusto ko ng malinis na buhay…” sabi ko.
      
      Nagtaas ng kilay si Karl at Kira.
      
      “Wala, Rosie. Saka, hindi mo kailangan ibahin ang mga values mo sa sarili. Hangga’t walang masama, wala kang ginugulo, okay lang.” Sabi ni Kira.
      
      Pero nag iisip talaga ako. Kung sasali ako, baka maging endorser na ako ng isang brand. Makakabili pa ako ng mga gamit ko. Pero… paano si Jacob? Gusto ko pa rin siyang maprotektahan. Pero ang plano niya na maging estudyante ako sa U.S ay baka magbago kung susundin ko to.
      
      Ang hirap…`
      }
      ,
      {
        id: 3,
        title: "baka sakali 3",
        image: require("./images/baka_sakali_3.webp"),
        story: `
      Panimula
      Nagdidilim ang paningin ko habang tinitingnan ng mabuti ang champagne sa aking baso. Kumikinang ang kulay gintong likido doon. Katulad ng pagsusumigaw ng ibat ibang neon lights sa bar kung nasaan ako. Nilagok ko iyon ng isang bagsakan at nilagay muli sa lamesa.
      Another one, madame? Tanong nang dumaang waiter sa akin.
      Yes, please? Sabi ko at pinasadahan ng mga daliri ang aking buhok.
      Kanina pa kami dito sa loob ng bar. Kanina pa rin ako binubugahan ng usok galing sa sigarilyo ni Karl.
      Hay nako. This was supposed to be your homecoming party at bakit ang mga kaibigan lang natin ang nagpaparty, ha? Tanong niya.
      Sinulyapan ko siya ngunit naagaw din agad ng waiter ang atensyon ko. Nagsalin siya sa aking wineglass ng Champagne.
      And who taught you to drink this way? Ito na ba ang natutunan mo sa Dubai?
      Inirapan ko ang kaibigan ko. Please, ni hindi ako nagtagal sa Dubai.
      Did you set me up this time? Angil ko kay Karl.
      Gustong gusto ko na siyang bugahan ng sama ng loob. Ive been trying to avoid this encounter simula noong bumalik ako galing ibang bansa, bakit ngayon pang naisipan naming magparty sa labas para sa pagbabalik ko.
      Nagulat si Karl sa paratang ko sa kanya. Hindi ko alam kung may mga tamang ebidensya at spekulasyon ba ako o talagang napaparanoid lang ako. Pakiramdam ko, kahit sino ay may sala rito.
      Of course not, Rosie. Alam mo namang maaasahan mo ako pagdating sa ganito, ha? And by the way, paano mo nga pala nalaman? Nanliit ang mga mata niya.
      Nilagok kong muli ang laman ng aking wineglass. I saw a post. Nandito siya sa mismong bar na ito.
      Come on! Would you rather let him see that youre a wreck?
      Nanlaki ang mga mata ko. Tumuwid kaagad ako sa aking pagkakaupo. Hell no!
      Atta girl! See? Enjoy your night. This is yours. Its been, what? Two? Three years? My God, Rosie!
      Nagtiim bagang ako. Gusto ko siyang sumbatan. But theres no point in blaming. Hindi si Karl ang nagdesisyon kundi ako.
      Humigop muli siya sa kanyang sigarilyo. Nagkatinginan kaming dalawa. Umaalon na ang aking paningin.
      Preno sa pag inom. Para hindi ka magmukhang wreck! Iiling iling pa siya.
      Inayos ko ang buhok ko. I want to go to the bathroom but I dont want to be alone. Nadadala na ako sa papunta punta ng CR. Ayaw kong may makasalubong.
      Lets call this a night sabi ko sabay hagilap sa aking purse.
      Oh my God, Roseanne Aranjuez! Ano ka ba! Its still 11:30PM! This is your night, your party, tapos mauuna ka? Kahit na pinagbigyan ka na nina Callix na dito ka muna sa lamesa habang sila ay sumasayaw, di ka parin kuntento. Gusto mo nang umuwi!
      Tumayo na ako. Hindi ako mapipigilan ng mga salita ni Karl. Ive had enough drinks for tonight. Umaalon na ang paningin ko at mas lalo lang iyong nadepina nang tumayo ako.
      Jesus, Rosie! Alam mo bang may hinandang sorpresa sayo ang mga kaibigan natin? Tumayo din siya at pinigilan ako sa amba kong pag alis.
      Natigilan ako. Naiisip ko ang effort ng mga kaibigan ko. I just cant leave them because of my childish and selfish feelings!
      Fine! Kailan ba yan? Kanina pa tayo dito I didnt mean to nag.
      Agad akong nahiya sa mga sinabi ko. Tunay ngang nalalasing na ako. Wala nang filter ang aking bibig. Umupo ako at kinalma ang sarili.
      Chill! And besides, youre right. Kanina pa tayo dito at may nakita ka ba? Wala di ba? Kaya huwag ka nang mangarap-
      Hindi ako nangangarap! I am avoiding it at all cost, Karl, kung hindi mo nakikita! Halos pasigaw kong sinabi.
      Yes, Im sorry. Wrong choice of words. Tipsy lang Calm down
      Umirap ako at nagtawag ulit ng waiter para masalinan pa ng champagne ang aking wine glass.
      Inayos ko ang aking damit. Im wearing a black body hugging dress and black pumps. Kanina pa ako tinutukso ni Karl kung saan daw ang lamay. Kung hindi ko lang siya sininghalan ay hindi pa siya tumigil hanggang ngayon.
      Rosie! Kahit sa ingay ng bar ay dinig na dinig ko ang sigaw ni Brandon.
      Umikot siya dahil U shape ang sofang inuupuan namin ni Karl. Marami kami at isa siya sa mga imbitado, kasama ang iilang kaibigan ko sa pagmomodelo.
      Brandon! Ang akala ko di ka darating! Ngumisi ako at tumayo para salubungin siya.
      Kasama niya si Avon, iyong girlfriend o asawa niya na yata. Hindi ko alam dahil matagal na rin kaming hindi nagkikita. Ngumiti si Avon sa akin. Nag beso ako sa kanya.
      Natagalan ako. Im with my cousins. Nasa kabilang table sila, ani Brandon sabay turo sa lamesang nasa likod.
      Oh, Im sorry! May lakad ka pala? Pasigaw kong sinabi para marinig niya akong mabuti.
      Hindi. We were just bar hopping too and I know may ganito kaya dinala ko na rin sila dito! Tumawa si Brandon.
      Ang mahaba niyang buhok ay naka manbun. His arms snaked behind Avons waist. Tumikhim ako. I remembered something but I interrupted my thoughts.
      Nasaan na ang mga kasama ninyo? Bakit kayo lang ni Karl dito? Tanong ni Avon. Ngumisi siya at tumingin kay Brandon.
      Shes wearing a black suit. Sa ilalim nito ay kulay gray na spaghetti strap at itim ring shorts. Nakataas ang kanyang kilay. Pakiramdam ko tuloy masyado akong mahina kumpara sa kanya. O talagang nanghihina lang ako ngayon.
      Nasa dancefloor sila. May isa kasi ditong nag sa-signs of ageing na. Tumawa si Karl.
      Sinipat ko kaagad ang bading. Bumaling ulit ako kay Avon at nginitian siya.
      I got tired of partying. Ive been partying for days simula noong bumalik ako. Kaya ngayon, inom inom na lang muna Ngiti ko.
      Nagngitian kami nang biglang may sumabog na Champagne sa likod ko. Tumawa si Brandon at Avon pagkatapos ay pumalakpak.
      Nagulat ako nang nagpunta lahat ng mga kaibigan ko sa aming lamesa, pumapalakpak. May dalang kulay gold na balloons si Ava at niyakap niya ako.
      Welcome home, Rosie!
      Niyugyog niya ako. Tumawa ako at luminga linga. Hindi ko alam kung saan ko ididirekta ang paningin ko. Kay Belle na may dalang cake at may maraming kandila, kay Josh at Callix na nagpasabog ng champagne, sa mga kaibigan kong models na panay ang hila sa akin para makapag picture? I smiled in all their pictures. Ininom ko rin lahat ng binigay na champagne sa akin.
      Karls right! I should enjoy this night. This is my night. These are my friends. This is my time. Walang pag aari si Jacob sa mundong ito kundi ang kanyang mga lupain. Hindi niya pag aari ang mindset ko.
      Welcome home, Rosie! Ani Belle sabay selfie kasama sina Ava, Callix, at Josh.
      Hinipan ko ang kandilang dala nila. Parang birthday lang! Tumawa ako at uminom uli ng inabot na champagne. Binuhat pa ako ni Karl at nilagay sa kanyang balikat. Dala dala ko ang mga balloons. Hindi ko alam kung sino ang mas lasing sa aming dalawa, ako o siya.
      Naghahari na ang alcohol sa aking sistema. Pagkababa ni Karl sa akin, muntik na kaming natalisod. Nagtawanan na lang kami. Naglahad ng kamay si Callix sa akin habang pinagtulungan naman ng mga babae si Karl.
      Are you okay? O masyadong naparami ang inom mo?
      Hindi ako hinintay ni Callix na makasagot. Nilingon niya na ang mga kasama namin. Tumayo ako ng maayos.
      Minimize the booze! Sabay tawa niya.
      Tumawa rin ako ngunit kinuha ang wineglass para maubos ang iniinom.
      Pupunta ba si Duke? Tanong ni Brandon dahilan kung bakit halos maibuga ko ang champagne.
      Napaubo ako. Nakakasamid naman talaga. Matalim kong tiningnan si Brandon pero tinaas niya lang ang kanyang kamay.
      I mean, who would drive you home? Natatawa niyang sinabi.
      I will drive her home ani Callix.
      Hinawakan ko ang aking dibdib, naiwan yata akong walang hangover. Sabi ko na nga ba, mangyayari lang ito. He is doing this on purpose.
      Oo! Yeah, take the hint, Karl!
      Karl smiled at me. Wala akong masabi kundi ang maginit na tawa.
      `
      }
      ,
      {
        id: 4,
        title: "Until Forever",
        image: require("./images/until_forever.webp"),
        story: `
          “Bro, wanna play ball?” Kakadating lang ni Azi galing sa kanila.
      
          I told him I’m not in the mood to go out. Ang tigas talaga ng ulo ng isang ito. Pumasok sa loob ng kwarto ko si Josiah at Damon. Nagdala pa talaga siya ng kanyang team.
      
          “What the fuck, dude? You’re decaying inside your room. Go out, man!” Ani Azi sabay dribble ng bola. Mabilis na lumipad ang dirty finger ko sa ere.
      
          Humalakhak siya.
      
          “Dammit, I told you I’m not in the mood…” Paos pa ako sa nagyari kagabi.
      
          Kinusot ko ang mata ko. Hinawi ni Josiah ang kurtina kaya lumiwanag ng husto doon. Hinawakan ko ang ulo ko. Damn! I just want to sleep the whole day.
      
          “I hate you guys.” Because it’s true, I hate them right now.
      
          Pero mas naiinis ako kay Kuya Justin. I told him to go slow. Now I’m a wreck. What’s it called again? Jim Beam and Jack Daniels? Sabi ko sa kanyang beer lang muna dahil first time ko pang uminom. So much for being his apprentice.
      
          Naririnig ko na ang tawa niya galing sa labas. Kasama niya si Rafael at si Knoxx. Tinaas ko ang kamay ko nang nakitang umamba ng high five si Knoxx sa akin.
      
          “You cool, bro?” Aniya.
      
          Ngumisi ako at ginulo ang buhok.
      
          “I heard muntik ka ng ma lason ng Jim Beam.” Knoxx chuckled.
      
          “Or ma comatose?” Nagtaas ng kilay si Rafael.
      
          “Non sense. I’m good. Si Kuya ang na comatose kagabi. Dad was too angry to let him sleep.”
      
          Bumaling silang lahat kay Kuya Justin. Syempre, nagalit si daddy nang nalaman niyang pinainom ako ng alak ni Kuya. Kahit na kagustuhan ko iyon, still Kuya Justin is responsible for that.
      
          Napuno ng kantyaw si Kuya habang dumiretso na ako sa bathroom. I’m not sure if I can even dribble a ball right now. Masyadong masakit ang ulo ko para tumakbo. I just really wanna rest.
      
          After the cold shower, naabutan ko silang lahat sa kama ko. Azi’s too curious about the alcoholic beverages. Naaalala ko sa kanya ang sarili ko kahapon.
      
          “Fuck you, Kuya. I just wanna try.” Iritadong sinabi niya kay Knoxx nang pagbawalan siya nito.
      
          “Try my ass. You’re still a kid!” Ani Knoxx.
      
          “Isang taon lang gap natin. Kung bata ako, bata ka rin.”
      
          Umiling na lang ako at naghanap ng maisusuot. Hindi ko na maalala ang nangyari kagabi. Ang alam ko ay pinagalitan ni daddy si Kuya Just. Nasali pa ‘yong issue na ayaw ni Kuya Justin mag major ng business. Dad’s too hard on Kuya Just these past few days. Kaya naiintindihan ko kung gusto niyang mag loosen up.
      
          “Ej, drink these.” Sabay lapag ni Kuya Justin sa isang tablet ng vitamin C at mamahaling mucolytic.
      
          Napatingin ako sa kanya. “Are you kidding me?”
      
          “Trust me. It will help. I got this.” Kindat niya.
      
          Nagkibit balikat ako. Simple. Kung lalala ang pakiramdam ko dahil sa pinainom niyang ito, I’ll stay inside my room forever. Hindi ako mapipilit ni Azi na lumabas dito.
      
          Ngunit nakakagulat dahil tama si Kuya Justin. Nakatulong nga ang dalawang pinagsamang tablet na iyon. Fast relief, indeed.
      
          “May study tungkol diyan. That’s the cure for hangover, Elijah. If you wanna learn, I’ll teach you the whole thing.” Kindat ulit niya sa akin.
      
          Nagkibit balikat ako. Well, I guess I should take note.
      
          “I wish Justin’s my brother. Nakakairita ang Knoxx na iyon. Yabang!” Singhal ni Azi, papalabas kami ng bahay. “Age my ass. He’s just Grade 9. Akala mo naman kung makapag salita, legal age na. Kuya Justin’s cool. Knoxx sucks big time.”
      
          “Try kaya natin uminom next week o mamayang gabi? Tago lang tayo para di makita nina mommy.” Ani Damon sabay ayos sa kanyang buhok.
      
          “At saan naman tayo magtatago?” Nagtaas ng kilay si Josiah.
      
          And curiosity killed the cat. Alam kong noon pa lang ay gusto na nilang ma try uminom. Syempre, I got the eldest Montefalco brother kaya ako ang naunang maka experience ng ganon. Ngayong na experience ko na, silang lahat gusto na rin. I bet Azi’s ass, Knoxx won’t let them drink a drop.
      
          “What about sa bahay nina Elijah? Elijah’s room?” Ngising aso ni Azi, papasok kami sa sasakyan ni Rafael.
      
          “At ako ang papagalitan ni Dad? Tsss.” Sabi ko.
      
          “Come on, Elijah. Hindi tayo papagalitan kung di nila malalaman. Sabihin natin na ‘sleepover’.” Nag quotation marks pa sa hangin ang unggoy.
      
          “What are you, a girl, Azi? Sleepover ka dyan.” Irap ni Josiah. “Jamming, Elijah. Let’s invite Rafael.”
      
          “Pag inimbitahan mo si Kuya Rafael, dadating si Knoxx. Azi’s ass will burn.” Ani Damon.
      
          Tumawa ako.
      
          Syempre, nang dumating na si Rafael at Knoxx ay tumahimik na sila tungkol don. Nag shift ang topic sa girls. Halos hindi pa kami magkasya sa loob ng sasakyan. Dalawa naman ang dala dahil sumama naman si Kuya Justin but heck the monkeys want to be together. Hindi bale na raw na maging sardinas kami sa loob.
      
          “Akin na nga.” Sabay kuha ni Josiah sa winawagayway ni Dame na cellphone.
      
          He’s at it again. Searching for interesting schoolmates and trying his badboy moves. Humikab ako habang tumitingin sa labas ng sasakyan. Sinusundan ko ng tingin ang bawat building na nadadaanan namin.
      
          “Just look at her, man!” Sabay pakita ni Azi sa picture don sa cellphone ni Damon. “Andrea Tancinco! She’s so hot!”
      
          Dinungaw ko ang picture ng isang babaeng medyo chinita at payat. Yeah, well, she’s pretty. “Looks too young.” Sabay tingin ko ulit sa labas.
      
          “Mas maganda kaya ang mas bata!” Panindigan ni Azi.
      
          “Patingin, Azrael!” Sabi ni Knoxx na nasa front seat.
      
          “Hell, maghanap ka ng babae mo sa school niyo.” Galit na sambit ni Azi.
      
          Tumawa na lang si Knoxx sa front seat. Bumaling ulit si Azi sa akin. “What about this girl, bra?” Sabay palit ng picture sa cellphone ni Damon. “Who’s this again, Dame?”
      
          “Alyssa Acosta.” Sabi ni Damon.
      
          Once again, I’m tempted. Dinungaw ko ulit ang isang picture ng babaeng sobrang puti, nakalabas ang dimple, pula ang labi, may maiksing shorts, at spaghetti strap na damit. Damn!
      
          Kinuha ko ‘yong cellphone sa kamay ni Azi. Lumaki ang ngisi niya dahil sa ginawa ko.
      
          “What section, Dame?” Tanong ko.
      
          “I don’t know. Taga Pueblo Campus,” sagot ni Damon.
      
          “How about this Andrea whatever?” Sabay tingin ko ulit sa picture nung babaeng medyo chinita. Azi’s right, she’s hot!
      
          “Klare’s classmate.” Sagot ni Damon.
      
          Nagtaas ako ng kilay. Binigay ko kay Azi ang cellphone ni Damon. I lost my interest there.
      
          “May isa pa, dude!” Sabi ni Azi sabay pakita ng isa pang babaeng morena at matangkad.
      
          Damn girls. Pinag aagawan na ni Josiah at Azi ang cellphone ni Damon. Punong puno iyon ng girls. Well, at least they’re not watching porn habang naghahanda kami sa game na ‘to.
      
          “Nandon ba sina Erin?” Tanong kong sinagot kaagad ni Josiah.
      
          “Yup. Claudette and Klare. Sinundo, diba, ni Justin?” Nagtaas siya ng kilay sakin.
      
          Nagkasalubong ang kilay ko. Wala akong alam. Hindi ko alam na sinundo ni Kuya ang tatlo.
      
          “How about Yasmin, Ej?” Tanong ni Rafael.
      
          “Surigao with mommy.” Sagot ko sabay tingin ulit sa labas.
      
          Nakarating na kami sa Marco Hotel. Dito gaganapin ‘yong basketball game. Katuwaan lang pero sineseryoso nila. Tamad akong bumaba. I just want to relax and recover.
      
          Tumayo na si Azi at tinulungan si Damon. Tumayo na rin ako sabay tawa na lang sa kakulitan nila. 
        `
      }
      ,
      {
        id: 5,
        title: "Until He Returned",
        image: require("./images/until_he_returned.webp"),
        story: `
      Simula
      
      Malamig ang gabi sa Davao habang nakaupo ako sa mga hagdanan Magsaysay Park. Hindi ko alam kung ano ang meron ngayon pero may mga taong nagsisindi ng sky lantern sa may boardwalk. Dahil sa mga pinapalipad nilang sky lantern, mas lalo kong nakita ang kagandahan ng madilim na dagat sa malayo. Para itong pangyayari sa isang animated movie na napanood ko noon.
      
      Nangaligkig ako sa ginaw ng hanging umihip. Hindi naman maginaw sa umaga, summer na kasi at umiinit na ang panahon. Pero tuwing gabi, ganito ang temperatura. Hindi ko nga lang alam kung sa Davao lang ba ito o sa buong Pilipinas.
      
      Niyakap ko ang sarili ko at binaba ko ng isang palapag ang dalawa kong paa. Bakit ba kasi ako naka shorts at loose tank top. Kahit na may tube sa loob ay nanginginig parin ako sa lamig. Mabilis akong nag sisi pag labas sa gabing ito.
      
      “It’s summer, Klare! It’s my turn!” Sigaw ni Papa sa akin.
      
      “Pero, pa, I’ve been with you all year.” Pangatwiran ko nang nanggalaiti siya.
      
      “Oo, sa Cagayan de Oro! Hindi dito sa Davao! Now I want you here in our home. Bakit ka aalis?” Aniya.
      
      “Klare.” Malamig na tawag ni Tita Marichelle, Papa’s wife.
      
      Hinawi niya ang kanyang mahaba at kulot na buhok at pinagdiin ang mapupulang labi bago suminghap at nagpatuloy sa pagsasalita.
      
      “As much as I want you gone in this house-“
      
      “Mom, stop it.” Putol ni Hendrix sa mommy niya.
      
      “Sorry. Pero ang sinabi ni Ricardo ang masusunod. Batas ang kanyang mga salita.”
      
      Kinagat ko ang labi ko. Hindi ko mapigilan ang pagdaramdam tuwing nagsasalita si Tita Marichelle. I get that she doesn’t like me. Hindi ito ang unang beses na pinaramdam niya sa akin ito. Ngunit sa loob ng dalawang taon ay hindi parin ako nasasanay. I have never been hated. Kahit na sabihin nating naging ‘hate’ ako nina Erin, Chanel, at Ate Yasmin noon, hindi parin ako natrato ng ganito harap harapan.
      
      This is better, actually. Mas maganda siyang makitungo kumpara sa mga pinsan ko ngayon. but I’m not in the right place to blame my cousins. I understand. Alam ko kung bakit kinakamuhian nila ako sa ngayon. I want to do something about it. Kaya lang, alam kong may mga sugat na hinahayaan na lang para mag hilom. Kasi pag inaalagaan mo ito, mas lalo lang dudugo, maiimpeksyon lang.
      
      “Okay.” Sabi ko at tumayo habang kumakain pa sila.
      
      Intimidating ang atmosphere ng malaking bahay ng mga Ty sa Davao. Kumpara sa bahay ng mga pinsan kong may pagka-modern, itong bahay nila ay puno ng makikintab na antiques.
      
      “Saan ka pupunta?” Tanong ni papa.
      
      “Magpapahangin.” Sagot ko.
      
      “Hindi ka pa tapos kumain!” Aniya.
      
      “I’m done.”
      
      “Klare Desteen Ty!” Sigaw niya nang nakalayo na ako at napagtanto niyang hindi na ako babalik sa hapagkainan.
      
      Ilang beses na rin akong napagalitan dahil sa suot ko habang kumakain. Ngayong gabi, espesyal dahil hindi ako napagalitan sa suot kong loose top at shorts lang. Ngunit napagalitan naman ako sa ibang rason… Suminghap ako at nilingon ang hapagkainan. Silang apat ay nakatingin sa akin. I feel like I don’t belong here.
      
      “Ganyan ka ba pinalaki ng mga Montefalco? Umaalis nang di pa natatapos ang pagkain? We are having dinner here, Klare! Wag kang bastos!” Ani papa.
      
      Ilang beses ba ako masasaktan tuwing binabanggit ang pangalan na iyan? Hindi ako pinalaki ni daddy na ganito. Hindi ako bastos. Hindi ako nagrerebelde dito sa bahay nila. I’m just really, really pissed. Ayokong mapagbuntungan ko sila habang kumakain kami. Imbes na magsalita ako ng masama ay mas pipiliin kong manahimik at umalis.
      
      “Dad! Will you give her a break? You’ve been too hard on her.” Ani Hendrix.
      
      “Pa, I just really want to go. I’m not hungry. At naiinip na ako. Ayokong hintayin na matapos kayong kumain bago umalis.” Sabi ko.
      
      “Klare, asan na ang manners mo? Proper table etiquette.” Singit ni Tita Marichelle sa isang dalisay na boses.
      
      Yes, she hates me. Ang gusto ko sa kay Tita Marichelle ay hindi siya ‘yong tipong plastik at tinatago ang kulo. Sinasabi niya ang mga gusto niyang sabihin sa harap ng mga tao. She’s also not bitter all the time. Sa loob ng halos dalawang taon na nakasama ko siya ay may naidulot na rin siyang maganda sa akin. Naniniwala akong kahit ang mga taong nasaktan at mananakit ay may kalambutan at kabaitan rin na tinatago sa katawan. Iyon ang natutunan ko sa loob ng mahigit dalawang taon.
      
      “Sorry, tita.” Sabi ko.
      
      “Let her go, Ricardo. Pierre…” Sabay tingin niya kay Pierre na tumayo agad.
      
      “I know, mom. You don’t have to tell me.” Ani Pierre at agad tumayo at naglakad patungo sa akin.
      
      Diretso ang lakad ko palabas ng kanilang bahay. Wala na si Pierre sa likod ko. Naririnig ko ang agos ng fountain sa kanilang garden habang naglalakad ako patungong gate. Hindi ko na kailangang sabihin sa security guard na aalis ako dahil binuksan niya na ang gate. Umilaw agad ang headlights ng sasakyang nasa likod ko. Kung hindi ako tatabi ay masasagasaan ako nito kaya minabuti kong tumabi. Nang tumigil ito sa harap ko ay sumakay na agad ako sa front seat.
      
      Ganito ang eksena halos gabi gabi. Noong bago pa lang ako dito sa bahay nila, kuntento na ako sa garden at sa gilid ng fountain. Pero pagkabalik ko galing Cagayan de Oro, naging maliit na ang bahay para sa akin. Mas gugustuhin kong umalis at magpahangin sa labas.
      
      Hinihingal si Pierre habang ipinapakita sa akin ang skateboard na dala. Nakayakap na ako sa tuhod ko habang pinagmamasdan siyang pawis at nakangisi.
      
      “You sure you want to go back?” Tanong niya habang umuupo sa tabi ko.
      
      Pinunasan niya ang kanyang pawis gamit ang kanyang t-shirt. Pinanood ko ang mga gulong ng skateboard na binigay niya sa akin last December bilang regalo.
      
      “Naisip ko lang… Simula nung nagpalit ako ng apelyido, hindi na ako masyado nakakauwi sa bahay namin.”
      
      Tinitigan niya ako. Hinawakan ko ang gulong ng skateboard na kulay pink.
      
      “Miss ko na sina mommy at daddy. Miss ko na ang kapatid ko.”
      
      “You’ve been with them yesterday, Klare.” Ani Pierre.
      
      “Oo. Pero not really ‘with’ them. Nag paalam lang ako na sa Davao ako magbabakasyon. Iyon lang, Pierre.”
      
      “Tuwing Sabado at Linggo, umuuwi ka naman sa inyo.”
      
      “Oo. Pero…” Hindi ko mahanap ang tamang salita.
      
      “You want to be with your family just for this summer? Do you miss your travels? ‘Yong mga beach niyo, sleep overs, what else?”
      
      Nag angat ako ng tingin kay Pierre.
      
      Nag iwas siya ng tingin at nagpatuloy siya sa pagsasalita.
      
      “Okay. Sabihin mo kay daddy ‘yan. He’ll let you go. O baka pa nga ngayong Summer ay sa Cagayan de Oro tayong lahat mag summer para sa ikakasaya mo.” Bumaling ulit siya sa akin.
      
      “You know that won’t happen. Tita Marichelle will get mad, Pierre. I understand, but… Okay lang naman sa akin na ako na lang. Kahit na wag na kayong sumama.”
      
      “Understand that dad is possessive of you. Ilang taon kang ipinagkait sa kanya ng mommy at daddy mo. Gusto niya lang makabawi.” Aniya.
      
      “Nakabawi na si papa. Alam kong mahal niya ako. And he gave me his name… Hindi na ako Montefalco ngayon.”
      
      Natahimik siya. Seryoso ang kanyang mga mata habang sinusuri ako.
      
      “You were never a Montefalco.” Umihip ang malakas na hangin.
      
      Nag iwas ako ng tingin. Treachery? Pakiramdam ko ay tinraydor ko ang mga Montefalco dahil sa ginawa kong ito. Ang gulat at sakit na idinulot sa akin ng katotohanan two years ago ay ang naging dahilan sa mga pagbabago sa aking buhay. Pero in the end, I am really proud of myself.
      
      This summer, I will finally make my choice.
      
      I think, I should be free.
        `
      }
      ,
      {
        id: 6, 
        title: "until he was gone", 
        image: require("./images/until_he_was_gone.webp"),
        story: `
          Simula
      
          “None of you shall approach to any that is near of kin to him, to uncover nakedness: I am the LORD.”
      
          Pikit na pikit ang mga mata ko habang nakikinig sa mga binabasang verses ng reader sa loob ng Immaculate Conception Chapel. Solemn ang chapel na ito. Wala kang ibang maririnig kung ‘di ang boses ng nagbabasa o ‘di kaya ay boses ng pari at ang tunog ng electric fan na umaandar.
      
          “Klare, I’m hungry,” sambit sa akin ng katabi kong si Elijah.
      
          “Shhh!” saway ko sa kanya habang nakapikit pa rin.
      
          “Ang sakit ng tiyan ko,” pabulong niyang sinabi ulit.
      
          Narinig ko ang marahang halakhak galing sa kanya.
      
          Dinilat ko ang mga mata ko at matalim siyang tiningnan. “Elijah, we are having a mass. Can’t your big fat tummy wait?”
      
          “Anong sabi mo? My tummy isn’t big or fat! I have abs, baby. Wanna see?” sabay hawi niya sa kanyang school uniform.
      
          Hinawakan ko ang kamay niya para pigilan siya sa kanyang gagawing kabaliwan. Mas lalong tumalim ang tingin ko nang kumurba ang ngisi sa kanyang labi.
      
          “Okay, okay, alright. I’ll wait,” pagsuko niya.
      
          Nang natapos na ang misa ay lumabas na kami ng simbahan. Hinampas ko na siya ng mga libro.
      
          “You freaking idiot! Wala na bang laman ‘yang utak mo kundi pagkain? Nagsisimba tayo! Puwede ba!?”
      
          Kakalabas nga lang namin ng simbahan ay hindi ko na napigilang magmura. Kung hindi lang makulit ang talipandas na ito.
      
          Tumawa lang siya at tumingin sa Magis Building kung saan naroon ang canteen namin. Hinawakan niya ang kamay ko at hinigit patungo roon.
      
          “Elijah!” sigaw ko pero hindi niya iyon pinansin.
      
          Pinanood ko siyang mabilis na nakihalo sa mga taong pumipila sa canteen para kumain.
      
          Umiling ako at umupo sa isang bakanteng table. Humikab ako at dinungaw ang listahan ng Eighteen Roses para sa upcoming debut ko. Excited na ako! I’m really looking forward to this.
      
          Ngumuso ako habang tinitingnan ang mahabang listahan. Puro lalaki, siyempre. Kinagat ko ang labi ko at tiningnan ang pangalan ng crush ko sa listahan. Nasa circle of friends ko lang siya, pero medyo tahimik siya at suplado kaya nahihiya akong magsabi na siya sana ‘yong magiging last dance ko.
      
          “Klare!” sigaw ng pinsan kong si Erin.
      
          Inangat ko ang tingin ko at namataan siyang lumalapit kasama ang isang batalyong kaibigan namin. Nginunguso niya ang tahimik at naka-earphones na si Eion Sarmiento. Nakikita ko pa lang ang medyo suplado niyang mga mata ay kinikilig na ako. Samahan pa ng pagdidila niya sa kanyang labi at pagpa-pout habang malumanay na nakaupo. He really is so damn cool.
      
          Tumango agad ako. Alam ko kung anong ibig sabihin ni Erin sa pagngunguso niya kay Eion sa akin.
      
          “Eion!”
      
          Ngumisi ako at nahihiyang kumaway pa.
      
          Umupo na ang ibang mga kaibigan ko sa kabilang table. Tumango lang si Eion sa akin at hindi man lang tinanggal ang earphones. Ang suplado talaga ng isang ito. Inayos niya ang kanyang buhok at tumingin lang sa mga taong dumadaan.
      
          “Hi!” sabi ko.
      
          Kaya lang ay hindi niya ako narinig. Mas narinig ko pa ang maingay na music sa kanyang earphone. Umismid ako. Hindi ko na napigilan ang pagkalabit sa kanya.
      
          “Eion,” tawag ko.
      
          Tila nilalagnat ako sa sobrang init ng pisngi. Ganito na lang talaga palagi.
      
          I’m usually witty, pero natatameme ako ‘pag si Eion na. Kaibigan siya ni Knoxx, pinsan ko, noong high school. Hindi kasi kami parehas ng school ni Knoxx noon. Palagi nila itong nakakasama sa pagba-basketball kaya kilala ko na siya noon. Kaya lang, natigil iyon nang nag-Maynila si Knoxx.
      
          “Hmmm?”
      
          Nahalata ko ang pagkakairita niya nang tinanggal niya iyong earphones. Tiningala niya ako.
      
          Kinagat ko ang labi ko at biglang may bumagsak sa ulo ko. Dumagsa ang apat na tatawa-tawang mga pinsan ko. Libro ni Damon ang bumagsak sa ulo ko at halos kalmutin ko siya sa ginawa niya! Damn it! Ngayon pa talaga nila naisipang mang-asar?
      
          “Damon!” Tumakbo siya at umupo sa kabilang table.
      
          “Hi, Klare!” Kinurot ni Josiah ang pisngi ko.
      
          Pinandilatan ko siya ngunit may biglang naglaro sa buhok ko. Muntik ko na rin makalmot si Knoxx na tatawa-tawa at umiiling sabay nguso kay Eion.
      
          “Ano, Klare? May sasabihin ka ba o wala?” Medyo iritadong sinabi ni Eion sa akin.
      
          Ginapangan ako ng kaba dahil sa iritadong tono niya. Panirang mga pinsan kasi. Umaligid pa silang lahat. Pinanood nila ang paglapit ko at pagkausap kay Eion. Alam ng mga pinsan kong ito na may crush ako sa guwapong si Eion. I mean, sinong hindi magkaka-crush sa kanya? Ang alam ko ay halos kalahati sa school nila noong high school ay nagkandarapa sa kanya.
      
          “Uh, eto kasi…” Ipinakita ko sa kanya iyong invitation ng eighteenth birthday ko. “Malapit na ang debut ko. Ii-iimbitahan sana kita—” nanginginig ang labi ko.
      
          Humagalpak sa tawa si Elijah sa malayo. “Ii-ii-ii-ii? Ang dami namang ‘i’ niyan?” Tumawa ulit siya.
      
          Namilog ang mga mata ko. Gusto ko siyang sugurin at sampalin bigla! Ngunit ang pagkakataon ang nagpigil sa akin. Kita ko kasi na binabasa nang mabilisan ni Eion ang invitation.
      
          “Bakit nasa huli ang pangalan ko?” tanong niyang malamig.
      
          Unang pangalan ay kay Daddy, first dance. Sumunod ay sa bata kong kapatid na si Charles. Sunod ay ang seven dwarves na mga pinsan ko. Ang mga sumunod ang mga kaibigan ko sa college at high school. Huli, si Eion. Iyon ang suggestion ni Erin na nagkatotoo dahil ngayon, naka-printna sa invitation ko ang lahat.
      
          “Ah! Last dance,” panirang sinabi ni Josiah.
      
          Matalim ko siyang tiningnan pero nag-iwas lang siya ng tingin sa akin.
      
          “Last dance?” narinig ko ang pagdududa sa boses ni Eion.
      
          “Uh, oo, e.”
      
          Itinabi lang ni Eion ang invitation ko sa bag niya at nilagay niya ulit ang earphones niya sa tainga. Ni hindi siya nagsalita pa ulit. Naghintay ako sa gilid niya hanggang sa tanggalin na lang ako ng mga pinsan ko roon at hinila na ako palayo.
      
          “I cannot believe that he rejected you,” maarteng sinabi ni Erin sa akin.
      
          “He didn’t, Erin. Hindi niya ni-reject si Klare. He was thinking,” nag-iisip na sinabi ng mahinhin na si Claudette.
      
          “Oh! Right! Thinking!” sarcastic na sinabi ni Erin. “Akala niya naman ang guwapo niya, pero…” Nilingon ako ni Erin. “Ang guwapo niya talaga.” Tumango-tango pa siya sa akin. “Alam mo yun? ‘Yong supladong prinsipe?”
      
          “‘Yong tipong tsundere?”
      
          Nagtaas ng kilay si Erin kay Claudette at hinawakan niya ang kanyang ilong. “Aray ko po. Nosebleed.”
      
          Tulala lang ako sa table namin. Pinalibutan ako ng mga walang pakialam kong pinsan. Panay ang pag-uusap nila sa gilid ko at ni isa ay walang nakapuna sa ginawa ni Eion. Maaring napuna iyon nina Josiah pero walang mga pakialam ang mga iyon.
      
          I’ve never had a boyfriend. Marami na ang nagtangkang manligaw sa akin pero hanggang pagtatangka lang iyon dahil sa mga nakaaligid kong pinsan. Si Eion lang ‘ata ang lalaking pinapalampas nila. Maaring dahil alam nila na hindi kailanman masusuklian ni Eion ang pagtingin ko sa kanya.
      
          “What the hell is a tsundere, Claudette? Iyan na ba ang bunga ng pagiging animanyak mo?” naiiritang tanong ni Erin.
      
          Gusto ko siyang sabayan sa pambabara kay Claudette, pero naisip ko na lang—baka si Eion pa ang hindi magiging interesado sa akin. Hinugot ko ang invitation sa bag ko at binasa.
      
          Hatinggabi.
      
          Patay na ang lahat sa bahay nila Daddy at hindi na rin ako nakakasali sa mga usapan ng mga pamangkin ko. Ang anak ni Tita Thea ay masyadong maliit at laging umiiyak kaya hinahanap siya ni Tita. Samantalang si Mommy at Daddy ay nag-uusap sa taas. Si Uncle Matt naman at Tita Thea ay mukhang nagliligawan. Hindi pa ako nakakakita ng mga lovey-dovey na yan.
      
          Habang pinagmamasdan ko ang mga alikabok sa bintana ko ay may bigla akong narinig. Parang may kumatok. Nanginginig ang mga kamay ko nang tiningnan ko kung sino iyon.
      
          Hindi ko na siya nakita ngunit ngumingisi pa siya.
      
          Pagkatapos ng ilang minuto ay bumulong siya.
      
          “I’ll wait for your invitation, Klare.”
      
          Bago siya nawala sa dilim ng kanto ng aming bahay, binanggit niyang mahinang-mahina pa ang kanyang boses: “I’ll wait.”
      
          Nanatili akong nagbabadya sa kabila ng dilim, pati ng kanyang anino.
      
          At dito ko naramdaman. Walang kalaban-laban.
      
          Wala na siya.
        `,
      }
  ];

  // State to manage the visibility of the story for each book
  const [visibleStory, setVisibleStory] = useState({});

  // Modal state to control which book's full story is shown
  const [modalVisible, setModalVisible] = useState(false);
  const [currentStory, setCurrentStory] = useState("");

  const toggleStoryVisibility = (id, story) => {
    if (visibleStory[id]) {
      setModalVisible(false);
    } else {
      setModalVisible(true);
      setCurrentStory(story); // Set the story to be shown in the modal
    }
    setVisibleStory((prevState) => ({
      ...prevState,
      [id]: !prevState[id],  // Toggle visibility for the clicked book
    }));
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>BOOK HUB</Text>
        <View style={styles.navigation}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={styles.navLink}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Books')}>
            <Text style={styles.navLink}>Library</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('About')}>
            <Text style={styles.navLink}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Contact")}>
            <Text style={styles.navLink}>Contact</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.library}>
        {books.map((book) => (
          <View key={book.id} style={styles.libraryCard}>
            <TouchableOpacity>
              <Image source={book.image} style={styles.libraryImage} />
            </TouchableOpacity>
            <Text style={styles.libraryTitle}>{book.title}</Text>
            <View style={styles.libraryIcon}>
              <Text style={styles.rating}>★★★★☆</Text>
            </View>

            {/* Toggle button to show/hide the story */}
            <TouchableOpacity 
              style={styles.toggleButton}
              onPress={() => toggleStoryVisibility(book.id, book.story)}
            >
              <Text style={styles.toggleButtonText}>
                {visibleStory[book.id] ? 'Hide Story' : 'Show Story'}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      {/* Modal for showing the full story */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <ScrollView>
              <Text style={styles.modalStory}>{currentStory}</Text>
            </ScrollView>
            <TouchableOpacity 
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5DC',
  },
  header: {
    padding: 20,
    backgroundColor: '#333',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  navigation: {
    flexDirection: 'row',
  },
  navLink: {
    color: '#fff',
    marginHorizontal: 10,
  },
  library: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
  },
  libraryCard: {
    width: "45%",
    marginBottom: 16,
    backgroundColor: "#f8f8f8",
    borderRadius: 8,
    overflow: "hidden",
    elevation: 3,
    alignItems: "center",
    paddingBottom: 20,
  },
  libraryImage: {
    width: 150,
    height: 150,
    resizeMode: "cover",  // Ensures the image fits within the given space
  },
  libraryTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 8,
    textAlign: "center",
  },
  libraryIcon: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 8,
  },
  rating: {
    color: "#FFD700",
    fontSize: 14,
  },
  toggleButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  toggleButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalStory: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: '#ff6347',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Books;
