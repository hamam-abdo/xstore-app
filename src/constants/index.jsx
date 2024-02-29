/* eslint-disable react/jsx-key */
import { IoHome, IoStorefront } from "react-icons/io5";
import { FaMicroblog } from "react-icons/fa6";
import { FcAbout } from "react-icons/fc";
import { IoMdContact } from "react-icons/io";
import { LuCalendarDays, LuEye } from "react-icons/lu";
import { IoChatboxOutline } from "react-icons/io5";

import {
  PC,
  Smart,
  TV,
  Wearable,
  WiFi_Video,
  Smart_Speaker,
  Assistant,
  Assistant2,
  Wireless,
  James,
  Band,
  Learning,
  Speaker,
  SmartThing,
  Camera,
  Wireless_White,
  Podcast,
  Interactive,
  Headphones,
  Voice_Control,
  Headphones2,
  Interactive2,
  Professional,
  Outdoor,
  HueCraft,
  Schuster,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
    icon: <IoHome size={25} />,
  },
  {
    id: "shop",
    title: "Shop",
    icon: <IoStorefront size={25} />,
  },
  {
    id: "blog",
    title: "Blog",
    icon: <FaMicroblog size={25} />,
  },
  {
    id: "about-us",
    title: "About us",
    icon: <FcAbout className="black" size={25} />,
  },
  {
    id: "contact-us",
    title: "Contacts",
    icon: <IoMdContact size={25} />,
  },
];

export const Maxitems = [
  {
    id: "Computer & PC",
    head_title: "Computer & PC",
    min_title: "6 PRODUCTS",
    img: PC,
    length: 6
  },
  {
    id: "TV & Monitors",
    head_title: "TV & Monitors",
    min_title: "5 PRODUCTS",
    img: TV,
    length: 5
  },
  {
    id: "Wearable Items",
    head_title: "Wearable Items",
    min_title: "9 PRODUCTS",
    img: Wearable,
    length: 9
  },
  {
    id: "Smart Gadgets",
    head_title: "Smart Gadgets",
    min_title: "2 PRODUCTS",
    img: Smart,
    length: 2
  },
];

export const Fullitems = [
  {
    id: "1",
    Categories: [ "Computer & PC" , "Wearable Items"],
    title: "Google – Nest Hello Smart Wi-Fi Video Doorbell",
    SKU: "1231-7",
    price: "$1,300.00",
    prices: 1300,
    img: WiFi_Video,
    Trending: "false",
  },
  {
    id: "2",
    Categories: ["Computer & PC", "Wearable Items"],
    title: "Nest Mini Smart Speaker with Google Assistant",
    SKU: "1231-4",
    price: "$300.00",
    prices: 300,
    img: Assistant,
    Trending: "true",
  },

  {
    id: "3",
    Categories: ["TV & Monitors"],
    title: "Nest Mini Smart Speaker with Google Assistant",
    SKU: "1231-8-1",
    price: "$500.00",
    prices: 500,
    img: Assistant2,
    Trending: "false",
  },
  {
    id: "4",
    Categories: ["Smart Gadgets", "Wearable Items"],
    title: "Amazon Echo Dot (3rd Gen) Smart Speaker with Alexa",
    SKU: "1231-5",
    price: "$805.00",
    prices: 805,
    img: Smart_Speaker,
    Trending: "false",
  },

  {
    id: "5",
    Categories: [ "Wearable Items" , "Computer & PC"],
    title: "Hi-Resolution Bluetooth 4.0 Wireless Speakers",
    SKU: "1231-1",
    price: "$320.00",
    prices: 320,
    img: Wireless,
    Trending: "true",
  },
  {
    id: "6",
    Categories: ["Computer & PC"],
    title: "Indoor/Outdoor Wire Free 1080p Security Camera",
    SKU: "1231-6",
    price: "$540.00",
    prices: 540,
    img: James,
    Trending: "false",
  },
  {
    id: "7",
    Categories: [ "Wearable Items" , "TV & Monitors"],
    title: "Linksys – Velop AC2200 Band Mesh Wi-Fi System",
    SKU: "1231-8",
    price: "$300.00",
    prices: 300,
    img: Band,
    Trending: "false",
  },
  {
    id: "8",
    Categories: ["Wearable Items"],
    title: "Nest Learning Thermostat 3rd Gen in Stainless Steel",
    SKU: "1231-9",
    price: "$520.00",
    prices: 520,
    img: Learning,
    Trending: "false",
  },
  {
    id: "9",
    Categories: [
      "TV & Monitors",
      "Computer & PC",
      "Smart Gadgets",
      "Wearable Items",
    ],
    title: "Olufsen 17 Wireless Bluetooth Portable Speaker",
    SKU: "1231",
    price: "$300.00",
    prices: 300,
    img: Speaker,
    Trending: "true",
  },
  {
    id: "10",
    Categories: ["TV & Monitors"],
    title: "SmartThing Indoor 1080p Bluetooth Headphones",
    SKU: "1231-2",
    price: "$149.00",
    prices: 149,
    img: SmartThing,
    Trending: "true",
  },
  {
    id: "11",
    Categories: [ "Wearable Items" , "TV & Monitors"],
    title: "SmartThings Indoor 1080p Wi-Fi Security Camera",
    SKU: "1231-8-2",
    price: "800.00",
    prices: 800,
    img: Camera,
    Trending: "fales",
  },
  {
    id: "12",
    Categories: ["Computer & PC", "Wearable Items"],
    title: "Special Editions Wireless Controller Lunar White",
    SKU: "1231-3",
    price: "$639.00",
    prices: 639,
    img: Wireless_White,
    Trending: "true",
  },
];

export const articals = [
  {
    id: "1",
    Categories: ["Appiliances"],
    head_title: "Podcast Episode # 2 – Digital Voice Assistants",
    min_title: "in Worldwide Country",

    Post: [
      <LuCalendarDays />,
      "March 6, 2022 /",
      " Posted by Rose Tyler /",
      <LuEye />,
      " 726 /",
      <IoChatboxOutline />,
      " 0",
    ],
    Month: ["06", "Mar"],
    img: Podcast,
    Trending: "true",
  },
  {
    id: "2",
    Categories: ["Controllers"],
    head_title: "Interactive Push Notifications in Home Center",
    min_title: "in Z-Wave Systems",
    Post: [
      <LuCalendarDays />,
      " February 3, 2022 /",
      " Posted by Rose Tyler /",
      <LuEye />,
      " 599 /",
      <IoChatboxOutline />,
      " 0",
    ],
    Month: ["03", "Feb"],
    img: Interactive,
    Trending: "true",
  },
  {
    id: "3",
    Categories: ["Guidance", "Security"],
    head_title: "Reel In The Best Wireless Headphones for 2020",
    min_title: "",

    Post: [
      <LuCalendarDays />,
      " February 2, 2022 /",
      " Posted by Rose Tyler /",
      <LuEye />,
      " 574 /",
      <IoChatboxOutline />,
      " 0",
    ],
    Month: ["02", "Feb"],
    img: Headphones,

    Trending: "true",
  },
  {
    id: "4",
    Categories: ["Guidance"],
    head_title: "Voice Control – How Name Your Smart Device",
    min_title: "Interactive Push",
    Post: [
      <LuCalendarDays />,
      " January 23, 2022 /",
      " Posted by Rose Tyler /",
      <LuEye />,
      " 461  /",
      <IoChatboxOutline />,
      " 0",
    ],
    Month: ["23", "Jan"],
    img: Voice_Control,
    Trending: "true",
  },
  {
    id: "5",
    Categories: ["Controllers"],
    head_title: "Julie Schuster The Future Of Home Design",
    min_title: "And Technology",
    Post: [
      <LuCalendarDays />,
      " January 20, 2022 /",
      " Posted by Rose Tyler /",
      <LuEye />,
      " 500 /",
      <IoChatboxOutline />,
      " 0",
    ],
    Month: ["20", "Jan"],
    img: Schuster,
    Trending: "true",
  },
  {
    id: "6",
    Categories: ["Guidance"],
    head_title: "Reel In The Best Wireless Headphones For",
    min_title: "Voice Assistants 2020",
    Post: [
      <LuCalendarDays />,
      " February 1, 2022 /",
      " Posted by Rose Tyler /",
      <LuEye />,
      " 461  /",
      <IoChatboxOutline />,
      " 0",
    ],
    Month: ["01", "Feb"],
    img: Headphones2,
    Trending: "true",
  },
  {
    id: "7",
    Categories: ["Controllers"],
    head_title: "5 Innovative Ways To Increasing Your Home’s",
    min_title: "Value This Year",
    Post: [
      <LuCalendarDays />,
      " January 10, 2022 /",
      " Posted by Rose Tyler /",
      <LuEye />,
      " 455 /",
      <IoChatboxOutline />,
      " 0",
    ],
    img: Interactive2,
    Trending: "false",
  },
  {
    id: "8",
    Categories: ["Gadgets"],
    head_title: "What To Expect When Working With A Smart",
    min_title: "Home Professional",
    Post: [
      <LuCalendarDays />,
      " January 7, 2022 /",
      " Posted by Rose Tyler /",
      <LuEye />,
      " 476 /",
      <IoChatboxOutline />,
      " 0",
    ],
    img: Professional,
    Trending: "false",
  },
  {
    id: "9",
    Categories: ["Controllers"],
    head_title: "Tech That Takes Your Outdoor Spaces To The",
    min_title: "Next-level Gedget",
    Post: [
      <LuCalendarDays />,
      " January 13, 2022 /",
      " Posted by Rose Tyler /",
      <LuEye />,
      " 434 /",
      <IoChatboxOutline />,
      " 0",
    ],
    img: Outdoor,
    Trending: "false",
  },
  {
    id: "10",
    Categories: ["Controllers"],
    head_title: "HueCraft – A Minecraft Mod For Philips Hue How",
    min_title: "To Change Fibaro Home",
    Post: [
      <LuCalendarDays />,
      " January 3, 2022 /",
      " Posted by Rose Tyler /",
      <LuEye />,
      " 334 /",
      <IoChatboxOutline />,
      " 0",
    ],
    img: HueCraft,
    Trending: "false",
  },
];
export const articals_Categories = ["Appiliances" , "Controllers" , "Guidance" , "Security", "Gadgets"]