import {
  meet1Img,
  meet2Img,
  meet3Img,
  groupImg1,
  groupImg2,
  groupImg3,
  groupImg4,
  groupImg5,
  groupImg6,
  groupImg7,
  mem1Img,
  mem2Img,
  mem3Img,
  mem4Img,
} from ".";

export const friendsList = [
  {
    name: "Jan Tschichold",
    type: "follower",
    image: meet1Img,
  },
  {
    name: "Jan Tschichold",
    type: "follower",
    image: meet2Img,
  },
  {
    name: "Jan Tschichold",
    type: "follower",
    image: meet3Img,
  },
  {
    name: "Jan Tschichold",
    type: "follower",
    image: meet1Img,
  },
  {
    name: "Jan Tschichold",
    type: "follower",
    image: meet2Img,
  },
  {
    name: "Jan Tschichold",
    type: "follower",
    image: meet3Img,
  },
  {
    name: "Jan Tschichold",
    type: "following",
    image: meet1Img,
  },
  {
    name: "Jan Tschichold",
    type: "following",
    image: meet2Img,
  },
  {
    name: "Jan Tschichold",
    type: "following",
    image: meet3Img,
  },
  {
    name: "Jan Tschichold",
    type: "following",
    image: meet1Img,
  },
  {
    name: "Jan Tschichold",
    type: "following",
    image: meet2Img,
  },
  {
    name: "Jan Tschichold",
    type: "following",
    image: meet3Img,
  },
];
export const likes = [
  {
    name: "Jan Tschichold",
    image: meet1Img,
    superLike: true,
    likeBack: false,
  },
  {
    name: "Jan Tschichold",
    image: meet2Img,
    superLike: false,
    likeBack: false,
  },
  {
    name: "Jan Tschichold",
    image: meet3Img,
    superLike: false,
    likeBack: false,
  },
];

export const matches = [
  {
    name: "Jan Tschichold",
    image: meet1Img,
    isMatch: true,
  },
  {
    name: "Jan Tschichold",
    image: meet2Img,
    isMatch: true,
  },
  {
    name: "Jan Tschichold",
    image: meet3Img,
    isMatch: true,
  },
];
export const GroupData = [
  {
    id: 5,
    groupTitle: "New inventions for people with disabilities",
    groupImg: groupImg5,
    totalMembers: 1,
    mutualMembers: [mem1Img, mem2Img, mem3Img, mem4Img],
    totalmembers: "1.2",
    groupType: "Public Group",
    btnText: "Invite members",
    groupLink: "/mygroup"
  },
  {
    id: 7,
    groupTitle: "Healthcare issues and suggestions",
    groupImg: groupImg7,
    totalMembers: 1,
    mutualMembers: [mem1Img, mem2Img, mem3Img, mem4Img],
    totalmembers: "1.2",
    groupType: "Private Group",
    btnText: "Invite members",
    groupLink: "/mygroup"
  },
];
export const GroupList = [
  {
    id: 7,
    groupTitle: "Healthcare issues and suggestions",
    groupImg: groupImg7,
    totalMembers: 1,
    mutualMembers: [mem1Img, mem2Img, mem3Img, mem4Img],
    totalmembers: "1.2",
    groupType: "Private Group",
  },
  {
    id: 5,
    groupTitle: "New inventions for people with disabilities",
    groupImg: groupImg5,
    totalMembers: 1,
    mutualMembers: [mem1Img, mem2Img, mem3Img, mem4Img],
    totalmembers: "1.2",
    groupType: "Private Group",
  },
  {
    id: 6,
    groupTitle: "Healthcare issues and suggestions",
    groupImg: groupImg5,
    totalMembers: 1,
    mutualMembers: [mem1Img, mem2Img, mem3Img, mem4Img],
    totalmembers: "1.2",
    groupType: "Private Group",
  },
];
export const JoinedGroupList = [
  {
    id: 7,
    groupTitle: "Nyc Neighborhood Group",
    groupImg: groupImg7,
    totalMembers: 1,
    mutualMembers: [mem1Img, mem2Img, mem3Img, mem4Img],
    totalmembers: "1.2",
    groupType: "Public Group",
    btnText: 'Visit Group',
    groupLink: "/mygroup-leave"
  },
  {
    id: 5,
    groupTitle: "Nyc Neighborhood Group",
    groupImg: groupImg5,
    totalMembers: 1,
    mutualMembers: [mem1Img, mem2Img, mem3Img, mem4Img],
    totalmembers: "1.2",
    groupType: "Private Group",
    btnText: 'Visit Group',
    groupLink: "/mygroup-leave"
  },
  {
    id: 6,
    groupTitle: "Nyc Neighborhood Group",
    groupImg: groupImg5,
    totalMembers: 1,
    mutualMembers: [mem1Img, mem2Img, mem3Img, mem4Img],
    totalmembers: "1.2",
    groupType: "Private Group",
    btnText: 'Visit Group',
    groupLink: "/mygroup-leave"
  },
];

export const suggestedGroups = [
  {
    id: 1,
    groupImg: groupImg1,
    groupName: "Nyc Neighborhood",
    groupMembersAvatars: [
      { id: 1, memAvatar: mem1Img },
      { id: 2, memAvatar: mem2Img },
    ],
    totalmembers: "1.2",
  },
  {
    id: 2,
    groupImg: groupImg2,
    groupName: "Nyc Neighborhood",
    groupMembersAvatars: [
      { id: 1, memAvatar: mem1Img },
      { id: 2, memAvatar: mem2Img },
    ],
    totalmembers: "1.2",
  },
  {
    id: 3,
    groupImg: groupImg1,
    groupName: "Nyc Neighborhood",
    groupMembersAvatars: [
      { id: 1, memAvatar: mem1Img },
      { id: 2, memAvatar: mem2Img },
    ],
    totalmembers: "1.2",
  },
];

export const userMenus = [
  {
    name: "Followers",
    link: "/friendlist/follower",
  },
  {
    name: "Following",
    link: "/friendlist/following",
  },
  {
    name: "Likes",
    link: "/likes",
  },
  {
    name: "Matches",
    link: "/mymatches",
  },
  {
    name: "My Groups",
    link: "/groups-list",
  },
  {
    name: "Joined Groups",
    link: "/joined-groups",
  },
  {
    name: "My Membership",
    link: "/my-membership",
  },
  {
    name: "Privacy <i class='fa fa-cog'></i>",
    link: "",
    rightSide: true,
  },
];


export const chatUsers = [
  {
    name: "John Doe",
    time: "Online",
    image: meet1Img,
    active: false,
    newchats: 0
  },
  {
    name: "Emily Clark",
    time: "5 Days Ago",
    image: meet2Img,
    active: false,
    newchats: 0
  },
  {
    name: "John Doe",
    time: "7 Days Ago",
    image: meet3Img,
    active: true,
    newchats: 2
  },
  {
    name: "Robert Williams",
    time: "1 Week Ago",
    image: meet1Img,
    active: false,
    newchats: 0
  },
  {
    name: "John Doe",
    time: "7 Days Ago",
    image: meet3Img,
    active: false,
    newchats: 2
  },
  {
    name: "Robert Williams",
    time: "1 Week Ago",
    image: meet1Img,
    active: false,
    newchats: 0
  },
];