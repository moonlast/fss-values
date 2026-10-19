// =============================================================
// 1. DATA
// =============================================================
// Each item uses BOTH:
//   rarity: "Power" | "Limited" | "Exotic" | "Legendary" | "Epic" | "Uncommon" | "Common"
//   rarityScore: 1-10
const ITEMS = [
    // ===== TIER 4 =====
    {
        name: "FCWC Back Trophy",
        value: "O/C", range: "[N/A]", stability: "Rising", demand: 6,
        rarityScore: 10, rarity: "Limited",
        origin: "Robux Limited", tier: "tier4",
        image: "https://tr.rbxcdn.com/180DAY-621badb24bf45075901a5b96afd87717/420/420/BackAccessory/Webp/noFilter",
        numericValue: 0
    }, {
        name: "Developer's Set",
        stability: "Rising", demand: 6,
        rarityScore: 10, rarity: "Epic",
        origin: "Being Developer", tier: "tier4", isDual: true,
        items: [
            { name: "Developer Card", value: "2M", image: "https://tr.rbxcdn.com/180DAY-bd42c4eda9559444942f01160e622be2/420/420/Image/Webp/noFilter", numericValue: 2000000 },
            { name: "Developer Frame", value: "2M", image: "https://tr.rbxcdn.com/180DAY-5fef143e8a4e1a3bb8d7d5c12effa7ab/420/420/Image/Png/noFilter", numericValue: 2000000 }
        ]
    }, {
        name: "Developer's Wristband",
        value: "1.75M", range: "[N/A]", stability: "Overpaid", demand: 6,
        rarityScore: 9, rarity: "Exotic",
        origin: "Being Developer", tier: "tier4",
        image: "/images/devband.png", numericValue: 1750000
    }, {
        name: "Bunny Set",
        stability: "Rising", demand: 7,
        rarityScore: 9, rarity: "Exotic",
        origin: "2025 Easter Puzzle", tier: "tier4", isDual: true,
        items: [
            { name: "Bunny Card", value: "1.3M", image: "https://tr.rbxcdn.com/180DAY-8ac467d583734ca4d8101a8b87171758/420/420/Image/Webp/noFilter", numericValue: 1300000 },
            { name: "Bunny Frame", value: "1.3M", image: "https://tr.rbxcdn.com/180DAY-0c33b2d8786b0bbf6ab9d0292905f6ea/420/420/Image/Png/noFilter", numericValue: 1300000 }
        ]
    }, {
        name: "LMT Set",
        stability: "Rising", demand: 5,
        rarityScore: 9, rarity: "Legendary",
        origin: "Being LMT", tier: "tier4", isDual: true,
        items: [
            { name: "LMT Card", value: "1.15M", image: "https://tr.rbxcdn.com/180DAY-c75c35cef5c1fce57bd108871c51ce7d/420/420/Image/Webp/noFilter", numericValue: 1150000 },
            { name: "LMT Frame", value: "1.05M", image: "https://tr.rbxcdn.com/180DAY-7946ec03151612a29574177dc29bde00/420/420/Image/Png/noFilter", numericValue: 1050000 }
        ]
    }, {
        name: "Super League Set",
        stability: "Rising", demand: 5,
        rarityScore: 9, rarity: "Legendary",
        origin: "Winning SL #5", tier: "tier4", isDual: true,
        items: [
            { name: "Super League Card", value: "1.05M", image: "https://tr.rbxcdn.com/180DAY-b5c7e5c916e6f2eab6aa604d2f132e9d/420/420/Image/Webp/noFilter", numericValue: 1050000 },
            { name: "Super League Frame", value: "900K", image: "https://tr.rbxcdn.com/180DAY-59fd9472e20d348d8f861a718e08fb88/420/420/Image/Png/noFilter", numericValue: 900000 }
        ]
    }, {
        name: "Mimimimi",
        value: "950K", range: "[N/A]", stability: "Stable", demand: 3,
        rarityScore: 8, rarity: "Exotic",
        origin: "Developer Gift", tier: "tier4",
        image: "https://tr.rbxcdn.com/180DAY-1f250e5125c954fe56ae6d2ba660b407/420/420/Image/Png/noFilter",
        numericValue: 950000
    },

    // ===== HIGH TIER =====
    { name: "Hava Nagila", value: "550K", range: "[N/A]", stability: "Overpaid", demand: 6, rarityScore: 8, rarity: "Legendary", origin: "Developer Gift", tier: "high", image: "https://tr.rbxcdn.com/180DAY-6bcf89e94316a7dc888ac4a7013ff28a/420/420/Image/Png/noFilter", numericValue: 550000 },
    { name: "Ghosdeeri", value: "475K", range: "[N/A]", stability: "Unstable", demand: 4, rarityScore: 6, rarity: "Exotic", origin: "Mystic Pack", tier: "high", image: "https://tr.rbxcdn.com/180DAY-82ce43f5ffad45ef29697754aa98d5f3/420/420/Hat/Webp/noFilter", numericValue: 475000 },
    { name: "Sakura Spirit", value: "435K", range: "[N/A]", stability: "Doing Well", demand: 6, rarityScore: 7, rarity: "Limited", origin: "Credit Shop", tier: "high", new: true, image: "/images/sakuraspirit.png", numericValue: 435000 },
    { name: "MATSbxb Developer Set", stability: "Doing Well", demand: 6, rarityScore: 6, rarity: "Limited", origin: "Robux Pack", tier: "high", isDual: true,
      items: [
        { name: "MATSbxb Card", value: "290K", image: "https://tr.rbxcdn.com/180DAY-f8ebb39e75374ccca999869360977baf/420/420/Image/Png/noFilter", numericValue: 290000 },
        { name: "MATSbxb Frame", value: "100K", image: "https://tr.rbxcdn.com/180DAY-b860f0eb2d9ef0633796818c6c87d27b/420/420/Image/Png/noFilter", numericValue: 100000 }
      ] },
    { name: "Float", value: "265K", range: "[N/A]", stability: "Underpaid", demand: 4, rarityScore: 5, rarity: "Limited", origin: "Robux Pack", tier: "high", image: "https://tr.rbxcdn.com/180DAY-54d520be01198073c66893158ca6c3a0/420/420/Image/Webp/noFilter", numericValue: 265000 },
    { name: "Party Time", value: "250K", range: "[N/A]", stability: "Overpaid", demand: 7, rarityScore: 6, rarity: "Legendary", origin: "Limited Quantity Code", tier: "high", image: "https://tr.rbxcdn.com/180DAY-7114b0ad6050b37eeecefe238138b4f0/420/420/Image/Webp/noFilter", numericValue: 250000 },
    { name: "WC26 Backwards Celebration", value: "225K", range: "[N/A]", stability: "Overpaid", demand: 7, rarityScore: 5, rarity: "Limited", origin: "Robux Pack", tier: "high", image: "https://tr.rbxcdn.com/180DAY-978cff2d7d7ab20ce9287b76a3c8be24/420/420/Image/Webp/noFilter", numericValue: 225000 },
    { name: "Orange Dance", value: "220K", range: "[N/A]", stability: "Overpaid", demand: 6, rarityScore: 5, rarity: "Limited", origin: "Robux Pack", tier: "high", image: "/images/orange.png", numericValue: 220000 },
    { name: "Telamon's Chicken Hat", value: "205K", range: "[N/A]", stability: "Underpaid", demand: 2, rarityScore: 6, rarity: "Exotic", origin: "Mystic Pack", tier: "high", image: "https://tr.rbxcdn.com/180DAY-811029bf44237ea36da06d104cafe37c/420/420/Hat/Webp/noFilter", numericValue: 205000 },
    { name: "Crown of Opulentum", value: "175K", range: "[N/A]", stability: "Underpaid", demand: 1, rarityScore: 7, rarity: "Limited", origin: "2.5M Coins in SLS 1.0 Reward", tier: "high", image: "/images/crown.png", numericValue: 175000 },
    { name: "Penguin Dance", value: "165K", range: "[N/A]", stability: "Overpaid", demand: 7, rarityScore: 5, rarity: "Limited", origin: "Robux Pack", tier: "high", image: "https://tr.rbxcdn.com/180DAY-3d1dec4970d91a70f714bad890137e41/420/420/Image/Webp/noFilter", numericValue: 165000 },
    { name: "Devil's Gift", value: "157.5K", range: "[N/A]", stability: "Overpaid", demand: 6, rarityScore: 6, rarity: "Exotic", origin: "Limited Quantity Code", tier: "high", image: "https://tr.rbxcdn.com/180DAY-4694b2e973dce652ac90d2956beca69b/420/420/Model/Webp/noFilter", numericValue: 157500 },
    { name: "WC26 Trophy Celebration", value: "152.5K", range: "[N/A]", stability: "Doing Well", demand: 6, rarityScore: 4, rarity: "Limited", origin: "Robux Pack", tier: "high", image: "https://tr.rbxcdn.com/180DAY-4e200221c73296ecf8a01099565b13bd/420/420/Image/Png/noFilter", numericValue: 152500 },
    { name: "Penguin Slide", value: "145K", range: "[N/A]", stability: "Doing Well", demand: 5, rarityScore: 5, rarity: "Limited", origin: "Robux Pack", tier: "high", image: "https://tr.rbxcdn.com/180DAY-83183faeca6714bcd6130fa695a78d31/420/420/Image/Webp/noFilter", numericValue: 145000 },
    { name: "Super Dodge", value: "135K", range: "[N/A]", stability: "Stable", demand: 4, rarityScore: 5, rarity: "Limited", origin: "Robux Pack", tier: "high", image: "https://tr.rbxcdn.com/180DAY-b4c516140428840f9a23943a3df8f85f/420/420/Image/Webp/noFilter", numericValue: 135000 },
    { name: "FCWC Shoes Red/Black", value: "127.5K", range: "[N/A]", stability: "Stable", demand: 2, rarityScore: 5, rarity: "Epic", origin: "FCWC Event", tier: "high", image: "https://tr.rbxcdn.com/180DAY-54be9b36829e6ed8f8803061045bd67e/420/420/Image/Webp/noFilter", numericValue: 127500 },
    { name: "Gold Champion Band [B]", value: "102.5K", range: "[N/A]", stability: "Stable", demand: 3, rarityScore: 4, rarity: "Exotic", origin: "1.0 SLS Clans Reward", tier: "high", image: "/images/goldb.png", numericValue: 102500 },
    { name: "Front Flip", value: "100K", range: "[N/A]", stability: "Stable", demand: 4, rarityScore: 4, rarity: "Limited", origin: "Robux Battlepass", tier: "high", image: "https://tr.rbxcdn.com/180DAY-875c220d586bd555e66f951a9cb42add/420/420/Image/Webp/noFilter", numericValue: 100000 },

    // ===== MID TIER =====
    { name: "Shark Shoes", value: "90K", range: "[N/A]", stability: "Doing Well", demand: 4, rarityScore: 4, rarity: "Limited", origin: "Robux Pack", tier: "mid", image: "/images/shark.png", numericValue: 90000 },
    { name: "Flip", value: "87.5K", range: "[N/A]", stability: "Stable", demand: 4, rarityScore: 3, rarity: "Limited", origin: "Robux Pack", tier: "mid", image: "https://tr.rbxcdn.com/180DAY-2e555b216403fccd10c74f6100fffb26/420/420/Image/Png/noFilter", numericValue: 87500 },
    { name: "Dragon Shoes", value: "80K", range: "[N/A]", stability: "Stable", demand: 4, rarityScore: 4, rarity: "Limited", origin: "Robux Pack", tier: "mid", image: "https://tr.rbxcdn.com/180DAY-13d9286ffadf4082e990779293451158/420/420/Image/Webp/noFilter", numericValue: 80000 },
    { name: "67", value: "67.5K", range: "[N/A]", stability: "Stable", demand: 2, rarityScore: 5, rarity: "Limited", origin: "Robux Pack", tier: "mid", image: "https://tr.rbxcdn.com/180DAY-e332d112e5b4a3dc5d99db76c0b5452b/420/420/Image/Webp/noFilter", numericValue: 67500 },
    { name: "Kawaii Set", stability: "Stable", demand: 3, rarityScore: 4, rarity: "Legendary", origin: "OG Premium Card", tier: "mid", isDual: true,
      items: [
        { name: "Kawaii Card", value: "50K", image: "https://tr.rbxcdn.com/180DAY-6c9ca67f584bd53fd408303a2ef86aa1/420/420/Image/Png/noFilter", numericValue: 50000 },
        { name: "Kawaii Frame", value: "40K", image: "https://tr.rbxcdn.com/180DAY-fe88ec3178eaec8fe6faac886c7c9b0d/420/420/Image/Png/noFilter", numericValue: 40000 }
      ] },
    { name: "Lightning Wolf Shoes", value: "45K", range: "[N/A]", stability: "Doing Well", demand: 4, rarityScore: 3, rarity: "Exotic", origin: "Robux Battlepass Reward", tier: "mid", image: "https://tr.rbxcdn.com/180DAY-bd82cd6716f30918d1b60f54cfab4a57/420/420/Image/Png/noFilter", numericValue: 45000 },
    { name: "The Panther", value: "42.5K", range: "[N/A]", stability: "Doing Well", demand: 5, rarityScore: 3, rarity: "Legendary", origin: "Prehistoric Battlepass", tier: "mid", image: "https://tr.rbxcdn.com/180DAY-20fa459c08ff31fdfb37ea8b91027760/420/420/Image/Webp/noFilter", numericValue: 42500 },
    { name: "Grinch Shoes", value: "37.5K", range: "[N/A]", stability: "Stable", demand: 2, rarityScore: 5, rarity: "Uncommon", origin: "1.0 Christmas Event", tier: "mid", image: "/images/grinch.png", numericValue: 37500 },
    { name: "Dragon Set", stability: "Stable", demand: 4, rarityScore: 4, rarity: "Exotic", origin: "OG Premium Card", tier: "mid", isDual: true,
      items: [
        { name: "Dragon Card", value: "35K", image: "https://tr.rbxcdn.com/180DAY-7095a98743c555638750ceefec64c1a8/420/420/Image/Png/noFilter", numericValue: 35000 },
        { name: "Dragon Frame", value: "40K", image: "https://tr.rbxcdn.com/180DAY-899bfb7e6c12bf4299f04f5bc2ec36e8/420/420/Image/Png/noFilter", numericValue: 40000 }
      ] },
    { name: "Royal Fleur De Lis Set", stability: "Stable", demand: 3, rarityScore: 4, rarity: "Legendary", origin: "OG Premium Card", tier: "mid", isDual: true,
      items: [
        { name: "Royal Card", value: "30K", image: "https://tr.rbxcdn.com/180DAY-2778c242d027070bf587227354109420/420/420/Image/Png/noFilter", numericValue: 30000 },
        { name: "Royal Frame", value: "50K", image: "https://tr.rbxcdn.com/180DAY-6a8dc1bb1da6c3313dd0757a2df5559c/420/420/Image/Png/noFilter", numericValue: 50000 }
      ] },
    { name: "Wild Dance", value: "32.5K", range: "[N/A]", stability: "Doing Well", demand: 5, rarityScore: 2, rarity: "Epic", origin: "Prehistoric Battlepass", tier: "mid", image: "/images/wild.png", numericValue: 32500 },
    { name: "Innocent Smiley", value: "32.5K", range: "[N/A]", stability: "Fluctuating", demand: 3, rarityScore: 3, rarity: "Limited", new: true, origin: "Robux Item", tier: "mid", image: "/images/verity.png", numericValue: 32500 },
    { name: "Solar Monarch", value: "32.5K", range: "[N/A]", stability: "Stable", demand: 3, rarityScore: 3, rarity: "Limited", origin: "Credit Shop", tier: "mid", new: true, image: "/images/solarmonarch.png", numericValue: 32500 },
    { name: "Helm of Opulentum", value: "32.5K", range: "[N/A]", stability: "Stable", demand: 3, rarityScore: 3, rarity: "Limited", origin: "1M Coins in SLS 1.0 Reward", tier: "mid", image: "https://tr.rbxcdn.com/180DAY-54e9fa5e35b375c23844939e68945ac0/420/420/Image/Webp/noFilter", numericValue: 32500 },
    { name: "WC26 Valkyrie Helmet", value: "32.5K", range: "[N/A]", stability: "Stable", demand: 2, rarityScore: 3, rarity: "Limited", origin: "WC26 Event", tier: "mid", image: "/images/wcvalk.png", numericValue: 32500 },
    { name: "Candy Cane Shoes", value: "30K", range: "[N/A]", stability: "Stable", demand: 2, rarityScore: 5, rarity: "Uncommon", origin: "1.0 Christmas Event", tier: "mid", image: "/images/candycane.png", numericValue: 30000 },
    { name: "WC26 Argentina Sun Card", value: "30K", range: "[N/A]", stability: "Stable", demand: 3, rarityScore: 3, rarity: "Limited", origin: "WC26 Event", tier: "mid", image: "/images/suncard.png", numericValue: 30000 },

    // ===== LOW TIER =====
    { name: "Leaves Set", stability: "Stable", demand: 2, rarityScore: 4, rarity: "Epic", origin: "Prehistoric Battlepass", tier: "low", isDual: true,
      items: [
        { name: "Leaves Card", value: "27.5K", image: "https://tr.rbxcdn.com/180DAY-2b5cde95564906b08473d1bbfbafd938/420/420/Image/Webp/noFilter", numericValue: 27500 },
        { name: "Leaves Frame", value: "32.5K", image: "https://tr.rbxcdn.com/180DAY-acace68531049c2d38efc4504e62147b/420/420/Image/Png/noFilter", numericValue: 32500 }
      ] },
    { name: "FCWC Dominus", value: "27.5K", range: "[N/A]", stability: "Underpaid", demand: 3, rarityScore: 3, rarity: "Epic", origin: "FCWC Event", tier: "low", image: "https://tr.rbxcdn.com/180DAY-975ffc2e6e4863b14e797b4249186544/420/420/Image/Webp/noFilter", numericValue: 27500 },
    { name: "Leather Boots", value: "27.5K", range: "[N/A]", stability: "Stable", demand: 3, rarityScore: 4, rarity: "Exotic", origin: "Prehistoric Battlepass", tier: "low", image: "/images/leather.png", numericValue: 27500 },
    { name: "Gold Champion Band [L]", value: "27.5K", stability: "Stable", demand: 2, rarityScore: 3, rarity: "Exotic", origin: "1.0 SLS Clans Reward", tier: "low", image: "/images/goldl.png", numericValue: 27500 },
    { name: "Fallen Angel Mantle", value: "27.5K", range: "[N/A]", stability: "Stable", demand: 2, rarityScore: 5, rarity: "Limited", origin: "Credit Shop", tier: "low", image: "/images/angel.png", numericValue: 27500 },
    { name: "Gold Champion Band [R]", value: "25K", stability: "Stable", demand: 2, rarityScore: 3, rarity: "Exotic", origin: "1.0 SLS Clans Reward", tier: "low", image: "/images/goldr.png", numericValue: 25000 },
    { name: "WC26 Amplify Card", value: "22.5K", range: "[N/A]", stability: "Stable", demand: 2, rarityScore: 4, rarity: "Legendary", origin: "WC26 Event", tier: "low", image: "/images/amplify.png", numericValue: 22500 },
    { name: "Dino Shoes", value: "21.5K", stability: "Stable", demand: 1, rarityScore: 3, rarity: "Uncommon", origin: "Prehistoric Battlepass", tier: "low", image: "/images/dinos.png", numericValue: 21500 },
    { name: "Rivalry Dribble", value: "20K", range: "[N/A]", stability: "Stable", demand: 3, rarityScore: 3, rarity: "Legendary", origin: "Chosen One Pack", tier: "low", image: "/images/rivalrydrib.png", numericValue: 20000 },
    { name: "La Roja Inferno Goal Explosion", value: "20K", range: "[N/A]", stability: "Underpaid", demand: 2, rarityScore: 3, rarity: "Limited", origin: "Robux Pack", tier: "low", image: "https://tr.rbxcdn.com/180DAY-9d6a311d5b9b915d3b1e1e90d39a541c/420/420/Image/Webp/noFilter", numericValue: 20000 },
    { name: "FCWC Valkyrie", value: "20K", range: "[N/A]", stability: "Stable", demand: 3, rarityScore: 3, rarity: "Epic", origin: "FCWC Event", tier: "low", image: "https://tr.rbxcdn.com/180DAY-4fc060f7416dc7bfd4114a6171b614da/420/420/Image/Webp/noFilter", numericValue: 20000 },
    { name: "Unfinished Business", value: "17.5K", range: "[N/A]", stability: "Stable", demand: 2, rarityScore: 2, rarity: "Limited", origin: "Robux Item", tier: "low", image: "/images/unfinished.png", numericValue: 17500 },
    { name: "Tentacles", value: "15K", range: "[N/A]", stability: "Stable", demand: 3, rarityScore: 4, rarity: "Exotic", origin: "From Packs on Release", tier: "low", image: "https://tr.rbxcdn.com/180DAY-71f12a44de07f11c88a8f4dcd454cf30/420/420/Hat/Webp/noFilter", numericValue: 15000 },
    { name: "Fairytale Set", stability: "Stable", demand: 2, rarityScore: 3, rarity: "Exotic", origin: "Credit Shop", tier: "low", isDual: true,
      items: [
        { name: "Fairytale Card", value: "15K", image: "/images/fairycard.png", numericValue: 15000 },
        { name: "Fairytale Frame", value: "17.5K", image: "https://tr.rbxcdn.com/180DAY-2dfdaec95d797bf96a661d4b005566c2/420/420/Image/Webp/noFilter", numericValue: 17500 }
      ] },
    { name: "Biohazard Set", stability: "Underpaid", demand: 2, rarityScore: 4, rarity: "Legendary", origin: "OG Premium Card", tier: "low", isDual: true,
      items: [
        { name: "Biohazard Card", value: "13K", image: "https://tr.rbxcdn.com/180DAY-37b521d2cf6c475f1cd2974832831829/420/420/Image/Png/noFilter", numericValue: 13000 },
        { name: "Biohazard Frame", value: "10.5K", image: "https://tr.rbxcdn.com/180DAY-09b2307f7cf33dc4e0e59b23b5a4ea3c/420/420/Image/Webp/noFilter", numericValue: 10500 }
      ] },
    { name: "Silver Arm Bracelet [B]", value: "12K", range: "[N/A]", stability: "Stable", demand: 2, rarityScore: 2, rarity: "Exotic", origin: "1.0 SLS Clans Reward", tier: "low", image: "/images/silverb.png", numericValue: 12000 },
    { name: "T-Rex", value: "12K", range: "[N/A]", stability: "Stable", demand: 2, rarityScore: 2, rarity: "Epic", origin: "Prehistoric Battlepass", tier: "low", image: "https://tr.rbxcdn.com/180DAY-bdeb6a2f9b3a226ef9f2dd9becee3067/420/420/Image/Webp/noFilter", numericValue: 12000 },
    { name: "ESP Sagrada Crown", value: "12K", range: "[N/A]", stability: "Stable", demand: 2, rarityScore: 1, rarity: "Limited", origin: "ESP WC Event", tier: "low", image: "/images/sagrada.png", numericValue: 12000 },
    { name: "Fur Cape", value: "10K", range: "[N/A]", stability: "Stable", demand: 3, rarityScore: 2, rarity: "Epic", origin: "Prehistoric Battlepass", tier: "low", image: "/images/fur.png", numericValue: 10000 },
    { name: "Antlers", value: "10K", range: "[N/A]", stability: "Stable", demand: 2, rarityScore: 4, rarity: "Exotic", origin: "From Packs on Release", tier: "low", image: "https://tr.rbxcdn.com/180DAY-8b48832f797b839dff715a878c752303/420/420/Hat/Webp/noFilter", numericValue: 10000 },
    { name: "16-bit Set", stability: "Underpaid", demand: 2, rarityScore: 3, rarity: "Legendary", origin: "OG Premium Card", tier: "low", isDual: true,
      items: [
        { name: "16-bit Card", value: "5K", image: "https://tr.rbxcdn.com/180DAY-7ddc9a070e6405215a27fda8c15707ca/420/420/Image/Png/noFilter", numericValue: 5000 },
        { name: "16-bit Frame", value: "10K", image: "https://tr.rbxcdn.com/180DAY-a1ae41adcf571c585779021eecc8d4f1/420/420/Image/Png/noFilter", numericValue: 10000 }
      ] },
    { name: "Red Bandana of SQL", value: "10K", range: "[N/A]", stability: "Stable", demand: 2, rarityScore: 4, rarity: "Exotic", origin: "From Packs on Release", tier: "low", image: "https://tr.rbxcdn.com/180DAY-00367130035a503d6a99ea0059aa7d4e/420/420/FaceAccessory/Webp/noFilter", numericValue: 10000 },
    { name: "adidas Celebration", value: "10K", range: "[N/A]", stability: "Stable", demand: 1, rarityScore: 3, rarity: "Legendary", origin: "adidas Event", tier: "low", image: "https://tr.rbxcdn.com/180DAY-2404f845aaf3294d21af4c90d3661154/420/420/Image/Webp/noFilter", numericValue: 10000 },
    { name: "Horned Bucket", value: "8.5K", range: "[N/A]", stability: "Stable", demand: 3, rarityScore: 4, rarity: "Exotic", origin: "From Packs on Release", tier: "low", image: "https://tr.rbxcdn.com/180DAY-cc10d6c928ebbfd0a097313c912f5a2a/420/420/Hat/Webp/noFilter", numericValue: 8500 },
    { name: "WC26 Trophy Dribble", value: "8.5K", range: "[N/A]", stability: "Stable", demand: 2, rarityScore: 1, rarity: "Limited", origin: "Robux Battlepass Reward", tier: "low", image: "https://tr.rbxcdn.com/180DAY-8d5f87202a391aca1e44a8ab882b342b/420/420/Image/Webp/noFilter", numericValue: 8500 },
    { name: "adidas Taunt", value: "8K", range: "[N/A]", stability: "Stable", demand: 1, rarityScore: 3, rarity: "Legendary", origin: "adidas Event", tier: "low", image: "https://tr.rbxcdn.com/180DAY-ce219eff72405cee76c3947bfeeb1296/420/420/Image/Webp/noFilter", numericValue: 8000 },
    { name: "Evil Pumpkin", value: "8K", range: "[N/A]", stability: "Stable", demand: 2, rarityScore: 3, rarity: "Exotic", origin: "From Packs on Release", tier: "low", image: "https://tr.rbxcdn.com/180DAY-3407a0b8348a459e206409d5a6209bcb/420/420/Hat/Webp/noFilter", numericValue: 8000 },
    { name: "Admin Abuse Set", stability: "Unstable", demand: 2, rarityScore: 1, rarity: "Limited", origin: "Robux Pack", tier: "low", isDual: true,
      items: [
        { name: "Admin Abuse Card", value: "5K", image: "/images/admincard.png", numericValue: 5000 },
        { name: "Admin Abuse Frame", value: "1K", image: "/images/adminframe.png", numericValue: 1000 }
      ] },
    { name: "Crimson Gaze", value: "7.5K", range: "[N/A]", stability: "Unstable", demand: 3, rarityScore: 3, rarity: "Power", new: true, origin: "Power Pack V3", tier: "low", image: "/images/crimsongaze.png", numericValue: 7500 },
    { name: "Crimson Flame", value: "7.5K", range: "[N/A]", stability: "Unstable", demand: 3, rarityScore: 3, rarity: "Power", new: true, origin: "Power Pack V3", tier: "low", image: "/images/crimsonflame.png", numericValue: 7500 },
    { name: "Rudolph", value: "7.5K", range: "[N/A]", stability: "Stable", demand: 3, rarityScore: 2, rarity: "Exotic", origin: "1.0 SLS Reward", tier: "low", image: "https://tr.rbxcdn.com/180DAY-3b46430b8a8741f6182e446ae267b219/420/420/Image/Webp/noFilter", numericValue: 7500 },
    { name: "Raijin", value: "6.5K", range: "[N/A]", stability: "Unstable", demand: 2, rarityScore: 3, rarity: "Power", new: true, origin: "Power Pack V3", tier: "low", image: "/images/raijin.png", numericValue: 6500 },
    { name: "Eternality", value: "6.5K", range: "[N/A]", stability: "Unstable", demand: 2, rarityScore: 3, rarity: "Power", new: true, origin: "Power Pack V3", tier: "low", image: "/images/eternality.png", numericValue: 6500 },
    { name: "Bloxy Cola Hat", value: "6K", range: "[N/A]", stability: "Stable", demand: 1, rarityScore: 2, rarity: "Epic", origin: "From Packs on Release", tier: "low", image: "https://tr.rbxcdn.com/180DAY-d7b33881eec5f0f59db5efad0e852596/420/420/Hat/Webp/noFilter", numericValue: 6000 },
    { name: "Scythe Spin", value: "5K", range: "[N/A]", stability: "Stable", demand: 2, rarityScore: 1, rarity: "Exotic", origin: "Halloween Item", tier: "low", image: "https://tr.rbxcdn.com/180DAY-b36061ef8f0cfb293ff4e3dd6541c01e/420/420/Image/Webp/noFilter", numericValue: 5000 },
    { name: "The Chosen One", value: "4K", range: "[N/A]", stability: "Unstable", demand: 2, rarityScore: 1, rarity: "Power", origin: "Powers V2 Pack", tier: "low", image: "/images/chosen.png", numericValue: 4000 },
    { name: "Bronze Champion Band [B]", value: "5K", range: "[N/A]", stability: "Stable", demand: 2, rarityScore: 2, rarity: "Exotic", origin: "1.0 SLS Clans Reward", tier: "low", image: "/images/bronzeb.png", numericValue: 5000 },
    { name: "Rivalry Soccer Shoes", value: "3.5K", range: "[N/A]", stability: "Stable", demand: 1, rarityScore: 1, rarity: "Limited", origin: "Robux Item", tier: "low", image: "/images/pshoes.png", numericValue: 3500 },
    { name: "Dragon Fang Cleats", value: "2K", range: "[N/A]", stability: "Unstable", demand: 2, rarityScore: 1, rarity: "Power", origin: "Power V2 Pack", tier: "low", image: "/images/cleats.png", numericValue: 2000 },
];

// =============================================================
// 1.5 TOKEN CALCULATIONS
// =============================================================
function getTokenMultiplier(numericValue) {
    if (numericValue >= 951000) return 25;
    if (numericValue >= 180000) return 23;
    if (numericValue >= 141000) return 20;
    if (numericValue >= 130000) return 18;
    if (numericValue >= 100000) return 14.7;
    if (numericValue >= 64999) return 14.25;
    if (numericValue >= 35001) return 11.25;
    if (numericValue >= 33001) return 9.6;
    return 3.6;
}

const TOKEN_ICON = "https://tr.rbxcdn.com/180DAY-856c7b5695f735c2580bd299923d1a42/420/420/Image/Png/noFilter";
const TOKEN_EMOJI = "🪙";
const LAST_UPDATED = "Oct 19, 2026";

const CUSTOM_TOKEN_VALUES = {
    "Kawaii Card": 712500,
    "Kawaii Frame": 570000
};

function updateLastUpdatedDisplay() {
    const el = document.getElementById('lastUpdated');
    if (el) el.textContent = `📅 Updated: ${LAST_UPDATED}`;
}

function getTokenValue(item) {
    if (!item.numericValue || item.numericValue === 0) return null;
    if (CUSTOM_TOKEN_VALUES[item.name]) return CUSTOM_TOKEN_VALUES[item.name];
    const multiplier = getTokenMultiplier(item.numericValue);
    return Math.round(item.numericValue * multiplier);
}

function formatTokenValue(val) {
    if (val >= 1000000) return (val / 1000000).toFixed(1) + 'M';
    if (val >= 1000) return (val / 1000).toFixed(1) + 'K';
    return val.toString();
}

// =============================================================
// RARITY HELPERS
// =============================================================
const VALID_RARITIES = ["Power", "Limited", "Exotic", "Legendary", "Epic", "Uncommon", "Rare", "Common"];

function getRarityString(item) {
    if (item && typeof item.rarity === "string" && VALID_RARITIES.includes(item.rarity)) {
        return item.rarity;
    }
    return "Exotic";
}

function getRarityClass(rarityString) {
    const map = {
        "Power": "rarity-power",
        "Limited": "rarity-limited",
        "Exotic": "rarity-exotic",
        "Legendary": "rarity-legendary",
        "Epic": "rarity-epic",
        "Uncommon": "rarity-uncommon",
        "Rare": "rarity-rare",
        "Common": "rarity-common"
    };
    return map[rarityString] || "rarity-fallback";
}

// =============================================================
// 2. TRADE ADS DATA
// =============================================================
const TRADE_ADS = [{
    id: 1,
    username: "WM5M",
    avatar: "https://cdn.discordapp.com/avatars/896367467834789938/5bfdb20b5aad84ab655fd756013ac0ef.png?size=512",
    offering: [
        { name: "Float", qty: 1, image: "https://tr.rbxcdn.com/180DAY-54d520be01198073c66893158ca6c3a0/420/420/Image/Webp/noFilter", value: "365K" }
    ],
    looking_for: "offers",
    notes: "Discord is @wm5m",
    timestamp: new Date('2026-08-28T14:30:00').getTime(),
    offeringTotal: 0,
    lookingTotal: 0
}, {
    id: 2,
    username: "DontTalkPeasant",
    avatar: "https://cdn.discordapp.com/avatars/635129135865266178/571f75d7532b3b7b8d42f22b1dff3a24.png",
    offering: [
        { name: "Mimimimi", qty: 1, image: "https://tr.rbxcdn.com/180DAY-1f250e5125c954fe56ae6d2ba660b407/420/420/Image/Png/noFilter", value: "950K" },
        { name: "Float", qty: 5, image: "https://tr.rbxcdn.com/180DAY-54d520be01198073c66893158ca6c3a0/420/420/Image/Webp/noFilter", value: "365K" }
    ],
    looking_for: "offers",
    notes: "Discord is @c3141",
    timestamp: new Date('2026-08-28T14:30:00').getTime(),
    offeringTotal: 0,
    lookingTotal: 0
}, {
    id: 3,
    username: "Dadmonke82nd",
    avatar: "https://cdn.discordapp.com/avatars/1539727698077950046/7c4e7d26fa510c920ef1c36abab1dd0f.png",
    offering: [
        { name: "Ghosdeeri", qty: 1, image: "https://tr.rbxcdn.com/180DAY-82ce43f5ffad45ef29697754aa98d5f3/420/420/Hat/Webp/noFilter", value: "560K" }
    ],
    looking_for: "offers",
    notes: "Discord is @volant_2",
    timestamp: new Date('2026-08-28T14:30:00').getTime(),
    offeringTotal: 0,
    lookingTotal: 0
}];

// =============================================================
// 3. SECRET ITEMS
// =============================================================
const SECRET_ITEMS = [
    { name: "Helicopter Flip ☠️", value: "10M", range: "[N/A]", stability: "Rising", fire: true, new: true, demand: 999, rarityScore: 10, rarity: "Limited", origin: "idk", tier: "secret", image: "/images/helicopterflip.png", numericValue: 10000000 },
    { name: "Shinigami Mantle", value: "O/C", range: "[N/A]", stability: "Rising", fire: true, new: true, demand: 10, rarityScore: 10, rarity: "Limited", origin: "Unreleased", tier: "secret", image: "/images/shinigami.png", numericValue: 0 },
    { name: "Shogun Halo", value: "O/C", range: "[N/A]", stability: "Rising", fire: true, new: true, demand: 10, rarityScore: 10, rarity: "Limited", origin: "Unreleased", tier: "secret", image: "/images/shogun.png", numericValue: 0 },
    { name: "Tech Visor", value: "O/C", range: "[N/A]", stability: "Stable", fire: true, demand: 1, rarityScore: 10, rarity: "Legendary", origin: "gift from feller", tier: "secret", image: "/images/techvisor.png", numericValue: 0 },
    { name: "Ski Goggles", value: "O/C", range: "[N/A]", stability: "Stable", demand: 1, rarityScore: 10, rarity: "Exotic", origin: "1.0 Christmas Battlepass", tier: "secret", image: "/images/skigogs.png", numericValue: 0 },
    { name: "SL Hall of Fame", value: "O/C", range: "[N/A]", stability: "Stable", demand: 5, rarityScore: 10, rarity: "Rare", origin: "Art Contest", tier: "secret", image: "https://tr.rbxcdn.com/180DAY-c4682f5e603631cd4f4b743199b1649e/420/420/Image/Webp/noFilter", numericValue: 0 },
    { name: "EzraArcanum Developer Set", stability: "Stable", demand: 4, rarityScore: 9, rarity: "Exotic", origin: "Unreleased", tier: "secret", isDual: true,
      items: [
        { name: "EzraArcanum Card", value: "N/A", image: "/images/ezracard.png", numericValue: 0 },
        { name: "EzraArcanum Frame", value: "N/A", image: "/images/ezraframe.png", numericValue: 0 }
      ] },
    { name: "SL Glory", value: "700K", range: "[N/A]", stability: "Unstable", demand: 4, rarityScore: 9, rarity: "Rare", origin: "Art Contest Gift", tier: "secret", image: "https://tr.rbxcdn.com/180DAY-9d2f35449a8a56132185ff213e1ed513/420/420/Image/Webp/noFilter", numericValue: 700000 },
    { name: "El Skullcito", value: "600K", range: "[N/A]", stability: "Unstable", demand: 3, rarityScore: 9, rarity: "Rare", origin: "Gift from Sei-chan >.<\n Please Stop asking me to update value of this item!!!!", tier: "secret", image: "https://tr.rbxcdn.com/180DAY-e055b71e4fce7e428f7644f5447b5bb7/420/420/Image/Webp/noFilter", numericValue: 600000 },
    { name: "WC26 Ball Frame", value: "0", range: "[N/A]", stability: "Dropping", demand: 0, rarityScore: 1, rarity: "Common", origin: "straight from hell", tier: "secret", image: "https://tr.rbxcdn.com/180DAY-c98d4370f6f8a5181b98e69d98d57aca/420/420/Image/Webp/noFilter", numericValue: 0 },
];

// =============================================================
// STATE
// =============================================================
let mimimimiClicks = 0;
let secretTierUnlocked = false;
let showBaseValue = false; // false = tokens by default

// =============================================================
// RENDER ITEMS
// =============================================================
function renderItems(filterTier = 'all', filterStab = 'all', search = '') {
    const newGrid = document.getElementById('newGrid');
    const tier4Grid = document.getElementById('tier4Grid');
    const highGrid = document.getElementById('highGrid');
    const midGrid = document.getElementById('midGrid');
    const lowGrid = document.getElementById('lowGrid');
    const secretGrid = document.getElementById('secretGrid');

    if (!tier4Grid || !highGrid || !midGrid || !lowGrid) return;

    if (newGrid) newGrid.innerHTML = '';
    tier4Grid.innerHTML = '';
    highGrid.innerHTML = '';
    midGrid.innerHTML = '';
    lowGrid.innerHTML = '';
    if (secretGrid) secretGrid.innerHTML = '';

    const searchLower = search.toLowerCase().trim();

    const filtered = ITEMS.filter(item => {
        const matchTier = filterTier === 'all' || item.tier === filterTier;
        const matchStab = filterStab === 'all' || item.stability === filterStab;
        const matchSearch = !searchLower || item.name.toLowerCase().includes(searchLower);
        return matchTier && matchStab && matchSearch;
    });

    const newItems = (filterTier === 'all' && filterStab === 'all')
        ? filtered.filter(i => i.new)
        : [];

    const tier4 = filtered.filter(i => i.tier === 'tier4');
    const high = filtered.filter(i => i.tier === 'high');
    const mid = filtered.filter(i => i.tier === 'mid');
    const low = filtered.filter(i => i.tier === 'low');

    const newTierSection = document.getElementById('newTier');
    if (newTierSection) {
        newTierSection.style.display = newItems.length === 0 ? 'none' : 'block';
    }

    if (newGrid) newItems.forEach(item => newGrid.appendChild(createCard(item)));
    tier4.forEach(item => tier4Grid.appendChild(createCard(item)));
    high.forEach(item => highGrid.appendChild(createCard(item)));
    mid.forEach(item => midGrid.appendChild(createCard(item)));
    low.forEach(item => lowGrid.appendChild(createCard(item)));

    if (secretGrid && secretTierUnlocked) {
        const secretFiltered = SECRET_ITEMS.filter(item => {
            const matchSearch = !searchLower || item.name.toLowerCase().includes(searchLower);
            return matchSearch;
        });
        secretFiltered.forEach(item => secretGrid.appendChild(createCard(item)));
    }
}

// =============================================================
// CREATE CARD (vertical, premium — matches index.html design)
// =============================================================
function createCard(item) {
    const card = document.createElement('div');
    card.className = 'item-card';

    const isDual = item.isDual === true;
    const rarityString = getRarityString(item);
    const rarityClass = getRarityClass(rarityString);

    // rarity badge
    const badge = document.createElement('div');
    badge.className = `rarity-badge ${rarityClass}`;
    badge.textContent = rarityString;
    card.appendChild(badge);

    // artwork
    if (isDual) {
        const stack = document.createElement('div');
        stack.className = 'dual-stack';
        if (item.items[0] && item.items[0].image) {
            const cardImg = document.createElement('img');
            cardImg.className = 'stack-img card-layer';
            cardImg.src = item.items[0].image;
            cardImg.alt = item.items[0].name;
            stack.appendChild(cardImg);
        }
        if (item.items[1] && item.items[1].image) {
            const frameImg = document.createElement('img');
            frameImg.className = 'stack-img frame-layer';
            frameImg.src = item.items[1].image;
            frameImg.alt = item.items[1].name;
            stack.appendChild(frameImg);
        }
        card.appendChild(stack);
    } else {
        const artwork = document.createElement('div');
        artwork.className = 'card-artwork';
        if (item.image) {
            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.name;
            artwork.appendChild(img);
        } else {
            artwork.textContent = '✦';
            artwork.style.fontSize = '2rem';
            artwork.style.color = '#444';
        }
        card.appendChild(artwork);
    }

    // name
    const nameEl = document.createElement('div');
    nameEl.className = 'card-name';
    nameEl.textContent = item.name;
    if (item.new) {
        const newBadge = document.createElement('span');
        newBadge.className = 'new-badge';
        newBadge.textContent = 'NEW!';
        nameEl.appendChild(newBadge);
    }
    if (item.fire) {
        const fireBadge = document.createElement('span');
        fireBadge.className = 'fire-badge';
        fireBadge.textContent = '🔥';
        nameEl.appendChild(fireBadge);
    }
    card.appendChild(nameEl);

    // value row
    const valueRow = document.createElement('div');
    valueRow.className = 'card-value-row';

    if (isDual) {
        const dualLines = document.createElement('div');
        dualLines.className = 'dual-value-lines';

        item.items.forEach(sub => {
            const line = document.createElement('div');
            line.className = 'dual-value-line';

            const subLabel = document.createElement('span');
            subLabel.className = 'dual-sub-label';
            subLabel.textContent = sub.name.includes('Card') ? 'Card' : 'Frame';
            line.appendChild(subLabel);

            const tokenVal = getTokenValue(sub);
            if (!showBaseValue && tokenVal) {
                const img = document.createElement('img');
                img.className = 'token-icon';
                img.src = TOKEN_ICON;
                img.alt = 'token';
                line.appendChild(img);
                const txt = document.createElement('span');
                txt.textContent = formatTokenValue(tokenVal);
                line.appendChild(txt);
            } else {
                const txt = document.createElement('span');
                txt.textContent = sub.value;
                line.appendChild(txt);
            }
            dualLines.appendChild(line);
        });
        valueRow.appendChild(dualLines);
    } else {
        const valSpan = document.createElement('div');
        valSpan.className = 'card-value';
        const tokenVal = getTokenValue(item);
        if (!showBaseValue && tokenVal) {
            const img = document.createElement('img');
            img.className = 'token-icon';
            img.src = TOKEN_ICON;
            img.alt = 'token';
            valSpan.appendChild(img);
            const txt = document.createElement('span');
            txt.textContent = formatTokenValue(tokenVal);
            valSpan.appendChild(txt);
        } else {
            valSpan.textContent = item.value;
        }
        valueRow.appendChild(valSpan);
    }

    const stabSpan = document.createElement('span');
    stabSpan.className = `card-stability ${item.stability.toLowerCase().replace(/ /g, '')}`;
    stabSpan.textContent = item.stability;
    valueRow.appendChild(stabSpan);
    card.appendChild(valueRow);

    // progress bars
    const progressGroup = document.createElement('div');
    progressGroup.className = 'card-progress-group';

    // demand
    const demandRow = document.createElement('div');
    demandRow.className = 'progress-row';
    const demandLabel = document.createElement('span');
    demandLabel.className = 'progress-label';
    demandLabel.textContent = 'Demand';
    demandRow.appendChild(demandLabel);
    const demandBar = document.createElement('div');
    demandBar.className = 'progress-bar';
    const maxDemand = 10;
    const demandSegments = 10;
    const filledDemand = Math.min(Math.round((item.demand / maxDemand) * demandSegments), demandSegments);
    for (let i = 0; i < demandSegments; i++) {
        const seg = document.createElement('div');
        seg.className = 'progress-segment' + (i < filledDemand ? ' filled demand-fill' : '');
        demandBar.appendChild(seg);
    }
    demandRow.appendChild(demandBar);
    const demandVal = document.createElement('span');
    demandVal.className = 'progress-value';
    demandVal.textContent = `${item.demand}/10`;
    demandRow.appendChild(demandVal);
    progressGroup.appendChild(demandRow);

    // rarity bar (uses rarityScore — independent of rarity string)
    const rarityRow = document.createElement('div');
    rarityRow.className = 'progress-row';
    const rarityLabelEl = document.createElement('span');
    rarityLabelEl.className = 'progress-label';
    rarityLabelEl.textContent = 'Rarity';
    rarityRow.appendChild(rarityLabelEl);
    const rarityBar = document.createElement('div');
    rarityBar.className = 'progress-bar';
    const rarityScore = (typeof item.rarityScore === 'number') ? item.rarityScore : 5;
    const maxRarity = 10;
    const raritySegments = 10;
    const filledRarity = Math.min(Math.round((rarityScore / maxRarity) * raritySegments), raritySegments);
    for (let i = 0; i < raritySegments; i++) {
        const seg = document.createElement('div');
        seg.className = 'progress-segment' + (i < filledRarity ? ' filled rarity-fill' : '');
        rarityBar.appendChild(seg);
    }
    rarityRow.appendChild(rarityBar);
    const rarityVal = document.createElement('span');
    rarityVal.className = 'progress-value';
    rarityVal.textContent = `${rarityScore}/10`;
    rarityRow.appendChild(rarityVal);
    progressGroup.appendChild(rarityRow);

    card.appendChild(progressGroup);

    // metadata
    const meta = document.createElement('div');
    meta.className = 'card-meta';

    const originRow = document.createElement('div');
    originRow.className = 'meta-row';
    const originLabel = document.createElement('span');
    originLabel.className = 'meta-label';
    originLabel.textContent = 'Origin';
    originRow.appendChild(originLabel);
    const originValue = document.createElement('span');
    originValue.className = 'meta-value origin-value';
    originValue.textContent = item.origin;
    originRow.appendChild(originValue);
    meta.appendChild(originRow);

    const rarityRowMeta = document.createElement('div');
    rarityRowMeta.className = 'meta-row';
    const rarityLabelMeta = document.createElement('span');
    rarityLabelMeta.className = 'meta-label';
    rarityLabelMeta.textContent = 'Rarity';
    rarityRowMeta.appendChild(rarityLabelMeta);
    const rarityValueMeta = document.createElement('span');
    rarityValueMeta.className = 'meta-value rarity-text';
    rarityValueMeta.textContent = rarityString;
    rarityRowMeta.appendChild(rarityValueMeta);
    meta.appendChild(rarityRowMeta);

    card.appendChild(meta);

    return card;
}

// =============================================================
// FILTERS
// =============================================================
function applyFilters() {
    const tier = document.getElementById('tierFilter')?.value || 'all';
    const stab = document.getElementById('stabilityFilter')?.value || 'all';
    const search = document.getElementById('searchInput')?.value || '';
    renderItems(tier, stab, search);
}

function resetFilters() {
    const tierFilter = document.getElementById('tierFilter');
    const stabilityFilter = document.getElementById('stabilityFilter');
    const searchInput = document.getElementById('searchInput');
    if (tierFilter) tierFilter.value = 'all';
    if (stabilityFilter) stabilityFilter.value = 'all';
    if (searchInput) searchInput.value = '';
    renderItems('all', 'all', '');
}

// =============================================================
// THEME
// =============================================================
let currentTheme = 'dark';
const toggleDot = document.getElementById('toggleDot');

function setTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    if (toggleDot) {
        if (theme === 'light') toggleDot.classList.add('active');
        else toggleDot.classList.remove('active');
    }
    localStorage.setItem('fss-theme', theme);
}

// =============================================================
// VALUE TOGGLE
// =============================================================
function setValueMode(useBase) {
    showBaseValue = useBase;
    localStorage.setItem('fss-show-base', useBase ? 'true' : 'false');

    const vtDot = document.getElementById('vtDot');
    const labelBase = document.getElementById('vtLabelBase');
    const labelToken = document.getElementById('vtLabelToken');

    if (vtDot) {
        if (useBase) vtDot.classList.remove('token-active');
        else vtDot.classList.add('token-active');
    }
    if (labelBase) labelBase.classList.toggle('active', useBase);
    if (labelToken) labelToken.classList.toggle('active', !useBase);

    renderItems(
        document.getElementById('tierFilter')?.value || 'all',
        document.getElementById('stabilityFilter')?.value || 'all',
        document.getElementById('searchInput')?.value || ''
    );
}

// Legacy alias used by some HTML files
function setBaseValueVisibility(show) {
    setValueMode(show);
}

// =============================================================
// 6. TRADE ADS
// =============================================================
function getItemImage(itemName) {
    const found = ITEMS.find(i => i.name.toLowerCase() === itemName.toLowerCase());
    return found?.image || '';
}

function renderTradeAds() {
    const grid = document.getElementById('adsGrid');
    if (!grid) return;

    let ads = [...TRADE_ADS];

    ads.forEach(ad => {
        ad.offeringTotal = ad.offering.reduce((total, adItem) => {
            if (adItem.name === "Tokens") return total + (adItem.qty || 0);
            const item = ITEMS.find(i => i.name.toLowerCase() === adItem.name.toLowerCase());
            return total + ((item?.numericValue || 0) * (adItem.qty || 1));
        }, 0);
        ad.lookingTotal = 0;
    });

    const search = document.getElementById('adSearchInput')?.value.toLowerCase().trim() || '';
    if (search) {
        ads = ads.filter(ad => {
            const usernameMatch = ad.username.toLowerCase().includes(search);
            const offeringMatch = ad.offering.some(i => i.name.toLowerCase().includes(search));
            return usernameMatch || offeringMatch;
        });
    }

    if (ads.length === 0) {
        grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;color:var(--text-muted);padding:40px 0;">No trade ads yet.</div>`;
        return;
    }

    grid.innerHTML = '';

    ads.forEach(ad => {
        const card = document.createElement('div');
        card.className = 'ad-card';

        let offeringHtml = '';
        if (ad.offering.length > 0) {
            offeringHtml = `
                <div class="ad-label">🟢 Offering:</div>
                <div class="ad-items-grid-display">
                    ${ad.offering.map(i => `
                        <div style="display:flex;flex-direction:column;align-items:center;gap:2px;">
                            ${i.name === "Tokens"
                                ? `<div style="font-size:2.5rem;padding:4px;">🪙</div>`
                                : `<img src="${i.image || getItemImage(i.name)}" alt="${i.name}" style="width:48px;height:48px;object-fit:contain;border-radius:8px;border:1px solid var(--border-card);padding:4px;background:var(--bg-body);">`}
                            <div style="font-size:0.65rem;font-weight:700;color:var(--text-secondary);text-align:center;">${i.name}${i.name === "Tokens" ? ` (${i.qty.toLocaleString()})` : i.qty > 1 ? ` ×${i.qty}` : ''}</div>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        let lookingHtml = `
            <div class="ad-label">🔵 Looking For:</div>
            <div class="offers-badge">
                <span class="offers-icon">↗</span>
                <span>Offers</span>
            </div>
        `;

        card.innerHTML = `
            <div class="ad-user">
                <img src="${ad.avatar || 'https://cdn.discordapp.com/embed/avatars/0.png'}" style="width:32px;height:32px;border-radius:50%;object-fit:cover;border:1px solid var(--border-icon);">
                ${ad.username}
            </div>
            ${offeringHtml}
            ${lookingHtml}
            ${ad.notes ? `<div style="color:var(--text-muted);font-size:0.8rem;margin-top:6px;">📝 ${ad.notes}</div>` : ''}
            <div class="ad-value-total">
                Offering: ${formatValue(ad.offeringTotal)} · Looking For: Offers
            </div>
            <div class="ad-time">${formatTime(ad.timestamp)}</div>
            <div class="ad-actions">
                <button class="view-btn" onclick="viewAd(${ad.id})">📋 View</button>
            </div>
        `;

        grid.appendChild(card);
    });
}

function viewAd(id) {
    const ad = TRADE_ADS.find(a => a.id === id);
    if (!ad) return;

    const content = document.getElementById('viewAdContent');
    if (!content) return;

    content.innerHTML = `
        <div class="ad-detail-user">
            <img src="${ad.avatar || 'https://cdn.discordapp.com/embed/avatars/0.png'}" style="width:40px;height:40px;border-radius:50%;object-fit:cover;border:1px solid var(--border-icon);">
            <div class="user-name">${ad.username}</div>
        </div>
        ${ad.offering.length > 0 ? `
            <div class="ad-detail-items">
                <div class="side-label">🟢 Offering:</div>
                <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:4px;">
                    ${ad.offering.map(i => `
                        <div style="display:flex;flex-direction:column;align-items:center;gap:2px;">
                            <img src="${i.image || getItemImage(i.name)}" alt="${i.name}" style="width:48px;height:48px;object-fit:contain;border-radius:8px;border:1px solid var(--border-card);padding:4px;background:var(--bg-body);">
                            <div style="font-size:0.65rem;font-weight:700;color:var(--text-secondary);text-align:center;">${i.name}${i.qty > 1 ? ` ×${i.qty}` : ''}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        ` : ''}
        <div class="ad-detail-items">
            <div class="side-label">🔵 Looking For:</div>
            <div style="padding:8px 12px;background:var(--bg-card-hover);border-radius:6px;font-weight:700;color:var(--text-secondary);">↗ Offers</div>
        </div>
        <div class="ad-detail-total">
            Offering: ${formatValue(ad.offeringTotal)} · Looking For: Offers
        </div>
        ${ad.notes ? `<div class="ad-detail-notes">📝 ${ad.notes}</div>` : ''}
        <div class="ad-detail-roblox">
            🎮 Roblox Username: <a href="https://www.roblox.com/users/search?keyword=${encodeURIComponent(ad.username)}" target="_blank">${ad.username}</a>
        </div>
        <div style="text-align:center;color:var(--text-muted);font-size:0.8rem;margin-top:8px;">
            Posted: ${formatTime(ad.timestamp)}
        </div>
    `;
    document.getElementById('viewAdModal').classList.add('active');
}

function closeViewAd() {
    const el = document.getElementById('viewAdModal');
    if (el) el.classList.remove('active');
}

function formatTime(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleString('en-US', {
        month: 'short', day: 'numeric', year: 'numeric',
        hour: '2-digit', minute: '2-digit'
    });
}

function formatValue(val) {
    if (val >= 1000000) return (val / 1000000).toFixed(2) + 'M';
    if (val >= 1000) return (val / 1000).toFixed(1) + 'K';
    return val.toLocaleString();
}

// =============================================================
// 7. TRADE CALCULATOR
// =============================================================
let calcItems = { your: [], their: [] };
let currentPickerSide = 'your';

function getAllItemsForPicker() {
    const items = [];
    ITEMS.forEach(item => {
        if (item.isDual) {
            item.items.forEach(sub => {
                if (sub.numericValue !== undefined && sub.numericValue > 0) {
                    items.push({
                        name: sub.name, value: sub.value,
                        numericValue: sub.numericValue,
                        image: sub.image, tier: item.tier
                    });
                }
            });
        } else {
            if (item.numericValue !== undefined && item.numericValue > 0) {
                items.push({
                    name: item.name, value: item.value,
                    numericValue: item.numericValue,
                    image: item.image, tier: item.tier
                });
            }
        }
    });
    return items;
}

const SECRET_CALC_SEARCH = "devitemslol";

function getSpecialCalcItems() {
    const specials = [];

    SECRET_ITEMS.forEach(item => {
        if (item.isDual) {
            item.items.forEach(sub => {
                specials.push({
                    name: sub.name, value: sub.value,
                    numericValue: sub.numericValue || 0,
                    image: sub.image, tier: item.tier
                });
            });
        } else {
            specials.push({
                name: item.name, value: item.value,
                numericValue: item.numericValue || 0,
                image: item.image, tier: item.tier
            });
        }
    });

    ITEMS.forEach(item => {
        if (item.isDual) {
            item.items.forEach(sub => {
                if (sub.name === "Developer Card" || sub.name === "Developer Frame" || sub.name === "FCWC Back Trophy") {
                    specials.push({
                        name: sub.name, value: sub.value,
                        numericValue: 0, image: sub.image, tier: item.tier
                    });
                }
            });
        }
    });

    return specials;
}

function openItemPicker(side) {
    currentPickerSide = side;
    const modal = document.getElementById('itemPickerModal');
    if (modal) {
        modal.classList.add('active');
        renderModalItems('');
        const searchInput = document.getElementById('modalSearchInput');
        if (searchInput) searchInput.value = '';
    }
}

function closeItemPicker() {
    const modal = document.getElementById('itemPickerModal');
    if (modal) modal.classList.remove('active');
}

function filterModalItems() {
    const search = document.getElementById('modalSearchInput')?.value || '';
    renderModalItems(search);
}

function renderModalItems(search = '') {
    const grid = document.getElementById('modalGrid');
    if (!grid) return;
    grid.innerHTML = '';

    const searchLower = search.toLowerCase().trim();
    const isSecretSearch = searchLower.includes("devitemslol");

    let filtered;
    if (isSecretSearch) {
        filtered = getSpecialCalcItems();
    } else {
        const allItems = getAllItemsForPicker();
        filtered = allItems.filter(item =>
            !searchLower || item.name.toLowerCase().includes(searchLower)
        );
    }

    const tierOrder = { tier4: 0, high: 1, mid: 2, low: 3, secret: 4 };
    filtered.sort((a, b) => {
        const tierA = tierOrder[a.tier] !== undefined ? tierOrder[a.tier] : 999;
        const tierB = tierOrder[b.tier] !== undefined ? tierOrder[b.tier] : 999;
        if (tierA !== tierB) return tierA - tierB;
        return b.numericValue - a.numericValue;
    });

    filtered.forEach(item => {
        const div = document.createElement('div');
        div.className = 'modal-item';
        div.onclick = () => addItemToCalc(currentPickerSide, item);

        const img = document.createElement('img');
        img.src = item.image || '';
        img.alt = item.name;
        div.appendChild(img);

        const nameSpan = document.createElement('span');
        nameSpan.className = 'modal-item-name';
        nameSpan.textContent = item.name;
        div.appendChild(nameSpan);

        const valueSpan = document.createElement('span');
        valueSpan.className = 'modal-item-value';
        let valueText = item.value;
        const tokenVal = getTokenValue(item);
        if (tokenVal) valueText += ` · 🪙${formatTokenValue(tokenVal)}`;
        valueSpan.textContent = valueText;
        div.appendChild(valueSpan);

        grid.appendChild(div);
    });

    if (filtered.length === 0) {
        const empty = document.createElement('div');
        empty.style.cssText = 'grid-column:1/-1;text-align:center;color:var(--text-muted);padding:30px 0;';
        empty.textContent = 'No items found';
        grid.appendChild(empty);
    }
}

function addItemToCalc(side, item) {
    const existing = calcItems[side].find(i => i.name === item.name);
    if (existing) existing.qty = (existing.qty || 1) + 1;
    else calcItems[side].push({ ...item, qty: 1 });
    closeItemPicker();
    renderCalcItems();
    updateCalcTotals();
}

function removeItemFromCalc(side, index) {
    calcItems[side].splice(index, 1);
    renderCalcItems();
    updateCalcTotals();
}

function renderCalcItems() {
    ['your', 'their'].forEach(side => {
        const grid = document.getElementById(`calc${side.charAt(0).toUpperCase() + side.slice(1)}Items`);
        if (!grid) return;
        grid.innerHTML = '';

        if (calcItems[side].length === 0) {
            grid.classList.remove('has-items');
            const empty = document.createElement('div');
            empty.style.cssText = 'grid-column:1/-1;text-align:center;color:var(--text-muted);padding:20px 0;font-size:0.8rem;';
            empty.textContent = 'No items added';
            grid.appendChild(empty);
        } else {
            grid.classList.add('has-items');
            calcItems[side].forEach((item, index) => {
                const div = document.createElement('div');
                div.className = 'calc-grid-item';
                div.onclick = () => removeItemFromCalc(side, index);

                const img = document.createElement('img');
                img.src = item.image || '';
                img.alt = item.name;
                div.appendChild(img);

                const tooltip = document.createElement('div');
                tooltip.className = 'item-tooltip';
                tooltip.textContent = `${item.name} · ${item.value}`;
                div.appendChild(tooltip);

                if (item.qty > 1) {
                    const badge = document.createElement('span');
                    badge.className = 'item-qty-badge';
                    badge.textContent = item.qty;
                    div.appendChild(badge);
                }
                grid.appendChild(div);
            });
        }
    });
}

function updateCalcTotals() {
    let yourBaseTotal = 0;
    calcItems.your.forEach(item => {
        yourBaseTotal += item.numericValue * (item.qty || 1);
    });

    let theirBaseTotal = 0;
    calcItems.their.forEach(item => {
        theirBaseTotal += item.numericValue * (item.qty || 1);
    });

    let yourTokenTotal = 0;
    calcItems.your.forEach(item => {
        const tokenVal = getTokenValue(item);
        if (tokenVal) yourTokenTotal += tokenVal * (item.qty || 1);
    });
    const yourTokensInput = parseInt(document.getElementById('calcYourTokens')?.value || 0);
    yourTokenTotal += yourTokensInput;

    let theirTokenTotal = 0;
    calcItems.their.forEach(item => {
        const tokenVal = getTokenValue(item);
        if (tokenVal) theirTokenTotal += tokenVal * (item.qty || 1);
    });
    const theirTokensInput = parseInt(document.getElementById('calcTheirTokens')?.value || 0);
    theirTokenTotal += theirTokensInput;

    const yourTotalEl = document.getElementById('calcYourTotal');
    const theirTotalEl = document.getElementById('calcTheirTotal');
    const yourTokenEl = document.getElementById('calcYourTokenTotal');
    const theirTokenEl = document.getElementById('calcTheirTokenTotal');

    if (yourTotalEl) yourTotalEl.textContent = formatValue(yourBaseTotal);
    if (theirTotalEl) theirTotalEl.textContent = formatValue(theirBaseTotal);
    if (yourTokenEl) yourTokenEl.innerHTML = `🪙 ${formatValue(yourTokenTotal)}`;
    if (theirTokenEl) theirTokenEl.innerHTML = `🪙 ${formatValue(theirTokenTotal)}`;

    const resultEl = document.getElementById('calcResult');
    if (!resultEl) return;

    if (yourTokenTotal === 0 && theirTokenTotal === 0) {
        resultEl.textContent = 'Add items to both sides to calculate';
        resultEl.className = 'calc-result';
        return;
    }

    const diff = yourTokenTotal - theirTokenTotal;
    const diffPercent = theirTokenTotal > 0 ? (diff / theirTokenTotal) * 100 : 0;

    let verdict, className;
    if (diff < 0 && Math.abs(diffPercent) > 5) {
        verdict = '✅ WIN'; className = 'win';
    } else if (diff > 0 && Math.abs(diffPercent) > 5) {
        verdict = '❌ LOSE'; className = 'lose';
    } else {
        verdict = '⚖️ FAIR'; className = 'fair';
    }

    const diffStr = diff > 0 ? `+${formatValue(diff)}` : formatValue(diff);
    resultEl.className = `calc-result ${className}`;
    resultEl.innerHTML = `
        <div>${verdict}</div>
        <div class="diff">🪙 ${formatValue(yourTokenTotal)} vs 🪙 ${formatValue(theirTokenTotal)} · ${diffStr}</div>
        <div style="font-size:0.8rem;color:var(--text-muted);margin-top:4px;">Base: ${formatValue(yourBaseTotal)} vs ${formatValue(theirBaseTotal)}</div>
    `;
}

// =============================================================
// 8. KEYBOARD SHORTCUTS
// =============================================================
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeItemPicker();
        closeViewAd();
    }
});

// =============================================================
// 9. EVENT LISTENERS
// =============================================================
document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            setTheme(currentTheme === 'dark' ? 'light' : 'dark');
        });
    }

    const savedTheme = localStorage.getItem('fss-theme');
    setTheme(savedTheme || 'dark');

    // Value toggle
    const valueToggle = document.getElementById('valueToggle');
    if (valueToggle) {
        valueToggle.addEventListener('click', function() {
            setValueMode(!showBaseValue);
        });
    }
    const savedBase = localStorage.getItem('fss-show-base');
    if (savedBase === 'true') {
        showBaseValue = true;
        const vtDot = document.getElementById('vtDot');
        if (vtDot) vtDot.classList.remove('token-active');
        document.getElementById('vtLabelBase')?.classList.add('active');
        document.getElementById('vtLabelToken')?.classList.remove('active');
    } else {
        showBaseValue = false;
        const vtDot = document.getElementById('vtDot');
        if (vtDot) vtDot.classList.add('token-active');
        document.getElementById('vtLabelBase')?.classList.remove('active');
        document.getElementById('vtLabelToken')?.classList.add('active');
    }

    // Base value toggle (legacy id)
    const baseValueToggle = document.getElementById('baseValueToggle');
    if (baseValueToggle) {
        baseValueToggle.addEventListener('click', function() {
            setValueMode(!showBaseValue);
        });
    }

    updateLastUpdatedDisplay();

    // Filters
    document.getElementById('tierFilter')?.addEventListener('change', applyFilters);
    document.getElementById('stabilityFilter')?.addEventListener('change', applyFilters);
    document.getElementById('searchInput')?.addEventListener('input', applyFilters);
    document.getElementById('resetFiltersBtn')?.addEventListener('click', resetFilters);

    // Calculator inputs
    const yourTokens = document.getElementById('calcYourTokens');
    const theirTokens = document.getElementById('calcTheirTokens');
    if (yourTokens) yourTokens.addEventListener('input', updateCalcTotals);
    if (theirTokens) theirTokens.addEventListener('input', updateCalcTotals);

    // Trade ads search
    const adSearchInput = document.getElementById('adSearchInput');
    if (adSearchInput) adSearchInput.addEventListener('input', renderTradeAds);

    // Modal overlay click
    const itemPickerModal = document.getElementById('itemPickerModal');
    if (itemPickerModal) {
        itemPickerModal.addEventListener('click', function(e) {
            if (e.target === this) closeItemPicker();
        });
    }
    const viewAdModal = document.getElementById('viewAdModal');
    if (viewAdModal) {
        viewAdModal.addEventListener('click', function(e) {
            if (e.target === this) closeViewAd();
        });
    }

    // Render main items
    renderItems('all', 'all', '');

    // Render trade ads if container exists
    if (document.getElementById('adsGrid')) renderTradeAds();
});

// =============================================================
// MIMIMIMI EASTER EGG
// =============================================================
document.addEventListener('click', function(e) {
    const card = e.target.closest('.item-card');
    if (!card) return;
    const nameEl = card.querySelector('.card-name');
    if (!nameEl) return;
    if (nameEl.textContent.trim().toLowerCase().startsWith('mimimimi')) {
        mimimimiClicks++;
        if (mimimimiClicks >= 5 && !secretTierUnlocked) {
            unlockSecretTier();
        }
    }
});

function unlockSecretTier() {
    secretTierUnlocked = true;
    try {
        const audio = new Audio('/mimi.ogg');
        audio.volume = 0.5;
        audio.play().catch(() => {});
    } catch (e) {}
    const secretTier = document.getElementById('secretTier');
    if (secretTier) {
        secretTier.style.display = 'block';
        secretTier.style.opacity = '0';
        secretTier.style.transition = 'opacity 0.5s ease-in';
        setTimeout(() => { secretTier.style.opacity = '1'; }, 50);
        setTimeout(() => { secretTier.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 300);
    }
    renderItems(
        document.getElementById('tierFilter')?.value || 'all',
        document.getElementById('stabilityFilter')?.value || 'all',
        document.getElementById('searchInput')?.value || ''
    );
}

// =============================================================
// EXPOSE
// =============================================================
window.renderItems = renderItems;
window.applyFilters = applyFilters;
window.resetFilters = resetFilters;
window.setTheme = setTheme;
window.setValueMode = setValueMode;
window.setBaseValueVisibility = setBaseValueVisibility;
window.renderTradeAds = renderTradeAds;
window.viewAd = viewAd;
window.closeViewAd = closeViewAd;
window.openItemPicker = openItemPicker;
window.closeItemPicker = closeItemPicker;
window.filterModalItems = filterModalItems;