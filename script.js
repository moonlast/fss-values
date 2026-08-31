// =============================================================
// 1. DATA
// =============================================================
const ITEMS = [
    // TIER 4 — Developer items
    {
        name: "FCWC Back Trophy",
        value: "O/C",
        range: "[N/A]",
        stability: "Rising",
        demand: 6,
        rarity: 11,
        origin: "Robux Limited",
        tier: "tier4",
        image: "https://tr.rbxcdn.com/180DAY-621badb24bf45075901a5b96afd87717/420/420/BackAccessory/Webp/noFilter",
        numericValue: 0
    }, {
        name: "Developer's Set",
        stability: "Overpaid",
        demand: 3,
        rarity: 11,
        origin: "Being Developer",
        tier: "tier4",
        isDual: true,
        items: [{ name: "Developer Card", value: "O/C", image: "https://tr.rbxcdn.com/180DAY-bd42c4eda9559444942f01160e622be2/420/420/Image/Webp/noFilter",
                numericValue: 0 }, { name: "Developer Frame", value: "O/C",
                image: "https://tr.rbxcdn.com/180DAY-5fef143e8a4e1a3bb8d7d5c12effa7ab/420/420/Image/Png/noFilter",
                numericValue: 0 }]
    }, {
        name: "Developer's Wristband",
        value: "1.65M",
        range: "[N/A]",
        stability: "Overpaid",
        demand: 5,
        rarity: 10,
        origin: "Developer Gift",
        tier: "tier4",
        image: "/images/devband.png",
        numericValue: 1650000
    }, {
        name: "Bunny Set",
        stability: "Rising",
        demand: 7,
        rarity: 10,
        origin: "2025 Easter Puzzle",
        tier: "tier4",
        isDual: true,
        items: [{ name: "Bunny Card", value: "1.45M", image: "https://tr.rbxcdn.com/180DAY-8ac467d583734ca4d8101a8b87171758/420/420/Image/Webp/noFilter",
                numericValue: 1450000 }, { name: "Bunny Frame", value: "1.45M",
                image: "https://tr.rbxcdn.com/180DAY-0c33b2d8786b0bbf6ab9d0292905f6ea/420/420/Image/Png/noFilter",
                numericValue: 1450000 }]
    }, {
        name: "LMT Set",
        stability: "Rising",
        demand: 5,
        rarity: 10,
        origin: "Being LMT",
        tier: "tier4",
        isDual: true,
        items: [{ name: "LMT Card", value: "1.3M", image: "https://tr.rbxcdn.com/180DAY-c75c35cef5c1fce57bd108871c51ce7d/420/420/Image/Webp/noFilter",
                numericValue: 1300000 }, { name: "LMT Frame", value: "O/C",
                image: "https://tr.rbxcdn.com/180DAY-7946ec03151612a29574177dc29bde00/420/420/Image/Png/noFilter",
                numericValue: 0 }]
    }, {
        name: "Super League Set",
        stability: "Rising",
        demand: 5,
        rarity: 10,
        origin: "Winning SL #5",
        tier: "tier4",
        isDual: true,
        items: [{ name: "Super League Card", value: "1.25M", image: "https://tr.rbxcdn.com/180DAY-b5c7e5c916e6f2eab6aa604d2f132e9d/420/420/Image/Webp/noFilter",
                numericValue: 1250000 }, { name: "Super League Frame", value: "1.35M",
                image: "https://tr.rbxcdn.com/180DAY-59fd9472e20d348d8f861a718e08fb88/420/420/Image/Png/noFilter",
                numericValue: 1350000 }]
    }, {
        name: "Event Host Set",
        stability: "Rising",
        demand: 5,
        rarity: 9,
        origin: "Being Event Host",
        tier: "tier4",
        isDual: true,
        items: [{ name: "Event Host Card", value: "1.2M", image: "https://tr.rbxcdn.com/180DAY-42040034932f0021659ac34a5bc728a4/420/420/Image/Webp/noFilter",
                numericValue: 1200000 }, { name: "Event Host Frame", value: "O/C",
                image: "https://tr.rbxcdn.com/180DAY-80329426b5b175a5e33cd89b6ddf4bb3/420/420/Image/Png/noFilter",
                numericValue: 0 }]
    }, {
        name: "Mimimimi",
        value: "950K",
        range: "[N/A]",
        stability: "Stable",
        demand: 3,
        rarity: 9,
        origin: "Developer Gift",
        tier: "tier4",
        image: "https://tr.rbxcdn.com/180DAY-1f250e5125c954fe56ae6d2ba660b407/420/420/Image/Png/noFilter",
        numericValue: 950000
    },

    // HIGH TIER
    {
        name: "Ghosdeeri",
        value: "575K",
        range: "[N/A]",
        stability: "Stable",
        demand: 7,
        rarity: 6,
        origin: "Mystic Pack",
        tier: "high",
        image: "https://tr.rbxcdn.com/180DAY-82ce43f5ffad45ef29697754aa98d5f3/420/420/Hat/Webp/noFilter",
        numericValue: 575000
    }, {
        name: "Telamon's Chicken Hat",
        value: "550K",
        range: "[N/A]",
        stability: "Underpaid",
        demand: 2,
        rarity: 8,
        origin: "Mystic Pack",
        tier: "high",
        image: "https://tr.rbxcdn.com/180DAY-811029bf44237ea36da06d104cafe37c/420/420/Hat/Webp/noFilter",
        numericValue: 550000
    }, {
        name: "Float",
        value: "430K",
        range: "[N/A]",
        stability: "Overpaid",
        demand: 10,
        rarity: 5,
        origin: "Robux Pack",
        tier: "high",
        image: "https://tr.rbxcdn.com/180DAY-54d520be01198073c66893158ca6c3a0/420/420/Image/Webp/noFilter",
        numericValue: 430000
    }, {
        name: "Hava Nagila",
        value: "400K",
        range: "[N/A]",
        stability: "Overpaid",
        demand: 4,
        rarity: 7,
        origin: "Developer Gift",
        tier: "high",
        image: "https://tr.rbxcdn.com/180DAY-6bcf89e94316a7dc888ac4a7013ff28a/420/420/Image/Png/noFilter",
        numericValue: 400000
    }, {
        name: "MATSbxb Developer Set",
        stability: "Doing Well",
        demand: 6,
        rarity: 7,
        origin: "Robux Pack",
        tier: "high",
        isDual: true,
        items: [{ name: "MATSbxb Signature Dev Card", value: "250K",
                image: "https://tr.rbxcdn.com/180DAY-f8ebb39e75374ccca999869360977baf/420/420/Image/Png/noFilter",
                numericValue: 250000 }, { name: "MATSbxb Signature Dev Frame", value: "110K",
                image: "https://tr.rbxcdn.com/180DAY-b860f0eb2d9ef0633796818c6c87d27b/420/420/Image/Png/noFilter",
                numericValue: 110000 }]
    }, {
        name: "Crown of Opulentum",
        value: "225K",
        range: "[N/A]",
        stability: "Underpaid",
        demand: 1,
        rarity: 7,
        origin: "2.5M Coins in SLS 1.0 Reward",
        tier: "high",
        image: "/images/crown.png",
        numericValue: 225000
    }, {
        name: "FCWC Shoes Red/Black",
        value: "160K",
        range: "[N/A]",
        stability: "Stable",
        demand: 5,
        rarity: 5,
        origin: "FCWC Event",
        tier: "high",
        image: "https://tr.rbxcdn.com/180DAY-54be9b36829e6ed8f8803061045bd67e/420/420/Image/Webp/noFilter",
        numericValue: 160000
    }, {
        name: "Party Time",
        value: "152.5K",
        range: "[N/A]",
        stability: "Stable",
        demand: 3,
        rarity: 6,
        origin: "Limited Quantity Code",
        tier: "high",
        image: "https://tr.rbxcdn.com/180DAY-7114b0ad6050b37eeecefe238138b4f0/420/420/Image/Webp/noFilter",
        numericValue: 152500
    }, {
        name: "Penguin Dance",
        value: "145K",
        range: "[N/A]",
        stability: "Doing Well",
        demand: 5,
        rarity: 5,
        origin: "Robux Pack",
        tier: "high",
        image: "https://tr.rbxcdn.com/180DAY-3d1dec4970d91a70f714bad890137e41/420/420/Image/Webp/noFilter",
        numericValue: 145000
    }, {
        name: "Super Dodge",
        value: "145K",
        range: "[N/A]",
        stability: "Stable",
        demand: 4,
        rarity: 5,
        origin: "Robux Pack",
        tier: "high",
        image: "https://tr.rbxcdn.com/180DAY-b4c516140428840f9a23943a3df8f85f/420/420/Image/Webp/noFilter",
        numericValue: 145000
    }, {
        name: "Penguin Slide",
        value: "142.5K",
        range: "[N/A]",
        stability: "Doing Well",
        demand: 5,
        rarity: 5,
        origin: "Robux Pack",
        tier: "high",
        image: "https://tr.rbxcdn.com/180DAY-83183faeca6714bcd6130fa695a78d31/420/420/Image/Webp/noFilter",
        numericValue: 142500
    }, {
        name: "Orange Dance",
        value: "132.5K",
        range: "[N/A]",
        stability: "Stable",
        demand: 5,
        rarity: 5,
        origin: "Robux Pack",
        tier: "high",
        image: "https://tr.rbxcdn.com/180DAY-106d9f12b2c7e5fdb7423a58197a2a03/420/420/Image/Webp/noFilter",
        numericValue: 132500
    }, {
        name: "WC26 Backwards Celebration",
        value: "125K",
        range: "[N/A]",
        stability: "Doing Well",
        demand: 6,
        rarity: 4,
        origin: "Robux Pack",
        tier: "high",
        image: "https://tr.rbxcdn.com/180DAY-978cff2d7d7ab20ce9287b76a3c8be24/420/420/Image/Webp/noFilter",
        numericValue: 125000
    }, {
        name: "Front Flip",
        value: "122.5K",
        range: "[N/A]",
        stability: "Stable",
        demand: 5,
        rarity: 4,
        origin: "Robux Battlepass",
        tier: "high",
        image: "https://tr.rbxcdn.com/180DAY-875c220d586bd555e66f951a9cb42add/420/420/Image/Webp/noFilter",
        numericValue: 122500
    }, {
        name: "WC26 Trophy Celebration",
        value: "120K",
        range: "[N/A]",
        stability: "Doing Well",
        demand: 5,
        rarity: 4,
        origin: "Robux Pack",
        tier: "high",
        image: "https://tr.rbxcdn.com/180DAY-4e200221c73296ecf8a01099565b13bd/420/420/Image/Png/noFilter",
        numericValue: 120000
    }, {
        name: "Gold Champion Band [B]",
        value: "115K",
        range: "[N/A]",
        stability: "Stable",
        demand: 3,
        rarity: 4,
        origin: "1.0 SLS Clans Reward",
        tier: "high",
        image: "/images/goldb.png",
        numericValue: 115000
    },

    // MID TIER
    {
        name: "Flip",
        value: "90K",
        range: "[N/A]",
        stability: "Stable",
        demand: 4,
        rarity: 3,
        origin: "Robux Pack",
        tier: "mid",
        image: "https://tr.rbxcdn.com/180DAY-2e555b216403fccd10c74f6100fffb26/420/420/Image/Png/noFilter",
        numericValue: 90000
    }, {
        name: "Dragon Shoes",
        value: "80K",
        range: "[N/A]",
        stability: "Stable",
        demand: 4,
        rarity: 4,
        origin: "Robux Pack",
        tier: "mid",
        image: "https://tr.rbxcdn.com/180DAY-13d9286ffadf4082e990779293451158/420/420/Image/Webp/noFilter",
        numericValue: 80000
    }, {
        name: "Devil's Gift",
        value: "75K",
        range: "[N/A]",
        stability: "Doing Well",
        demand: 5,
        rarity: 6,
        origin: "Limited Quantity Code",
        tier: "mid",
        image: "https://tr.rbxcdn.com/180DAY-4694b2e973dce652ac90d2956beca69b/420/420/Model/Webp/noFilter",
        numericValue: 75000
    }, {
        name: "Shark Shoes",
        value: "72.5K",
        range: "[N/A]",
        stability: "Stable",
        demand: 4,
        rarity: 4,
        origin: "Robux Pack",
        tier: "mid",
        image: "/images/shark.png",
        numericValue: 72500
    }, {
        name: "67",
        value: "67.5K",
        range: "[N/A]",
        stability: "Stable",
        demand: 2,
        rarity: 5,
        origin: "Robux Pack",
        tier: "mid",
        image: "https://tr.rbxcdn.com/180DAY-e332d112e5b4a3dc5d99db76c0b5452b/420/420/Image/Webp/noFilter",
        numericValue: 67500
    }, {
        name: "Kawaii Set",
        stability: "Stable",
        demand: 3,
        rarity: 4,
        origin: "OG Premium Card",
        tier: "mid",
        isDual: true,
        items: [{ name: "Kawaii Card", value: "50K", image: "https://tr.rbxcdn.com/180DAY-6c9ca67f584bd53fd408303a2ef86aa1/420/420/Image/Png/noFilter",
                numericValue: 50000 }, { name: "Kawaii Frame", value: "40K",
                image: "https://tr.rbxcdn.com/180DAY-fe88ec3178eaec8fe6faac886c7c9b0d/420/420/Image/Png/noFilter",
                numericValue: 40000 }]
    }, {
        name: "Grinch Shoes",
        value: "45K",
        range: "[N/A]",
        stability: "Stable",
        demand: 2,
        rarity: 5,
        origin: "1.0 Christmas Event",
        tier: "mid",
        image: "/images/grinch.png",
        numericValue: 45000
    }, {
        name: "The Panther",
        value: "37.5K",
        range: "[N/A]",
        stability: "Doing Well",
        demand: 5,
        rarity: 3,
        origin: "Prehistoric Battlepass",
        tier: "mid",
        image: "https://tr.rbxcdn.com/180DAY-20fa459c08ff31fdfb37ea8b91027760/420/420/Image/Webp/noFilter",
        numericValue: 37500
    }, {
        name: "Lightning Wolf Shoes",
        value: "35K",
        range: "[N/A]",
        stability: "Stable",
        demand: 4,
        rarity: 3,
        origin: "Robux Battlepass Reward",
        tier: "mid",
        image: "https://tr.rbxcdn.com/180DAY-bd82cd6716f30918d1b60f54cfab4a57/420/420/Image/Png/noFilter",
        numericValue: 35000
    }, {
        name: "WC26 Valkyrie",
        value: "32.5K",
        range: "[N/A]",
        stability: "Stable",
        demand: 2,
        rarity: 3,
        origin: "WC26 Event",
        tier: "mid",
        image: "/images/wcvalk.png",
        numericValue: 32500
    }, {
        name: "Dragon Set",
        stability: "Stable",
        demand: 4,
        rarity: 4,
        origin: "OG Premium Card",
        tier: "mid",
        isDual: true,
        items: [{ name: "Dragon Card", value: "35K", image: "https://tr.rbxcdn.com/180DAY-7095a98743c555638750ceefec64c1a8/420/420/Image/Png/noFilter",
                numericValue: 35000 }, { name: "Dragon Frame", value: "40K",
                image: "https://tr.rbxcdn.com/180DAY-899bfb7e6c12bf4299f04f5bc2ec36e8/420/420/Image/Png/noFilter",
                numericValue: 40000 }]
    }, {
        name: "Royal Fleur De Lis Set",
        stability: "Stable",
        demand: 3,
        rarity: 4,
        origin: "OG Premium Card",
        tier: "mid",
        isDual: true,
        items: [{ name: "Royal Card", value: "30K", image: "https://tr.rbxcdn.com/180DAY-2778c242d027070bf587227354109420/420/420/Image/Png/noFilter",
                numericValue: 30000 }, { name: "Royal Frame", value: "50K",
                image: "https://tr.rbxcdn.com/180DAY-6a8dc1bb1da6c3313dd0757a2df5559c/420/420/Image/Png/noFilter",
                numericValue: 50000 }]
    }, {
        name: "Candy Cane Shoes",
        value: "30K",
        range: "[N/A]",
        stability: "Stable",
        demand: 2,
        rarity: 5,
        origin: "1.0 Christmas Event",
        tier: "mid",
        image: "/images/candycane.png",
        numericValue: 30000
    }, {
        name: "Leather Boots",
        value: "30K",
        range: "[N/A]",
        stability: "Stable",
        demand: 3,
        rarity: 4,
        origin: "Prehistoric Battlepass",
        tier: "mid",
        image: "/images/leather.png",
        numericValue: 30000
    }, {
        name: "Helm of Opulentum",
        value: "30K",
        range: "[N/A]",
        stability: "Unstable",
        demand: 3,
        rarity: 3,
        origin: "1M Coins in SLS 1.0 Reward",
        tier: "mid",
        image: "https://tr.rbxcdn.com/180DAY-54e9fa5e35b375c23844939e68945ac0/420/420/Image/Webp/noFilter",
        numericValue: 30000
    }, {
        name: "FCWC Dominus",
        value: "30K",
        range: "[N/A]",
        stability: "Underpaid",
        demand: 3,
        rarity: 3,
        origin: "FCWC Event",
        tier: "mid",
        image: "https://tr.rbxcdn.com/180DAY-975ffc2e6e4863b14e797b4249186544/420/420/Image/Webp/noFilter",
        numericValue: 30000
    }, {
        name: "WC26 Argentina Sun Card",
        value: "30K",
        range: "[N/A]",
        stability: "Unstable",
        demand: 3,
        rarity: 3,
        origin: "WC26 Event",
        tier: "low",
        image: "/images/suncard.png",
        numericValue: 30000
    },

    // LOW TIER
    {
        name: "Leaves Set",
        stability: "Stable",
        demand: 2,
        rarity: 4,
        origin: "Prehistoric Battlepass",
        tier: "low",
        isDual: true,
        items: [{ name: "Leaves Card", value: "25K", image: "https://tr.rbxcdn.com/180DAY-2b5cde95564906b08473d1bbfbafd938/420/420/Image/Webp/noFilter",
                numericValue: 25000 }, { name: "Leaves Frame", value: "30K",
                image: "https://tr.rbxcdn.com/180DAY-acace68531049c2d38efc4504e62147b/420/420/Image/Png/noFilter",
                numericValue: 30000 }]
    }, {
        name: "Gold Champion Band [L]",
        value: "27.5K",
        stability: "Stable",
        demand: 2,
        rarity: 3,
        origin: "1.0 SLS Clans Reward",
        tier: "low",
        image: "/images/goldl.png",
        numericValue: 27500
    }, {
        name: "Gold Champion Band [R]",
        value: "25K",
        stability: "Stable",
        demand: 2,
        rarity: 3,
        origin: "1.0 SLS Clans Reward",
        tier: "low",
        image: "/images/goldr.png",
        numericValue: 25000
    }, {
        name: "Dino Shoes",
        value: "22.5K",
        stability: "Stable",
        demand: 1,
        rarity: 3,
        origin: "Prehistoric Battlepass",
        tier: "low",
        image: "/images/dinos.png",
        numericValue: 22500
    }, {
        name: "Wild Dance",
        value: "22K",
        range: "[N/A]",
        stability: "Doing Well",
        demand: 5,
        rarity: 2,
        origin: "Prehistoric Battlepass",
        tier: "low",
        image: "https://tr.rbxcdn.com/180DAY-106d9f12b2c7e5fdb7423a58197a2a03/420/420/Image/Webp/noFilter",
        numericValue: 22000
    }, {
        name: "La Roja Inferno Goal Explosion",
        value: "20K",
        range: "[N/A]",
        stability: "Underpaid",
        demand: 2,
        rarity: 3,
        origin: "Robux Pack",
        tier: "low",
        image: "https://tr.rbxcdn.com/180DAY-9d6a311d5b9b915d3b1e1e90d39a541c/420/420/Image/Webp/noFilter",
        numericValue: 20000
    }, {
        name: "FCWC Valkyrie",
        value: "17.5K",
        range: "[N/A]",
        stability: "Stable",
        demand: 3,
        rarity: 3,
        origin: "FCWC Event",
        tier: "low",
        image: "https://tr.rbxcdn.com/180DAY-4fc060f7416dc7bfd4114a6171b614da/420/420/Image/Webp/noFilter",
        numericValue: 17500
    }, {
        name: "Unfinished Business",
        value: "15K",
        range: "[N/A]",
        stability: "Unstable",
        demand: 2,
        rarity: 1,
        origin: "Robux Item",
        tier: "low",
        image: "/images/unfinished.png",
        numericValue: 15000
    }, {
        name: "Tentacles",
        value: "15K",
        range: "[N/A]",
        stability: "Stable",
        demand: 3,
        rarity: 4,
        origin: "From Packs on Release",
        tier: "low",
        image: "https://tr.rbxcdn.com/180DAY-71f12a44de07f11c88a8f4dcd454cf30/420/420/Hat/Webp/noFilter",
        numericValue: 15000
    }, {
        name: "WC26 Amplify Card",
        value: "15K",
        range: "[N/A]",
        stability: "Stable",
        demand: 2,
        rarity: 3,
        origin: "WC26 Event",
        tier: "low",
        image: "/images/amplify.png",
        numericValue: 15000
    }, {
        name: "Biohazard Set",
        stability: "Underpaid",
        demand: 2,
        rarity: 4,
        origin: "OG Premium Card",
        tier: "low",
        isDual: true,
        items: [{ name: "Biohazard Card", value: "13K", image: "https://tr.rbxcdn.com/180DAY-37b521d2cf6c475f1cd2974832831829/420/420/Image/Png/noFilter",
                numericValue: 13000 }, { name: "Biohazard Frame", value: "10.5K",
                image: "https://tr.rbxcdn.com/180DAY-09b2307f7cf33dc4e0e59b23b5a4ea3c/420/420/Image/Webp/noFilter",
                numericValue: 10500 }]
    }, {
        name: "T-Rex",
        value: "12K",
        range: "[N/A]",
        stability: "Stable",
        demand: 2,
        rarity: 2,
        origin: "Prehistoric Battlepass",
        tier: "low",
        image: "https://tr.rbxcdn.com/180DAY-bdeb6a2f9b3a226ef9f2dd9becee3067/420/420/Image/Webp/noFilter",
        numericValue: 12000
    }, {
        name: "ESP Sagrada Crown",
        value: "10K",
        range: "[N/A]",
        stability: "Stable",
        demand: 2,
        rarity: 1,
        origin: "ESP WC Event",
        tier: "low",
        image: "/images/sagrada.png",
        numericValue: 10000
    }, {
        name: "Silver Arm Bracelet [B]",
        value: "10K",
        range: "[N/A]",
        stability: "Stable",
        demand: 2,
        rarity: 2,
        origin: "1.0 SLS Clans Reward",
        tier: "low",
        image: "/images/silverb.png",
        numericValue: 10000
    }, {
        name: "Antlers",
        value: "10K",
        range: "[N/A]",
        stability: "Stable",
        demand: 2,
        rarity: 4,
        origin: "From Packs on Release",
        tier: "low",
        image: "https://tr.rbxcdn.com/180DAY-8b48832f797b839dff715a878c752303/420/420/Hat/Webp/noFilter",
        numericValue: 10000
    }, {
        name: "16-bit Set",
        stability: "Underpaid",
        demand: 2,
        rarity: 3,
        origin: "OG Premium Card",
        tier: "low",
        isDual: true,
        items: [{ name: "16-bit Card", value: "5K", image: "https://tr.rbxcdn.com/180DAY-7ddc9a070e6405215a27fda8c15707ca/420/420/Image/Png/noFilter",
                numericValue: 5000 }, { name: "16-bit Frame", value: "10K",
                image: "https://tr.rbxcdn.com/180DAY-a1ae41adcf571c585779021eecc8d4f1/420/420/Image/Png/noFilter",
                numericValue: 10000 }]
    }, {
        name: "Red Bandana of SQL",
        value: "10K",
        range: "[N/A]",
        stability: "Stable",
        demand: 2,
        rarity: 4,
        origin: "From Packs on Release",
        tier: "low",
        image: "https://tr.rbxcdn.com/180DAY-00367130035a503d6a99ea0059aa7d4e/420/420/FaceAccessory/Webp/noFilter",
        numericValue: 10000
    }, {
        name: "adidas Celebration",
        value: "10K",
        range: "[N/A]",
        stability: "Stable",
        demand: 1,
        rarity: 3,
        origin: "adidas Event",
        tier: "low",
        image: "https://tr.rbxcdn.com/180DAY-2404f845aaf3294d21af4c90d3661154/420/420/Image/Webp/noFilter",
        numericValue: 10000
    }, {
        name: "Horned Bucket",
        value: "8.5K",
        range: "[N/A]",
        stability: "Stable",
        demand: 3,
        rarity: 4,
        origin: "From Packs on Release",
        tier: "low",
        image: "https://tr.rbxcdn.com/180DAY-cc10d6c928ebbfd0a097313c912f5a2a/420/420/Hat/Webp/noFilter",
        numericValue: 8500
    }, {
        name: "adidas Taunt",
        value: "8K",
        range: "[N/A]",
        stability: "Stable",
        demand: 1,
        rarity: 3,
        origin: "adidas Event",
        tier: "low",
        image: "https://tr.rbxcdn.com/180DAY-ce219eff72405cee76c3947bfeeb1296/420/420/Image/Webp/noFilter",
        numericValue: 8000
    }, {
        name: "Fur Cape",
        value: "8K",
        range: "[N/A]",
        stability: "Stable",
        demand: 3,
        rarity: 2,
        origin: "Prehistoric Battlepass",
        tier: "low",
        image: "/images/fur.png",
        numericValue: 8000
    }, {
        name: "Evil Pumpkin",
        value: "8K",
        range: "[N/A]",
        stability: "Stable",
        demand: 2,
        rarity: 3,
        origin: "From Packs on Release",
        tier: "low",
        image: "https://tr.rbxcdn.com/180DAY-3407a0b8348a459e206409d5a6209bcb/420/420/Hat/Webp/noFilter",
        numericValue: 8000
    }, {
        name: "Rudolph",
        value: "7.5K",
        range: "[N/A]",
        stability: "Stable",
        demand: 3,
        rarity: 2,
        origin: "1.0 SLS Reward",
        tier: "low",
        image: "https://tr.rbxcdn.com/180DAY-3b46430b8a8741f6182e446ae267b219/420/420/Image/Webp/noFilter",
        numericValue: 7500
    }, {
        name: "WC26 Trophy Dribble",
        value: "7K",
        range: "[N/A]",
        stability: "Stable",
        demand: 2,
        rarity: 1,
        origin: "Robux Battlepass Reward",
        tier: "low",
        image: "https://tr.rbxcdn.com/180DAY-8d5f87202a391aca1e44a8ab882b342b/420/420/Image/Webp/noFilter",
        numericValue: 7000
    }, {
        name: "The Chosen One",
        value: "6.5K",
        range: "[N/A]",
        stability: "Unstable",
        demand: 2,
        rarity: 2,
        new: true,
        origin: "Powers V2 Pack",
        tier: "low",
        image: "/images/chosen.png",
        numericValue: 6500
    }, {
        name: "Bloxy Cola Hat",
        value: "6K",
        range: "[N/A]",
        stability: "Stable",
        demand: 1,
        rarity: 2,
        origin: "From Packs on Release",
        tier: "low",
        image: "https://tr.rbxcdn.com/180DAY-d7b33881eec5f0f59db5efad0e852596/420/420/Hat/Webp/noFilter",
        numericValue: 6000
    },  {
        name: "Dragon Fang Cleats",
        value: "5K",
        range: "[N/A]",
        stability: "Unstable",
        demand: 2,
        rarity: 2,
        new: true,
        origin: "Powers V2 Pack",
        tier: "low",
        image: "/images/cleats.png",
        numericValue: 5000
    }, {
        name: "Bronze Champion Band [B]",
        value: "5K",
        range: "[N/A]",
        stability: "Stable",
        demand: 2,
        rarity: 2,
        origin: "1.0 SLS Clans Reward",
        tier: "low",
        image: "/images/bronzeb.png",
        numericValue: 5000
    }, {
        name: "Rivalry Soccer Shoes",
        value: "3K",
        range: "[N/A]",
        stability: "Dropping",
        demand: 1,
        rarity: 1,
        origin: "Robux Item",
        tier: "low",
        image: "/images/pshoes.png",
        numericValue: 3000
    },
];


// =============================================================
// 1.5 TOKEN CALCULATIONS
// =============================================================

// Default token multipliers
function getTokenMultiplier(numericValue) {
    if (numericValue >= 900000) {
        return 1.75;
    } else if (numericValue >= 65000) {
        return 1.65;
    } else {
        return 1.35;
    }
}

// Token icon URL (fallback if image doesn't load)
const TOKEN_ICON = "https://tr.rbxcdn.com/180DAY-856c7b5695f735c2580bd299923d1a42/420/420/Image/Png/noFilter";
const TOKEN_EMOJI = "🪙";

// Function to calculate token value for an item
// Function to calculate token value for an item
function getTokenValue(item) {
    if (!item.numericValue || item.numericValue === 0) {
        return null;
    }
    // Check if there's a custom token value for this item
    if (CUSTOM_TOKEN_VALUES[item.name]) {
        return CUSTOM_TOKEN_VALUES[item.name];
    }
    const multiplier = getTokenMultiplier(item.numericValue);
    return Math.round(item.numericValue * multiplier);
}

// Function to format token value with K/M suffix
function formatTokenValue(val) {
    if (val >= 1000000) {
        return (val / 1000000).toFixed(1) + 'M';
    } else if (val >= 1000) {
        return (val / 1000).toFixed(1) + 'K';
    }
    return val.toString();
}

// =============================================================
// 2. TRADE ADS DATA
// =============================================================
const TRADE_ADS = [{
    id: 1,
    username: "WM5M",
    avatar: "https://cdn.discordapp.com/avatars/896367467834789938/5bfdb20b5aad84ab655fd756013ac0ef.png?size=512",
    offering: [
        { name: "Float", qty: 1, image: "https://tr.rbxcdn.com/180DAY-54d520be01198073c66893158ca6c3a0/420/420/Image/Webp/noFilter", value: "430K" },
        { name: "Penguin Dance", qty: 2, image: "https://tr.rbxcdn.com/180DAY-3d1dec4970d91a70f714bad890137e41/420/420/Image/Webp/noFilter", value: "142.5K" },
        { name: "Penguin Slide", qty: 1, image: "https://tr.rbxcdn.com/180DAY-83183faeca6714bcd6130fa695a78d31/420/420/Image/Webp/noFilter", value: "140K" },
        { name: "Front Flip", qty: 1, image: "https://tr.rbxcdn.com/180DAY-875c220d586bd555e66f951a9cb42add/420/420/Image/Webp/noFilter", value: "125K" },
        { name: "Gold Band [B]", qty: 1, image: "/images/goldb.png", value: "115K" },
        { name: "Flip", qty: 1, image: "https://tr.rbxcdn.com/180DAY-2e555b216403fccd10c74f6100fffb26/420/420/Image/Png/noFilter", value: "92.5K" },
        { name: "Dragon Shoes", qty: 2, image: "https://tr.rbxcdn.com/180DAY-13d9286ffadf4082e990779293451158/420/420/Image/Webp/noFilter", value: "85K" },
        { name: "Devil's Gift", qty: 1, image: "https://tr.rbxcdn.com/180DAY-4694b2e973dce652ac90d2956beca69b/420/420/Model/Webp/noFilter", value: "60K" }
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
        { name: "Float", qty: 5, image: "https://tr.rbxcdn.com/180DAY-54d520be01198073c66893158ca6c3a0/420/420/Image/Webp/noFilter", value: "430K" }
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
        { name: "Ghosdeeri", qty: 1, image: "https://tr.rbxcdn.com/180DAY-82ce43f5ffad45ef29697754aa98d5f3/420/420/Hat/Webp/noFilter", value: "575K" }
    ],
    looking_for: "offers",
    notes: "Discord is @volant_2",
    timestamp: new Date('2026-08-28T14:30:00').getTime(),
    offeringTotal: 0,
    lookingTotal: 0
}];


const CUSTOM_TOKEN_VALUES = {
    "Float": 800000
};

// =============================================================
// 3. RENDER ITEMS
// =============================================================
function renderItems(filterTier = 'all', filterStab = 'all', search = '') {
    const tier4Grid = document.getElementById('tier4Grid');
    const highGrid = document.getElementById('highGrid');
    const midGrid = document.getElementById('midGrid');
    const lowGrid = document.getElementById('lowGrid');
    
    if (!tier4Grid || !highGrid || !midGrid || !lowGrid) return;
    
    tier4Grid.innerHTML = '';
    highGrid.innerHTML = '';
    midGrid.innerHTML = '';
    lowGrid.innerHTML = '';

    const searchLower = search.toLowerCase().trim();

    const filtered = ITEMS.filter(item => {
        const matchTier = filterTier === 'all' || item.tier === filterTier;
        const matchStab = filterStab === 'all' || item.stability === filterStab;
        const matchSearch = !searchLower || item.name.toLowerCase().includes(searchLower);
        return matchTier && matchStab && matchSearch;
    });

    const tier4 = filtered.filter(i => i.tier === 'tier4');
    const high = filtered.filter(i => i.tier === 'high');
    const mid = filtered.filter(i => i.tier === 'mid');
    const low = filtered.filter(i => i.tier === 'low');

    tier4.forEach(item => tier4Grid.appendChild(createCard(item)));
    high.forEach(item => highGrid.appendChild(createCard(item)));
    mid.forEach(item => midGrid.appendChild(createCard(item)));
    low.forEach(item => lowGrid.appendChild(createCard(item)));
}

function createCard(item) {
    const card = document.createElement('div');
    card.className = 'item-card';

    if (item.isDual) {
    card.classList.add('dual-item');
    const leftContainer = document.createElement('div');
    leftContainer.style.display = 'flex';
    leftContainer.style.flexDirection = 'column';
    leftContainer.style.gap = '6px';
    leftContainer.style.alignItems = 'center';

    const dualContainer = document.createElement('div');
    dualContainer.className = 'dual-items-container';

    item.items.forEach(subItem => {
        const entry = document.createElement('div');
        entry.className = 'dual-item-entry';
        
        // ICON - always show the image first
        const icon = document.createElement('div');
        icon.className = 'item-icon';
        if (subItem.image) {
            const img = document.createElement('img');
            img.src = subItem.image;
            img.alt = subItem.name;
            icon.appendChild(img);
        } else {
            icon.textContent = '✦';
        }
        entry.appendChild(icon);

        // Create a container for the text info
        const infoContainer = document.createElement('div');
        infoContainer.style.display = 'flex';
        infoContainer.style.flexDirection = 'column';
        infoContainer.style.gap = '2px';

        // Item name (Card / Frame)
        const nameSpan = document.createElement('span');
        nameSpan.style.cssText = 'font-size:0.7rem;font-weight:800;color:var(--text-secondary);';
        nameSpan.textContent = subItem.name;
        infoContainer.appendChild(nameSpan);

        // Value row: Base value + Token badge (tiny, to the right)
        const valueRow = document.createElement('div');
        valueRow.style.display = 'flex';
        valueRow.style.alignItems = 'center';
        valueRow.style.gap = '6px';

        // Base value
        const baseValSpan = document.createElement('span');
        baseValSpan.className = 'item-value';
        baseValSpan.style.cssText = 'height:1.8em;line-height:1.8;box-sizing:border-box;font-size:0.8rem;padding:0 8px;';
        baseValSpan.textContent = subItem.value;
        valueRow.appendChild(baseValSpan);

        // Token badge (tiny pill, to the right of base value)
        if (subItem.numericValue && subItem.numericValue > 0) {
            const tokenVal = getTokenValue(subItem);
            if (tokenVal) {
                const tokenBadge = document.createElement('span');
                tokenBadge.style.cssText = `
                    display: inline-flex;
                    align-items: center;
                    gap: 1px;
                    background: rgba(255, 200, 0, 0.12);
                    border: 1px solid #f0c040;
                    border-radius: 12px;
                    padding: 0 6px;
                    font-weight: 800;
                    font-size: 0.6rem;
                    color: #f0c040;
                    height: 1.6em;
                    line-height: 1.6;
                    box-sizing: border-box;
                    white-space: nowrap;
                `;
                
                const tokenIcon = document.createElement('img');
                tokenIcon.src = TOKEN_ICON;
                tokenIcon.alt = '🪙';
                tokenIcon.style.cssText = 'width:12px;height:12px;object-fit:contain;';
                tokenIcon.onerror = function() {
                    this.style.display = 'none';
                    const fallback = document.createElement('span');
                    fallback.textContent = TOKEN_EMOJI;
                    fallback.style.cssText = 'font-size:0.7rem;';
                    this.parentNode.insertBefore(fallback, this.nextSibling);
                };
                tokenBadge.appendChild(tokenIcon);
                
                const tokenText = document.createElement('span');
                tokenText.textContent = formatTokenValue(tokenVal);
                tokenBadge.appendChild(tokenText);
                
                valueRow.appendChild(tokenBadge);
            }
        }

        infoContainer.appendChild(valueRow);
        entry.appendChild(infoContainer);

        dualContainer.appendChild(entry);
    });

    leftContainer.appendChild(dualContainer);

    const info = document.createElement('div');
    info.className = 'item-info';
    const name = document.createElement('div');
    name.className = 'item-name';
    name.innerHTML = `${item.name} <span class="dual-set-badge">SET</span>`;
    if (item.new) {
        const newBadge = document.createElement('span');
        newBadge.className = 'item-new-badge';
        newBadge.textContent = 'NEW!';
        name.appendChild(newBadge);
    }
    info.appendChild(name);
    const meta = document.createElement('div');
meta.className = 'item-meta';
// Add stability badge back
const stabSpan = document.createElement('span');
stabSpan.className = `item-stability ${item.stability.toLowerCase().replace(/ /g, '')}`;
stabSpan.textContent = item.stability;
meta.appendChild(stabSpan);
const demSpan = document.createElement('span');
demSpan.className = 'item-demand';
demSpan.innerHTML = `demand <b>${item.demand}</b> · rarity ${item.rarity}`;
meta.appendChild(demSpan);
const originSpan = document.createElement('span');
originSpan.className = 'item-origin';
originSpan.textContent = item.origin;
meta.appendChild(originSpan);
info.appendChild(meta);
    card.appendChild(leftContainer);
    card.appendChild(info);
    return card;
}

    const icon = document.createElement('div');
    icon.className = 'item-icon';
    if (item.image) {
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.name;
        icon.appendChild(img);
    } else {
        icon.textContent = '✦';
    }

    const info = document.createElement('div');
    info.className = 'item-info';
    const name = document.createElement('div');
    name.className = 'item-name';
    name.textContent = item.name;
    if (item.new) {
        const newBadge = document.createElement('span');
        newBadge.className = 'item-new-badge';
        newBadge.textContent = 'NEW!';
        name.appendChild(newBadge);
    }
    info.appendChild(name);
    const meta = document.createElement('div');
    meta.className = 'item-meta';
    
// Create a container for value and token
// Create a container for value, token, and stability
const valueContainer = document.createElement('span');
valueContainer.style.display = 'flex';
valueContainer.style.alignItems = 'center';
valueContainer.style.gap = '6px';
valueContainer.style.height = '100%';

// Token value (only if numericValue > 0) - placed FIRST
if (item.numericValue && item.numericValue > 0) {
    const tokenVal = getTokenValue(item);
    if (tokenVal) {
        const tokenSpan = document.createElement('span');
        tokenSpan.style.cssText = `
            display: inline-flex;
            align-items: center;
            gap: 2px;
            background: rgba(255, 200, 0, 0.15);
            border: 1.5px solid #f0c040;
            border-radius: 20px;
            padding: 0 10px;
            font-weight: 900;
            font-size: 0.8rem;
            color: #f0c040;
            height: 100%;
            min-height: 1.8em;
            line-height: 1.8;
            box-sizing: border-box;
        `;
        // Try to use image, fallback to emoji
        const tokenIcon = document.createElement('img');
        tokenIcon.src = TOKEN_ICON;
        tokenIcon.alt = '🪙';
        tokenIcon.style.cssText = 'width:16px;height:16px;object-fit:contain;';
        tokenIcon.onerror = function() {
            this.style.display = 'none';
            const fallback = document.createElement('span');
            fallback.textContent = TOKEN_EMOJI;
            fallback.style.cssText = 'font-size:0.9rem;';
            this.parentNode.insertBefore(fallback, this.nextSibling);
        };
        tokenSpan.appendChild(tokenIcon);
        
        const tokenText = document.createElement('span');
        tokenText.textContent = formatTokenValue(tokenVal);
        tokenSpan.appendChild(tokenText);
        
        valueContainer.appendChild(tokenSpan);
    }
}

// Base value - placed SECOND
const baseValSpan = document.createElement('span');
baseValSpan.className = 'item-value';
baseValSpan.style.cssText = 'height:100%;min-height:1.8em;line-height:1.8;box-sizing:border-box;';
baseValSpan.textContent = typeof item.value === 'string' ? item.value : item.value.toLocaleString() + (item.range &&
    item.range !== '[N/A]' ? ` (${item.range})` : '');
valueContainer.appendChild(baseValSpan);

// Stability badge - placed THIRD (right after base value)
const stabSpan = document.createElement('span');
stabSpan.className = `item-stability ${item.stability.toLowerCase().replace(/ /g, '')}`;
stabSpan.style.cssText = `
    font-size: 0.75rem;
    font-weight: 800;
    padding: 2px 10px;
    border-radius: 30px;
    text-transform: uppercase;
    letter-spacing: 0.3px;
    display: inline-flex;
    align-items: center;
    height: 100%;
    min-height: 1.8em;
    line-height: 1.8;
    box-sizing: border-box;
`;
stabSpan.textContent = item.stability;
valueContainer.appendChild(stabSpan);

meta.appendChild(valueContainer);
    const demSpan = document.createElement('span');
    demSpan.className = 'item-demand';
    demSpan.innerHTML = `demand <b>${item.demand}</b> · rarity ${item.rarity}`;
    meta.appendChild(demSpan);
    const originSpan = document.createElement('span');
    originSpan.className = 'item-origin';
    originSpan.textContent = item.origin;
    meta.appendChild(originSpan);
    info.appendChild(meta);
    card.appendChild(icon);
    card.appendChild(info);
    return card;
}

// =============================================================
// 4. FILTER CONTROLS
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
// 5. THEME TOGGLE
// =============================================================
let currentTheme = 'dark';
const toggleDot = document.getElementById('toggleDot');

function setTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    if (toggleDot) {
        if (theme === 'light') {
            toggleDot.classList.add('active');
        } else {
            toggleDot.classList.remove('active');
        }
    }
    localStorage.setItem('fss-theme', theme);
}

// =============================================================
// 6. TRADE ADS
// =============================================================
function renderTradeAds() {
    const grid = document.getElementById('adsGrid');
    if (!grid) return;

    let ads = [...TRADE_ADS];

    ads.forEach(ad => {
    ad.offeringTotal = ad.offering.reduce((total, adItem) => {
        // Handle tokens separately
        if (adItem.name === "Tokens") {
            return total + (adItem.qty || 0);
        }
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
        grid.innerHTML = `
            <div style="grid-column:1/-1;text-align:center;color:var(--text-muted);padding:40px 0;">
                No trade ads yet.
            </div>
        `;
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
        ${i.name === "Tokens" ? 
            `<div style="font-size:2.5rem;padding:4px;">🪙</div>` :
            `<img src="${i.image || getItemImage(i.name)}" alt="${i.name}" style="width:48px;height:48px;object-fit:contain;border-radius:8px;border:1px solid var(--border-card);padding:4px;background:var(--bg-body);">`
        }
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

    const getItemImage = (itemName) => {
        const found = ITEMS.find(i => i.name.toLowerCase() === itemName.toLowerCase());
        return found?.image || '';
    };

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
    document.getElementById('viewAdModal').classList.remove('active');
}

function formatTime(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

function formatValue(val) {
    if (val >= 1000000) {
        return (val / 1000000).toFixed(2) + 'M';
    } else if (val >= 1000) {
        return (val / 1000).toFixed(1) + 'K';
    }
    return val.toLocaleString();
}

// =============================================================
// 7. TRADE CALCULATOR
// =============================================================
let calcItems = {
    your: [],
    their: []
};
let currentPickerSide = 'your';

function getAllItemsForPicker() {
    const items = [];
    ITEMS.forEach(item => {
        if (item.isDual) {
            item.items.forEach(sub => {
                if (sub.numericValue !== undefined && sub.numericValue > 0) {
                    items.push({
                        name: sub.name,
                        value: sub.value,
                        numericValue: sub.numericValue,
                        image: sub.image,
                        tier: item.tier
                    });
                }
            });
        } else {
            if (item.numericValue !== undefined && item.numericValue > 0) {
                items.push({
                    name: item.name,
                    value: item.value,
                    numericValue: item.numericValue,
                    image: item.image,
                    tier: item.tier
                });
            }
        }
    });
    return items;
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
    
    const allItems = getAllItemsForPicker();
    const searchLower = search.toLowerCase().trim();
    
    const filtered = allItems.filter(item => 
        !searchLower || item.name.toLowerCase().includes(searchLower)
    );
    
    const tierOrder = { tier4: 0, high: 1, mid: 2, low: 3 };
    filtered.sort((a, b) => (tierOrder[a.tier] || 4) - (tierOrder[b.tier] || 4));
    
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
        // Show both base and token value
        let valueText = item.value;
        const tokenVal = getTokenValue(item);
        if (tokenVal) {
            valueText += ` · 🪙${formatTokenValue(tokenVal)}`;
        }
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
    if (existing) {
        existing.qty = (existing.qty || 1) + 1;
    } else {
        calcItems[side].push({ ...item, qty: 1 });
    }
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
                
                // Tooltip on hover
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
    let yourTotal = 0;
    let yourTokenTotal = 0;
    calcItems.your.forEach(item => {
        yourTotal += item.numericValue * (item.qty || 1);
        const tokenVal = getTokenValue(item);
        if (tokenVal) {
            yourTokenTotal += tokenVal * (item.qty || 1);
        }
    });
    const yourTokens = parseInt(document.getElementById('calcYourTokens')?.value || 0);
    yourTotal += yourTokens;
    yourTokenTotal += yourTokens;
    
    let theirTotal = 0;
    let theirTokenTotal = 0;
    calcItems.their.forEach(item => {
        theirTotal += item.numericValue * (item.qty || 1);
        const tokenVal = getTokenValue(item);
        if (tokenVal) {
            theirTokenTotal += tokenVal * (item.qty || 1);
        }
    });
    const theirTokens = parseInt(document.getElementById('calcTheirTokens')?.value || 0);
    theirTotal += theirTokens;
    theirTokenTotal += theirTokens;
    
    const yourTotalEl = document.getElementById('calcYourTotal');
    const theirTotalEl = document.getElementById('calcTheirTotal');
    const yourTokenEl = document.getElementById('calcYourTokenTotal');
    const theirTokenEl = document.getElementById('calcTheirTokenTotal');
    
    if (yourTotalEl) yourTotalEl.textContent = formatValue(yourTotal);
    if (theirTotalEl) theirTotalEl.textContent = formatValue(theirTotal);
    if (yourTokenEl) yourTokenEl.innerHTML = `🪙 ${formatValue(yourTokenTotal)}`;
    if (theirTokenEl) theirTokenEl.innerHTML = `🪙 ${formatValue(theirTokenTotal)}`;
    
    const resultEl = document.getElementById('calcResult');
    if (!resultEl) return;
    
    if (yourTotal === 0 && theirTotal === 0) {
        resultEl.textContent = 'Add items to both sides to calculate';
        resultEl.className = 'calc-result';
        return;
    }
    
    // Calculate win/lose based on BASE VALUE (not tokens)
    const diff = yourTotal - theirTotal;
    const diffPercent = theirTotal > 0 ? (diff / theirTotal) * 100 : 0;
    
    let verdict, className;
    if (diff < 0 && Math.abs(diffPercent) > 5) {
        verdict = '✅ WIN';
        className = 'win';
    } else if (diff > 0 && Math.abs(diffPercent) > 5) {
        verdict = '❌ LOSE';
        className = 'lose';
    } else {
        verdict = '⚖️ FAIR';
        className = 'fair';
    }
    
    const diffStr = diff > 0 ? `+${formatValue(diff)}` : formatValue(diff);
    resultEl.className = `calc-result ${className}`;
    resultEl.innerHTML = `
        <div>${verdict}</div>
        <div class="diff">${formatValue(yourTotal)} vs ${formatValue(theirTotal)} · ${diffStr}</div>
        <div style="font-size:0.8rem;color:var(--text-muted);margin-top:4px;">🪙 ${formatValue(yourTokenTotal)} vs 🪙 ${formatValue(theirTokenTotal)}</div>
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

    // Load saved theme
    const savedTheme = localStorage.getItem('fss-theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        setTheme('dark');
    }

    // Filter listeners (only if they exist on the page)
    const tierFilter = document.getElementById('tierFilter');
    const stabilityFilter = document.getElementById('stabilityFilter');
    const searchInput = document.getElementById('searchInput');
    const resetBtn = document.getElementById('resetFiltersBtn');

    if (tierFilter) tierFilter.addEventListener('change', applyFilters);
    if (stabilityFilter) stabilityFilter.addEventListener('change', applyFilters);
    if (searchInput) searchInput.addEventListener('input', applyFilters);
    if (resetBtn) resetBtn.addEventListener('click', resetFilters);

    // Calculator listeners
    const yourTokens = document.getElementById('calcYourTokens');
    const theirTokens = document.getElementById('calcTheirTokens');
    if (yourTokens) yourTokens.addEventListener('input', updateCalcTotals);
    if (theirTokens) theirTokens.addEventListener('input', updateCalcTotals);

    // Modal overlay click to close
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
});