import { Images } from "../assets";
interface ModalData {
    id: number;
    txt: string;
    src: any; 
  }

  const emojis = ['😊', '👍', '❤️', '🎉', '🔥'];

const dotModalData: ModalData[] = [ 
    {
      id: 1,
      txt: 'View Details',
      src: Images.eye,
    },
    {
      id: 2,
      txt: 'Pin Chat',
      src: Images.pin,
    },
    {
      id: 3,
      txt: 'Search Chat',
      src: Images.blackSearch,
    },
    {
      id: 4,
      txt: 'Delete',
      src: Images.Delete,
    },

  ]

  const Messagemodaldata: ModalData[] = [
    {
      id: 1,
      txt: 'Reply',
      src: Images.Reply,
    },
    {
      id: 2,
      txt: 'Forward',
      src: Images.Forward,
    },
    {
      id: 3,
      txt: 'Copy',
      src: Images.Copy,
    },
    {
      id: 6,
      txt: 'star',
      src: Images.Star,
    },
    {
      id: 5,
      txt: 'Report',
      src: Images.Report,
    },
    {
      id: 4,
      txt: 'Delete',
      src: Images.Delete,
    },
  ];

  const modaldata: ModalData[] = [
    {
      id: 1,
      txt: 'New Chat',
      src: Images.newChat,
    },
    {
      id: 2,
      txt: 'Group Chat',
      src: Images.groupChat,
    },
    {
      id: 3,
      txt: 'Announcement',
      src: Images.newAnnounc,
    },
  ];

  export {dotModalData,Messagemodaldata,modaldata,emojis}