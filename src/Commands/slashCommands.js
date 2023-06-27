const { EmbedBuilder } = require('discord.js'); 


module.exports = {
  handleSlashCommand: (interaction) => {
  if (!interaction.isChatInputCommand()) return; //code below will only run if the interaction is a slash command

  if (interaction.commandName === 'c43') {
    const embed = new EmbedBuilder()
                      .setTitle("About the C43")
                      .setURL("https://www.sauber-group.com/motorsport/formula-1/c43/")
                      .setDescription("The Alfa Romeo C43 is a Formula One car designed and built by Alfa Romeo competing in the 2023 Formula One World Championship. The car is driven by Valtteri Bottas and Zhou Guanyu, both in their second year at the team.")
                      .setThumbnail("https://media.formula1.com/image/upload/content/dam/fom-website/manual/2023/Launches2023/AlfaRomeoLaunch/C43_Top_LM_ZHO_4-5.jpg.transform/9col/image.jpg")
                      .setColor(0xa51c2f)
                      .setImage("https://media.formula1.com/image/upload/content/dam/fom-website/manual/2023/Launches2023/AlfaRomeoLaunch/C43_Front-Dynamic-Left-V4_LM_BOT_4-5.jpg.transform/9col/image.jpg")
                      .setTimestamp()
    interaction.reply({ embeds: [embed] })
  } else if (interaction.commandName === 'teammate') {
                      const embed = new EmbedBuilder()
                      .setTitle("About Zhou Guanyu")
                      .setURL("https://www.sauber-group.com/motorsport/formula-1/team/zhou-guanyu/")
                      .setDescription("Zhou Guanyu is a Chinese racing driver currently competing in Formula 1 for Alfa Romeo. He is the first Chinese driver to compete in Formula 1 and is in his second season.")
                      .setThumbnail("https://www.sauber-group.com/wp-content/uploads/2023/02/LM-Stake_ZHO_RS_fullbody_leftSide_0630n.jpg")
                      .setColor(0xa51c2f)
                      .setTimestamp()
    interaction.reply({ embeds: [embed] })
  }  

    const subcommand = interaction.options.getSubcommand();
  
    if (subcommand === 'bahrain-international-circuit') {
      const embed = new EmbedBuilder()
      .setTitle("About the Bahrain International Circuit")
      .setURL("https://www.sportmonks.com/formula-one-api/formula-1-tracks/")
      .setDescription("You can usually expect great racing and decent amounts of overtaking in Bahrain, while the drivers have to contend with wind, racing under floodlights and the difficulty of finding a decent set-up with the wide temperature fluctuations between sessions. The track’s most challenging point is the tight, downhill, off-camber Turn 10 left-hander, while the fast run through Turn 12 is another highlight, allowing the racers to really feel their cars coming alive.")
      .setImage("https://www.sportmonks.com/wp-content/uploads/2022/07/Bahrain-circuit-768x432.png")
      .setColor(0xa51c2f)
      .setTimestamp()      
      interaction.reply({ embeds: [embed] });
    } else if (subcommand === 'jeddah-corniche-circuit') {
      const embed = new EmbedBuilder()
      .setTitle("About the Jedda Corniche Circuit")
      .setURL("https://www.sportmonks.com/formula-one-api/formula-1-tracks/")
      .setDescription("Fast. Very fast. Average speeds around the Jeddah Corniche Circuit are around 250km/h – quicker than those at Silverstone, and second on the 2021 calendar only to Monza – aka ‘The Temple of Speed’. It is, quite simply, the fastest street circuit ever seen in Formula 1 – while the track also features the most corners on the calendar with 27, many of them quick, sinuous bends as the drivers wend their way along the Jeddah waterfront.")
      .setImage("https://www.sportmonks.com/wp-content/uploads/2022/07/Jeddah-Corniche-Circuit-768x432.png")
      .setColor(0xa51c2f)
      .setTimestamp()      
      interaction.reply({ embeds: [embed] });
    } else if (subcommand === 'albert-park-circuit') {
      const embed = new EmbedBuilder()
      .setTitle("About the Albert Park Circuit")
      .setURL("https://www.sportmonks.com/formula-one-api/formula-1-tracks/")
      .setDescription("As a temporary facility, Albert Park can be quite bumpy – though resurfacing for 2022 will no doubt improve matters – while the circuit at the start of the weekend is often slippery, rubbering in as the sessions progress. It’s also a circuit that requires a well-sorted chassis, with several spots on the track where the drivers require a reactive front end to allow them to chuck it into a corner. Melbourne is also one of the faster tracks on the calendar, with Lewis Hamilton’s 2019 pole lap set at an average of over 235km/h.")
      .setImage("https://www.sportmonks.com/wp-content/uploads/2022/07/Albert-Park-Circuit-768x432.png")
      .setColor(0xa51c2f)
      .setTimestamp()      
      interaction.reply({ embeds: [embed] });
    } else if (subcommand === 'baku-city-circuit') {
      const embed = new EmbedBuilder()
      .setTitle("About the Baku City Circuit")
      .setURL("https://www.sportmonks.com/formula-one-api/formula-1-tracks/")
      .setDescription("A mixture of wide and open and tight and twisty. The lonnnnng main straight along the Baku shoreline is a slipstreaming mecca, and with cars able to run three abreast into Turn 1, the action often looks more IndyCar than F1. However from there, the track loops around into the city’s narrow, winding Icheri Sheher old town, dramatically wending past Baku’s medieval city walls. As in Monaco, slightest mistakes are punished quickly and severely, while set-up wise, the teams are forced to choose between downforce for the twisty bits and less drag for the straight.")
      .setImage("https://www.sportmonks.com/wp-content/uploads/2022/07/Baku-City-Circuit-768x432.png")
      .setColor(0xa51c2f)
      .setTimestamp()      
      interaction.reply({ embeds: [embed] });
    } else if (subcommand === 'miami-international-autodrome') {
      const embed = new EmbedBuilder()
      .setTitle("About the Miami International Autodrome")
      .setURL("https://www.sportmonks.com/formula-one-api/formula-1-tracks/")
      .setDescription("A street-track spectacular. With the Hard Rock Stadium at its epicentre, the 5.41km layout will feature 19 corners, three straights, the potential for three DRS zones, and an estimated top speed of 320km/h. There are elevation changes too, the main one found between Turns 13 and 16, with the track heading over an exit ramp and under various flyovers across uneven ground. The Turn 14-15 chicane, meanwhile, has an uphill approach, with a crest in the middle, and then drops down on the exit.")
      .setImage("https://www.sportmonks.com/wp-content/uploads/2022/07/Miami-International-Autodrome-768x432.png")
      .setColor(0xa51c2f)
      .setTimestamp()      
      interaction.reply({ embeds: [embed] });
    } else if (subcommand === 'autodromo-enzo-e-dino-ferrari') {
      const embed = new EmbedBuilder()
      .setTitle("About the Autódromo Enzo e Dino Ferrari")
      .setURL("https://www.sportmonks.com/formula-one-api/formula-1-tracks/")
      .setDescription("A thrill ride. After testing his AlphaTauri AT01 at the track in the build-up to the 2020 season, Pierre Gasly called the experience one of the best he’d ever had in a Formula 1 car, while his then-team mate Daniil Kvyat remarked that “an F1 car through corners like Acque Minerali – the entrance is so fast, it’s so cool. It really gives you a lot of adrenaline.” The anti-clockwise circuit is certainly fast, with an old-school feel as the drivers put it on the line in iconic corners like the aforementioned Acque Minerali and Piratella.")
      .setImage("https://www.sportmonks.com/wp-content/uploads/2022/07/Autodromo-Enzo-e-Dino-Ferrari-768x432.png")
      .setColor(0xa51c2f)
      .setTimestamp()      
      interaction.reply({ embeds: [embed] });
    } else if (subcommand === 'circuit-de-monaco') {
      const embed = new EmbedBuilder()
      .setTitle("About the Circuit de Monaco")
      .setURL("https://www.sportmonks.com/formula-one-api/formula-1-tracks/")
      .setDescription("Incredibly narrow and totally iconic. Nelson Piquet memorably described driving around Monaco as “like riding a bicycle around your living room”… which is fair. Despite that, it’s a challenge that nearly all drivers love, forcing them to put their skills on the line and rewarding millimetric accuracy. Overtaking on the tight streets is harder, however, with the 2003 Grand Prix witnessing a grand total of zero passing moves!")
      .setImage("https://www.sportmonks.com/wp-content/uploads/2022/07/Circuit-de-Monaco--768x432.png")
      .setColor(0xa51c2f)
      .setTimestamp()      
      interaction.reply({ embeds: [embed] });
    } else if (subcommand === 'circuit-de-barcelona-catalunya') {
      const embed = new EmbedBuilder()
      .setTitle("About the Circuit de Monaco")
      .setURL("https://www.sportmonks.com/formula-one-api/formula-1-tracks/")
      .setDescription("The drivers love the Circuit de Barcelona-Catalunya, which is just as well, because they spend huge amounts of time pounding around it during winter testing. The track is a good mix of high- and low-speed corners, with the challenging Turn 3 right-hander a great chance to evaluate the balance of the car your team’s designers have given you to fight with for the season.")
      .setImage("https://www.sportmonks.com/wp-content/uploads/2022/07/Circuit-de-Barcelona-Catalunya-768x432.png")
      .setColor(0xa51c2f)
      .setTimestamp()      
      interaction.reply({ embeds: [embed] });
    } else if (subcommand === 'circuit-giles-villeneuve') {
      const embed = new EmbedBuilder()
      .setTitle("About the Circuit Gilles Villeneuve")
      .setURL("https://www.sportmonks.com/formula-one-api/formula-1-tracks/")
      .setDescription("The fast, low-downforce circuit is one of the drivers’ favourites. The track is quite stop-start, with lots of heavy-braking chicanes and the famous hairpin to get the anchors working hard. Out of the corners, though, the track is quick and flowing, while the most iconic piece of the circuit comes right at the end of the lap: the Wall of Champions, so-called after excursions into it from Damon Hill, Jacques Villeneuve and Michael Schumacher during the 1999 Canadian Grand Prix weekend.")
      .setImage("https://www.sportmonks.com/wp-content/uploads/2022/07/Circuit-Gilles-Villeneuve-768x432.png")
      .setColor(0xa51c2f)
      .setTimestamp()      
      interaction.reply({ embeds: [embed] });
    } else if (subcommand === 'red-bull-ring') {
      const embed = new EmbedBuilder()
      .setTitle("About the Red Bull Ring")
      .setURL("https://www.sportmonks.com/formula-one-api/formula-1-tracks/")
      .setDescription("It’s only wee, bless it, but the Red Bull Ring packs a lot into a short lap. The first half rewards power, as the cars blast along three straights separated by a pair of uphill right-handers. But then as the drivers work their way downhill, the circuit becomes a regular toboggan ride, as the cars canyon through a series of quick corners, including the exhilarating Rindt right-hander, named for Austria’s first F1 champion.")
      .setImage("https://www.sportmonks.com/wp-content/uploads/2022/07/Red-Bull-Ring-768x432.png")
      .setColor(0xa51c2f)
      .setTimestamp()      
      interaction.reply({ embeds: [embed] });
    } else if (subcommand === 'silverstone-circuit') {
      const embed = new EmbedBuilder()
      .setTitle("About the Silverstone Circuit")
      .setURL("https://www.sportmonks.com/formula-one-api/formula-1-tracks/")
      .setDescription("At the 2018 British Grand Prix, Lewis Hamilton compared a flat-out lap around Silverstone to flying a fighter jet, which should tell you all you need to know about the Northamptonshire circuit. Despite numerous layout changes over the years, Silverstone has always maintained its essential character as one of the fastest tracks on the F1 calendar, while historic corners like Maggotts, Becketts and Abbey provide some of the biggest challenges for racing drivers anywhere in the world.")
      .setImage("https://www.sportmonks.com/wp-content/uploads/2022/07/Silverstone-Circuit--768x432.png")
      .setColor(0xa51c2f)
      .setTimestamp()      
      interaction.reply({ embeds: [embed] });
    } else if (subcommand === 'hungaroring') {
      const embed = new EmbedBuilder()
      .setTitle("About the Hungaroring")
      .setURL("https://www.sportmonks.com/formula-one-api/formula-1-tracks/")
      .setDescription("The lack of straights at the Hungaroring often sees it compared to a karting circuit – and it’s true, the resemblance is uncanny. With several series of corners to string together, teams opt for Monaco levels of downforce, with a well-sorted chassis tending to be rewarded over horsepower given the short straights on offer. It’s a challenge many of the drivers relish, however, with finding a good rhythm key to setting fast lap times.")
      .setImage("https://www.sportmonks.com/wp-content/uploads/2022/07/Hungaroring-768x432.png")
      .setColor(0xa51c2f)
      .setTimestamp()      
      interaction.reply({ embeds: [embed] });
    } else if (subcommand === 'circuit-de-spa-francorchamps') {
      const embed = new EmbedBuilder()
      .setTitle("About the Hungaroring")
      .setURL("https://www.sportmonks.com/formula-one-api/formula-1-tracks/")
      .setDescription("Spa is among Formula 1 drivers’ most loved tracks, with its mix of long straights and challenging fast corners allowing them to push their cars to the edge of their capabilities – if it’s dry, that is. The size of the track and the nature of Belgian weather means it can sometimes be raining on one part of the track and dry on another, meaning grip can vary from one corner to the next. Keep an eye on the thrilling Eau Rouge, arguably the most famous sequence of corners in the world, as the drivers flick left, right and then up the hill through Raidillon.")
      .setImage("https://www.sportmonks.com/wp-content/uploads/2022/07/Circuit-de-Spa-Francorchamps-768x432.png")
      .setColor(0xa51c2f)
      .setTimestamp()      
      interaction.reply({ embeds: [embed] });
    } else if (subcommand === 'circuit-zandvoort') {
      const embed = new EmbedBuilder()
      .setTitle("About the Hungaroring")
      .setURL("https://www.sportmonks.com/formula-one-api/formula-1-tracks/")
      .setDescription("‘Really quick’, ‘pretty insane’, ‘crazy’ and ‘old-school’ were words used by the current crop of F1 drivers when asked to describe the Zandvoort track that many of them tackled in their junior category days. We’d also add ‘undulating’ to that list. The Zandvoort track swoops and flows through the sand dunes, creating a rollercoaster-like feel to the lap. And while the circuit was modernised in time for F1’s most recent return – including increasing the banking angle at the famous Tarzan corner to an Indianapolis Motor Speedway-trumping 18 degrees – Zandvoort remains a proper, challenging drivers’ track.")
      .setImage("https://www.sportmonks.com/wp-content/uploads/2022/07/Circuit-Zandvoort-768x432.png")
      .setColor(0xa51c2f)
      .setTimestamp()      
      interaction.reply({ embeds: [embed] });
    } else if (subcommand === 'autodromo-nazionale-monza') {
      const embed = new EmbedBuilder()
      .setTitle("About the Autodromo Nazionale Monza")
      .setURL("https://www.sportmonks.com/formula-one-api/formula-1-tracks/")
      .setDescription("Rapido! Formula 1’s fastest ever lap was set at Monza – Williams driver Juan Pablo Montoya’s 260.6km/h effort during practice for the 2004 Grand Prix – which should give you some idea of the nature of the track the locals call ‘La Pista Magica’. Cars are on full throttle for 80% of the lap, and hit their Vmax on the circuit’s 1.1km start/finish straight. From there, they roar off into the historic park section, where a series of big stops into tight chicanes give the brakes a good workout.")
      .setImage("https://www.sportmonks.com/wp-content/uploads/2022/07/Autodromo-Nazionale-Monza-768x432.png")
      .setColor(0xa51c2f)
      .setTimestamp()      
      interaction.reply({ embeds: [embed] });
    } else if (subcommand === 'marina-bay-street-circuit') {
      const embed = new EmbedBuilder()
      .setTitle("About the Marina Bay Street Circuit")
      .setURL("https://www.sportmonks.com/formula-one-api/formula-1-tracks/")
      .setDescription("The 5.063km Marina Bay Circuit is one of the most physically demanding on the calendar, its bumpy street surface coupled with humid conditions giving the drivers plenty to think about. With 23 corners, they are working the wheel a lot, too, around the high-speed lap – the physical stress causing them to lose as much as 3kg over the course of a race. The circuit also boasts some of the most unique features of any track on the F1 calendar, including Turn 18, which actually sees the drivers pass underneath a grandstand.")
      .setImage("https://www.sportmonks.com/wp-content/uploads/2022/07/Marina-Bay-Street-Circuit-768x432.png")
      .setColor(0xa51c2f)
      .setTimestamp()      
      interaction.reply({ embeds: [embed] });
    } else if (subcommand === 'suzuka-intl-racing-course') {
      const embed = new EmbedBuilder()
      .setTitle("About the Suzuka International Racing Course")
      .setURL("https://www.sportmonks.com/formula-one-api/formula-1-tracks/")
      .setDescription("Show us a racing a driver who doesn’t love Suzuka, and we’ll show you a liar. The high-speed track remains one of the ultimate driving challenges, with the snaking ‘S’ Curves, the two commitment-rewarding Degners and the white-knuckle ride of 130R all highlights in a series of highlights at what is one of F1’s seminal tracks. And hey, it’s got a crossover, which is always cool, right?")
      .setImage("https://www.sportmonks.com/wp-content/uploads/2022/07/Suzuka-International-Racing-Course--768x432.png")
      .setColor(0xa51c2f)
      .setTimestamp()      
      interaction.reply({ embeds: [embed] });
    } else if (subcommand === 'losail-international-circuit') {
      const embed = new EmbedBuilder()
      .setTitle("About the Losail International Circuit")
      .setURL("https://www.sportmonks.com/formula-one-api/formula-1-tracks/")
      .setDescription("Despite being a relatively new addition to the Formula One calendar, the F1 Qatar Grand Prix has quickly become a favorite among drivers and fans alike. The circuit’s state-of-the-art facilities and challenging layout make it a true test of driver skill and ability. From the high-speed corners to the long straights, the Losail International Circuit provides a series of highlights that will keep fans on the edge of their seats throughout the race.")
      .setImage("https://www.sportmonks.com/wp-content/uploads/2023/03/GP-Qatar-768x432.png")
      .setColor(0xa51c2f)
      .setTimestamp()      
      interaction.reply({ embeds: [embed] });
    } else if (subcommand === 'circuit-of-the-americas') {
      const embed = new EmbedBuilder()
      .setTitle("About the Circuit of the Americas")
      .setURL("https://www.sportmonks.com/formula-one-api/formula-1-tracks/")
      .setDescription("If the corners at COTA seem familiar, they should be. Turns 3 through 6 look not dissimilar to Silverstone’s high-speed run through Maggotts/Becketts or the S Curves at Suzuka, while Turns 12 through 15 mimic Hockenheim’s stadium section. Meanwhile, the uphill run into wide, wide Turn 1 – hey, everything’s bigger in Texas, right? – has provided some fine overtaking action in the track’s short life.")
      .setImage("https://www.sportmonks.com/wp-content/uploads/2022/07/Circuit-of-The-Americas-768x432.png")
      .setColor(0xa51c2f)
      .setTimestamp()      
      interaction.reply({ embeds: [embed] });
    } else if (subcommand === 'autodromo-hermanos-rodriguez') {
      const embed = new EmbedBuilder()
      .setTitle("About the Autodromo Hermanos Rodriguez")
      .setURL("https://www.sportmonks.com/formula-one-api/formula-1-tracks/")
      .setDescription("High up! The Autodromo Hermanos Rodriguez sits over 2km above sea level, making the 4.3km lap a breathless experience. The track still largely follows the outline of the original 1959 circuit, the main difference being that the spectacular – and spectacularly scary – Peralta corner is now bisected, with the circuit instead winding through the old Foro Sol baseball stadium, providing one F1’s most unique vistas.")
      .setImage("https://www.sportmonks.com/wp-content/uploads/2022/07/Auto%CC%81dromo-Hermanos-Rodri%CC%81guez--768x432.png")
      .setColor(0xa51c2f)
      .setTimestamp()      
      interaction.reply({ embeds: [embed] });
    } else if (subcommand === 'autodromo-jose-carlos-pace') {
      const embed = new EmbedBuilder()
      .setTitle("About the Autodromo Jose Carlos Pace")
      .setURL("https://www.sportmonks.com/formula-one-api/formula-1-tracks/")
      .setDescription("Like many pre-World War II tracks, Interlagos features banked corners, with the drivers beginning their lap on a sort of half oval – in fact, between 1957 and the track’s return to the F1 calendar in 1990, Interlagos could be run as a giant oval. After wiggling through the Senna S and down to Turn 4, the drivers then go through a snaking in-field section with some challenging camber changes, before slinging back up the hill and through the banked final turn.")
      .setImage("https://www.sportmonks.com/wp-content/uploads/2022/07/Auto%CC%81dromo-Jose%CC%81-Carlos-Pace--768x432.png")
      .setColor(0xa51c2f)
      .setTimestamp()      
      interaction.reply({ embeds: [embed] });
    } else if (subcommand === 'las-vegas-strip-circuit') {
      const embed = new EmbedBuilder()
      .setTitle("About the Las Vegas Strip Circuit")
      .setURL("https://www.sportmonks.com/formula-one-api/formula-1-tracks/")
      .setDescription("With its high-speed straights, challenging corners, and unique setting, a Las Vegas Grand Prix would provide a true test of driver skill and ability. And with so much to see and do in the city, fans would have plenty of reasons to make the trip to Las Vegas for this exciting new addition to the Formula One calendar.")
      .setImage("https://www.sportmonks.com/wp-content/uploads/2023/03/Las-Vegas-GP-768x432.png")
      .setColor(0xa51c2f)
      .setTimestamp()      
      interaction.reply({ embeds: [embed] });
    } else if (subcommand === 'yas-marina-circuit') {
      const embed = new EmbedBuilder()
      .setTitle("About the Yas Marina Circuit")
      .setURL("https://www.sportmonks.com/formula-one-api/formula-1-tracks/")
      .setDescription("The Hermann Tilke-designed track is dominated by its 1.2km straight between Turns 5 and 6 – which, with slow-speed corners marking its beginning and end, makes it a honeypot for overtaking moves. Other highlights include the tricky run through Turns 10 and 11 into 12, which forces the drivers to brake hard with bags of lateral load still on the car. Track modifications ahead of the 2021 race, shortening the lap slightly to 5.28km, have only added to its excitement.")
      .setImage("https://www.sportmonks.com/wp-content/uploads/2022/07/Yas-Marina-Circuit--768x432.png")
      .setColor(0xa51c2f)
      .setTimestamp()      
      interaction.reply({ embeds: [embed] });
    } 
  }
};