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
        value: "1.5M",
        range: "[N/A]",
        stability: "Stable",
        demand: 4,
        rarity: 10,
        origin: "Developer Gift",
        tier: "tier4",
        image: "https://raw.githubusercontent.com/moonlast/fss-values/refs/heads/main/devband.png",
        numericValue: 1500000
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
        name: "Telamon's Chicken Hat",
        value: "625K",
        range: "[N/A]",
        stability: "Unstable",
        demand: 4,
        rarity: 8,
        origin: "Mystic Pack",
        tier: "high",
        image: "https://tr.rbxcdn.com/180DAY-811029bf44237ea36da06d104cafe37c/420/420/Hat/Webp/noFilter",
        numericValue: 625000
    }, {
        name: "Ghosdeeri",
        value: "565K",
        range: "[N/A]",
        stability: "Stable",
        demand: 8,
        rarity: 6,
        origin: "Mystic Pack",
        tier: "high",
        image: "https://tr.rbxcdn.com/180DAY-82ce43f5ffad45ef29697754aa98d5f3/420/420/Hat/Webp/noFilter",
        numericValue: 565000
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
        items: [{ name: "MATSbxb Signature Dev Card", value: "235K",
                image: "https://tr.rbxcdn.com/180DAY-f8ebb39e75374ccca999869360977baf/420/420/Image/Png/noFilter",
                numericValue: 235000 }, { name: "MATSbxb Signature Dev Frame", value: "110K",
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
        image: "https://raw.githubusercontent.com/moonlast/fss-values/refs/heads/main/crown.png",
        numericValue: 225000
    }, {
        name: "FCWC Shoes Red/Black",
        value: "160K",
        range: "[N/A]",
        stability: "Fluctuating",
        demand: 5,
        rarity: 5,
        origin: "FCWC Event",
        tier: "high",
        image: "https://tr.rbxcdn.com/180DAY-54be9b36829e6ed8f8803061045bd67e/420/420/Image/Webp/noFilter",
        numericValue: 160000
    }, {
        name: "Party Time",
        value: "150K",
        range: "[N/A]",
        stability: "Stable",
        demand: 3,
        rarity: 6,
        origin: "Limited Quantity Code",
        tier: "high",
        image: "https://tr.rbxcdn.com/180DAY-7114b0ad6050b37eeecefe238138b4f0/420/420/Image/Webp/noFilter",
        numericValue: 150000
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
        name: "Penguin Dance",
        value: "142.5K",
        range: "[N/A]",
        stability: "Doing Well",
        demand: 5,
        rarity: 5,
        origin: "Robux Pack",
        tier: "high",
        image: "https://tr.rbxcdn.com/180DAY-3d1dec4970d91a70f714bad890137e41/420/420/Image/Webp/noFilter",
        numericValue: 142500
    }, {
        name: "Penguin Slide",
        value: "140K",
        range: "[N/A]",
        stability: "Doing Well",
        demand: 5,
        rarity: 5,
        origin: "Robux Pack",
        tier: "high",
        image: "https://tr.rbxcdn.com/180DAY-83183faeca6714bcd6130fa695a78d31/420/420/Image/Webp/noFilter",
        numericValue: 140000
    }, {
        name: "Orange Dance",
        value: "135K",
        range: "[N/A]",
        stability: "Doing Well",
        demand: 4,
        rarity: 5,
        origin: "Robux Pack",
        tier: "high",
        image: "https://tr.rbxcdn.com/180DAY-106d9f12b2c7e5fdb7423a58197a2a03/420/420/Image/Webp/noFilter",
        numericValue: 135000
    }, {
        name: "WC26 Backwards Celebration",
        value: "125K",
        range: "[N/A]",
        stability: "Doing Well",
        demand: 5,
        rarity: 4,
        origin: "Robux Pack",
        tier: "high",
        image: "https://tr.rbxcdn.com/180DAY-978cff2d7d7ab20ce9287b76a3c8be24/420/420/Image/Webp/noFilter",
        numericValue: 125000
    }, {
        name: "Front Flip",
        value: "125K",
        range: "[N/A]",
        stability: "Stable",
        demand: 5,
        rarity: 4,
        origin: "Robux Battlepass",
        tier: "high",
        image: "https://tr.rbxcdn.com/180DAY-875c220d586bd555e66f951a9cb42add/420/420/Image/Webp/noFilter",
        numericValue: 125000
    }, {
        name: "Gold Champion Band [B]",
        value: "120K",
        range: "[N/A]",
        stability: "Stable",
        demand: 4,
        rarity: 4,
        origin: "1.0 SLS Clans Reward",
        tier: "high",
        image: "https://raw.githubusercontent.com/moonlast/fss-values/refs/heads/main/goldb.png",
        numericValue: 120000
    }, {
        name: "WC26 Trophy Celebration",
        value: "117.5K",
        range: "[N/A]",
        stability: "Doing Well",
        demand: 5,
        rarity: 4,
        origin: "Robux Pack",
        tier: "high",
        image: "https://tr.rbxcdn.com/180DAY-4e200221c73296ecf8a01099565b13bd/420/420/Image/Png/noFilter",
        numericValue: 117500
    },

    // MID TIER
    {
        name: "Flip",
        value: "92.5K",
        range: "[N/A]",
        stability: "Stable",
        demand: 5,
        rarity: 3,
        origin: "Robux Pack",
        tier: "mid",
        image: "https://tr.rbxcdn.com/180DAY-2e555b216403fccd10c74f6100fffb26/420/420/Image/Png/noFilter",
        numericValue: 92500
    }, {
        name: "Dragon Shoes",
        value: "85K",
        range: "[N/A]",
        stability: "Stable",
        demand: 4,
        rarity: 4,
        origin: "Robux Pack",
        tier: "mid",
        image: "https://tr.rbxcdn.com/180DAY-13d9286ffadf4082e990779293451158/420/420/Image/Webp/noFilter",
        numericValue: 85000
    }, {
        name: "Shark Shoes",
        value: "75K",
        range: "[N/A]",
        stability: "Stable",
        demand: 4,
        rarity: 4,
        origin: "Robux Pack",
        tier: "mid",
        image: "https://raw.githubusercontent.com/moonlast/fss-values/refs/heads/main/shark.png",
        numericValue: 75000
    }, {
        name: "67",
        value: "75K",
        range: "[N/A]",
        stability: "Stable",
        demand: 3,
        rarity: 5,
        origin: "Robux Pack",
        tier: "mid",
        image: "https://tr.rbxcdn.com/180DAY-e332d112e5b4a3dc5d99db76c0b5452b/420/420/Image/Webp/noFilter",
        numericValue: 75000
    }, {
        name: "Devil's Gift",
        value: "60K",
        range: "[N/A]",
        stability: "Doing Well",
        demand: 5,
        rarity: 6,
        origin: "Limited Quantity Code",
        tier: "mid",
        image: "https://tr.rbxcdn.com/180DAY-4694b2e973dce652ac90d2956beca69b/420/420/Model/Webp/noFilter",
        numericValue: 60000
    }, {
        name: "Grinch Shoes",
        value: "50K",
        range: "[N/A]",
        stability: "Stable",
        demand: 2,
        rarity: 5,
        origin: "1.0 Christmas Event",
        tier: "mid",
        image: "https://raw.githubusercontent.com/moonlast/fss-values/refs/heads/main/grinch.png",
        numericValue: 50000
    }, {
        name: "Kawaii Set",
        stability: "Stable",
        demand: 3,
        rarity: 4,
        origin: "OG Premium Card",
        tier: "mid",
        isDual: true,
        items: [{ name: "Kawaii Card", value: "40K", image: "https://tr.rbxcdn.com/180DAY-6c9ca67f584bd53fd408303a2ef86aa1/420/420/Image/Png/noFilter",
                numericValue: 40000 }, { name: "Kawaii Frame", value: "30K",
                image: "https://tr.rbxcdn.com/180DAY-fe88ec3178eaec8fe6faac886c7c9b0d/420/420/Image/Png/noFilter",
                numericValue: 30000 }]
    }, {
        name: "The Panther",
        value: "35K",
        range: "[N/A]",
        stability: "Stable",
        demand: 5,
        rarity: 3,
        origin: "Prehistoric Battlepass",
        tier: "mid",
        image: "https://tr.rbxcdn.com/180DAY-20fa459c08ff31fdfb37ea8b91027760/420/420/Image/Webp/noFilter",
        numericValue: 35000
    }, {
        name: "Leather Boots",
        value: "32.5K",
        range: "[N/A]",
        stability: "Stable",
        demand: 3,
        rarity: 4,
        origin: "Prehistoric Battlepass",
        tier: "mid",
        image: "https://raw.githubusercontent.com/moonlast/fss-values/refs/heads/main/leather.png",
        numericValue: 32500
    }, {
        name: "Lightning Wolf Shoes",
        value: "32.5K",
        range: "[N/A]",
        stability: "Stable",
        demand: 4,
        rarity: 3,
        origin: "Robux Battlepass Reward",
        tier: "mid",
        image: "https://tr.rbxcdn.com/180DAY-bd82cd6716f30918d1b60f54cfab4a57/420/420/Image/Png/noFilter",
        numericValue: 32500
    }, {
        name: "WC26 Valkyrie",
        value: "32.5K",
        range: "[N/A]",
        stability: "Stable",
        demand: 2,
        rarity: 3,
        origin: "WC26 Event",
        tier: "mid",
        image: "https://raw.githubusercontent.com/moonlast/fss-values/refs/heads/main/wcvalk.png",
        numericValue: 32500
    }, {
        name: "Dragon Set",
        stability: "Stable",
        demand: 4,
        rarity: 4,
        origin: "OG Premium Card",
        tier: "mid",
        isDual: true,
        items: [{ name: "Dragon Card", value: "25K", image: "https://tr.rbxcdn.com/180DAY-7095a98743c555638750ceefec64c1a8/420/420/Image/Png/noFilter",
                numericValue: 25000 }, { name: "Dragon Frame", value: "35K",
                image: "https://tr.rbxcdn.com/180DAY-899bfb7e6c12bf4299f04f5bc2ec36e8/420/420/Image/Png/noFilter",
                numericValue: 35000 }]
    }, {
        name: "Royal Fleur De Lis Set",
        stability: "Stable",
        demand: 3,
        rarity: 4,
        origin: "OG Premium Card",
        tier: "mid",
        isDual: true,
        items: [{ name: "Royal Card", value: "20K", image: "https://tr.rbxcdn.com/180DAY-2778c242d027070bf587227354109420/420/420/Image/Png/noFilter",
                numericValue: 20000 }, { name: "Royal Frame", value: "40K",
                image: "https://tr.rbxcdn.com/180DAY-6a8dc1bb1da6c3313dd0757a2df5559c/420/420/Image/Png/noFilter",
                numericValue: 40000 }]
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
        demand: 4,
        rarity: 3,
        origin: "WC26 Event",
        tier: "low",
        image: "https://raw.githubusercontent.com/moonlast/fss-values/refs/heads/main/suncard.png",
        numericValue: 30000
    },

    // LOW TIER
    {
        name: "Gold Champion Band [L]",
        value: "25K",
        stability: "Stable",
        demand: 2,
        rarity: 3,
        origin: "1.0 SLS Clans Reward",
        tier: "low",
        image: "https://raw.githubusercontent.com/moonlast/fss-values/refs/heads/main/goldl.png",
        numericValue: 25000
    }, {
        name: "Dino Shoes",
        value: "22.5K",
        stability: "Stable",
        demand: 1,
        rarity: 3,
        origin: "Prehistoric Battlepass",
        tier: "low",
        image: "https://raw.githubusercontent.com/moonlast/fss-values/refs/heads/main/dinos.png",
        numericValue: 22500
    }, {
        name: "Gold Champion Band [R]",
        value: "22.5K",
        stability: "Stable",
        demand: 2,
        rarity: 3,
        origin: "1.0 SLS Clans Reward",
        tier: "low",
        image: "https://raw.githubusercontent.com/moonlast/fss-values/refs/heads/main/goldr.png",
        numericValue: 22500
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
        name: "Leaves Set",
        stability: "Stable",
        demand: 2,
        rarity: 4,
        origin: "Prehistoric Battlepass",
        tier: "low",
        isDual: true,
        items: [{ name: "Leaves Card", value: "15K", image: "https://tr.rbxcdn.com/180DAY-2b5cde95564906b08473d1bbfbafd938/420/420/Image/Webp/noFilter",
                numericValue: 15000 }, { name: "Leaves Frame", value: "20K",
                image: "https://tr.rbxcdn.com/180DAY-acace68531049c2d38efc4504e62147b/420/420/Image/Png/noFilter",
                numericValue: 20000 }]
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
        name: "Wild Dance",
        value: "17.5K",
        range: "[N/A]",
        stability: "Doing Well",
        demand: 5,
        rarity: 2,
        origin: "Prehistoric Battlepass",
        tier: "low",
        image: "https://tr.rbxcdn.com/180DAY-106d9f12b2c7e5fdb7423a58197a2a03/420/420/Image/Webp/noFilter",
        numericValue: 17500
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
        image: "https://raw.githubusercontent.com/moonlast/fss-values/refs/heads/main/amplify.png",
        numericValue: 15000
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
        name: "Unfinished Business",
        value: "10K",
        range: "[N/A]",
        stability: "Unstable",
        demand: 2,
        rarity: 1,
        origin: "Robux Item",
        tier: "low",
        new: true,
        image: "https://raw.githubusercontent.com/moonlast/fss-values/refs/heads/main/unfinished.png",
        numericValue: 10000
    }, {
        name: "ESP Sagrada Crown",
        value: "10K",
        range: "[N/A]",
        stability: "Stable",
        demand: 2,
        rarity: 1,
        origin: "ESP WC Event",
        tier: "low",
        image: "https://raw.githubusercontent.com/moonlast/fss-values/refs/heads/main/sagrada.png",
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
        image: "https://raw.githubusercontent.com/moonlast/fss-values/refs/heads/main/silverb.png",
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
        name: "Biohazard Set",
        stability: "Underpaid",
        demand: 2,
        rarity: 4,
        origin: "OG Premium Card",
        tier: "low",
        isDual: true,
        items: [{ name: "Biohazard Card", value: "10K", image: "https://tr.rbxcdn.com/180DAY-37b521d2cf6c475f1cd2974832831829/420/420/Image/Png/noFilter",
                numericValue: 10000 }, { name: "Biohazard Frame", value: "8K",
                image: "https://tr.rbxcdn.com/180DAY-09b2307f7cf33dc4e0e59b23b5a4ea3c/420/420/Image/Webp/noFilter",
                numericValue: 8000 }]
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
        image: "https://raw.githubusercontent.com/moonlast/fss-values/refs/heads/main/fur.png",
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
    }, {
        name: "Bronze Champion Band [B]",
        value: "5K",
        range: "[N/A]",
        stability: "Stable",
        demand: 2,
        rarity: 2,
        origin: "1.0 SLS Clans Reward",
        tier: "low",
        image: "https://raw.githubusercontent.com/moonlast/fss-values/refs/heads/main/bronzeb.png",
        numericValue: 5000
    }, {
        name: "Rivalry Soccer Shoes",
        value: "4K",
        range: "[N/A]",
        stability: "Unstable",
        demand: 1,
        rarity: 1,
        origin: "Robux Item",
        tier: "low",
        new: true,
        image: "https://raw.githubusercontent.com/moonlast/fss-values/refs/heads/main/pshoes.png",
        numericValue: 4000
    },
];

// =============================================================
// 2. RENDER ITEMS
// =============================================================
function renderItems(filterTier = 'all', filterStab = 'all', search = '') {
    const tier4Grid = document.getElementById('tier4Grid');
    const highGrid = document.getElementById('highGrid');
    const midGrid = document.getElementById('midGrid');
    const lowGrid = document.getElementById('lowGrid');
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

    // Update calculator dropdowns
    populateCalcDropdowns();
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
            const valSpan = document.createElement('span');
            valSpan.className = 'item-value';
            valSpan.textContent = subItem.value;
            entry.appendChild(valSpan);
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
    const valSpan = document.createElement('span');
    valSpan.className = 'item-value';
    valSpan.textContent = typeof item.value === 'string' ? item.value : item.value.toLocaleString() + (item.range &&
        item.range !== '[N/A]' ? ` (${item.range})` : '');
    meta.appendChild(valSpan);
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
    card.appendChild(icon);
    card.appendChild(info);
    return card;
}

// =============================================================
// 3. FILTER CONTROLS
// =============================================================
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('tierFilter').addEventListener('change', applyFilters);
    document.getElementById('stabilityFilter').addEventListener('change', applyFilters);
    document.getElementById('searchInput').addEventListener('input', applyFilters);
    document.getElementById('resetFiltersBtn').addEventListener('click', resetFilters);
});

function applyFilters() {
    const tier = document.getElementById('tierFilter').value;
    const stab = document.getElementById('stabilityFilter').value;
    const search = document.getElementById('searchInput').value;
    renderItems(tier, stab, search);
}

function resetFilters() {
    document.getElementById('tierFilter').value = 'all';
    document.getElementById('stabilityFilter').value = 'all';
    document.getElementById('searchInput').value = '';
    renderItems('all', 'all', '');
}

// =============================================================
// 4. THEME TOGGLE
// =============================================================
let currentTheme = 'dark';
const toggleDot = document.getElementById('toggleDot');

function setTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'light') {
        toggleDot.classList.add('active');
    } else {
        toggleDot.classList.remove('active');
    }
    localStorage.setItem('fss-theme', theme);
}

document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('fss-theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        setTheme('dark');
    }
});

document.getElementById('themeToggle').addEventListener('click', function(e) {
    e.stopPropagation();
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

// =============================================================
// 5. TRADE CALCULATOR (REDESIGNED)
// =============================================================

let calcItems = {
    your: [],
    their: []
};
let currentPickerSide = 'your';

// Get all items for the picker
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
        document.getElementById('modalSearchInput').value = '';
    }
}

function closeItemPicker() {
    const modal = document.getElementById('itemPickerModal');
    if (modal) modal.classList.remove('active');
}

function filterModalItems() {
    const search = document.getElementById('modalSearchInput').value;
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
    
    // Sort by tier order: tier4, high, mid, low
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
        valueSpan.textContent = item.value;
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
                
                div.onclick = () => {
                    removeItemFromCalc(side, index);
                };
                
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
    let yourTotal = 0;
    calcItems.your.forEach(item => {
        yourTotal += item.numericValue * (item.qty || 1);
    });
    const yourTokens = parseInt(document.getElementById('calcYourTokens')?.value || 0);
    yourTotal += yourTokens;
    
    let theirTotal = 0;
    calcItems.their.forEach(item => {
        theirTotal += item.numericValue * (item.qty || 1);
    });
    const theirTokens = parseInt(document.getElementById('calcTheirTokens')?.value || 0);
    theirTotal += theirTokens;
    
    const yourTotalEl = document.getElementById('calcYourTotal');
    const theirTotalEl = document.getElementById('calcTheirTotal');
    if (yourTotalEl) yourTotalEl.textContent = formatValue(yourTotal);
    if (theirTotalEl) theirTotalEl.textContent = formatValue(theirTotal);
    
    const resultEl = document.getElementById('calcResult');
    if (!resultEl) return;
    
    if (yourTotal === 0 && theirTotal === 0) {
        resultEl.textContent = 'Add items to both sides to calculate';
        resultEl.className = 'calc-result';
        return;
    }
    
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
    `;
}

function formatValue(val) {
    if (val >= 1000000) {
        return (val / 1000000).toFixed(2) + 'M';
    } else if (val >= 1000) {
        return (val / 1000).toFixed(1) + 'K';
    }
    return val.toLocaleString();
}

function populateCalcDropdowns() {
    // Not needed for new design but kept for compatibility
}

// =============================================================
// 6. INIT
// =============================================================
document.addEventListener('DOMContentLoaded', function() {
    renderItems('all', 'all', '');
    renderCalcItems();
    updateCalcTotals();
    
    // Event listeners for calculator
    const yourTokens = document.getElementById('calcYourTokens');
    const theirTokens = document.getElementById('calcTheirTokens');
    if (yourTokens) yourTokens.addEventListener('input', updateCalcTotals);
    if (theirTokens) theirTokens.addEventListener('input', updateCalcTotals);
    
    // Close modal on overlay click
    const modal = document.getElementById('itemPickerModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === this) closeItemPicker();
        });
    }
    
    // Keyboard shortcut: Escape to close modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeItemPicker();
    });
});