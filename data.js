//settings are just variables that can be sent to the client from the server
//they are either related to the rooms or shared with the server 
module.exports.SETTINGS = {
    //if not specified by the url where is the starting point
    defaultRoom: "qugddOutside",
    //minimum time between talk messages enforced by both client and server
    ANTI_SPAM: 1000,
    //shows up at first non lurking login
    INTRO_TEXT: "Click/tap to move"
};

module.exports.ROOMS = {

    qugddRoomPurple: {
        bg: "qugdd-purple-bg.png",
        frames: 2,
        frameDelay: 30,
        avatarScale: 2,
        pageBg: "#654b75",
        area: "qugdd-purple-areas.png",
        tint: "#fdeac8",
        bubblesY: 44,
        spawn: [14, 90, 119, 100],
        areaColors: {
            //h will be replaced by #
            // bottom left is 0, 0 
            // three flatscreens left to right
            h83769c: { cmd: "text", txt: "Soft Drink Saloon\nby Callandra Ruiter, Anthony Russo, James Russo. Kyle Justice, Kennedy Clave, Danny Varga\n\nPlay on the GDD arcade cabinet.", align: "left", lines: 6, url: "https://anthonyjrusso.itch.io/soft-drink-saloon", label: "A mixing game", point: [26, 78], obstacle: true },
            hff004d: { cmd: "text", txt: "Pick-Ture\nby Tom Bufalini, Anthony Russo, Colby Ainley, Jesse Dworsak\n\nClick to launch site. Download to play. Windows only.", align: "left", lines: 6, url: "https://tjbufalini.itch.io/pick-ture", label: "A museum platformer", point: [50, 76], obstacle: true },
            hff77a8: { cmd: "text", txt: "BroomStick Blitz\nby Taylor Joslin, Paulo Tassi, Khila Sanchez, James Russo\n\nClick to launch site. Download to play. For two players with controllers. Windows only.", align: "left", lines: 7, url: "https://tazh.itch.io/broomstick-blitz", label: "A witch game", point: [70, 76], obstacle: true },
            // two laptops
            hab5236: { cmd: "text", txt: "Art Portfolio\nJames Higgins \n\nClick to launch site.", align: "left", lines: 4, url: "https://jameshigginsportfolio.my.canva.site/", label: "An art portfolio", point: [98, 78], obstacle: true },
            hffa300: { cmd: "text", txt: "3D Characters and Creatures\nby Jai Hernandez\n\nClick to launch site.", align: "left", lines: 4, url: "https://sketchfab.com/burntclowns", label: "Creepy characters", point: [109, 78], obstacle: true },
            
            h475665: { cmd: "enter", room: "qugddOutside", label: "Outside", point: [90, 96], enterPoint: [55, 81], obstacle: false },
            hffec27: { cmd: "enter", room: "qugddRoomRed", label: "Red Room", point: [18, 90], enterPoint: [116, 90], obstacle: false },
            h00e436: { cmd: "enter", room: "qugddRoomBlue", label: "Blue Room", point: [116, 90], enterPoint: [18, 90], obstacle: false },
        }
    },
    qugddRoomRed: {
        bg: "qugdd-red-bg.png",
        frames: 2,
        frameDelay: 30,
        avatarScale: 2,
        pageBg: "#7f4d5d",
        area: "qugdd-red-areas.png",
        tint: "#fdeac8",
        bubblesY: 44,
        spawn: [14, 90, 119, 100],
        areaColors: {
          //h will be replaced by #

          // prototypes
          //h83769c: { cmd: "text", txt: "Paper Prototypes\nby Nathan Pippen, BreeAnnaRose Valentin\n\nClick to explore.", align: "left", lines: 5, url: "https://quinnipiacuniversity-my.sharepoint.com/:f:/g/personal/jbwarren_quinnipiac_edu/Eni-bV921GFJh0Kd-lqnRlIB2z-IZXSAwVVvC2NPA0Y_fQ?e=DmnmUQ", label: "Paper prototypes", point: [19, 79], obstacle: true },
                    
          // three flatscreens
          hff77a8: { cmd: "text", txt: "Quackadox\nby Stephen Russo, Aleena Graveline, Victor Fuda, Richard Visconti, Khila Sanchez, Brian Neira Palchizaca\n\nClick to play.", align: "left", lines: 7, url: "https://vicman8.itch.io/quackadox", label: "A duck game", point: [49, 76], obstacle: true },          
          hffccaa: { cmd: "text", txt: "Drift Dozer\nby Taylor Joslin\n\nClick to play.", align: "left", lines: 4, url: "https://mywebspace.quinnipiac.edu/tjjoslin/410/frakengame/index.html", label: "A frontloader (not dozer) game", point: [69, 76], obstacle: true },
          hab5236: { cmd: "text", txt: "Caracosa\nby Vic Price\n\nClick to launch site. Download to play. Windows only.", align: "left", lines: 5, url: "https://a-purpledragon.itch.io/carcosa-the-last-knights", label: "A narrative game", point: [90, 76], obstacle: true },          
          
          // laptops
          hffa300: { cmd: "text", txt: "Balanced\nby Jacob Levin\n\nClick to play.", align: "left", lines: 4, url: "https://agentchaos007.itch.io/balanced", label: "An enlightened game", point: [109, 79], obstacle: true },
          
          // board game
          hff004d: { cmd: "text", txt: "Scream Board Game\nby Darrell Jamison \n\nClick see screenshot.", align: "left", lines: 4, url: "https://mywebspace.quinnipiac.edu/jbwarren/showcase/scream.jpg", label: "A board game", point: [29, 79], obstacle: true },

          
          // purple
          h00e436: { cmd: "enter", room: "qugddRoomPurple", label: "Purple Room", point: [116, 90], enterPoint: [18, 90], obstacle: false },
    
        }
    },
    qugddRoomBlue: {
        bg: "qugdd-blue-bg.png",
        frames: 2,
        frameDelay: 30,
        avatarScale: 2,
        pageBg: "#4a5375",
        area: "qugdd-blue-areas.png",
        tint: "#fdeac8",
        bubblesY: 44,
        spawn: [14, 90, 119, 100],
        areaColors: {
          //h will be replaced by #
          // three flatscreens left to right
          
          //laptop
          //h83769c: { cmd: "text", txt: "TEST GAME 1\nby QU Student1, QU Student2, QU Student3 \n\nWASD or Arrow keys to move.\nClick to play.", align: "left", lines: 6, url: "http://playfulsystems.com/", label: "A big game", point: [20, 76], obstacle: true },
          
          // tv
          hff004d: { cmd: "text", txt: "The Bunker Trials\nby Aleena Graveline\n\nClick to launch playthrough. Headset required.", align: "left", lines: 5, url: "https://mywebspace.quinnipiac.edu/akgraveline/314/index_files/VR%20Project%202%20Video.mp4", label: "A VR escape room", point: [39, 76], obstacle: true },
          hff77a8: { cmd: "text", txt: "Cats in Space\nby Andrew Ward, Callandra Ruiter, Kennedy Clave\n\nClick to launch site. Download to play.", align: "left", lines: 6, url: "https://andrew-ward.itch.io/turn-based-project", label: "A cat game", point: [59, 76], obstacle: true },
          hffccaa: { cmd: "text", txt: "Gravity Canvas\nby Christie Borchetta, Zack Lauri\n\nClick to launch site. Download to play.", align: "left", lines: 5, url: "https://roserc.itch.io/gravity-canvas", label: "A gravity game", point: [79, 76], obstacle: true },
          
          // laptop
          hab5236: { cmd: "text", txt: "Pixel Art Character Package\nby James Cioppa\n\nClick to launch site.", align: "left", lines: 4, url: "https://assetstore.unity.com/packages/2d/characters/pixel-art-character-package-312497", label: "Pixel art", point: [98, 79], obstacle: true },
          hffa300: { cmd: "text", txt: "3D Animation\nby Kevin Tessicini\n\nClick to launch site.", align: "left", lines: 4, url: "https://kevintessicini.wixsite.com/kevintessportfolio/portfolio-collections/my-portfolio", label: "3D animation", point: [109, 79], obstacle: true },
          
          // purple
          hffed00: { cmd: "enter", room: "qugddRoomPurple", label: "Purple Room", point: [18, 90], enterPoint: [116, 90], obstacle: false },
          
          // green
          h00e436: { cmd: "enter", room: "qugddRoomGreen", label: "Green Room", point: [116, 90], enterPoint: [18, 90], obstacle: false },
        }
    },
    qugddRoomGreen: {
        bg: "qugdd-green-bg.png",
        frames: 2,
        frameDelay: 30,
        avatarScale: 2,
        pageBg: "#58744B",
        area: "qugdd-green-areas.png",
        tint: "#fdeac8",
        bubblesY: 44,
        spawn: [14, 90, 119, 100],
        areaColors: {
          //h will be replaced by #
          
          // laptops
          h83769c: { cmd: "text", txt: "Creature Personification of the Ice Age\nby Jared Lupien\n\nClick to launch.", align: "left", lines: 5, url: "https://sketchfab.com/3d-models/creature-personification-of-the-ice-age-22d87321877b437eb2c6dd6eb91c4c63", label: "Ice Age Creatures", point: [19, 79], obstacle: true },
          hff004d: { cmd: "text", txt: "Whale Fall\nby Jack Alba, Alex Kaznowski, Ross Flerlage, Darrell Jamison, Shane McGuire\n\nClick to play. Arrow keys to move, left CTRL to restart. Push all the tea crates into the water.", align: "left", lines: 8, url: "https://benjamintenison.itch.io/whalefall", label: "A whale game", point: [29, 79], obstacle: true },
          
          // three flatscreens
          hff77a8: { cmd: "text", txt: "6 Feet Under\nby Cameron Anthony, Alivia Toth, Jesse Dworsak\n\nClick to launch site. Download to play. Windows only.", align: "left", lines: 6, url: "https://cmanthony1.itch.io/6-feet-under", label: "A mob game", point: [49, 76], obstacle: true },
          hffccaa: { cmd: "text", txt: "Quality Control\n\nby Nicholas Larkin, Rich Zheng, Parker McCarthy, Benjamin Boyle, Scott Levine, Mitzyel Rivera\n\nClick to play.", align: "left", lines: 7, url: "https://mywebspace.quinnipiac.edu/nglarkin/211/Quality%20Control%20Version%200.3.0/", label: "A control game", point: [69, 76], obstacle: true },
          hab5236: { cmd: "text", txt: "Humans Go Home\nby James Higgins\n\nClick to launch site. Download to play. Windows only.", align: "left", lines: 5, url: "https://jameshiggs.itch.io/humans-go-home", label: "An alien game", point: [90, 76], obstacle: true },
                    
          hffec27: { cmd: "enter", room: "qugddRoomBlue", label: "Blue Room", point: [18, 90], enterPoint: [116, 90], obstacle: false },
          hffa300: { cmd: "enter", room: "qugddRoomYellow", point: [116, 76], enterPoint: [18, 90], obstacle: false },
        }
    },
    qugddOutside: {
        bg: "quOutside-bg.png",
        frames: 2,
        frameDelay: 30,
        avatarScale: 2,
        pageBg: "#383730",
        area: "quOutside-areas.png",
        tint: "#fdeac8",
        bubblesY: 44,
        spawn: [14, 90, 119, 100],
        areaColors: {
            //h will be replaced by #
            hff77a8: { cmd: "enter", room: "qugddRoomPurple", label: "Enter GDD Showcase", point: [56, 80], enterPoint: [90, 96], obstacle: false },
        }
    },
    qugddRoomYellow: {
        bg: "qugdd-yellow-bg.png",
        frames: 2,
        frameDelay: 30,
        avatarScale: 2,
        pageBg: "#806340",
        area: "qugdd-yellow-areas2.png",
        tint: "#fdeac8",
        bubblesY: 44,
        spawn: [14, 90, 119, 100],
        areaColors: {  
          hffed00: { cmd: "enter", room: "qugddRoomGreen", label: "Green Room", point: [9, 90], enterPoint: [112, 80], obstacle: false },
          //hffa300: { cmd: "enter", room: "qugddRoomBlue", label: "Blue Room", point: [18, 90], enterPoint: [116, 90], obstacle: false },
        },
        things: {
            //spreadsheets only 1 row ok?
            cheese: { file: "cheese.png", position: [40, 52] },
        }
    },

    /*likelikeBackyard: {
        bg: "likelike-backyard.png",
        frames: 2,
        frameDelay: 30,
        avatarScale: 2,
        area: "likelike-backyard-areas.png",
        tint: "#fdbe4e",
        pageBg: "#413830",
        bubblesY: 20,
        spawn: [38, 63, 108, 83],
        areaColors: {
            //h will be replaced by #
            hff77a8: { cmd: "enter", room: "likelike", label: "Enter LIKELIKE", point: [119, 69], enterPoint: [5, 88], obstacle: false },
        },
        sprites: [
            //spreadsheets only 1 row ok?
            { file: "harvey.png", frames: 2, frameDelay: 10, position: [102, 77], label: "Harvey", command: { cmd: "text", txt: "*You pet the dog*", align: "center", lines: 1, point: [101, 84] } },
            { file: "likelike-backyard-chairs.png", position: [33, 44] },

        ]
    },*/
};