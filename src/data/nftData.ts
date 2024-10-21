export interface NFT {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  creator: string;
  blockchain: string;
  tokenStandard: string;
}

export const nftData: NFT[] = [
  {
    id: 1,
    name: "Emerald Serenity",
    category: "Jade",
    price: 0.5,
    image: "https://images.stockcake.com/public/e/9/1/e916864a-9ff1-4c91-a671-6e91b1f837f2_medium/emerald-gemstone-close-up-stockcake.jpg",
    description: "A mesmerizing jade sculpture that embodies tranquility and balance.",
    creator: "JadeMaster",
    blockchain: "Base",
    tokenStandard: "ERC-721",
  },
  {
    id: 2,
    name: "Obsidian Night",
    category: "Obsidian",
    price: 0.7,
    image: "https://t4.ftcdn.net/jpg/01/88/00/07/360_F_188000718_sZ5zKTcHs5ybQZTtfdbeAe30rG0mnggW.jpg",
    description: "A sleek obsidian piece that captures the mystery of the night sky.",
    creator: "DarkStoneArtist",
    blockchain: "Base",
    tokenStandard: "ERC-1155",
  },
  {
    id: 3,
    name: "Amethyst Dream",
    category: "Amethyst",
    price: 0.6,
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=1600&q=80",
    description: "A stunning amethyst geode that radiates with mystical energy.",
    creator: "CrystalVisions",
    blockchain: "Base",
    tokenStandard: "ERC-721",
  },
  {
    id: 4,
    name: "Quartz Clarity",
    category: "Quartz",
    price: 0.4,
    image: "https://i.etsystatic.com/18223910/r/il/6a92d1/1678584091/il_570xN.1678584091_5csr.jpg",
    description: "A pure quartz crystal cluster with remarkable clarity and light-refracting properties.",
    creator: "ClearStoneCrafter",
    blockchain: "Base",
    tokenStandard: "SPL",
  },
  {
    id: 5,
    name: "Jade Whisper",
    category: "Jade",
    price: 0.8,
    image: "https://www.gia.edu/images/138016.jpg",
    description: "A delicate jade carving with intricate patterns that seem to whisper ancient secrets.",
    creator: "EmeraldArtisan",
    blockchain: "Base",
    tokenStandard: "ERC-721",
  },
  {
    id: 6,
    name: "Obsidian Mirror",
    category: "Obsidian",
    price: 0.9,
    image: "https://www.gemascanarias.com/2448-large_default/obsidiana-negra-en-bruto-9-cm.jpg",
    description: "A polished obsidian surface that reflects like a mirror, said to reveal hidden truths.",
    creator: "ObsidianOracle",
    blockchain: "Base",
    tokenStandard: "ERC-1155",
  },
];